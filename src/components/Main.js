/* eslint-disable eqeqeq */
import React from 'react'
import Item from './MovieItem'
import Header from './Header'
import LeftSideBar from './LeftSideBar'
import {useState} from 'react'
import Description from './Description'
import HorizontalScroll from 'react-scroll-horizontal'
import useFetchData from '../Hooks/useFetchData'



const Main = () => {

    const [showDescriptionBar, setDescriptionBar] = useState(false);
    const [categories, setCategories] = useState([{category: 'Drama', selected: true}, {category: 'Crime', selected: true},
    {category: 'Supernatural', selected: true},{category: 'Thriller', selected: true},{category: 'Mystery', selected: true},
    {category: 'Fantasy', selected: true},{category: 'Horror', selected: true},{category: 'Action', selected: true},
    {category: 'Romance', selected: true},{category: 'Anime', selected: true},{category: 'Comedy', selected: true},
    {category: 'History', selected: true},{category: 'Adventure', selected: true},{category: 'Science-Fiction', selected: true}])
    const [item , setItem] = useState({})
    const [showSideBar, setShowSideBar] = useState(false);
    const [inputText , setInputText] = useState('')
    const movies = useFetchData('https://api.tvmaze.com/shows');

    const itemClicked = (id) => {
       setItem(movies.find( movie => movie.id == id))
        setDescriptionBar(true);
        console.log(id)
    }
    const closeDescription = () => {
        setDescriptionBar(false);
    }
    const menuBtnClicked = () =>{
       setShowSideBar(!showSideBar);
    }
    const closeSideBar = () => {
       setShowSideBar(false)
    } 
    const searchBtnClicked = (query) => {
      setInputText(query)
    }
    const categorySelect = (categoryS) =>{
       setCategories(categories.map((category) => category.category == categoryS? {...category, selected : !category.selected} : category));
    }

   


    return (
       
        <div className="main"> 
        <Header menuBtnClicked={menuBtnClicked} searchBtnClicked={searchBtnClicked}/>
         { inputText == '' ? categories.map((category, index) => ( category.selected &&
            <div className='zero_margin'>
               <h3 className='category'>{category.category}</h3>
               <HorizontalScroll className='horizontal_scroll'>
                  {movies.length > 20 &&  movies.map((movie,index) => movie.genres.includes(category.category) ? 
                     <Item key={index} itemClicked={itemClicked} imageUrl={movie.image.medium} movieName={movie.name} id={movie.id} /> : null) }         
               </HorizontalScroll>  
            </div>   
         )) : <div className='row'> {movies.length > 20 &&  movies.map((movie,index) => movie.name.toLowerCase().includes(inputText)? 
                     <Item key={index} itemClicked={itemClicked} imageUrl={movie.image.medium} movieName={movie.name} id={movie.id} /> : null) }
                     </div>}
                {showDescriptionBar ? <Description closeDescriptionClicked={closeDescription} movieItem={item}/> : null}      
                {showSideBar && <LeftSideBar onClose={closeSideBar} categories={categories} categorySelect={categorySelect}/>}     
        </div>

    )
}

export default Main

