import React, { Component } from 'react';

class Dropdown extends Component {
    render() { 
        const { options, changeEvent } = this.props;
        return (  
        <div className='dropdown-container'>
            <select onChange={changeEvent}>
            {options.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))
            }
            </select>
        
        </div>
        );
    }
}
 
export default Dropdown;