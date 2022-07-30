import Input from './components/Input';
import CVPreview from './components/CVPreview';
import { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor () {
    super();

    this.state = {
      //profile
      name: "Your Mom",
      email: "thisisnotarealemail@emailservice.com",
      phoneNumber: "81865461223",
      
      //education  (school name, title of study, date of study)
      school: "San Luis Obispo",
      major: "B.S. in Chemistry",
      gradDate: "",

      //experience
      // company name, position title, main tasks of your jobs, date from and until when you worked for that company)
      exp: []
      
    };
  }

  addTask = (e) => {
    const expFieldsArr = Array.from(document.querySelectorAll("#experienceInput>input"));
    const expObject = {
      company: expFieldsArr[0].value,
      position: expFieldsArr[1].value,
      tasks: expFieldsArr[2].value
    };

    console.log(expObject);
    
    this.setState({
      exp:this.state.exp.concat(this.expObject)
    })

    expFieldsArr.forEach(input => input.value = '');
  }

  set = (obj, val) => {
    this.setState({[obj]: val});
  };  

  render() {
    const {name, email, phoneNumber, school, major, gradDate} = this.state;
    
    return (<div>
      <div id="profileInput">
      <label htmlFor="nameInput">Name:</label>
        <input 
            id="name" 
            type="text"
            onChange={(e) => {this.set("name", e.target.value)}}
            value={this.state.name}
        />
        
        <label htmlFor="emailInput">Email:</label>
        <input 
          id="emailInput" 
          type="text"
          onChange={(e) => {this.set("email", e.target.value)}}
        />
        
        <label htmlFor="phoneInput">Phone Number:</label>
        <input 
          id="phoneInput" 
          type="text"
          onChange={(e) => {this.set("phoneNumber", e.target.value)}}
        />
      </div>
  
      <div id="EducationInput">
        <label htmlFor="schoolInput">University:</label>
        <input 
          id="schoolInput" 
          type="text"
          onChange={(e) => {this.set("school", e.target.value)}}
        />
        
        <label htmlFor="majorInput">Major:</label>
        <input 
          id="majorInput" 
          type="text"
          onChange={(e) => {this.set("major", e.target.value)}}
        />
        
        <label htmlFor="dateInput">Date:</label>
        <input 
          id="DateInput" 
          type="DateInput"
          onChange={(e) => {this.set("gradDate", e.target.value)}}
        />
      </div>

      <div id="experienceInput">
        <label htmlFor="companyInput">Company:</label>
        <input 
          id="company" 
          type="text"
        />

        <label htmlFor="positionInput">Position:</label>
        <input 
          id="position" 
          type="text"
        />
        
        <label htmlFor="tasksInput">Tasks:</label>
        <input id="tasks" type="text"></input>

        <button 
          type='button'
          onClick={(e) => {this.addTask(e)}}
          >Add
        </button>
      </div>



      <General name={name} email={email} phoneNumber={phoneNumber}/>
      <Education school={school} major={major} gradDate={gradDate}/>
      <Experience exp={exp}/>
    </div>
    );
  }
}

export default App;
