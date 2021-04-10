import React from 'react';
import Bta from './Blank-text-area';
import Bta1 from './Blank-text-area1';
import Ibt from './Image-bottom_text';
import Bta2 from './Blank_text_area2';
import m3_p1 from '../src/images/model_3/m3_p1.png';
import my6 from '../src/images/model_y/p7.png';
import my7 from '../src/images/model_y/p8.jpg';
import Bottom_one from './Bottom_one';
import Ist from './Image_side_text'
import {model_y_js} from './model_y.js';

function Model_Y() {
    setTimeout(() => {
        model_y_js();
    }, 800);
    return (
        <>
            <div id="my1">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1>Model Y</h1>
                </div>
                <div className="bottombg bottombg3">
                    <div className="bottominnerbg">
                        <h2>68 cu ft</h2>
                        <p>Cargo Space</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>326mi</h2>
                        <p>Range (EPA est.)</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>AWD</h2>
                        <p>Dual Motor</p>
                    </div>
                    <div className="bottominnerbg">
                        <button className="order_now order_now2">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div id="my2">
                <Bta1 head1='Safety' head2='Designed for Safety' btn_text='ORDER NOW' para="Like every Tesla, Model Y is designed to be the safest vehicle in its class. The low center of gravity, rigid body structure and large crumple zones provide unparalleled protection."/>
                <div className="my2_img"></div>
                <div className="sp15_line1">
                    <div className="sp15_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b'>Impact Protection</b>
                    </div>

                </div>
                <div className="sp15_line2">
                    <div className="sp15_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b'>Rigid Structure</b>
                    </div>
                </div>
                <div className="sp15_line3">
                    <div className="sp15_dot sp15_dot1"></div>
                    <div style={{ position: 'absolute', bottom: '0' }} className='sp15_b_div'>
                        <b className='sp15_b'>Very Low Rollover Risk</b>
                    </div>
                </div>
            </div>
            <div id="my3">
                <Ibt cn='bottombg bottombg1' head1='2' p1='Independent motors digitally control torque to the front and rear wheels' head2='3.5s' p2='Quickest acceleration—from zero to 60 mph in as little as 3.5 seconds' head3='AWD' p3='Capable in rain, snow, mud and off-road with superior traction control' />
            </div>
            <Bta head1='All-Wheel Drive' head2='Dual Motor' btn_text='ORDER NOW' desc='Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'/>
            <div id="my4">
                <div className="my4_img">
                    <div className="vig"></div>
                    <Ibt cn='bottombg bottombg2' head1='2' p1='Independent motors digitally control torque to the front and rear wheels' head2='10ms' p2='Dual motors respond to changing conditions in as little as 10 milliseconds' head3='AWD' p3='Unparalleled traction and control, in all weather conditions' />
                </div>
                <Bta1 head1='Range' head2='Go Anywhere' btn_text='ORDER NOW' para='Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 20,000 Superchargers worldwide, with six new locations opening every week.'/>
            </div>
            <div id="my5">
                <div className="vig1"></div>
                <Ist head1='15inch' desc1='A touchscreen display designed to improve over time' head2='Wi-Fi' desc2='Over-the-air software updates introduce new features, functionality and performance' head3='Power' desc3='An expansive Glass Roof provides more headroom and UV protection'/>
            </div>
            <Bta head1='Interior' head2='Built Around the Driver' desc="With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky." btn_text='ORDER NOW' />
            <div id="my6">
                <Bottom_one imgsrc={my6} btn_cn22='btn_hide' btn_cn23='btn_hide' head="Model Y Specs" btn_text='PERFORMANCE' b1='Battery' p1='Long Range' b2='Acceleration' p2='3.5s 0-60 mph' btn_cn1='sp17_btn sp17_active' btn_cn2='sp17_btn' b3='Range' p3='303 miles (est.)' b4='Drive' p4='Dual Motor All-Wheel Drive' b5='Seating' p5='Up To 5' b6='Wheels' p6='21"' btn_id1='sp17_btn1' btn_id2='sp17_btn2' btn_text1='LONG RANGE AWD' b11='Weight' p11='4,416 lbs' b21='Max Cargo Volume' p21='68 cu ft' b31='Top Speed' p31='155 mph' b41='Display' p41='15" Center Touchscreen' b51='Warranty' p51='Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery and Drive Unit - 8 years or 100,000 mi, whichever comes first' />
            </div>
            <div id="my7">
                <div className="my7_inner">
                    <h1>Order Model Y</h1>
                    <div className="my7_btns">
                        <button className="order_now">ORDER NOW</button>
                        <button className="order_now">COMPARE</button>
                    </div>
                    
                </div>
                <div className="my7_img">
                    <img src={my7} alt="image"/>
                </div>
            </div>
        </>
    )
}
export default Model_Y; 