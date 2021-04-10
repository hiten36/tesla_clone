import React from 'react';
import rs1 from '../src/images/solar_roof/rs1.svg';
import pv1 from '../src/images/solar_panel/v1.mp4';
import pv2 from '../src/images/solar_panel/v2.mp4';
import pn8 from '../src/images/solar_panel/p9.jpeg';
import Bta from './Blank-text-area';
import Bta1 from './Blank-text-area1';
import Bottom_one from './Bottom_one';
import {panel_js} from './panel.js';

function Panel() {
    setTimeout(() => {
        panel_js();
    }, 1000);
    return (
        <>
            <div id="r1">
                <div className="vig"></div>
                <div className="centerbg">
                    <h1 style={{ color: 'black', marginTop: '4vmin' }}>Solar for Existing Roofs</h1>
                </div>
                <p className='r1p'>Lowest Cost in America - Money-back guarantee</p>
                <div className="bottombg bottombg1">
                    <div className="bottominnerbg">
                        <h2><img src={rs1} alt="image" /></h2>
                        <p>Convert Sunlight into Energy</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2><span>&#36;</span></h2>
                        <p>Range (EPA est.)</p>
                    </div>
                    <div className="bottominnerbg">
                        <h2>24/7</h2>
                        <p>Energy Monitoring</p>
                    </div>
                    <div className="bottominnerbg">
                        <button className="order_now order_now2">ORDER NOW</button>
                    </div>
                </div>
            </div>
            <div className='pn2' id="r4">
                <Bta1 head1='Savings' head2='Electricity For Less' para="Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill. Learn more about your potential savings in our Design Studio." btn_text='SEE YOUR SAVINGS' />
                <div className="pn2vid">
                    <video autoPlay muted loop>
                        <source src={pv1} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='pn3' id="r3">
                <Bta1 head1='Design' head2='Sleek and Durable' flag='true' para="Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimal aesthetic." btn_text='ORDER NOW' />
                <div className="pn3img"></div>
                <div className="sp15_line1 pn3_line">
                    <div className="sp15_dot pn3_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b pn3_b'>Low-Profile</b>
                    </div>

                </div>
                <div className="sp15_line2 pn3_line">
                    <div className="sp15_dot pn3_dot"></div>
                    <div className='sp15_b_div'>
                        <b className='sp15_b pn3_b'>No Visible Grid</b>
                    </div>
                </div>
                <div className="sp15_line3 pn3_line">
                    <div className="sp15_dot pn3_dot sp15_dot1"></div>
                    <div style={{ position: 'absolute', bottom: '0' }} className='sp15_b_div'>
                        <b className='sp15_b pn3_b'>Concealed Edge</b>
                    </div>
                </div>
            </div>
            <div id="pn4"></div>
            <div style={{position:'relative'}}>
                <Bta head1='Powerwall' flag='true' head2='Home Battery Backup' desc='Powerwall stores energy and makes it available on demand anytime — at night or during an outage.' btn_text='ORDER NOW'/>
            </div>
            <div id="pn5">
                <video autoPlay muted loop>
                    <source src={pv2} type="video/mp4" />
                </video>
            </div>
            <Bta head1='Power On' head2='Order and Installation' desc='From permitting to installation, we’ll take care of everything. After you order, we’ll gather remote aerial imagery of your home, design your system, take care of any necessary permits and schedule your installation. Once installed, we’ll schedule an inspection with the city and work with your utility to receive approval to power on.' btn_text='ORDER NOW'/>
            <div id="pn6">
                <Bta1 head1='Efficiency' head2='Maximum Solar Production' para="Tesla solar panels are designed to be highly efficient, delivering maximum solar production year-round, even on roofs with complicated angles. Powered by Tesla Solar Inverter, your fully integrated system is safe and reliable" btn_text='ORDER NOW' />
                <div className="pn6img"></div>
            </div>
            <div id="pn7"></div>
            <Bta head1='Experience' head2='24/7 Monitoring' desc='Manage your solar system from anywhere in the world with 24/7 mobile monitoring. Add a Powerwall to watch your consumption rise and fall in real time, including historical usage.' btn_text='ORDER NOW'/>
            <div id="r9">
                <Bottom_one imgsrc={pn8} btn_cn22='btn_hide' btn_cn23='btn_hide' head="Solar Roof Specs" b1='Wattage' p1='340 W' b2='Operating Tempreature' p2='-40°F up to +185°F' btn_cn1='btn_hide' btn_cn2='btn_hide' b3='Dimensions' p3='68.5" x 40.6" x 1.57" (including frame)' b4='Frame Type' p4='Black anodized aluminum' b5='Warrenty' p5='25 year performance guarantee'  b11='Certifications' p11='UL 1703, CE-Compliant,IEC 61215 (Ed. 2),IEC 61730 (Ed. 1)' b21='Invertor Power' p21='3.8kW / 7.6kW 97.5% efficiency' b31='Inverter Dimensions' p31='26" x 16" x 6"' b41='Inverter Warranty' p41='12.5 Years' />
            </div>
            <div id="r10">
                <h1>Power Your Home</h1>
                <p>Purchase or subscribe to solar today</p>
                <button className="order_now">ORDER NOW</button>
            </div>
        </>
    )
}
export default Panel;