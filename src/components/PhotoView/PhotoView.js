import React from 'react'
import './PhotoView.css'

export default function PhotoView(props) {
    return (
        <>
            <div className="overlay" onClick={()=>props.showPhotoFunc(false)} />           
            <div className="photoview">
                <img src={props.photoArray[props.index].url} alt=""/>
                <div className="nav prev" onClick={()=>props.showPhotoFunc(true,props.photoArray,props.index-1)}>&larr;</div>
                <div className="nav next" onClick={()=>props.showPhotoFunc(true,props.photoArray,props.index+1)}>&rarr;</div>
            </div>
            
        </>
    )
}