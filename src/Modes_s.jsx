import React, { useEffect } from 'react';
import sp3 from '../src/images/model_s/p3.jpg';
import sp5 from '../src/images/model_s/p5.jpg';
import sp6 from '../src/images/model_s/p6.jpg';
import Carousal from './Carousal';
import Use_script from './Use_script';
import p6 from '../src/images/model_s/p6.jpg'
import p7 from '../src/images/model_s/p7.jpg'
import p8 from '../src/images/model_s/p8.jpg'
import p9 from '../src/images/model_s/p9.jpg'
import model_s_p1 from '../src/images/model_s/modelS_p1.jpeg';
import Bta from './Blank-text-area';
import Itb from './Image-text_box';
import p13 from '../src/images/model_s/p13.jpg';
import p14 from '../src/images/model_s/p14.jpg';
import p15 from '../src/images/model_s/p15.jpg';
import Ibt from './Image-bottom_text';
import v1 from '../src/images/model_s/v1.mp4';
import Bottom_one from './Bottom_one';
import tc11 from '../src/images/model_s/t11.jpeg';
import tc12 from '../src/images/model_s/t12.jpeg';
import Bta1 from './Blank-text-area1';

function Model_s() {
    Use_script('../src/scripts/car_script.js');
    return (
        <>
            <div id='tc1' className="bg">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1>Model S</h1>
                    <p>Plaid</p>
                </div>
                <div className="bottombg">
                    <div className="bottominnerbg">
                        <h2>390mi</h2>
                        <p>Range(est.)</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>1.99s</h2>
                        <p>0-60 mph*</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>200 mph*</h2>
                        <p>Top Speed*</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>1020 hp</h2>
                        <p>Peak Power</p>
                    </div>
                </div>
            </div>
            <div id="sp2">
                <h1>All-New Interior</h1>
            </div>
            <div id="sp3">
                <Carousal imgsrc1={sp3} imgsrc2={sp5} imgsrc3={sp6} />
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
                <Itb imgsrc1={p6} imgsrc2={p7} imgsrc3={p8} imgsrc4={p9} head1="Game from Anywhere" title1='Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.' head2='Stay Connected' title2='Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.' head3='Your Best Audio System' title3='A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.' head4='Real Storage' title4='With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.' />
            </div>
            <div id="sp10">
                <Ibt cn='bottombg bottombg1' head1='1,020hp' p1='Peak power' head2='9.23s' p2='@155 mph 1/4 mile' head3='1.99s' p3='0-60 mph*' />
            </div>
            <Bta head1='Plaid' head2='Beyond Ludicrous' btn_text='ORDER NOW' desc='With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.'/>
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
                                <h2>3.1 s</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div>
                                <h2>412 mi</h2>
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
                                <h2>1.99 s*</h2>
                                <p>0-60 mph</p>
                            </div>
                            <div>
                                <h2>390 mi</h2>
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
            <div id="sp12"></div>
            <Bta head1='Exterior' head2='Designed for Efficiency' btn_text='ORDER NOW' desc='With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.'/>
            <div id="sp13">
                <Itb imgsrc1={p13} imgsrc2={p14} imgsrc3={p15} imgsrc4='' head1="Responsive Performance" title1='Staggered, performance-focused wheels and tires keep the car planted and transfer even more power down to the road.' head2='Optimized Aerodynamics' title2='Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.' head3='Refined Styling' title3='Exterior design combines an iconic look with elegant proportions.' />
            </div>
            <div id="sp14">
                <div className="sp14img">
                    <Ibt cn='bottombg bottombg2' head1='412mi' p1='Go anywhere with up to 412 miles of estimated range on a single charge' head2='200mi' p2='Supercharge up to 200 miles in 15 minutes' head3='20000+' p3='Superchargers placed along popular routes' />
                </div>
                <Bta1 head1='Range' head2='Go Anywhere' para='Travel farther on a single charge than any other electric vehicle—and keep going with access to 20,000+ Superchargers globally. By combining up to 412 miles of estimated range with Tesla fast charging technology, you’ll spend less time charging and even more time on the road.' btn_text='ORDER NOW'/>
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
                <Bta1 head1='Safety' head2='High Impact Protection' para='Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.' btn_text='ORDER NOW'/>
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
                <Bottom_one imgsrc={tc11} head="Model S Specs" btn_cn22='btn_hide' btn_cn23='btn_hide' btn_text='PLAID' b1='Range' p1='390 mi (est.)' b2='1/4 Mile' p2='9.23@155 mph trap speed' btn_cn1='sp17_btn sp17_active' btn_cn2='sp17_btn' b3='Peak Power' p3='1,020 hp' b4='Wheels' p4='19" or 21"' b5='Cargo' p5='28 cu ft' b6='Weight' p6='4,766 lbs' btn_id1='sp17_btn1' btn_id2='sp17_btn2' btn_text1='LONG RANGE' b11='Acceleration' p11='1.99 s 0-60 mph* (*with rollout subtracted)' b21='Top Speed' p21='200 mph† (†when equipped with the proper wheels and tires)' b31='Drag Coefficient' p31='0.208 Cd' b41='Powertrain' p41='Tri Motor' b51='Supercharging Max' p51='250 KW' />
            </div>
            <div id="sp18">
                <div className="sp18_inner1">
                    <h1>Model S</h1>
                    <button className="order_now">ORDER NOW</button>
                    <button className="order_now">COMPARE</button>
                </div>
                <div className="sp18_inner2">
                    <img src={tc12} alt="image"/>
                </div>
            </div>
        </>
    )
}
export default Model_s;