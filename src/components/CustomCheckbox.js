import React from 'react'
import { useState } from 'react';

const CustomCheckbox = ({category, categorySelect, isSelected}) => {
    
    const [isChecked, setIsChecked] = useState(isSelected);
    
    return (
        <div className='side_item'>
            <p className={isChecked? 'text_grey' : 'text_dark_grey'}>{category}</p>
            <label className='switch'>
                <input type='checkbox' checked={isChecked? true : false} onChange={(e) => {setIsChecked(!isChecked); categorySelect(category);}}></input>
                <span className='slider'></span>
            </label>
        </div>
    )
}

export default CustomCheckbox
