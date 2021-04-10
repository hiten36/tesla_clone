import React, { useEffect } from 'react';
import sp3 from '../src/images/model_s/p3.jpg';
import sp5 from '../src/images/model_s/p5.jpg';
import mx6 from '../src/images/model_x/p6.jpg';
import mx9 from '../src/images/model_x/p9.jpg';
import Carousal from './Carousal';
import p6 from '../src/images/model_s/p6.jpg'
import p7 from '../src/images/model_s/p7.jpg'
import model_s_p1 from '../src/images/model_s/modelS_p1.jpeg';
import Bta from './Blank-text-area';
import Itb from './Image-text_box';
import Ibt from './Image-bottom_text';
import v1 from '../src/images/model_s/v1.mp4';
import Bottom_one from './Bottom_one';
import Bta1 from './Blank-text-area1';
import mx14 from '../src/images/model_x/p14.jpg';
import mx15 from '../src/images/model_x/p15.jpg';
import mx16 from '../src/images/model_x/p16.jpg';
import mx19 from '../src/images/model_x/p19.jpg';
import mx20 from '../src/images/model_x/p20.jpeg';
import {model_x_js} from './model_x.js';

function Model_x() {
    setTimeout(() => {
        model_x_js();
    }, 800);
    return (
        <>
            <div id='mx1' className="bg">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1>Model X</h1>
                    <p>Plaid</p>
                </div>
                <div className="bottombg">
                    <div className="bottominnerbg">
                        <h2>340mi</h2>
                        <p>Range(est.)</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>2.5s</h2>
                        <p>0-60 mph*</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>9.9s</h2>
                        <p>1/4 mile</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>1020 hp</h2>
                        <p>Peak Power</p>
                    </div>
                </div>
            </div>
            <div id="mx2">
                <h1>All-New Interior</h1>
            </div>
            <div id="sp3">
                <Carousal imgsrc1={sp3} imgsrc2={sp5} imgsrc3={mx6} />
                <div className='sp3_inner' id='sp3_inner1'>
                    <h2>17” Cinematic Display</h2>
                    <p>With 2200x1300 resolution, ultra bright, true colors, exceptional responsiveness and left-right tilt, the new center display is the best screen to watch anywhere.</p>
                </div>
                <div className='sp3_inner' id='sp3_inner2'>
                    <h2>Perfect Environment</h2>
                    <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
                </div>
                <div className='sp3_inner' id='sp3_inner3'>
                    <h2>Redesigned Second Row</h2>
                    <p>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
                </div>
            </div>
            <div id="sp4">
                <Itb imgsrc1={p6} imgsrc2={p7} imgsrc3={mx9} head1="Game from Anywhere" title1='Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.' head2='Stay Connected' title2='Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.' head3='Your Best Audio System' title3='A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.' imgsrc4='' />
            </div>
            <div id="mx5">
                <Ibt cn='bottombg bottombg1' head1='1,020hp' p1='Peak power' head2='9.99s' p2='1/4 mile' head3='2.5s' p3='0-60 mph*' />
            </div>
            <Bta head1='Plaid' head2='Beyond Ludicrous' btn_text='ORDER NOW' desc='With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Both Long Range and Plaid powertrains, with updated battery architecture, can deliver instant torque at any speed'/>
            <div id="sp11">
                <h1>Electric Powertrain</h1>
                <p className="sp11p">Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
                <img src={model_s_p1} alt="image" />
                <div className="sp11_inner sp11_inner_over">
                    <div className="sp11_bor1"></div>
                    <div className="sp11_inner1 sp11_active">
                        <h3>Long Range</h3>
                        <p>Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.</p>
                        <div className="sp11_inner_layer">
                            <div>
                                <h2>3.8 s</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div>
                                <h2>360 mi</h2>
                                <p>range (est.)</p>
                            </div>
                            <div>
                                <h2>670 hp</h2>
                                <p>peak power</p>
                            </div>
                        </div>
                    </div>
                    <div className="sp11_inner2">
                        <div className="sp11_bor2"></div>
                        <h3>Plaid</h3>
                        <p>Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains peak power output all the way to top speed.</p>
                        <div className="sp11_inner_layer">
                            <div>
                                <h2>2.5 s*</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div>
                                <h2>340 mi</h2>
                                <p>range (est.)</p>
                            </div>
                            <div>
                                <h2>1,020 hp</h2>
                                <p>peak power</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mx6">
                <div className="mx6_img">
                    <div className="vig"></div>
                    <Ibt cn='bottombg bottombg2' head1='91ft³' p1='Storage Capacity' head2='5,000 lbs' p2='Towing capacity' head3='Doors' p3='Falcon Wing doors' />
                </div>
                <Bta1 head1='Utility' head2='Even More Capable' btn_text='ORDER NOW' para='With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.'/>
            </div>
            <div id="mx7">
            <Ibt cn='bottombg bottombg1' head1='' p1='New wheels and improved handling' head2='0.24 cd' p2='Lowest-drag SUV on Earth' head3='' p3='Refined exterior styling' />
            </div>
            <Bta head1='Exterior' head2='Designed for Efficiency' btn_text='ORDER NOW' desc='With the lowest drag coefficient of any SUV, Model X is built for speed and range. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.'/>
            <div id="sp13">
                <Itb imgsrc1={mx14} imgsrc2={mx15} imgsrc3={mx16} imgsrc4='' head1="New Wheels and Tires" title1='New performance tires deliver better handling and ride quality with lower rolling resistance and are paired with new aerodynamic wheels for an updated look.' head2='Optimized Aerodynamics' title2='Attention to detail on all exterior surfaces makes Model X the most aerodynamic production SUV on Earth.' head3='Refined Styling' title3='Exterior design combines an iconic look with elegant proportions.' />
            </div>
            <div id="mx8">
                <div className="mx8_img">
                    <Ibt cn='bottombg bottombg2' head1='360mi' p1='Go anywhere with up to 360 miles of estimated range on a single charge' head2='175mi' p2='Supercharge up to 175 miles in 15 minutes' head3='20000+' p3='Superchargers placed along popular routes' />
                </div>
                <Bta1 head1='Range' head2='Go Anywhere' para='Travel farther on a single charge than any other electric SUV—and keep going with access to 20,000+ Superchargers globally. By combining up to 360 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.' btn_text='ORDER NOW'/>
            </div>
            <div id="sp15">
                <div className="sp15_line1">
                    <div className="sp15_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b'>Front-Impact Protection</b>
                    </div>
                    
                </div>
                <div className="sp15_line2">
                    <div className="sp15_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b'>Side-Impact Protection</b>
                    </div>
                </div>
                <div className="sp15_line3">
                    <div className="sp15_dot sp15_dot1"></div>
                    <div style={{position:'absolute', bottom:'0'}} className='sp15_b_div'>
                        <b className='sp15_b'>Very Low Rollover Risk</b>
                    </div>
                </div>
                <div className="sp15img"></div>
                <Bta1 head1='Safety' head2='Built for Safety' para='Model X is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model X includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.' btn_text='ORDER NOW'/>
            </div>
            <div id="sp16">
                <div className="sp16_features">
                    <h1>Features</h1>
                    <p>Full Self-Driving Capability introduces additional features and improves existing functionality to make your car more capable over time including:</p>
                </div>
                <video className='sp16_vc' width='1620' height='720' autoPlay muted loop>
                    <source src={v1} type="video/mp4"/>
                </video>
                <div className="sp11_inner">
                    <div id="sp16_i1" className="sp16_inner1 sp16_active">
                        <div className="sp16_bor1"></div>
                        <h3>Navigate on Autopilot</h3>
                        <p>Active guidance from on-ramp to off-ramp</p>
                    </div>
                    <div id="sp16_i2" className="sp16_inner1">
                        <div className="sp16_bor2"></div>
                        <h3>Auto Lane Change</h3>
                        <p>Automatically change lanes while driving on the highway</p>
                    </div>
                    <div id="sp16_i3" className="sp16_inner1">
                        <div className="sp16_bor3"></div>
                        <h3>Summon</h3>
                        <p>Automatically retrieve your car</p>
                    </div>
                    <div id="sp16_i4" className="sp16_inner1">
                        <div className="sp16_bor4"></div>
                        <h3>Autopark</h3>
                        <p>Parallel and perpendicular parking with a single touch</p>
                    </div>
                </div>
            </div>
            <div id="sp17">
                <Bottom_one imgsrc={mx19} head="Model S Specs" btn_cn22='btn_hide' btn_cn23='btn_hide' btn_text='PLAID' b1='Range' p1='340 mi (est.)' b2='1/4 Mile' p2='9.9s' btn_cn1='sp17_btn sp17_active' btn_cn2='sp17_btn' b3='Peak Power' p3='1,020 hp' b4='Wheels' p4='20" or 22"' b5='Towering' p5='5,000 lbs' b6='Seating' p6='Up To 7' btn_id1='sp17_btn1' btn_id2='sp17_btn2' btn_text1='LONG RANGE' b11='Acceleration' p11='2.5 s 0-60 mph† (*with rollout subtracted)' b21='Top Speed' p21='163 mph†' b31='Drag Coefficient' p31='0.24 Cd' b41='Weight' p41='5,390 lbs' b51='Supercharging Max' p51='250 KW' />
            </div>
            <div id="sp18">
                <div className="sp18_inner1">
                    <h1>Model X</h1>
                    <button className="order_now">ORDER NOW</button>
                    <button className="order_now">COMPARE</button>
                </div>
                <div className="sp18_inner2">
                    <img src={mx20} alt="image"/>
                </div>
            </div>
        </>
    )
}
export default Model_x;