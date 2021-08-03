import React, { Component } from 'react';


class ImageItem extends Component {
    render() { 
        return ( 
            <ul>
                <li>keyword:{this.props.keyword}</li>
                <li>horns:{this.props.horns}</li>
                <li>description:{this.props.description}</li>
                <img
                    alt={this.props.title}
                    src={this.props.image}
                    width='100'
                />
            </ul>
         );
    }
}
 
export default ImageItem;