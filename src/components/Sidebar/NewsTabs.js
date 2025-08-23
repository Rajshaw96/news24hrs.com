"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useSearchParams } from "next/navigation";

export default function NewsTabs({ dark }) {
  const [activeTab, setActiveTab] = useState("world");
  const [trendyNews, setTrendyNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [popularNews, setPopularNews] = useState([]);

  const host = process.env.NEXT_PUBLIC_API_URL;
  // const searchParams = useSearchParams();
  // const category = searchParams.get("category") || "general";

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(`${host}/api/news?category=${activeTab}`);
        const data = await res.json();

        const articles = Array.isArray(data) ? data : data.articles || [];

        // Separate based on tab type
        setTrendyNews(articles.slice(0, 5));
        setLatestNews(
          [...articles]
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            .slice(0, 5)
        );
        setPopularNews(
          [...articles]
            .sort((a, b) => b.source?.name.localeCompare(a.source?.name || ""))
            .slice(0, 5)
        );
      } catch (error) {
        console.error("News fetch error:", error);
      }
    }

    loadNews();
  }, [activeTab, host]);

  const renderNewsItems = (newsArray) =>
    newsArray.map((item, i) => (
      <div
        key={item._id || i}
        className={`gallery_item ${dark ? "gallery_item_dark" : ""}`}
      >
        <div className="gallery_item_thumb">
          <img
            src={item.urlToImage || item.image || "/images/default.jpg"}
            alt="news"
          />
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <a href={`/news/${item._id || item.id}`}>
                {item.source?.name || "News"}
              </a>
            </div>
            <div className="meta-date">
              <span>
                {item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString()
                  : ""}
              </span>
            </div>
          </div>
          <h4 className="title">
            <Link href={`/news/${item._id || item.id}`} >
              {item.title?.split(" ").slice(0, 8).join(" ")}
              {item.title?.split(" ").length > 8 ? "..." : ""}
            </Link>
          </h4>
        </div>
      </div>
    ));

  return (
    <>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        {["world", "sports", "business"].map((tab) => (
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
            activeTab === "world" ? "active" : ""
          }`}
          id="pills-trendy"
        >
          <div className="post_gallery_items">
            {renderNewsItems(trendyNews)}
          </div>
        </div>
        <div
          className={`tab-pane fade show ${
            activeTab === "sports" ? "active" : ""
          }`}
          id="pills-latest"
        >
          <div className="post_gallery_items">
            {renderNewsItems(latestNews)}
          </div>
        </div>
        <div
          className={`tab-pane fade show ${
            activeTab === "business" ? "active" : ""
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
