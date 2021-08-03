import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    state = {  }
    render() { 
        return ( 
            this.props.creaturesOnPage.map((item, index) =>
            <ImageItem
            key={index}
            keyword={item.keyword}
            description={item.description}
            horns={item.horns}
            title={item.title}
            image={item.url}
            />
            ) );
    }
}
 
export default ImageList;