import { render } from "@testing-library/react";
import React from "react";
// import

const Preview = (props) => {
    const {name, email} = props;

    function createElementsforKeyValues (obj) {
        let output = "";

        for(const key in obj){
            output += `${key}: ${obj[key]}`;
        }

        return output;
    };

    return (
        <div>Name: {name}</div>
    );
};

export default Preview;