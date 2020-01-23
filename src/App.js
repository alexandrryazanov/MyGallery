import React, { useState } from 'react';
import './App.css';
import Galery from './components/Galery/Galery'
import PhotoView from './components/PhotoView/PhotoView'
import { startPhotos } from './startPhotos'

function App() {
  const [photoView, photoViewShow] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="App">
      <header onClick={()=>console.log('click')} className="App-header">
        My Galery
      </header>
      <div className="main">
        <Galery photoArray={startPhotos} showPhotoFunc={showPhoto}/>
      </div>

      {photoView && <PhotoView index={index} showPhotoFunc={showPhoto}/>}
    </div>
  );

  function showPhoto(visible,_index) {
    if(_index===startPhotos.length) _index=0;
    if(_index===-1) _index=startPhotos.length-1;
    setIndex(_index);
    photoViewShow(visible);
  }
}

export default App;
