import React from 'react'
import './PhotoView.css'
import { startPhotos } from './../../startPhotos'

export default function PhotoView(props) {
    return (
        <>
            <div className="overlay" onClick={()=>props.showPhotoFunc(false)} />           
            <div className="photoview">
                <img src={startPhotos[props.index].url} alt=""/>
                <div className="prev" onClick={()=>props.showPhotoFunc(true,props.index-1)}>&larr;</div>
                <div className="next" onClick={()=>props.showPhotoFunc(true,props.index+1)}>&rarr;</div>
            </div>
            
        </>
    )
}