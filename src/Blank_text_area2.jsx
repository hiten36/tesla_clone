import React from 'react';

function Bta2(props) {
    return (
        <div className="sp14text">
            <h4>{props.head1}</h4>
            <h1>{props.head2}</h1>
            <p>{props.para}</p>
            {props.flag=='true' ? <div className="m32_box">
                <h2>5-Star Overall NHTSA Rating</h2>
                <div className='m32_box_inner'>
                    <div className='m32_box_inner1'>
                        <b>Driver</b>
                        <div className="star">
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                        </div>
                    </div>
                    <div className='m32_box_inner1'>
                        <b>Passenger</b>
                        <div className="star">
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                        </div>
                    </div>
                    <div className='m32_box_inner1'>
                        <b>Front Seat</b>
                        <div className="star">
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                        </div>
                    </div>
                    <div className='m32_box_inner1'>
                        <b>Rear Seat</b>
                        <div className="star">
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                        </div>
                    </div>
                    <div className='m32_box_inner1'>
                        <b>Rollover</b>
                        <div className="star">
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                            <span>&#11089;</span>
                        </div>
                    </div>
                </div>
            </div>  : <div className="m32_imgbox">
                <img src={props.imgsrc} alt="image"/>
            </div>}
            <div className='m32_btns'>
                <button className="order_now order_now1">ORDER NOW</button>
                <p style={{ position: 'absolute', bottom: '7.3vh', right: '10vmin' }}>Learn More</p>
                <button className="order_now order_now1 plus_btn">+</button>
            </div>
        </div>
    )
}
export default Bta2;