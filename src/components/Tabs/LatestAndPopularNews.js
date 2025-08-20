"use client"
import React, { useState, useEffect } from "react";
import Pagination from "../Others/Pagination";
import { fetchTodayNews } from "@/lib/newsApi";

export default function LatestAndPopularNews() {
  const [latestNews, setLatestNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [activeTab, setActiveTab] = useState("latest");

  useEffect(() => {
    async function loadNews() {
      try {
        const data = await fetchTodayNews("news");
        setLatestNews(data);
        // Example: sort by popularity if available, else just use data
        setPopularNews([...data].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    loadNews();
  }, []);

  const renderNewsItems = (newsList) => (
    newsList.length === 0 ? (
      <div>No news found.</div>
    ) : (
      newsList.slice(0, 10).map((item, idx) => (
        <div className="col-lg-6 col-md-6" key={item.id || idx}>
          <div className="trending-news-item mb-30">
            <div className="trending-news-thumb">
              <img src={item.urlToImage || "/images/entertainment-dark-1.jpg"} alt={item.title || "trending"} />
            </div>
            <div className="trending-news-content">
              <div className="post-meta">
                <div className="meta-categories">
                  <a href="#">{item.category || "TECHNOLOGY"}</a>
                </div>
                <div className="meta-date">
                  <span>{item.date || "Unknown date"}</span>
                </div>
              </div>
              <h3 className="title">
                <a href="#">{item.title}</a>
              </h3>
              <p className="text">{item.description || ""}</p>
            </div>
          </div>
        </div>
      ))
    )
  );

  return (
    <div className="about-tab-btn mt-40">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link${activeTab === "latest" ? " active" : ""}`}
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected={activeTab === "latest"}
            onClick={() => setActiveTab("latest")}
          >
            Latest news
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link${activeTab === "popular" ? " active" : ""}`}
            id="pills-profile-tab"
            data-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected={activeTab === "popular"}
            onClick={() => setActiveTab("popular")}
          >
            Popular news
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade${activeTab === "latest" ? " show active" : ""}`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="about-post-items">
            <div className="row">
              {renderNewsItems(latestNews)}
              <div className="col-lg-12">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade${activeTab === "popular" ? " show active" : ""}`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="about-post-items">
            <div className="row">
              {renderNewsItems(popularNews)}
              <div className="col-lg-12">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}