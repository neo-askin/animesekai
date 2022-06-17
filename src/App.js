import { useState, useEffect } from 'react'
import Header from "./components/header/Header";
import './assets/css/main.css';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';



function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  }

  const handleSearch = e => {
    e.preventDefault();
    
    FetchAnime(search)
    

  }

  const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res => res.json());
    console.log(temp.results);

    SetAnimeList(temp.results);

  }

  useEffect(() => {
    getTopAnime();

  }, [])


  return (
    <div className="App">
      <Header/>

      <div className="content-wrap">
        <Sidebar
          topAnime={topAnime}/>

        <MainContent

        handleSearch={handleSearch}
        search={search}
        SetSearch={SetSearch}
        animeList={animeList}  />

      </div>
    </div>
  );
}

export default App;
