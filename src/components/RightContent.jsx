import React, { useState } from "react";
import Form from "./Form";
import ThankYou from "./ThankYou";

function RightContent(props) {
    const [chnameCantBeBlankErr, setChnameCantBeBlankErr] = useState(false);
    const [cnumCantBeBlankErr, setCnumCantBeBlankErr] = useState(false);
    const [mmCantBeBlankErr, setMmCantBeBlankErr] = useState(false);
    const [yyCantBeBlankErr, setYyCantBeBlankErr] = useState(false);
    const [cvcCantBeBlankErr, setCvcCantBeBlankErr] = useState(false);
    const [invalidCnum, setInvalidCnum] = useState(false);
    const [invalidCvc, setInvalidCvc] = useState(false);
    const [isValid, setIsValid] = useState(false);

    function handleConfirm() {
        if (props.chname === "JANE APPLESEED" || props.cnum === "0000 0000 0000 0000" || props.mm === "00" || props.yy === "00" || props.cvc === "000" || props.cnum.length !== 19 || props.cvc.length !== 3 || props.mm > 12 || props.yy < 24) {
            if (props.chname === "JANE APPLESEED") {
                setChnameCantBeBlankErr(true);
            }

            if (props.cnum === "0000 0000 0000 0000") {
                setCnumCantBeBlankErr(true);
            } else if (props.cnum.length !== 19) {
                setInvalidCnum(true);
            }

            if (props.mm === "00") {
                setMmCantBeBlankErr(true);
            }

            if (props.yy === "00") {
                setYyCantBeBlankErr(true);
            }

            if (props.cvc === "000") {
                setCvcCantBeBlankErr(true);
            } else if (props.cvc.length !== 3) {
                setInvalidCvc(true);
            }

            setIsValid(false);
        } else {
            setChnameCantBeBlankErr(false);
            setCnumCantBeBlankErr(false);
            setMmCantBeBlankErr(false);
            setYyCantBeBlankErr(false);
            setCvcCantBeBlankErr(false);
            setIsValid(true);
        }
    }

    return (
        <div className="right_side">
            {isValid ?
                <ThankYou
                    setChname={props.setChname}
                    setCnum={props.setCnum}
                    setMm={props.setMm}
                    setYy={props.setYy}
                    setCvc={props.setCvc}
                    setIsValid={setIsValid}
                /> :
                <Form
                    setChname={props.setChname}
                    setCnum={props.setCnum}
                    setMm={props.setMm}
                    setYy={props.setYy}
                    setCvc={props.setCvc}
                    chnameCantBeBlankErr={chnameCantBeBlankErr}
                    cnumCantBeBlankErr={cnumCantBeBlankErr}
                    mmCantBeBlankErr={mmCantBeBlankErr}
                    yyCantBeBlankErr={yyCantBeBlankErr}
                    cvcCantBeBlankErr={cvcCantBeBlankErr}
                    setChnameCantBeBlankErr={setChnameCantBeBlankErr}
                    setCnumCantBeBlankErr={setCnumCantBeBlankErr}
                    setMmCantBeBlankErr={setMmCantBeBlankErr}
                    setYyCantBeBlankErr={setYyCantBeBlankErr}
                    setCvcCantBeBlankErr={setCvcCantBeBlankErr}
                    invalidCnum={invalidCnum}
                    invalidCvc={invalidCvc}
                    setInvalidCnum={setInvalidCnum}
                    setInvalidCvc={setInvalidCvc}
                    onSubmit={handleConfirm}
                    isMobile={props.isMobile}
                />}
            {props.isMobile === false && <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <p style={{ textAlign: "center", position: "absolute", bottom: "5%" }}>Challenge by <a style={{ color: "brown" }} href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                    Coded by <a style={{ color: "brown" }} href="https://www.frontendmentor.io/profile/timodn">@timodn</a>.
                </p>
            </div>}
        </div>
    );
}

export default RightContent;