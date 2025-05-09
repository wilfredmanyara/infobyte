import React, { useState } from 'react'
import News from './components/News'
import Blogs from './components/Blogs'

const App = () => {
  const [showNews, setShowNews] = useState(true)
  const[showBlogs, setShowBlogs] = useState(false)
  
  const handleShowBlogs = () => {
    setShowNews(false)
    setShowBlogs(true)
  }

  const handleBackToNews = () => {
    setShowNews(true)
    setShowBlogs(false)
  }

  return (
    <div className="container">
      <div className="infobyte-app">
      {showNews && <News onShowBlogs={handleShowBlogs} />}
      {showBlogs && <Blogs onBack={handleBackToNews} />}
      </div>
    </div>
  );
}

export default App