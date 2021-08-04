import React, { Component } from 'react';
import './App.css';
import ImageList from './ImageList.js';
import Dropdown from './Dropdown.js';
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

  const keywords = ['All Creatures', 'narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'chameleon', 'lizard', 'dragon'];
  const hornsOptions = ['All Creatures',1,2,3,100];

  const filteredCreatures = images.filter(
      (image)=> (image.keyword === this.state.keyword || this.state.keyword === 'All Creatures' ) && ( Number(image.horns) === Number(this.state.horns) || this.state.horns === 'All Creatures' )
    );
   
    return ( 
      <div className="App">
        <h1>--HORNED CREATURES--</h1>
        <Dropdown
        label='KEYWORDS'
        options={keywords}
        changeEvent={this.pickKeywords}
        />
        <Dropdown
        label='HORNS'
        options ={hornsOptions}
        changeEvent={this.pickHorns} 
        />
        <ImageList
        creaturesOnPage={filteredCreatures}
        />
      </div>
     );
  }
}
 
export default App;