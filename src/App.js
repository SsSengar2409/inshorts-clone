import axios from 'axios';
import './App.css';
import NavInshorts from './components/NavInshorts';
import { apiKey } from './data/constants';
import { useEffect, useState } from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from './components/Footer/Footer';

function App() {
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loadMore, setLoadMore] = useState(10);


  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://${proxyUrl}newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`)

      setNewsResults(news.data.articles);
      setTotalResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [category, loadMore])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent loadMore={loadMore} setLoadMore={setLoadMore} newsResults={newsResults} totalResults={totalResults} />
      <Footer />
    </div>
  );
}

export default App;