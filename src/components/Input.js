import React, { Component, Profiler } from "react";

class Input extends Component{
    constructor(props) {
        super(props);
      }


    onProfileChange = (e) => {
        this.setState({
            profile:
                {name: e.value}
        });
    };

    render(){
        return (

        <div>
            {/*name, email, phone number */}
            <label htmlFor="nameInput">Name:</label>
            <input 
                id="nameInput" 
                type="text"
                // onChange={onProfileChange}
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
        </div>
    );}
}

export default Input;