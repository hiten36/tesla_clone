import React from 'react';

function Ist(props) {
    return (
        <div className="m36_aside_text">
            <div>
                <h2>{props.head1}</h2>
                <p>{props.desc1}</p>
            </div>
            <div>
                <h2>{props.head2}</h2>
                <p>{props.desc2}</p>
            </div>
            <div>
                <h2>{props.head3}</h2>
                <p>{props.desc3}</p>
            </div>
        </div>
    )
}
export default Ist;