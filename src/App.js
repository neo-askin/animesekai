import { useState, useEffect } from 'react'
import Header from "./components/header/Header";
import './assets/css/main.css';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';
import Footer from './components/footer/Footer';



function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  const apiUrl = `https://api.jikan.moe/v3`;

  const getTopAnime = async () => {
    const temp = await fetch(apiUrl + `/top/anime/1/bypopularity`)
    .then(res => res.json());

    SetTopAnime(temp.top.slice(0, 5));
  }

  const handleSearch = e => {
    e.preventDefault();
    
    FetchAnime(search)
    

  }

  const FetchAnime = async (query) => {
    const temp = await fetch(apiUrl + `/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
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
      <Footer/>
    </div>
  );
}

export default App;
