import React from 'react'
import './AlbumPreview.css'

export default function AlbumPreview(props) {
    return (
        <div className="albumpreview">
            <div className="image"><img src={props.coverUrl}  alt=""/></div>
            <span>{props.name}</span>
        </div>       
    )
}