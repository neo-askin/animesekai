import React from 'react'

const AnimeCard = ({anime}) => {
  return (
    <article className="anime-card">
        <a href="">
            <figure>
                <img src={anime.image_url} alt="anime image"/>
            </figure>
            <h3>{ anime.title }</h3>

        </a>

    </article>
  )
}

export default AnimeCard
