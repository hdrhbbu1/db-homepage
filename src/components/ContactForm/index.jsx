import React from "react"
import Grid from "react-css-grid"
import Formsy from "formsy-react"
import Icon from "@fortawesome/react-fontawesome"

import Input from "../Input"
import Textarea from "../Textarea"
import Select from "../Select"
import Button from "../Button"

import styles from "./index.module.css"

import Alert from "../Alert"
import SectionHeader from "../SectionHeader"

class ContactForm extends React.Component {
  constructor() {
    super()

    this.disableButton = this.disableButton.bind(this)
    this.enableButton = this.enableButton.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInvalid = this.handleInvalid.bind(this)
    this.state = { canSubmit: true, success: false }
  }

  disableButton() {
    this.setState({ canSubmit: false })
  }

  enableButton() {
    this.setState({ canSubmit: true })
  }

  handleInvalid() {
    this.setState({ invalid: true, canSubmit: false })
  }

  handleSubmit(model) {
    this.setState({
      invalid: false,
    })

    fetch(`${process.env.API_URL}/contact`, {
      method: `post`,
      body: JSON.stringify(model),
    }).then(() => {
      this.setState({
        success: true,
      }, () => {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: `contactForm`,
        })
      })
    })
  }

  render() {
    return (
      <div style={{ width: `60%`, margin: `0 auto` }}>
        <SectionHeader
          smallHeader
          smallLead
          headingCopy="Project Enquiry"
          type="h2"
          taglineCopy="Please ensure to include as much information about the project as possible as well as any budgets and timelines."
        />

        {this.state.invalid &&
        <Alert
          message="Oops"
          description="Please ensure all required fields below are completed and try again."
          type="error"
          style={{ width: `100%` }}
        />
          }

        {this.state.success &&
        <Alert
          message="Success"
          description="Your message was successfully sent, I'll get back to you as soon as possible."
          type="success"
          style={{ width: `100%` }}
        />
          }

        {!this.state.success &&
          <Formsy onValidSubmit={this.handleSubmit} onInvalidSubmit={this.handleInvalid} onValid={this.enableButton} className={styles.form}>

            <Grid width={240} gap={30}>
              <div>
                <Input
                  name="name"
                  title="Your Name"
                  validations="minLength:2"
                  validationError="Please provide your name."
                  required
                />
                <Input
                  name="email"
                  title="Your Email"
                  validations="isEmail"
                  validationError="Please provide a valid email address."
                  required
                />
              </div>
              <div>
                <Input
                  name="company"
                  title="Company"
                />
                <Select
                  name="type"
                  title="Enquiry Type"
                  validationError="Please select an enquiry type."
                  options={[
                    { title: `Freelance`, value: `freelance` },
                    { title: `Contact Opportunity`, value: `contract` },
                    { title: `Other`, value: `other` },
                  ]}
                  value="freelance"
                />
              </div>
            </Grid>
            <Textarea
              name="message"
              title="Message"
              rows={10}
              validations="minLength: 10"
              validationError="Please enter a message of at least 10 characters."
              required
            />

            <Button type="submit" disabled={!this.state.canSubmit}>
              <Icon icon="rocket" /> Submit
            </Button>
          </Formsy>
        }

      </div>
    )
  }
}

export default ContactForm
