"use client"
import { fetchTodayNews } from "@/lib/newsApi";
import React, { useEffect, useState } from "react";

export default function TrendingNewsWidget() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getTrendingNews() {
      try {
        const data = await fetchTodayNews("trending");
        // Directly call the function
        setNews(data.slice(0, 7));
        // console.log("Data " + data);
      } catch (error) {
        console.error("Error fetching trending news:", error);
      }
    }

    getTrendingNews();
  }, []);
  return (
    <div className="trending-news-post-items">
      {news.map((item, index) => (
        <div className="gallery_item">
          <div className="gallery_item_thumb">
            <img
              src={item.urlToImage || "/images/gallery-1.jpg"}
              alt="gallery"
              style={{ width: "100px" }}
            />

            <div className="icon">
              <i className="fas fa-bolt"></i>
            </div>
          </div>
          <div className="gallery_item_content">
            <div className="post-meta">
              <div className="meta-categories">
                <a href="#">{item.source.name}</a>
              </div>
              <div className="meta-date">
                <span>March 26, 2020</span>
              </div>
            </div>
            <h4 className="title">
              <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
            </h4>
          </div>
        </div>
      ))}
      {/* <div className="gallery_item">
        <div className="gallery_item_thumb">
          <img src="/images/gallery-2.jpg" alt="gallery" />
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <a href="#">TECHNOLOGY</a>
            </div>
            <div className="meta-date">
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className="title">
            <a href="#">The billionaire Philan thropist read to learn</a>
          </h4>
        </div>
      </div>
      <div className="gallery_item">
        <div className="gallery_item_thumb">
          <img src="/images/gallery-3.jpg" alt="gallery" />
          <div className="icon">
            <i className="fas fa-bolt"></i>
          </div>
        </div>
        <div className="gallery_item_content">
          <div className="post-meta">
            <div className="meta-categories">
              <a href="#">TECHNOLOGY</a>
            </div>
            <div className="meta-date">
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 className="title">
            <a href="#">Cheap smartphone sensor could help you old food safe</a>
          </h4>
        </div>
      </div> */}
    </div>
  );
}
