import axios from 'axios';
import './App.css';
import NavInshorts from './components/NavInshorts';
import { apiKey } from './data/constants';
import { useEffect, useState } from 'react';

function App() {
  const [category, setCategory] = useState("general");
  const [newsResults, setNewsResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)

      setNewsResults(news.data.articles);
      setTotalResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(newsResults);
  console.log(totalResults);

  useEffect(() => {
    newsApi();
  }, [newsResults, category])

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
    </div>
  );
}

export default App;