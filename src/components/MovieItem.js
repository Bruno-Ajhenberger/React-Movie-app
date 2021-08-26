import { useState } from "react";

const MovieItem = ({itemClicked,imageUrl,movieName, id}) => {
   
    return (
        <div className='movie_item'  onClick={() => itemClicked(id)}>
            <img className='image' src={imageUrl} alt="erroer"></img>
            <p>{movieName}</p>
        </div>
    )
}

export default MovieItem
