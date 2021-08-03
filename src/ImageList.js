import React, { Component } from 'react';
import images from './image-data.js'
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    state = {  }
    render() { 
        const image = images;
        return ( 
            image.map((item, index) =>
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