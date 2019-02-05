import React from 'react'

export default class ContactForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    formErrors: { firstName: '', lastName: '' },
    firstNameValid: false,
    lastNameValid: false,
    formValid: false,
    isNotChecked: true
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
      isChecked: !this.state.isNotChecked,
    })
  }

  handleValidation = event => {
    if (this.state.firstName === '') {
      event.preventDefault()
      alert('please fill out the required information')
    } else {
      alert(`Welcome ${this.state.firstName} ${this.state.lastName}`)
    }
  }

  render () {
    return (
      <div className="form__main">
        <form className="form__main-group" onSubmit={this.handleValidation}>
          <input
            className="form__main-group--input"
            id="first-name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            className="form__main-group--input"
            id="last-name"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <input
            id="confirmation"
            type="checkbox"
            name="confirmation"
            onChange={this.handleInputChange}
            isChecked={this.state.isNotChecked}
          />
          <button
            type="submit"
            disabled={!this.state.isNotChecked}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}
