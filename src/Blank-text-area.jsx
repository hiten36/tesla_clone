import React from 'react';

function Bta(props) {
    return (
        <div className="blank">
            <div className="blank1">
                <p>{props.head1}</p>
                <h1>{props.head2}</h1>
                {props.flag=='true' ? <><p style={{ position: 'absolute', bottom: '8.3vh', left: '34.5%' }}>Learn More</p><button style={{ position: 'absolute', bottom: '6.9vh', left: '39%' }} className="order_now order_now1 plus_btn">+</button></> : null}
                <button className="order_now">{props.btn_text}</button>
            </div>
            <div className="blank2">
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
export default Bta;