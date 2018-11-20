import React, {Component} from 'react';

//should it be a 1 big class component or a functional component
//or a class and a funct.components?
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formsSubmition: [],
      // newForm: {}
      subject: '',
      personName: '',
      description: '',
      date: '',
      contacts: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 // the function for input fields
  handleChange(e) {
     const value = e.target.value
     const name = e.target.name
     this.setState({
       //or [name]:value - means it's a variable from above
       [e.target.name]: value
   })
 }
 //
//the function for the submit button
//we're pushing new submitionForm to the array of submitionForms
  handleSubmit(e) {
    //we create a new object
    const newForm = {
      name: this.state.personName,
      subject: this.state.subject,
      description: this.state.subject,
      date: this.state.date,
      contacts: this.state.contacts
    }
    this.setState({
      formsSubmition: [...this.state.formsSubmition, newForm]
    })
  }

  render() {
    return (
      <div className="newFormDivStyle">
        <input
          type="text"
          name='subject'
          value={this.state.subject}
          onChange={this.handleChange}
          placeholder="Subject of your exhibition:"
          className="newFormStyle"
        />
        <textarea
          type="text"
          name='description'
          value={this.state.describtion}
          onChange={this.handleChange}
          placeholder="Description of your exhibition:"
          className="newFormStyle"
        />
        <input
          type="text"
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
          placeholder="Date for the exhibition:"
          className="newFormStyle"
        />
        <input
          type="text"
          name='personName'
          value={this.state.personName}
          onChange={this.handleChange}
          placeholder="Your name:"
          className="newFormStyle"
        />
        <textarea
          type="text"
          name='contacts'
          value={this.state.contacts}
          onChange={this.handleChange}
          placeholder="Your contacts:"
          className="newFormStyle"
        />
        {/* we're mapping the array with the objects information
          this.state.formsSubmition.map(theForm => {
                 return (
                  <button onSubmit={() => this.setState({
                   formsSubmitions: theForm.push
                  })} >
                  </button>
              )}*/}
         <button onClick={this.handleSubmit} className="newFormBtnStyle">Submit</button>

      </div>
    )
  }
}

export default NewForm;
