import { render } from "@testing-library/react";
import React from "react";

// company name, position title, main tasks of your jobs, date from and until when you worked for that company)

const Experience = (props) => {
    const {exp} = props;
    
    return (
        <div>
            {exp.map((e) => {
                return <div> Position: {e.position} at {e.company} doing 
                {e.task.map(element => {
                    return element;
                })}
                </div>;
            })}
        </div>
    );
};

export default Experience;