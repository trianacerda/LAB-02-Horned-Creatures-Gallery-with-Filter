import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';


class App extends Component {
  state = { 
    keyword: 'All Creatures'
   }
  render() { 
    return ( 
      <div className="App">
        <ImageList/>
      </div>
     );
  }
}
 
export default App;