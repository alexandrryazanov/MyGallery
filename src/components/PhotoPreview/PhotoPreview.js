import React, {useState} from 'react'
import Menu from "./Menu/Menu.js"
import Popup from './../Popup/Popup';

import './PhotoPreview.css'

export default function PhotoPreview(props) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);

    const buttons = [
        {caption: 'No'},
        {caption: 'Yes', style: {backgroundColor:'crimson'}, handler:popupYesHandler}
    ];

    function popupYesHandler() {
        const newPhotoArray = props.photoArray.concat([]);
        newPhotoArray.splice(props.index,1);
        props.setPhotoArray(newPhotoArray);
    }

    return (
        <>
        <div className="photopreview"
            onMouseEnter={()=>setMenuVisible(true)}
            onMouseLeave={()=>setMenuVisible(false)}
            onClick={()=>setMenuVisible(false)}
        >
            <img onClick={()=>props.showPhotoFunc(true,props.photoArray,props.index)} src={props.url} alt=""/>
            {menuVisible && <Menu popupVisible={setPopupVisible}/>}
            {popupVisible && <Popup title='Delete image?' buttons={buttons} visible={setPopupVisible}/>}
        </div> 
        </>    
    )
}