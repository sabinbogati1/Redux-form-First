import React from 'react'
import ContactForm from './ContactForm'

class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    console.log("test");
    return <ContactForm onSubmit={this.submit} />
  }
}


export default ContactPage;