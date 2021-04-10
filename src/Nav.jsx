import React from 'react';
import { NavLink } from 'react-router-dom';
import p1 from '../src/images/logo/logo.png';
import p2 from '../src/images/logo/menu.svg';
import p3 from '../src/images/logo/close.svg';
import {nav_js} from './nav.js';

function Nav() {
    setTimeout(() => {
        nav_js();
    }, 1000);
    return (
        <>
            <nav id='main_nav' className="navbar">
                <ul>
                    <li className="list1">
                        <div className="nav1">
                            <NavLink className='tesla' to="/">
                                <img className='nav_a' src={p1} alt="logo" />
                            </NavLink>
                        </div>
                    </li>
                    <li className="list2">
                        <div className="nav2">
                            <NavLink className='nav_a' to="/modelS">MODEL S</NavLink>
                            <NavLink className='nav_a' to="model3">MODEL 3</NavLink>
                            <NavLink className='nav_a' to="modelX">MODEL X</NavLink>
                            <NavLink className='nav_a' to="modelY">MODEL Y</NavLink>
                            <NavLink className='nav_a' to="roof">SOLAR ROOF</NavLink>
                            <NavLink className='nav_a' to="panel">SOLAR PANELS</NavLink>
                        </div>
                    </li>
                    <li className="list3">
                        <div className="nav3">
                            <NavLink id='shop_a' className='nav_a' to="shop">SHOP</NavLink>
                            <NavLink className='nav_a' to="account">TESLA ACCOUNT</NavLink>
                            <NavLink className='sb' id='menu_logo' to="#"><img className='nav_a' src={p2} alt="Menu" /></NavLink>
                        </div>
                    </li>
                </ul>
                <div className="sidebox">
                    <NavLink className='sb' id='close_logo' to="#"><img className='nav_a' src={p3} alt="Close" /></NavLink>
                    <div className="sideline">EXISTING INVENTORY</div>
                    <div className="sideline">USED INVENTORY</div>
                    <div className="sideline">TRADE-IN</div>
                    <div className="sideline">CYBERTRUCK</div>
                    <div className="sideline">ROADSTER</div>
                    <div className="sideline">SEMI</div>
                    <div className="sideline">CHARGING</div>
                    <div className="sideline">POWERWALL</div>
                    <div className="sideline">COMMERCIAL SOLAR</div>
                    <div className="sideline">TEST DRIVE</div>
                    <div className="sideline">FIND US</div>
                    <div className="sideline">SUPPRT</div>
                    <div className="sideline">UNITED STATES</div>
                </div>
            </nav>
        </>
    )
}
export default Nav;