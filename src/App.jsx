import React, { Component } from 'react'
import './App.css';
import StoreProvider from './Store/StoreProvider';
import HeaderSui from './layouts/HeaderSui';
import ModalImageViewer from './components/Modal';
import ScrollTopArrow from './components/ScrollTopArrow'
import { BrowserRouter as Router } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     }
  }

  render() { 

    return (
      <>
      <StoreProvider>
        <Router>
          <HeaderSui />
          <ModalImageViewer />
          <ScrollTopArrow />
        </Router>
      </StoreProvider>
            </>
      );
  };
}
 
export default App;