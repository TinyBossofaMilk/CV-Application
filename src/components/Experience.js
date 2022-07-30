import { render } from "@testing-library/react";
import React from "react";

// company name, position title, main tasks of your jobs, date from and until when you worked for that company)

const Experience = (props) => {
    const {exp} = props;
    
    return (this.state.exp.map((e) => 
        <div>
            {/* {exp.company} {exp.position} {exp.tasks} */}
            {e.company}
        </div>
    ))    
};

export default Experience;