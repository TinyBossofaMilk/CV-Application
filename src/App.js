import Input from './components/Input';
import CVPreview from './components/CVPreview';
import { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import styles from './style.css';

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
      // {company:"SRI", position: "Associate Researcher", task: ["did stuff", "went on my phone a lot"]}
    };
  }

  addWorkExperience = (e) => {
    const expFieldsArr = Array.from(document.querySelectorAll("#experienceInput>input"));
    const expObject = {
      company: expFieldsArr[0].value,
      position: expFieldsArr[1].value,
    };

    expObject.task = [];
    
    console.log(expFieldsArr[2].value)
    for(let i = 2; i < expFieldsArr.length; i++){
      expObject.task.push(expFieldsArr[i].value);
    }

    this.setState({
      exp:this.state.exp.concat(expObject)
    })

    expFieldsArr.forEach(input => input.value = '');
  }

  addTask = (e) => {
    const workExp = document.querySelector("#experienceInput");
    const newInput = document.createElement("input");
    newInput.id = "tasks";
    newInput.type = "text";

    workExp.appendChild(newInput);
  };

  set = (obj, val) => {
    this.setState({[obj]: val});
  };  

  render() {
    const {name, email, phoneNumber, school, major, gradDate, exp} = this.state;
    
    return (<div>
      <div id="generalInput" class="input">
        <h1>General</h1>
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
  
      <div id="educationInput" class="input">
        <h1>Education</h1>
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

      <div id="experienceInput" class="input">
        <h1>Experience</h1>
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
        <input 
          id="tasks" 
          type="text"
        />

        <button
          type='button'
          onClick={e => this.addTask(e)}
        >
          Add Task
        </button>

        <button 
          type='button'
          onClick={(e) => {this.addWorkExperience(e)}}
          >Submit Experience
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
