import React from 'react';

function Bta1(props) {
    return (
        <div className="sp14text">
            <h4>{props.head1}</h4>
            <h1>{props.head2}</h1>
            <p>{props.para}</p>
            {props.flag=='true' ? <><p style={{ position: 'absolute', bottom: '7.3vh', right: '10vmin' }}>Learn More</p><button className="order_now order_now1 plus_btn">+</button></> : null}
            <button className="order_now order_now1">{props.btn_text}</button>

        </div>
    )
}
export default Bta1;