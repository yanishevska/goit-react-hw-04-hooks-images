import {useState } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";

function App() {
  const [queryName,setQueryName] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [largeImg,setLargeImg] = useState('');
  
    
  const toggleModal = () => {
   setShowModal (!showModal)
  }

 const  handleFormSubmit = queryName => {
    setQueryName(queryName)
  }

  const handleBigImg = (data) => {
    setLargeImg( data );
  toggleModal();
  }


     return (
       <div>
         <Searchbar onSubmit={handleFormSubmit} />
        
         <ImageGallery queryName={queryName}  handleBigImg={handleBigImg} />
         
         {showModal &&
           (<Modal toggleModal={toggleModal} largeImgURL={largeImg}/>)}

         <ToastContainer autoClose={2000} />
      </div>
    );
  }


export default App;

