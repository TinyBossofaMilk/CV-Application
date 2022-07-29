import React from "react";
//  educational experience (school name, title of study, date of study)
const Education = (props) => {
    const {school, major, graduationDate} = props;

    return (
        <div>
            {major} {school}
        </div>
    )
};

export default Education;