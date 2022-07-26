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



  render() {
    // this.state()

    const {profile, education, experience} = this.state;
    
    return (<div>
      <Input profile={profile} education={education}/>
      <CVPreview profile={profile} education={education}/>
    </div>
    );
  }
}

export default App;
