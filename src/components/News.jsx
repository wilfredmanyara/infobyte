import React, { useEffect, useState } from 'react'
import Weather from './Weather'
import Calendar from './Calendar'
import './News.css'
import userImg from '../assets/images/user.jpg'
import noImg from '../assets/images/no-img.png'
import axios from 'axios'

const News = () => {
  const [headline, setHeadline] = useState(null)
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      const url = `https://gnews.io/api/v4/top-headlines?category=sports&lang=en&apikey=${apiKey}`;
      
      const response = await axios.get(url)
      const fetchedNews = response.data.articles;

      // Add fallback image if article doesn't have an image
      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noImg;
        }
      });

      setHeadline(fetchedNews[0])
      setNews(fetchedNews.slice(1, 7))

      console.log(fetchedNews[0]);
    }
    fetchNews()
  }, [])
  
  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">Infobyte</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search News..." />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg} alt="User Image" />
            <p>Wilfred's Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              <a href="" className="nav-link">
                General
              </a>
              <a href="" className="nav-link">
                World
              </a>
              <a href="" className="nav-link">
                Business
              </a>
              <a href="" className="nav-link">
                Technology
              </a>
              <a href="" className="nav-link">
                Entertainment
              </a>
              <a href="" className="nav-link">
                Sports
              </a>
              <a href="" className="nav-link">
                Science
              </a>
              <a href="" className="nav-link">
                Health
              </a>
              <a href="" className="nav-link">
                Nation
              </a>
              <a href="" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">
                {headline.title}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h2>
            </div>
          )}
          <div className="news-grid">
            {news.map((article, index) => (
              <div key={index} className="news-grid-item">
                <img src={article.image || noImg} alt={article.title} />
                <h3>
                  {article.title}
                  <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="my-blogs">My Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
}

export default News