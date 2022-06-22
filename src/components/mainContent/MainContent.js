import React from 'react';
import './mainContent.css';
import AnimeCard from '../animeCard/AnimeCard'

const MainContent = (props) => {
  return (
    <main>
        <div className="main-head">
            <form className="search-box-container"
                  onSubmit={props.handleSearch}>

                <input className="search-box"
                type="search"
                placeholder="rechercher un anime"
                value={props.search}
                onChange={e => props.SetSearch(
                    e.target.value )
            
                  }
                
                />

            </form>

        </div>
        <ul className="anime-list">
          <li><div>
           {props.animeList.map(anime => (
               <AnimeCard
                anime={anime}
                key={anime.mal_id}
               
               />
           ))} 

        </div></li>
        </ul>
      

    </main>
  )
}

export default MainContent
