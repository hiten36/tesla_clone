import React from 'react';
import car_left from '../src/images/carousal/car_left.svg';
import car_right from '../src/images/carousal/car_right.svg';

function Carousal(props) {
    return (
        <>
            <div className="c1">
                <div className="img_box">
                    <img id="i1" className="active_img" src={props.imgsrc1} alt="image" />
                    <img id="i2" src={props.imgsrc2} alt="image" />
                    <img id="i3" src={props.imgsrc3} alt="image" />
                </div>
                <div className="circle">
                    <ul>
                        <li className="active_dot" id="l1">
                            <div></div>
                        </li>
                        <li id="l2">
                            <div></div>
                        </li>
                        <li id="l3">
                            <div></div>
                        </li>
                    </ul>
                </div>
                <div className="go">
                    <span id="left"><img src={car_left} alt="left" /></span>
                    <span id="right"><img src={car_right} alt="right" /></span>
                </div>
            </div>
        </>
    )
}
export default Carousal;