import React, { useEffect, useState } from 'react';

const TopHeadlines = () => {

    const[articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=34d22f9d2ede41a39e34e08c6a4d219f")
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>News Headlines: {articles.length}</h1>
        </div>
    );
};

export default TopHeadlines;