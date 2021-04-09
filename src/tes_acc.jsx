import React from 'react';
import { NavLink } from 'react-router-dom';
import Use_script from './Use_script';

function Tes_acc()
{
    Use_script('script/tes_acc.js');
    return(
        <div className="contact_box">
            <h1>Sign In</h1>
            <div className="contact_box1">
                <label htmlFor="email">Email Address</label>
                <input type="text" id='email' name='email'/>
            </div>
            <div className="contact_box1">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password'/>
            </div>
            <button className="signin_btn">SIGN IN</button>
            <div className="contact_box3">
                <NavLink to=''>Forgot email?</NavLink> | <NavLink to=''>Forgot password?</NavLink>
            </div>
            <div className="contact_box4">
                <hr/>
                <b>OR</b>
            </div>
            <button className="create_now_btn">CREATE ACCOUNT</button>
        </div>
    )
}
export default Tes_acc;