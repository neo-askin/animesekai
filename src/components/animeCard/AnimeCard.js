import React from 'react';
import './animeCard.css';

const AnimeCard = ({anime}) => {
  return (
    <div className="anime-card-container">
        <a className="anime-card" href="">
            <div>
                <img src={anime.image_url} alt="anime image"/>
            </div>
           

        </a>

        <div className="anime-title-container"><h3 className="anime-title">{ anime.title }</h3></div>

    </div>
  )
}

export default AnimeCard
