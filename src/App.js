import Input from './components/Input';
import CVPreview from './components/CVPreview';
import { Component } from 'react';

class App extends Component {
  constructor () {
    super();

    this.state = {
      //profile
      profile: {
        name: "hello",
        email: "sdlkfjalkfj@dlfkajsdlfkj.com"
      },
      
      //education
      education: {},

      //experience
      experience: []
      
    };
  }

  updateStateAttribute = (obj, value) => {
    this.setState({
      obj: value
    });
  }

  onProfileChange = (e) => {
    // {console.log(e.target)}
    // const key = e.target.id;
    this.setState({
        profile: {
           name: e.target.value

        }
    });
  };

  

  render() {
    const {profile, education, experience} = this.state;
    
    return (<div>
      {/* <Input profile={profile} education={education}/> */}
      <label htmlFor="nameInput">Name:</label>
      <input 
          id="name" 
          type="text"
          onChange={this.updateStateAttribute("profile.name", this.value)}
          value={this.state.profile.name}
      />
      
      <label htmlFor="emailInput">Email:</label>
      <input id="emailInput" type="text"></input>
      
      <label htmlFor="phoneInput">Phone Number:</label>
      <input id="phoneInput" type="text"></input>
      
      <label htmlFor="schoolInput">University:</label>
      <input id="schoolInput" type="text"></input>
      
      <label htmlFor="majorInput">Major:</label>
      <input id="majorInput" type="text"></input>
      
      <label htmlFor="dateInput">Date:</label>
      <input id="DateInput" type="DateInput"></input>

      <label htmlFor="companyInput">Company:</label>
      <input id="companyInput" type="text"></input>

      <label htmlFor="positionInput">Position:</label>
      <input id="positionInput" type="text"></input>
      
      <label htmlFor="tasksInput">Tasks:</label>
      <input id="tasksInput" type="text"></input>
      <CVPreview profile={profile} education={education}/>
    </div>
    );
  }
}

export default App;
