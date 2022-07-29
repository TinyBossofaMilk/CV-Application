import React from "react";

// name, email, phone number
const General = (props) => {
    const {name, email, phoneNumber} = props;

    return (
        <div>
            <div>Name: {name}</div>
            <span>{email} {phoneNumber}</span>
        </div>
    );
};

export default General;