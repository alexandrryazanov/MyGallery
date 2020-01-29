import React from 'react'
import './Galery.css'

import PhotoPreview from './../PhotoPreview/PhotoPreview.js'
import AlbumPreview from './../AlbumPreview/AlbumPreview.js'
import { photosFromAlbum } from './../../startPhotos'


export default function Galery(props) {
    return (
        <div className="galery">
            <ul>
                {ShowMode(props)}
            </ul>
        </div>
    )
}


function ShowMode(props) {
    //--показываем конкретный альбом
    if(props.album !=='') {
        return (
            props.photoArray.map((value,index)=>
                <li key={index}>
                    <PhotoPreview 
                        showPhotoFunc={props.showPhotoFunc} 
                        photoArray={props.photoArray} 
                        setPhotoArray={props.setPhotoArray}
                        index={index} 
                        url={value.url}
                    />
                </li>
            )
        )                     
    } else {
        //--показываем список альбомов
        return (
            props.albumsArray.map((value,index)=>
                <li 
                    key={index}
                    onClick={()=>{
                        props.setAlbumFunc(value.name);
                    }} 
                >
                    <AlbumPreview  
                        name={value.name + ' (' + getAlbumData(value.name).count + ')'} 
                        coverUrl={getAlbumData(value.name,props).coverUrl}
                    />
                </li>
            )
        )                         
    }
}

function getAlbumData(albumName) {
    var coverUrl='';
    var count=0;
    photosFromAlbum('').forEach(p_value=>
        p_value.albums.forEach(a_value=>{
            if(a_value===albumName) {coverUrl=p_value.url;count++;}
        })
    );

    if(coverUrl==='') coverUrl='http://s1.iconbird.com/ico/2013/3/637/w128h128139396832517.png'
    return {coverUrl, count};
}