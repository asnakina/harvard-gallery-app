import React, {Component} from 'react';

class NewForm extends Component {
  constructor(props) {
    super(props);
    //this.state and props - it's an object with our data, it's not kind of real object
    this.state = {
      formsSubmition: [],
      //newForm: {}
      subject: '',
      personName: '',
      description: '',
      date: '',
      contacts: '',
      temp: ''
    }
    //whenever we use functions in another components and use functions
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  //if it's a database we would say:
  //async getAllFields() {
  //const allFields = await axios.get(BASE_URL);

 //the function for input fields
 //e - event. when we call onChange or onClick triggers the event changes
  handleChange(e) {
    console.log(e.target)
     this.setState({
       //or [name]:value - means it's a variable from above
       //it's refearing to the inputs inside the form
       [e.target.name]: e.target.value
   })
 }

 //the function for the submit button
 //we're pushing new submitionForm to the array of submitionForms
  handleSubmit(e) {
    e.preventDefault();
    //we create a new object and fill it up with whatever user puts in teaxarea
    const newForm = {
      name: this.state.personName,
      subject: this.state.subject,
      description: this.state.description,
      date: this.state.date,
      contacts: this.state.contacts
    }
    //!we put object into the array, because in our situation we can't post it!
    this.setState({
      formsSubmition: [...this.state.formsSubmition, newForm],
      //and resetting the state after clickig on the button
      subject: '',
      personName: '',
      description: '',
      date: '',
      contacts: ''
    })
  }

  handleDelete(e) {
     let obj = this.state.formsSubmition.find(obj => obj.name === e.target.name)
     // debugger
     for(let i=0; i<this.state.formsSubmition.length; i++) {
        if(this.state.formsSubmition[i] === obj){
          //filter by id or slice for deleting function
          this.setState({
            formsSubmition: this.state.formsSubmition.splice(i,1)
        })
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="newFormDivStyle">
        <input
          type="text"
          name='personName'
          value={this.state.personName}
          onChange={this.handleChange}
          placeholder="Your name:"
          className="newFormStyle"
        />
        <input
          type="text"
          name='subject'
          value={this.state.subject}
          onChange={this.handleChange}
          placeholder="Subject of your exhibition:"
          className="newFormStyle"
        />
        <input
          type="text"
          name='description'
          value={this.state.description}
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
          name='contacts'
          value={this.state.contacts}
          onChange={this.handleChange}
          placeholder="Your contacts:"
          className="newFormStyle"
        />
        <button
          type="submit"
          value="Submit"
          className="newFormBtnStyle"
        >Submit</button>
        {/*We map because it's an array...theForm -is an object each element right now
        We have to render theForm object
        For Nested Messages*/}
        {/* we're mapping the array with the objects information*/}
        <div className="mainDivForm">
        {this.state.formsSubmition.map(theElement => {
          return (
            <div key={theElement.name} className="formBorderStyle">
              <p>{theElement.name}</p>
              <p>{theElement.subject}</p>
              <p>{theElement.description}</p>
              <p>{theElement.date}</p>
              <p>{theElement.contacts}</p>
              <button name={theElement.name} onClick={this.handleDelete}>Delete</button>
            </div>
          )})}
        </div>
      </form>
    )
  }
}

export default NewForm;
