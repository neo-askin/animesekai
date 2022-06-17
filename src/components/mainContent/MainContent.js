import React from 'react';
import './mainContent.css';
import AnimeCard from '../animeCard/AnimeCard'

const MainContent = (props) => {
  return (
    <main>
        <div className="main-head">
            <form className="search-box"
                  onSubmit={props.handleSearch}>

                <input
                type="search"
                placeholder="rechercher un anime"
                value={props.search}
                onChange={e => props.SetSearch(
                    e.target.value )}
                
                />

            </form>

        </div>
        <div className="anime-list">
           {props.animeList.map(anime => (
               <AnimeCard
                anime={anime}
                key={anime.mal_id}
               
               />
           ))} 

        </div>

    </main>
  )
}

export default MainContent
