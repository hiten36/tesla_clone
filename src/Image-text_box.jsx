import React from 'react';

function Itb(props) {
    return (
        <>
            <div className="sbox">
                <img src={props.imgsrc1} alt="" />
                <div className="sbox_inner">
                    <div>
                        <b>{props.head1}</b>
                        <p>{props.title1}</p>
                    </div>
                </div>
            </div>
            <div className="sbox">
                <div className="sbox_inner sbox_inner1">
                    <div className="sbox_margin">
                        <b>{props.head2}</b>
                        <p>{props.title2}</p>
                    </div>
                </div>
                <img src={props.imgsrc2} alt="" />
            </div>
            <div className="sbox">
                <img src={props.imgsrc3} alt="" />
                <div className="sbox_inner">
                    <div>
                        <b>{props.head3}</b>
                        <p>{props.title3}</p>
                    </div>
                </div>
            </div>
            {props.imgsrc4==='' ? null :
            <div className="sbox">
                <div className="sbox_inner sbox_inner1">
                    <div className="sbox_margin">
                        <b>{props.head4}</b>
                        <p>{props.title4}</p>
                    </div>
                </div>
                <img src={props.imgsrc4} alt="" />
            </div>
            }

        </>
    )
}
export default Itb;
