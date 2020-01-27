import React from 'react';
import "./Menu.css"

export default function Menu(props) {
    return (        
        <>
        <div className="menu">
            <span className="icon addtoalbum">+</span>
            <span className="icon delete" onClick={()=>props.popupVisible(true)}><img src={require('./../../../img/del.png')} alt=""/></span>
        </div>
        </>   
    )
}
