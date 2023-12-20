import React from "react";
import Image from "./Image";

function ThankYou(props) {
    return (
        <div className="thankyou">
            <Image
                src="./images/icon-complete.svg"
                alt="icon-complete"
            />
            <h3>THANK YOU!</h3>
            <p>We've added your card details</p>
            <button onClick={() => {
                props.setIsValid(false);
                props.setChname("JANE APPLESEED");
                props.setCnum("0000 0000 0000 0000");
                props.setMm("00");
                props.setYy("00");
                props.setCvc("000");
            }}>Continue</button>
        </div>
    )
}

export default ThankYou;