import React from 'react';
import Bta from './Blank-text-area';
import Ibt from './Image-bottom_text';
import Bta2 from './Blank_text_area2';
import m3_p1 from '../src/images/model_3/m3_p1.png';
import m37 from '../src/images/model_3/p7.jpg';
import m38 from '../src/images/model_3/p8.jpg';
import Bottom_one from './Bottom_one';
import Ist from './Image_side_text'
import {model_3_js} from './model_3.js';

function Model_3() {
    setTimeout(() => {
        model_3_js();
    }, 800);
    return (
        <>
            <div id="m31">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1>Model 3</h1>
                </div>
                <div className="bottombg bottombg3">
                    <div className="bottominnerbg">
                        <h2>3.1 s</h2>
                        <p>From 0-60 mph</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>353mi</h2>
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
            <div id="m32">
                <Bta2 head1='Safety' head2='Built for Safety' para="Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants." flag='true' />
                <div className="m32_img"></div>
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
            <div id="m33">
                <Ibt cn='bottombg bottombg1' head1='3.1 s' p1='Quickest acceleration—from zero to 60 mph in as little as 3.1 seconds' head2='162mph' p2='Improved handling and aerodynamics allow for a top speed of 162 mph' head3='AWD' p3='Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions' />
            </div>
            <Bta head1='Performance' head2='Quickest Acceleration' btn_text='ORDER NOW' desc='Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph in as little as 3.1 seconds.'/>
            <div id="m34">
                <Ibt cn='bottombg bottombg3' head1='2' p1='Independent motors digitally control torque to the front and rear wheels' head2='10ms' p2='Dual motors respond to changing conditions in as little as 10 milliseconds' head3='AWD' p3='Unparalleled traction and control, in all weather conditions' />
                <div className="vig"></div>
            </div>
            <Bta head1='All-Wheel Drive' head2='Dual Motor' btn_text='ORDER NOW' desc='Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.'/>
            <div id="m35">
                <div className="m35_img">
                    <div className="vig"></div>
                    <Ibt cn='bottombg bottombg2' head1='353mi' p1='Go anywhere with up to 353 mi of estimated range on a single charge' head2='15 min' p2='Recharge up to 175 mi in 15 minutes at Supercharger locations' head3='20,000+' p3='Superchargers placed along well-traveled routes around the world' />
                </div>
                <Bta2 head1='Safety' head2='Built for Safety' para="Safety is the most important part of the overall Model 3 design. The metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test, Model 3 resisted four times its own mass, even with an all-glass roof: that's the same weight as two full-grown African elephants." flag='false' imgsrc={m3_p1} />
            </div>
            <div id="m36">
                <div className="vig1"></div>
                <Ist head1='15inch' desc1='A touchscreen display designed to improve over time' head2='Wi-Fi' desc2='Over-the-air software updates introduce new features, functionality and performance' head3='Power' desc3='An expansive Glass Roof provides more headroom and UV protection'/>
            </div>
            <Bta head1='Interior' head2='Built Around the Driver' btn_text='ORDER NOW' desc='The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat.'/>
            <div id="m37">
                <Bottom_one imgsrc={m37} btn_text22='STANDERD PLUS' btn_text23='COMPARE' btn_id22='sp17_btn3' btn_id23='sp17_btn4' btn_cn22='sp17_btn' btn_cn23='sp17_btn' head="Model 3 Specs" btn_text='PERFORMANCE' b1='Battery' p1='Standard Range' b2='Acceleration' p2='5.3s 0-60 mph' btn_cn1='sp17_btn sp17_active' btn_cn2='sp17_btn' b3='Range' p3='263 miles (est.)' b4='Drive' p4='Rear-Wheel Drive' b5='Seating' p5='5 Adults' b6='Wheels' p6='18" or 19"' btn_id1='sp17_btn1' btn_id2='sp17_btn2' btn_text1='LONG RANGE AWD' b11='Weight' p11='3,582 lbs' b21='Cargo' p21='15 cu ft' b31='Displays' p31='15" Center Touchscreen' b41='Supercharging Max/Payment Type' p41='170 kW max; Pay Per Use' b51='Warranty' p51='Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery and Drive Unit - 8 years or 100,000 mi, whichever comes first' />
            </div>
            <div id="m38">
                <div className="sp18_inner1 m38_inner">
                    <h1>Experience Model 3</h1>
                    <button className="order_now">ORDER NOW</button>
                    <button className="order_now">COMPARE</button>
                </div>
                <div className="sp18_inner2 m38_img">
                    <img src={m38} alt="image"/>
                </div>
            </div>
        </>
    )
}
export default Model_3;