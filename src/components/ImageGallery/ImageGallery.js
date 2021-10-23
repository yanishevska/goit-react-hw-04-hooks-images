import { useState,useEffect } from "react";
import s from './ImageGallery.module.css';
import {fetchPictures} from '../../services/Pixabay'
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import LoadSpinner from "../Loader";

function ImageGallery({ queryName, handleBigImg }) {
  const [images, setImages] = useState(null);
  const [status, setStatus] = useState('idle');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {

    setCurrentPage(1);
  }, [queryName]);

  useEffect(() => {
    if (!queryName) {
      return;
    }
    setStatus('pending');

    setTimeout(() => {
      fetchPictures(queryName, currentPage)
        .then(images => {
          if (currentPage === 1) {
            setImages(images);
          } else {
              setImages((prev) => [...prev, ...images]);
          }
            setStatus('resolved');
            scrollSmooth();
          } )
        .catch(error => {
          setStatus('rejected')
        })
    }, 1000)
  },[currentPage,queryName])

    
    const scrollSmooth = () => {
      return window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      })
    }

  const handleLoadMore = () => {
      setCurrentPage((currentPage) => currentPage + 1);
    
  }
     
    const handleClick = (e) => {
      if (e.target.nodeName === "IMG") {
        const largeImg = e.target.dataset.source;
        handleBigImg(largeImg);
      }
    }
    
    if (status === 'idle') {
      return <h1 className={s.title}>Input name image</h1>
    }
    if (status === 'pending') {
      return <div><LoadSpinner /></div>
    }
   
    if (status === 'rejected') {
      return <div className={s.title}>Oops</div>
    }
   
    if (status === 'resolved') {
      if (images.length === 0) {
      
        return (
          <h2 className={s.title}> Don't have images with name <span className={s.errorSpan}> {queryName}</span>! Input another name</h2>
        )
      }
    }
    return (
      <div>
        <ul className={s.ImageGallery}>
          {images.length > 0 &&
            images.map(({ webformatURL, largeImageURL, tags, id }) => (
              <li className={s.ImageGalleryItem} key={id}  >
                <ImageGalleryItem
                  key={{ id }}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                  onClick={handleClick}
                />
              </li>
            ))
          }
        </ul>
        {images.length > 11 && <Button onClick={handleLoadMore} />}
      </div>
    )
}
export default ImageGallery;
