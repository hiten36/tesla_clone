import React from 'react';
import { NavLink } from 'react-router-dom';
import p1 from '../src/images/logo/logo.png';
import Use_script from './Use_script';
import ss1 from '../src/images/shop/ss1.svg';
import ss2 from '../src/images/shop/ss2.svg';

function Nav1() {
    Use_script('script/nav1.js');
    return (
        <>
        <div>
            <nav id='nav1' className="navbar">
                <ul>
                    <li className="list1">
                        <div className="nav1">
                            <NavLink className='tesla' to="/">
                                <img className='nav_a nav_a2' src={p1} alt="logo" />
                            </NavLink>
                            <span className="shopnav">|</span>
                            <NavLink className='shopnav nav_a nav_a2' to="/">SHOP</NavLink>
                        </div>
                    </li>
                    <li className="list2">
                        <div className="nav2">
                            <NavLink className='nav_a nav_a2 shop_nav1' id="shop_n1" to="">CHARGING</NavLink>
                            <NavLink className='nav_a nav_a2 shop_nav1' id="shop_n2" to="">VEHICLE ACCESSORIES</NavLink>
                            <NavLink className='nav_a nav_a2 shop_nav1' id="shop_n3" to="">APPAREL</NavLink>
                            <NavLink className='nav_a nav_a2 shop_nav1' id="shop_n4" to="">LIFESTYLE</NavLink>
                        </div>
                    </li>
                    <li className="list3">
                        <div className="nav3">
                            <NavLink className='nav_a nav_a2' to="">SIGN IN</NavLink>
                            <div className='nav_a nav_a2' to=""><input id='search_img' type="text"/><img id='search_img1' src={ss2} alt="image"/></div>
                            <NavLink className='nav_a nav_a2 cart_nav' to=""><img src={ss1} alt="image"/></NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    )
}
export default Nav1;