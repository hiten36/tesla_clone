import React from 'react';

function Sb1(props){
    return(
        <div>
            <img src={props.imgsrc} alt=""/>
            {props.flag=='true' ? <h2 style={{color:'white'}}>{props.head}</h2> : <h2>{props.head}</h2>}
            
        </div>
    )
}
export default Sb1;