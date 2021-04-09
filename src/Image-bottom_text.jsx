import React from 'react';

function Ibt(props) {
    return (
        <div className={props.cn}>
            <div className="bottominnerbg">
                {props.flag=='true' ? <h2><img src={props.imgsrc1} /></h2> :
                <h2>{props.head1}</h2>}
                <p>{props.p1}</p>
            </div>
            <div className="bottominnerbg">
                <h2>{props.head2}</h2>
                <p>{props.p2}</p>
            </div>
            <div className="bottominnerbg">
            {props.flag=='true' ? <h2><img src={props.imgsrc2} /></h2> :
                <h2>{props.head3}</h2>}
                <p>{props.p3}</p>
            </div>
        </div>
    )
}
export default Ibt;