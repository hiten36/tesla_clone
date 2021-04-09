import React from 'react';
import Nav1 from './Nav1';
import Use_script from './Use_script';
import Slider from 'infinite-react-carousel';
import p2 from '../src/images/shop/p2.jpg';
import p3 from '../src/images/shop/p3.jpg';
import p4 from '../src/images/shop/p4.jpg';
import p5 from '../src/images/shop/p5.jpg';
import p6 from '../src/images/shop/p6.jpg';
import p7 from '../src/images/shop/p7.jpg';
import p8 from '../src/images/shop/p8.jpg';
import p9 from '../src/images/shop/p9.jpg';
import p10 from '../src/images/shop/p10.jpg';
import p11 from '../src/images/shop/p11.jpg';
import p12 from '../src/images/shop/p12.jpg';
import p13 from '../src/images/shop/p13.jpg';
import p14 from '../src/images/shop/p14.jpg';
import p15 from '../src/images/shop/p15.jpg';
import p16 from '../src/images/shop/p16.jpg';
import p17 from '../src/images/shop/p17.jpg';
import Sb1 from './shop-box1';
import { NavLink } from 'react-router-dom';

function Shop() {
    Use_script('script/shop.js');
    const settings = {
        duration: 100,
        initialSlide: true,
        shift: 20,
        slidesToShow: 3,
        centerMode: true
    };
    return (
        <>
            <Nav1 />
            <div id='sn1' className="sn1 sn_nav">
                    <div className='sn1_inner'>
                        <div className="shop_b">
                            <b>At Home</b>
                        </div>
                        <div className="shop_b">
                            <b>On The Road</b>
                        </div>
                        <div className="shop_b">
                            <b>Parts</b>
                        </div>
                    </div>
                <div className="sn1_img">
                    <img src={p2} alt="image"/>
                    <h2>Wall Connector</h2>
                </div>
            </div>
            <div id='sn2' className="sn1 sn_nav sn2">
                <div className='sn1_inner'>
                    <div className="shop_b">
                        <b>Model S</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Interior</NavLink>
                        <NavLink to=''>Exterior</NavLink>
                        <NavLink to=''>Wheels and Tires</NavLink>
                        <NavLink to=''>Floor Mats</NavLink>
                        <NavLink to=''>Parts</NavLink>
                        <NavLink to=''>Keys</NavLink>
                    </div>
                    <div className="shop_b">
                        <b>Model 3</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Interior</NavLink>
                        <NavLink to=''>Exterior</NavLink>
                        <NavLink to=''>Wheels and Tires</NavLink>
                        <NavLink to=''>Floor Mats</NavLink>
                        <NavLink to=''>Parts</NavLink>
                        <NavLink to=''>Keys</NavLink>
                    </div>
                    <div className="shop_b">
                        <b>Model X</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Interior</NavLink>
                        <NavLink to=''>Exterior</NavLink>
                        <NavLink to=''>Wheels and Tires</NavLink>
                        <NavLink to=''>Floor Mats</NavLink>
                        <NavLink to=''>Parts</NavLink>
                        <NavLink to=''>Keys</NavLink>
                    </div>
                    <div className="shop_b">
                        <b>Model Y</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Interior</NavLink>
                        <NavLink to=''>Exterior</NavLink>
                        <NavLink to=''>Wheels and Tires</NavLink>
                        <NavLink to=''>Floor Mats</NavLink>
                        <NavLink to=''>Parts</NavLink>
                        <NavLink to=''>Keys</NavLink>
                    </div>
                </div>
                <div className='sn1_img'>
                    <img src={p15} alt="image"/>
                    <h2>Model Y Roof Rack</h2>
                </div>
            </div>
            <div id='sn3' className="sn1 sn_nav sn3">
                <div className='sn1_inner'>
                    <div className="shop_b">
                        <b>Men</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Tees</NavLink>
                        <NavLink to=''>Sweatshirts</NavLink>
                        <NavLink to=''>Jackets</NavLink>
                        <NavLink to=''>Active Wear</NavLink>
                        <NavLink to=''>Hats</NavLink>
                    </div>
                    <div className="shop_b">
                        <b>Women</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Tees</NavLink>
                        <NavLink to=''>Sweatshirts</NavLink>
                        <NavLink to=''>Jackets</NavLink>
                        <NavLink to=''>Active Wear</NavLink>
                        <NavLink to=''>Hats</NavLink>
                    </div>
                    <div className="shop_b">
                        <b>Kids</b>
                        <NavLink to=''>Best Sellers</NavLink>
                        <NavLink to=''>Tees</NavLink>
                        <NavLink to=''>Sweatshirts</NavLink>
                        <NavLink to=''>Jackets</NavLink>
                        <NavLink to=''>Active Wear</NavLink>
                        <NavLink to=''>Hats</NavLink>
                    </div>
                </div>
                <div className='sn1_img'>
                    <img src={p16} alt="image"/>
                    <h2>3D Large Wordmark Pullover Hoodie</h2>
                </div>
            </div>
            <div id='sn4' className="sn1 sn_nav sn4">
                <div className='sn1_inner'>
                    <div className="shop_b">
                        <b>Best Sellers</b>
                    </div>
                    <div className="shop_b">
                        <b>Tesla Tequilla</b>
                    </div>
                    <div className="shop_b">
                        <b>Mini Teslas</b>
                    </div>
                    <div className="shop_b">
                        <b>Drinkware</b>
                    </div>
                    <div className="shop_b">
                        <b>Outdoor and Tech</b>
                    </div>
                </div>
                <div className="sn1_img">
                    <img src={p17} alt="image"/>
                    <h2>Diecast 1:18 Roadster</h2>
                </div>
            </div>
            <div id="sh1">
                <div className="sh1img"></div>
                <h1>Tesla Tequila</h1>
            </div>
            <div id="sh2">
                <b>BEST SELLERS</b>
                <Slider {...settings}>
                    <div className="shop_box">
                        <img src={p2} alt="image"/>
                        <p>WALL CONNECTOR</p>
                    </div>
                    <div className="shop_box">
                        <img src={p3} alt="image"/>
                        <p>MENS'S CORP JACKET</p>
                    </div>
                    <div className="shop_box">
                        <img src={p4} alt="image"/>
                        <p>MODEL Y ALL-WEATHER INTERIOR LINEAR</p>
                    </div>
                    <div className="shop_box">
                        <img src={p5} alt="image"/>
                        <p>MODEL 3 ROOF JACK</p>
                    </div>
                    <div className="shop_box">
                        <img src={p6} alt="image"/>
                        <p>DIECAST 1:18 SCALE ROADSTER</p>
                    </div>
                </Slider>
            </div>
            <div className='sh3' id="sh3">
                <Sb1 imgsrc={p7} head='Model S Accessories'/>
            </div>
            <div id="sh4">
                <Sb1 imgsrc={p8} head='Model 3 Accessories'/>
                <Sb1 imgsrc={p9} head='Model x Accessories'/>
            </div>
            <div className='sh3' id="sh5">
                <Sb1 imgsrc={p10} head='Model Y Accessories'/>
            </div>
            <div id="sh6">
                <div className="sh6_box1">
                    <Sb1 imgsrc={p12} head='Charging'/>
                </div>
                <div className="sh6_box2">
                    <Sb1 flag='true' imgsrc={p11} head="Men's Apparel"/>
                    <Sb1 imgsrc={p13} head="Women's Apparel" />
                </div>
            </div>
            <div className='sh3' id="sh7">
                <Sb1 imgsrc={p14} head='Lifestyle'/>
            </div>
        </>
    )
}
export default Shop;