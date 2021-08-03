import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import './App.css';
import images from './image-data';


class App extends Component {
  state = { 
    keyword: 'All Creatures'
   };
   pickChange = (event)=> {
     this.setState({ keyword: event.target.value });
   }
   render() { 
    const filteredCreatures = images.filter(
      (image)=> image.keyword === this.state.keyword || this.state.keyword === 'All Creatures' 
    );
    const keywords = ['pick one', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];
    const horns = [1,2,3,100]
    return ( 
      <div className="App">
        <h1>--HORNED CREATURES--</h1>
        <select onChange={this.pickChange}>
          {keywords.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
          }
          <select onChange={this.pickChange}></select>
          {horns.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
          }
        </select>
          
        <ImageList
        creaturesOnPage={filteredCreatures}
        />
      </div>
     );
  }
}
 
export default App;