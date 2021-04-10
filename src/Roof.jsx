import React from 'react';
import rs1 from '../src/images/solar_roof/rs1.svg';
import rs2 from '../src/images/solar_roof/rs2.svg';
import rs3 from '../src/images/solar_roof/rs3.svg';
import rs4 from '../src/images/solar_roof/rs4.svg';
import v1 from '../src/images/solar_roof/v1.mp4';
import v2 from '../src/images/solar_roof/v2.mp4';
import r9 from '../src/images/solar_roof/p6.png';
import Bta from './Blank-text-area';
import Bta1 from './Blank-text-area1';
import Ibt from './Image-bottom_text';
import Bottom_one from './Bottom_one';
import {roof_js} from './roof.js';

function Roof() {
    setTimeout(() => {
        roof_js();
    }, 800);
    return (
        <>
            <div id="r1">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1>Solar Roof</h1>
                </div>
                <p className='r1p'>Replace your roof and produce clean energy</p>
                <div className="bottombg bottombg1">
                    <div className="bottominnerbg">
                        <h2><img src={rs1} alt="image" /></h2>
                        <p>Beautiful Solar Without Compromise</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>3X</h2>
                        <p>Stronger Than Standard Tiles</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2><img src={rs2} alt="image" /></h2>
                        <p>Pays For Itself Over Time</p>
                    </div>
                    <div className="bottominnerbg">
                        <button className="order_now order_now2">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div id="r2"></div>
            <Bta head1='Design' head2='A Beautiful Roof' desc='Replace your current roof with Solar Roof and power your home with a fully integrated solar system. With a seamless design, each tile looks great up-close or from the street, complementing your home’s architecture.' btn_text='ORDER NOW' />
            <div id="r3">
                <Bta1 head1='Value' head2='Pay less for Electricity' para='Solar Roof is the only roof that can help pay for itself with the energy you produce. Power your home at the lowest price per watt of any national provider and take control of your monthly electricity bill.' btn_text='ORDER NOW' />
                <div className="r3img"></div>
            </div>
            <div id="r4">
                <Bta1 head1='Durablity' head2='Built to Last' para='Solar Roof tiles are more than three times stronger than standard roofing tiles and are engineered for all-weather protection. With a 25-year warranty, Solar Roof lasts longer than an average roof and protects your home for decades to come.' btn_text='ORDER NOW' />
                <div className="r4vid">
                    <video autoPlay muted loop>
                        <source src={v1} type="video/mp4" />
                    </video>
                </div>
            </div>
            <Bta head1='Installation' head2='Trusted Expertise' desc='Our in-house team of energy professionals has installed more than 3.6 GW of clean solar energy across 400,000 roofs—the equivalent of 10 million traditional solar panels. From roof removal to installation, we take care of everything.' btn_text='ORDER NOW' />
            <div id="r5">
                <div className="r5vid">
                    <video autoPlay muted loop>
                        <source src={v2} type='video/mp4' />
                    </video>
                </div>
                <div className="sp11_inner">
                    <div id="sp16_i1" className="sp16_inner1 sp16_active">
                        <div className="sp16_bor1"></div>
                        <h3>Design</h3>
                        <p>Aerial imagery and 3D modeling determine your custom design</p>
                    </div>
                    <div id="sp16_i2" className="sp16_inner1">
                        <div className="sp16_bor2"></div>
                        <h3>Roof Removal</h3>
                        <p>Roof removal is completed quickly and efficiently</p>
                    </div>
                    <div id="sp16_i3" className="sp16_inner1">
                        <div className="sp16_bor3"></div>
                        <h3>Waterproofing</h3>
                        <p>A durable weatherproofing layer is added to keep your home safe and dry</p>
                    </div>
                    <div id="sp16_i4" className="sp16_inner1">
                        <div className="sp16_bor4"></div>
                        <h3>The Installation</h3>
                        <p>Our simple design enables quick and efficient tile installation</p>
                    </div>
                    <div id="sp16_i5" className="sp16_inner1">
                        <div className="sp16_bor5"></div>
                        <h3>Power On</h3>
                        <p>Final cleanup is completed before system activation</p>
                    </div>
                </div>
            </div>
            <div id="r6">
                <Bta1 head1='Efficiency' head2='Maximum Solar Production' para='Generate the most energy possible, even on roofs with complicated angles and intermittent sunlight. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable. With built-in connectivity, Tesla Solar Inverter will continue to improve with each over-the-air software update.' btn_text='ORDER NOW' />
                <div className="r6img"></div>
            </div>
            <div id="r7"></div>
            <Bta head1='Control' head2='Monitor and Optimize' desc='With the Tesla app, you can monitor your energy production in real time. Control your system from anywhere with instant alerts and remote access.' btn_text='ORDER NOW' />
            <div id="r8">
                <div className="vig"></div>
                <Ibt flag='true' imgsrc1={rs3} imgsrc2={rs4} cn='bottombg bottombg1' p1='Store Energy' head2='24/7' p2='Outage Protection' p3='Power your Home' />
            </div>
            <Bta head1='Powerwall' btn_text='ORDER NOW' head2='Backup protection' desc='Powerwall is a compact home battery that stores the energy you produce with Solar Roof, making it available anytime—at night or during an outage.' />
            <div id="r9">
                <Bottom_one imgsrc={r9} btn_cn22='btn_hide' btn_cn23='btn_hide' head="Solar Roof Specs" b1='Tile Warranty' p1='25 Years' b2='Power Warranty' p2='25 Years' btn_cn1='btn_hide' btn_cn2='btn_hide' b3='Weatherization Warranty' p3='25 Years' b4='Wind Rating' p4='STM D3161 Class F' b5='Fire Rating' p5='Class A (highest rating)' b11='Hail Rating' p11='ANSI FM 4473 Class 3' b21='Roof Pitch' p21='2:12 to 20:12' b31='Inverter Power' p31='3.8kW / 7.6kW 97.5% efficiency' b41='Inverter Dimensions' p41='26" x 16" x 6"' b51='Inverter Warranty' p51='12.5 Years' />
            </div>
            <div id="r10">
                <h1>Replace your Roof</h1>
                <p>Power your home with a new Solar Roof</p>
                <button className="order_now">ORDER NOW</button>
            </div>
        </>
    )
}
export default Roof;