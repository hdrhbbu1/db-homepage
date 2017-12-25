import React from "react"
import { Row, Col, Form, Card, Icon, Input, Button, Alert } from 'antd'
import SectionHeader from "../SectionHeader"

const FormItem = Form.Item
const { TextArea } = Input

class ContactForm extends React.Component {
  static handleTrack() {
    window.dataLayer.push({
      event: `contactForm`,
    })
  }

  static handleErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = { sending: false }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }

      this.setState({ sending: true })

      const values = {
        ...fieldsValue,
      }

      const xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState === 4) {
          if (xmlhttp.status === 200) {
            this.setState({
              success: true,
              sending: false,
            })
            this.handleTrack()
          } else {
            this.setState({
              success: false,
              sending: false,
            })
          }
        }
      }

      xmlhttp.open(`POST`, process.env.API_URL, true)
      xmlhttp.setRequestHeader(`Content-Type`, `application/x-www-form-urlencoded`)
      xmlhttp.send(JSON.stringify(values))
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form
    const isDisabled = ContactForm.handleErrors(getFieldsError()) || this.state.sending

    return (
      <Card style={{ width: `100%` }}>

        <SectionHeader
          smallHeader
          smallLead
          headingCopy="Project Enquiry"
          type="h2"
          taglineCopy="Please ensure to include as much information about the project as possible as well as any budgets and timelines."
        />

        <Row gutter={30} type="flex" style={{ marginBottom: `20px` }}>
          <Col xs={24} sm={12} md={{ span: 20, offset: 2 }}>
            {ContactForm.handleErrors(getFieldsError()) > 0 &&
              <Alert
                message="Oops"
                description="Please ensure all required fields below are completed and try again."
                type="error"
                showIcon
                style={{ width: `100%` }}
              />
            }

            {this.state.success > 0 &&
              <Alert
                message="Success"
                description="Your message was successfully sent, I'll get back to you as soon as possible."
                type="success"
                showIcon
                style={{ width: `100%` }}
              />
            }
          </Col>
        </Row>

        <Form onSubmit={this.handleSubmit}>

          <Row gutter={30} type="flex">
            <Col xs={24} sm={12} md={{ span: 10, offset: 2 }}>
              <FormItem label="Name" style={{ width: `100%` }}>
                {getFieldDecorator(`name`, {
                  rules: [{ required: true, whitespace: true, message: `Please provide your name` }],
                })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} />)}
              </FormItem>
            </Col>
            <Col xs={24} sm={12} md={{ span: 10 }}>
              <FormItem label="Email" type="email" style={{ width: `100%` }}>
                {getFieldDecorator(`email`, {
                  validateTrigger: `onBlur`,
                  rules: [{
                    required: true, whitespace: true, type: `email`, message: `Please provide your email address.`,
                  }],
                })(<Input type="email" prefix={<Icon type="mail" style={{ fontSize: 13 }} />} />)}
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col xs={24} md={{ span: 20, offset: 2 }}>
              <FormItem label="Message" style={{ width: `100%` }}>
                {getFieldDecorator(`message`, {
                  rules: [{ required: true, whitespace: true, message: `Please enter a message.` }],
                })(<TextArea placeholder="Hi David, " autosize={{ minRows: 8 }} />)}
              </FormItem>
            </Col>
          </Row>

          <Row type="flex">
            <Col xs={24} md={{ span: 20, offset: 2 }}>
              <Button
                style={{ marginLeft: `auto` }}
                icon={this.state.sending ? `loading` : `rocket`}
                type="primary"
                htmlType="submit"
                disabled={isDisabled}
              >
                {this.state.sending ? `Just a moment...` : `Send Message`}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    )
  }
}

export default Form.create()(ContactForm)
