"use client";
import React, { useState, useEffect } from "react";
import { NewsArticle } from "@/types/types";
import { FiRefreshCw } from "react-icons/fi";

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=forest-fire&top-headlines?country=*&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.articles && Array.isArray(data.articles)) {
        setNews(data.articles);
      } else {
        setNews([]);
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Failed to fetch news. Please try again later.");
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) overflow-hidden flex justify-center items-center">
        <div className="text-xl text-(--cs-yellow)">Loading news...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) overflow-hidden flex flex-col justify-center items-center p-4">
        <div className="text-xl text-red-400 mb-4">{error}</div>
        <button
          onClick={fetchNews}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] text-(--cs-darker-blue) font-semibold rounded-lg hover:opacity-90 transition-all"
        >
          <FiRefreshCw className="text-lg" />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-(--cs-dark-blue) to-(--cs-darker-blue) overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-(--cs-yellow) to-transparent opacity-30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-(--cs-yellow) blur-[80px] opacity-10"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl pt-5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] mb-4">
            Latest News
          </h1>
          <p className="text-lg md:text-xl text-[#cbd5e1] max-w-3xl mx-auto">
            Stay updated with the latest headlines from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div 
              key={index} 
              className="bg-(--cs-darker-blue)/60 backdrop-blur-sm border border-(--cs-yellow)/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:border-(--cs-yellow)/50"
            >
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-white">{article.title}</h2>
                <p className="text-[#cbd5e1] mb-4">{article.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-(--cs-yellow)">
                    {article.source?.name}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--cs-yellow) hover:underline flex items-center gap-1"
                  >
                    Read more
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {news.length === 0 && !loading && (
          <div className="text-center py-8 text-[#cbd5e1]">
            No news articles found.
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={fetchNews}
            className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-(--cs-yellow) to-[#FFC300] text-(--cs-darker-blue) font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            <FiRefreshCw className="text-lg" />
            Refresh News
          </button>
        </div>
      </div>
    </div>
  );
}