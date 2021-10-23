import { Component } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './components/ImageGallery';
import Searchbar from "./components/Searchbar";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    queryName: '',
    page: 1,
    images: [],
    showModal: false,
    largeImg: "",
  }
    
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  handleFormSubmit = queryName => {
    this.setState({
      queryName,
    });
  }

  handleBigImg = (data) => {
    this.setState({ largeImg: data });
    this.toggleModal();
  }

 
  render() {
    const { showModal, queryName,largeImg } = this.state;

     return (
       <div>
         <Searchbar onSubmit={this.handleFormSubmit} />
        
         <ImageGallery queryName={queryName}  handleBigImg={ this.handleBigImg} />
         
         {showModal &&
           (<Modal toggleModal={this.toggleModal} largeImgURL={largeImg}/>)}

         <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;

