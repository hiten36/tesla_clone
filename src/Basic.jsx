import React from 'react';
import Nav from './Nav';

function Basic(props)
{
    return(
        <>
            <div id={props.ids} className="bg">
                <div className={props.cn}>
                    <h1>{props.model}</h1>
                    {props.flag ? <p>Order Online for <span className='underline'>Touchless Delivery</span></p> : <p>{props.message1}</p>}
                    
                </div>
                <div className="bottombg">
                    {props.flag1 ? <button className="order_btn_1">{props.message2}</button> : <><button className="order_btn_1">{props.message2}</button>
                    <button className="order_btn_2">{props.message3}</button></>}
                </div>
            </div>
        </>
    )
}
export default Basic;