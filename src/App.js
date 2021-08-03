import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import './App.css';
import images from './image-data';


class App extends Component {
  state = { 
    keyword: 'All Creatures',
    horns: 'All Creatures'
   };
   pickKeywords = (event)=> {
     this.setState({ keyword: event.target.value });
   }
   pickHorns = (event)=> {
    this.setState({ horns: event.target.value });
  }
   render() { 
    const filteredCreatures = images.filter(
      (image)=> image.keyword === this.state.keyword || this.state.keyword === 'All Creatures' 
    );
    const filteredHorns = images.filter(
      (horns)=> horns.keyword === this.state.horns || this.state.horns === 'All Creatures' 
    );
    console.log(filteredHorns)
    const keywords = ['pick one', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];
    const horns = ['pick one',1,2,3,100]
    return ( 
      <div className="App">
        <h1>--HORNED CREATURES--</h1>
        <p>KEYWORDS</p>
        <select onChange={this.pickKeywords}>
          {keywords.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
          }
          </select>
          <p>HORNS</p>
          <select onChange={this.pickHorns}>
          {horns.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
          }
        </select>
          
        <ImageList
        creaturesOnPage={filteredCreatures}
        hornsOnPage={filteredHorns}
        />
      </div>
     );
  }
}
 
export default App;