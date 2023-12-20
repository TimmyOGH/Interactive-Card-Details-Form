import React from "react";
import Image from "./Image";
import Text from "./Text";

function LeftContent(props) {
    return (
        <div className="left_side">
            {props.isMobile ?
                <Image
                    className="main_bg_mobile"
                    src="./images/bg-main-mobile.png"
                    alt="bg-main-mobile"
                /> :
                <Image
                    className="main_bg"
                    src="./images/bg-main-desktop.png"
                    alt="bg-main-desktop"
                />}
            <div className="card_front_container">
                <Image
                    className="card_logo"
                    src="./images/card-logo.svg"
                    alt="card-logo"
                />
                <Image
                    className="card_front"
                    src="./images/bg-card-front.png"
                    alt="bg-card-front"
                />
                <Text
                    className="card_nums"
                    text={props.cnum === "" ? "0000 0000 0000 0000" : props.cnum}
                />
                <Text
                    className="username"
                    text={props.chname === "" ? "JANE APPLESEED" : props.chname}
                />
                <Text
                    className="exp_date"
                    text={(props.mm === "" ? "00" : props.mm) + "/" + (props.yy === "" ? "00" : props.yy)}
                />
            </div>
            <div className="card_back_container">
                <Text
                    className="cvc"
                    text={props.cvc === "" ? "000" : props.cvc}
                />
                <Image
                    className="card_back"
                    src="./images/bg-card-back.png"
                    alt="bg-card-back"
                />
            </div>
        </div>
    );
}

export default LeftContent;