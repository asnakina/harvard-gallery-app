import React, {Component} from 'react';

//should it be a 1 big class component or a functional component
//or a class and a funct.components?
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      newForm: {},
      subject: '',
      personName: '',
      describtion: '',
      date: '',
      contacts: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.createForm = this.createForm.bind(this)
  }

 //the function for input fields
 //  handleChange(e) {
 //     const value = e.target.value
 //     this.setState({
 //       newForm: value
 //     })
 // }
 //
 // //the function for the submit button
 //  handleSubmit(e) {
 //    const newArr = this.state.forms
 //    const newForm = {
 //      subject: this.state.subject,
 //      describtion: this.state.describtion,
 //      date: this.state.date,
 //      personName: this.state.personName,
 //      contacts: this.state.contacts
 //    }
 //  }
 //
 //  //we're pushing new form to the array of forms and updating it
 //    createForm() {
 //      return this.state.forms.map(theForm => {
 //        return (
 //          <button onSubmit={() => this.setState({
 //            forms: theForm.push
 //          })} >
 //          </button>
 //      )}
 //     }

  render() {
    return (
      <div>
        <h3>This page is under construction. We're working on it. Come back in 1 month. </h3>
        {/*<input
          type="text"
          value={this.state.subject}
          onChange={this.handleChange}
          placeholder="Subject of your exhibition:"
        />
        <textarea
          type="text"
          value={this.state.describtion}
          onChange={this.handleChange}
          placeholder="Describtion of your exhibition:"
        />
        <input
          type="text"
          value={this.state.date}
          onChange={this.handleChange}
          placeholder="Date for the exhibition:"
        />
        <input
          type="text"
          value={this.state.personName}
          onChange={this.handleChange}
          placeholder="Your name:"
        />
        <textarea
          type="text"
          value={this.state.contacts}
          onChange={this.handleChange}
          placeholder="Your contacts:"
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          <li>{theForm.subject}</li>
          <li>{theForm.describtion}</li>
          <li>{theForm.date}</li>
          <li>{theForm.personName}</li>
          <li>{theForm.contacts}</li>
         </ul>*/}
      </div>
    )
  }
}

export default NewForm;
