import React from 'react';
import Bottom_one_box from './Bottom_one_box';

function Bottom_one(props)
{
    return(
        <>
            <img src={props.imgsrc} alt="image"/>
            <div className="sp17_inner">
                <h1>{props.head}</h1>
                <div className="sp17_box1">
                    <Bottom_one_box btn_text={props.btn_text} btn_text22={props.btn_text22} btn_id22={props.btn_id22} btn_cn22={props.btn_cn22} b1={props.b1} p1={props.p1} b2={props.b2} p2={props.p2} b3={props.b3} p3={props.p3} btn_id={props.btn_id1} btn_cn={props.btn_cn1} b4={props.b4} p4={props.p4} b5={props.b5} p5={props.p5} b6={props.b6} p6={props.p6}/>
                    <Bottom_one_box btn_text22={props.btn_text23} btn_id22={props.btn_id23} btn_cn22={props.btn_cn23} btn_text={props.btn_text1} btn_cn={props.btn_cn2} b1={props.b11} p1={props.p11} b2={props.b21} p2={props.p21} b3={props.b31} p3={props.p31} b4={props.b41} p4={props.p41} b5={props.b51} p5={props.p51} b6={props.b61} p6={props.p61} btn_id={props.btn_id2}/>
                </div>
            </div>
        </>
    )
}
export default Bottom_one;