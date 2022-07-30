import React from "react";

// name, email, phone number
const General = (props) => {
    const {name, email, phoneNumber} = props;

    return (
        <div>
            <h1>{name}</h1>
            <span>{email} {phoneNumber}</span>
        </div>
    );
};

export default General;