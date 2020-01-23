import React from 'react'
import './PhotoPreview.css'

export default function PhotoPreview(props) {
    return (
        <div className="photopreview">
            <img onClick={()=>props.showPhotoFunc(true,props.index)} src={props.url} alt=""/>
        </div>       
    )
}