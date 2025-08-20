"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useSearchParams } from "next/navigation";
import { fetchTodayNews } from "@/lib/newsApi";

export default function NewsTabs({ dark }) {
  const [activeTab, setActiveTab] = useState("trendy");
  const [trendyNews, setTrendyNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "general";

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    async function loadNews() {
      try {
        const articles = await fetchTodayNews(category);

        // Separate based on tab type (you can adjust logic as needed)
        setTrendyNews(articles.slice(0, 5)); // First 5 popular
        setLatestNews(
          [...articles]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 5)
        );
        setPopularNews(
          [...articles]
            .sort((a, b) => b.source.name.localeCompare(a.source.name))
            .slice(0, 5)
        ); // example sort
      } catch (error) {
        console.error("News fetch error:", error);
      }
    }

    loadNews();
  }, [category]);

  const renderNewsItems = (newsArray) =>
    newsArray.map((item, i) => (
      <div
        key={i}
        className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
      >
        <div className="gallery_item_thumb">
          <img src={item.urlToImage || "/images/default.jpg"} alt="news" />
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <a href="#">{item.source.name}</a>
            </div>
            <div className="meta-date">
              <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
          <h4 className="title">
            <Link href={item.url} target="_blank">
              {item.title.split(" ").slice(0, 8).join(" ")}
              {item.title.split(" ").length > 8 ? "..." : ""}
            </Link>
          </h4>
        </div>
      </div>
    ));

  return (
    <>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        {["trendy", "latest", "popular"].map((tab) => (
          <li className="nav-item" key={tab}>
            <a
              className={classnames("nav-link", { active: activeTab === tab })}
              data-toggle="pill"
              href={`#pills-${tab}`}
              role="tab"
              aria-selected={activeTab === tab}
              onClick={(e) => {
                e.preventDefault();
                toggleTab(tab);
              }}
            >
              {tab.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade show ${
            activeTab === "trendy" ? "active" : ""
          }`}
          id="pills-trendy"
        >
          <div className="post_gallery_items">
            {renderNewsItems(trendyNews)}
          </div>
        </div>
        <div
          className={`tab-pane fade show ${
            activeTab === "latest" ? "active" : ""
          }`}
          id="pills-latest"
        >
          <div className="post_gallery_items">
            {renderNewsItems(latestNews)}
          </div>
        </div>
        <div
          className={`tab-pane fade show ${
            activeTab === "popular" ? "active" : ""
          }`}
          id="pills-popular"
        >
          <div className="post_gallery_items">
            {renderNewsItems(popularNews)}
          </div>
        </div>
      </div>
    </>
  );
}
