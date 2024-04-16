import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import SearchBar from './SearchBar';
import LoadingBar from './LoadingBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchNews('latest');
    }, []); 

    const fetchNews = (term) => {
        setIsLoading(true);
        const apiKey = "b9f2db9b3f2f4578b91bae609e09d7ca";
        const url = `https://newsapi.org/v2/top-headlines?q=${term}&country=us&apiKey=${apiKey}`;

        axios.get(url)
            .then(response => {
                setArticles(response.data.articles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching news:", error);
                setIsLoading(false);
            });
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        fetchNews(searchTerm);
    };

    return (
        <div className="container mt-3">
            <SearchBar onChange={handleSearchChange} onSearch={handleSearch} />
            {isLoading ? (
                <LoadingBar />
            ) : (
                <div className="row">
                    {articles.map((article, index) => (
                        <div key={index} className="col-sm-12 col-md-4 mb-4">
                            <NewsCard article={article} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default NewsList;