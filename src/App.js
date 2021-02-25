import React, { Component } from 'react';
import './App.css';

import image1 from './assets/1cloudimage.png';
import image2 from './assets/2cloudimage.png';
import image3 from './assets/3cloudimage.png';
import leftImage from './assets/left-side-images.png';
import rightImage from './assets/right-side-images.png';

import CreateComponent from './components/CreateComponent';
import JoinComponent from './components/JoinComponent';
import { ViewTypes } from './utils/ViewsType';

export default class App extends Component {

    constructor(){
      super();
      this.state = {
        currentView: ViewTypes.CREATE
      }
      this.changeComponent = this.changeComponent.bind(this);
    }

    changeComponent(name){
      this.setState({currentView: name});
    }

    render(){
      let { currentView } = this.state;
      return (  
        <main className="app">
            <img src={image1} alt="header" className="header-image header-image--size one"/>
            <img src={image2} alt="header" className="header-image header-image--size two"/>
            <img src={image3} alt="header" className="header-image header-image--size three"/>
            <div className="left">
                <img src={leftImage} className="left-image" alt="left"/>
            </div>
            <div className="right">
              <img src={rightImage} className="right-image" alt="right"/>
            </div>
          { currentView === ViewTypes.CREATE && <CreateComponent change = {this.changeComponent}/> }
          { currentView === ViewTypes.JOIN && <JoinComponent  change = {this.changeComponent}/> }
        </main>
    )
  }
}

