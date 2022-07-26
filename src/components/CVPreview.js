import { render } from "@testing-library/react";
import React from "react";
// import

const Preview = (props) => {
    const {profile, education} = props;

    function createElementsforKeyValues (obj) {
        let output = "";

        for(const key in obj){
            output += `${key}: ${obj[key]}`;
        }

        return output;
    };

    return (
        <ul>
            {createElementsforKeyValues(profile)}
        </ul>
    );
};

export default Preview;