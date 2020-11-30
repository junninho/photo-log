import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const response = await fetch('https://obscure-stream-03189.herokuapp.com/images')
      .then(r => r.json())
        .catch(e =>{
          console.error(e);
        });


      if (mounted) {
        setImages(response);
      }
    })()
    return () => {
      mounted = false;
    }
  },[])

  return (
    <div className="Gallery">
      <div><h1>Gallery</h1></div>
      {images.map(img => <img key={img.fileName} src={img.url} />)}
    </div>
  )
}

export default Gallery;