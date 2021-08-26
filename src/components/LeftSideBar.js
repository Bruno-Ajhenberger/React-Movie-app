import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import CustomCheckbox from './CustomCheckbox'

const LeftSideBar = ({onClose, categories, categorySelect}) => {
   
    return (
        <div className='left_side_bar'>
            <button className='close_left_btn' onClick={onClose}>
                <AiOutlineArrowLeft className='arrow_left'/>
            </button>
            <p>Some placeholder text</p>
            <div>
                {categories.map((category,index) => (<CustomCheckbox key={index} category={category.category} isSelected={category.selected} categorySelect={categorySelect} />))}          
            </div>
        </div>
    )
}

export default LeftSideBar

