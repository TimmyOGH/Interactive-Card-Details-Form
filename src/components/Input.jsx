import React, { useState } from "react";

function Input(props) {
    const [isFocused, setIsFocused] = useState(false);
    const [chnameFocused, setchnameFocused] = useState(false);
    const [cnumFocused, setcnumFocused] = useState(false);
    const [mmFocused, setMmFocused] = useState(false);
    const [yyFocused, setYyFocused] = useState(false);
    const [cvcFocused, setCvcFocused] = useState(false);
    const [errOcurred, setErrOcurred] = useState(false);
    const [cnumErrOccured, setCnumErrOccured] = useState(false);
    const [mmErrOccured, setMmErrOccured] = useState(false);
    const [yyErrOccured, setYyErrOccured] = useState(false);
    const [cvcErrOccured, setCvcErrOccured] = useState(false);
    const outlineStyle = isFocused ? { outline: "1px solid hsl(278, 94%, 30%)" } : { outline: "1px solid hsl(270, 3%, 87%)" };
    const errOutlineStyle = (cnumErrOccured || mmErrOccured || yyErrOccured || cvcErrOccured) ? { outline: "1px solid hsl(0, 100%, 66%)" } : outlineStyle;
    const mobileErrMsgStyle = props.isMobile ? { position: "absolute", bottom: "14%" } : { position: "absolute", bottom: "11%" };

    function handleFocus() {
        setIsFocused(true);

        if (props.name === "chname") {
            setchnameFocused(true);
        } else if (props.name === "cnum") {
            setcnumFocused(true);
        } else if (props.name === "mm") {
            setMmFocused(true);
        } else if (props.name === "yy") {
            setYyFocused(true);
        } else if (props.name === "cvc") {
            setCvcFocused(true);
        }
    }

    function handleBlur() {
        setIsFocused(false);
        setchnameFocused(false);
        setcnumFocused(false);
        setMmFocused(false);
        setYyFocused(false);
        setCvcFocused(false);
    }

    function handleChange(event) {
        if (chnameFocused) {
            let chnameInputVal = event.target.value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
            props.setChname(chnameInputVal);
            props.setChnameCantBeBlankErr(false);
        }

        if (cnumFocused) {
            let cnumInputVal = event.target.value.replace(/[^\d]/g, "").replace(/(\d{4})/g, "$1 ").trim();

            if (cnumInputVal.length < 20) {
                props.setCnum(cnumInputVal.slice(0, 19));
                setCnumErrOccured(false);
                props.setCnumCantBeBlankErr(false);
                props.setInvalidCnum(false);

                if (cnumErrOccured === false) {
                    setErrOcurred(false);
                }
            } else {
                setErrOcurred(true);
                setCnumErrOccured(true);
            }
        }

        if (mmFocused) {
            let mmInputVal = event.target.value;

            if (mmInputVal.length < 3 && mmInputVal < 13) {
                props.setMm(mmInputVal.slice(0, 2));
                setMmErrOccured(false);
                props.setMmCantBeBlankErr(false);

                if (mmErrOccured === false) {
                    setErrOcurred(false);
                }
            } else {
                setErrOcurred(true);
                setMmErrOccured(true);
                props.setMmCantBeBlankErr(false);
            }
        }

        if (yyFocused) {
            let yyInputVal = event.target.value;

            if (yyInputVal.length < 3 && yyInputVal > 23) {
                props.setYy(yyInputVal.slice(0, 2));
                setYyErrOccured(false);
                props.setYyCantBeBlankErr(false);

                if (yyErrOccured === false) {
                    setErrOcurred(false);
                }
            } else {
                setErrOcurred(true);
                setYyErrOccured(true);
                props.setYyCantBeBlankErr(false);
            }
        }

        if (cvcFocused) {
            let cvcInputVal = event.target.value;

            if (cvcInputVal.length < 4) {
                props.setCvc(cvcInputVal.slice(0, 3));
                setCvcErrOccured(false);
                props.setCvcCantBeBlankErr(false);
                props.setInvalidCvc(false);

                if (cvcErrOccured === false) {
                    setErrOcurred(false);
                }
            } else {
                setErrOcurred(true);
                setCvcErrOccured(true);

            }
        }
    }

    return <>
        <input
            style={errOcurred ? errOutlineStyle : outlineStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
        />
        {cnumErrOccured && <p className="errMsg">Wrong format, 16 digits only</p>}
        {(mmErrOccured || yyErrOccured) && <p style={mobileErrMsgStyle} className="errMsg">Invalid date(s)</p>}
        {cvcErrOccured && <p style={mobileErrMsgStyle} className="errMsg">Invalid cvc</p>}
        {props.chnameCantBeBlankErr && <p className="errMsg">Can't be blank</p>}
        {props.cnumCantBeBlankErr && <p className="errMsg">Can't be blank</p>}
        {props.mmCantBeBlankErr && <p style={mobileErrMsgStyle} className="errMsg">Can't be blank</p>}
        {props.yyCantBeBlankErr && <p style={mobileErrMsgStyle} className="errMsg">Can't be blank</p>}
        {props.cvcCantBeBlankErr && <p style={mobileErrMsgStyle} className="errMsg">Can't be blank</p>}
        {props.invalidCnum && <p className="errMsg">Wrong format, must be 16 digits</p>}
        {props.invalidCvc && <p style={mobileErrMsgStyle} className="errMsg">Wrong format, must be 3 digits</p>}
    </>
}

export default Input;