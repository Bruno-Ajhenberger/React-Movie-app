/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuBtnClicked, searchBtnClicked}) => {

    const [value, setValue] = useState('');


    return (
        <div className ="header">
            <button className='menu_btn' onClick={menuBtnClicked}>
                <AiOutlineMenu className='menu_icon'/>
                Menu
            </button>
            <div className='input_field'>
                <input  onChange={(e) => {setValue(e.target.value); searchBtnClicked(e.target.value)}}></input>
            </div>
            <div></div>
            
        </div>
    )
}

export default Header
