import React, { useState } from 'react';
import './App.css';
import Galery from './components/Galery/Galery'
import PhotoView from './components/PhotoView/PhotoView'

import { photosFromAlbum, albums } from './startPhotos.js'

function App() {
  const [photoView, photoViewShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [album, setAlbum] = useState('');
  const [photoArray, setPhotoArray] = useState(photosFromAlbum(''));

  function showAlbum(value) {
    setAlbum(value);
    setPhotoArray(photosFromAlbum(value,photoArray));
  }

  return (
    <div className="App">
      <header>My Gallery</header>
      <div className="main">
        <nav>
          {album==='' ? 
            <span className="title">Albums</span>
          :
            <>
            <span className="arrow" onClick={()=>setAlbum('')}>&larr;</span>
            <span className="title">{album}</span>
            </>
          }
        </nav>
        <Galery 
          photoArray={photoArray} 
          setPhotoArray={setPhotoArray} 
          albumsArray={albums} 
          album={album} 
          setAlbumFunc={showAlbum} 
          showPhotoFunc={showPhoto}
        />
        {photoView && 
          <PhotoView 
            photoArray={photoArray} 
            index={index} 
            showPhotoFunc={showPhoto}
          />
        }
      </div> 
    </div>
  );

  function showPhoto(visible,photoArray,_index) {
    if(!visible) return photoViewShow(visible);

    if(_index===photoArray.length) _index=0;
    if(_index===-1) _index=photoArray.length-1;
    setIndex(_index);
    photoViewShow(visible);
  }
}

export default App;
