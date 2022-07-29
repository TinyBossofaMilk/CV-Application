import Input from './components/Input';
import CVPreview from './components/CVPreview';
import { Component } from 'react';
import General from './components/General';
import Education from './components/Education';

class App extends Component {
  constructor () {
    super();

    this.state = {
      //profile
      name: "hello",
      email: "sdlkfjalkfj@dlfkajsdlfkj.com",
      phoneNumber: "8186546",
      
      //education  (school name, title of study, date of study)
      school: "",
      major: "Chemistry",
      gradDate: "",

      //experience
      // company name, position title, main tasks of your jobs, date from and until when you worked for that company)
      experience: []
      
    };
  }

  updateStateAttribute = (obj, val) => {
    this.setState({[obj]: val});
  };
  set = val => {
    console.log(val)
    this.setState({ [val]: val });
  };
  

  render() {
    const {name, email, phoneNumber, school, major, gradDate} = this.state;
    
    return (<div>
      {/* <Input profile={profile} education={education}/> */}
      <label htmlFor="nameInput">Name:</label>
      <input 
          id="name" 
          type="text"
          onChange={
            (e) => {this.updateStateAttribute("name", e.target.value)}
          }
          value={this.state.name}
      />
      
      <label htmlFor="emailInput">Email:</label>
      <input 
        id="emailInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("email", e.target.value)}}
      />
      
      <label htmlFor="phoneInput">Phone Number:</label>
      <input 
        id="phoneInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("phone", e.target.value)}}
      />
      
      <label htmlFor="schoolInput">University:</label>
      <input 
        id="schoolInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("school", e.target.value)}}
      />
      
      <label htmlFor="majorInput">Major:</label>
      <input 
        id="majorInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("major", e.target.value)}}
      />
      
      <label htmlFor="dateInput">Date:</label>
      <input 
        id="DateInput" 
        type="DateInput"
        onChange={(e) => {this.updateStateAttribute("gradDate", e.target.value)}}

      />

      <label htmlFor="companyInput">Company:</label>
      <input 
        id="companyInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("school", e.target.value)}}
      />

      <label htmlFor="positionInput">Position:</label>
      <input 
        id="positionInput" 
        type="text"
        onChange={(e) => {this.updateStateAttribute("position", e.target.value)}}
      />
      
      <label htmlFor="tasksInput">Tasks:</label>
      <input id="tasksInput" type="text"></input>
      <General name={name} email={email} phoneNumber={phoneNumber}/>
      <Education school={school} major={major} gradDate={gradDate}/>
      {/* <CVPreview name={name} email={email}/> */}
    </div>
    );
  }
}

export default App;
