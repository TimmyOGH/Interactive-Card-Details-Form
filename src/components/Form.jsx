import React from "react";
import Label from "./Label";
import Input from "./Input";

function Form(props) {
    return (
        <div className="form_container">
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <Label
                    lblText="CARDHOLDER NAME"
                />
                <Input
                    name="chname"
                    setChname={props.setChname}
                    className="chname_inp"
                    type="text"
                    placeholder="e.g. Jane Appleseed"
                    chnameCantBeBlankErr={props.chnameCantBeBlankErr}
                    setChnameCantBeBlankErr={props.setChnameCantBeBlankErr}
                />
                <Label
                    lblText="CARD NUMBER"
                />
                <Input
                    name="cnum"
                    setCnum={props.setCnum}
                    className="cn_inp"
                    type="number"
                    placeholder="e.g. 1234 5678 9123 0000"
                    cnumCantBeBlankErr={props.cnumCantBeBlankErr}
                    setCnumCantBeBlankErr={props.setCnumCantBeBlankErr}
                    invalidCnum={props.invalidCnum}
                    setInvalidCnum={props.setInvalidCnum}
                />

                <div style={{ display: "flex", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                        <Label
                            style={{ display: "block" }}
                            lblText="EXP. DATE (MM/YY)"
                        />
                        <div>
                            <Input
                                name="mm"
                                setMm={props.setMm}
                                className="mm_inp"
                                type="number"
                                placeholder="MM"
                                mmCantBeBlankErr={props.mmCantBeBlankErr}
                                setMmCantBeBlankErr={props.setMmCantBeBlankErr}
                                isMobile={props.isMobile}
                            />
                            <Input
                                name="yy"
                                setYy={props.setYy}
                                className="yy_inp"
                                type="number"
                                placeholder="YY"
                                yyCantBeBlankErr={props.yyCantBeBlankErr}
                                setYyCantBeBlankErr={props.setYyCantBeBlankErr}
                                isMobile={props.isMobile}
                            />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <Label
                            style={{ display: "block" }}
                            lblText="CVC"
                        />
                        <Input
                            name="cvc"
                            cnum={props.cnum}
                            setCvc={props.setCvc}
                            className="cvc_inp"
                            type="number"
                            placeholder="e.g. 123"
                            cvcCantBeBlankErr={props.cvcCantBeBlankErr}
                            setCvcCantBeBlankErr={props.setCvcCantBeBlankErr}
                            invalidCvc={props.invalidCvc}
                            setInvalidCvc={props.setInvalidCvc}
                            isMobile={props.isMobile}
                        />
                    </div>
                </div>
                <button onClick={props.onSubmit}>Confirm</button>
            </form>
        </div>
    );
}

export default Form;