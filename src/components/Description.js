import React from 'react'

const Description = ({closeDescriptionClicked, movieItem}) => {
    return (
        <div className='description'>  
            <h4>{movieItem.name.toUpperCase()}</h4>
            <h5 className='text_green'>{movieItem.genres.map((genre) => (genre + " "))}</h5>
            <div className='description_box'>
            <img className='image2' src={movieItem.image.original} alt="error"  ></img>
            <div>
                    <h6>Language:</h6>
                    <h5 className='text_green'>{movieItem.language}</h5>
                    <h6>Release date:</h6>
                    <h5 className='text_green'>{movieItem.premiered}</h5>
                    <h6>Runtime:</h6>
                    <h5 className='text_green'>{movieItem.runtime} min</h5>
                    <h6>Rating:</h6>
                    <h5 className='text_green'>{movieItem.rating.average}/10</h5>                   
            </div>
            </div>
            <p className='text_grey'>{movieItem.summary.replaceAll('<p>','').replaceAll('</p>','').replaceAll('<b>','').replaceAll('</b>','')}</p>
                <button onClick={closeDescriptionClicked}>Close</button>
                <button>Add to Watchlist</button>
        </div>
       
    )
}

export default Description
