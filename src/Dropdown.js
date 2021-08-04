import React, { Component } from 'react';

class Dropdown extends Component {
    render() { 
        const { options, changeEvent, label } = this.props;
        return ( 
            <div className='dropdown-container'>
            <label>{ label }</label> 
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