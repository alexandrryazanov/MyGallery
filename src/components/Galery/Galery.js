import React from 'react'
import './Galery.css'

import PhotoPreview from './../PhotoPreview/PhotoPreview.js'

export default function Galery(props) {
    return (
        <div className="galery">
            <ul>
                {props.photoArray.map((value,index)=><li key={index}><PhotoPreview showPhotoFunc={props.showPhotoFunc} index={index} url={value.url}/></li>)}               
            </ul>
        </div>
    )
}