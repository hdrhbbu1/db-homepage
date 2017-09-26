import React from "react"
import { shallow } from "enzyme"
import ContactForm from "./"

describe(`ContactForm`, () => {
  let props
  let mountedSectionHeader
  const lockScreen = () => {
    if (!mountedSectionHeader) {
      mountedSectionHeader = shallow(
        <ContactForm {...props} />
      )
    }
    return mountedSectionHeader
  }

  beforeEach(() => {
    props = {}
    mountedSectionHeader = undefined
  })

  it(`always renders a Button component`, () => {
    expect(lockScreen().find(ContactForm).length).toBe(0)
  })
})
