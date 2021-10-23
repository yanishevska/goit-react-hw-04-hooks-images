import { Component } from "react";
import s from './ImageGallery.module.css';
import {fetchPictures} from '../../services/Pixabay'
import ImageGalleryItem from "../ImageGalleryItem";
import Button from "../Button";
import LoadSpinner from "../Loader";

class ImageGallery extends Component {

  state = {
    images: null,
    error: null,
    status: 'idle',
    currentPage: 1,
    loading:false,
   
}
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.queryName;
    const nextName = this.props.queryName;
    const { currentPage} = this.state;
  if (prevName !== nextName) {
    this.setState({ status: 'pending' });
    
    setTimeout(() => {
      fetchPictures(nextName, 1)
      .then(images => this.setState({ images: images, currentPage: 1, status: 'resolved' }))
      .catch(error => this.setState({ error, status: 'rejected' }))
    },1000)
    }


    if(prevState.currentPage !== currentPage && currentPage !== 1){
       fetchPictures(this.props.queryName, currentPage)
          .then(images => {
            this.setState(prevState => ({
              images: [...prevState.images, ...images],
              status:'resolved',  
            }))
     
            if (prevState.images !== images) {
              this.scrollSmooth();  
            }
            })
            .catch(error => {
              this.setState({status:'rejected'})
            })
    }
  }
  scrollSmooth = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  handleLoadMore = () => {
    
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }))
  }
     
  handleClick = (e) => {
    if (e.target.nodeName === "IMG") {
      const largeImg = e.target.dataset.source;
      this.props.handleBigImg(largeImg);
    }
  }
  
  render() {
    const {images, status} = this.state;
    
    if (status === 'idle') {
        return <h1 className={s.title}>Input name image</h1>
    }
    if (status === 'pending') {
       return <div><LoadSpinner/></div> 
    }
   
    if (status === 'rejected') {
       return <div className={s.title}>Oops</div>
    }
    
    if (status === 'resolved') {
      if (images.length === 0)
      {
        return (
       <h2 className={s.title}> Don't have images with name <span className={s.errorSpan}> {this.props.queryName}</span>! Input another name</h2>
      )
        
      } 
      return (
        <div>
          <ul className={s.ImageGallery}>
            {images.length > 0 &&
              images.map(({ webformatURL, largeImageURL, tags,id}) => (
                <li className={s.ImageGalleryItem} key={id}  >
                <ImageGalleryItem
                  key={{id}}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  tags={tags}
                  onClick={this.handleClick}
                />                
            </li>
              ))
            }
          </ul>
          {images.length > 11 && <Button onClick={this.handleLoadMore} />}      
        </div>
      )
    }
  }
}

export default ImageGallery;