import React from 'react'
import './sidebar.css'

function Sidebar({ topAnime }){
  return (
       <><h3 className="section-title">Top Anime</h3>
    <div className="top-anime-container">

      {topAnime.map(anime => (
        <div className="top-anime">
          <img className="top-anime-image" src={anime.image_url} alt="top_anime_poster" />
         <h3 className="top-anime-links"><a href="#" target="_blank" key={anime.mal_id} rel="noreferrer">
            {anime.title}
          </a></h3>

        </div>

      ))}

    </div></>
        
  )
}

export default Sidebar
