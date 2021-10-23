import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onClick,id}) {
   return (
        <>
            
                <img className={s.ImageGalleryItemImage}
                  id={id}
                    src={webformatURL}
                    data-source={largeImageURL}
                    alt={tags}
                    onClick={onClick}
                
                />
           
        </>
    )
}

export default ImageGalleryItem;
