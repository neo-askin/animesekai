import React from 'react';
import './animeCard.css';

const AnimeCard = ({anime}) => {
  return (
    <article className="anime-card">
        <a href="">
            <figure>
                <img src={anime.image_url} alt="anime image"/>
            </figure>
            <div className="anime-title-container"><h3 className="anime-title">{ anime.title }</h3></div>

        </a>

    </article>
  )
}

export default AnimeCard
