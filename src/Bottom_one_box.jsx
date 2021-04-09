import React from 'react';

function Bottom_one_box(props){
    return (
        <div className="sp17_box">
            <button id={props.btn_id} className={props.btn_cn}>{props.btn_text}</button>
            <button id={props.btn_id22} className={props.btn_cn22}>{props.btn_text22}</button>
            <div>
                <b>{props.b1}</b>
                <p>{props.p1}</p>
            </div>
            <div>
                <b>{props.b2}</b>
                <p>{props.p2}</p>
            </div>
            <div>
                <b>{props.b3}</b>
                <p>{props.p3}</p>
            </div>
            <div>
                <b>{props.b4}</b>
                <p>{props.p4}</p>
            </div>
            <div>
                <b>{props.b5}</b>
                <p>{props.p5}</p>
            </div>
            <div>
                <b>{props.b6}</b>
                <p>{props.p6}</p>
            </div>
        </div>
    )
}
export default Bottom_one_box;