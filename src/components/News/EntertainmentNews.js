"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EntertainmentNews({ dark }) {
  const [entertainmentNews, setEntertainmentNews] = useState([]);

  useEffect(() => {
    async function loadEntertainmentNews() {
      try {
        const host = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${host}/api/news?category=technology`);
        const data = await res.json();
        setEntertainmentNews(data.slice(0, 4)); // ✅ Limit to 4 items
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
      }
    }
    loadEntertainmentNews();
  }, []);

  return (
    <div className="post-entertainment">
      <div className={`section-title ${dark ? "section-title-2" : ""}`}>
        <h3 className="title">Entertainment News</h3>
      </div>
      <div className="row">
        {entertainmentNews.length > 0 &&
          entertainmentNews.map((item, i) => (
            <div className="col-lg-6 col-md-6" key={item.id || i}>
              <div
                className={`trending-news-item ${
                  dark ? "trending-news-item-dark" : ""
                } mb-30`}
              >
                <div className="trending-news-thumb">
                  <img
                    src={
                      dark
                        ? item.image || "/images/entertainment-dark-1.jpg"
                        : item.image || "/images/entertainment-1.jpg"
                    }
                    alt={item.title}
                    style={{
                      width: "700px",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="circle-bar">
                    <div className="first circle">
                      <strong></strong>
                    </div>
                  </div>
                </div>
                <div className="trending-news-content">
                  <div className="post-meta">
                    <div className="meta-categories">
                      <Link href={`/news/${item._id}`}>
                        {item.category || "Entertainment"}
                      </Link>
                    </div>
                    <div className="meta-date">
                      <span>
                        {item.publishedAt
                          ? new Date(item.publishedAt).toLocaleDateString()
                          : ""}
                      </span>
                    </div>
                  </div>
                  <h3 className="title">
                    <Link href={`/news/${item._id}`}>
                      {item.title
                        ? item.title.split(" ").slice(0, 8).join(" ") +
                          (item.title.split(" ").length > 8 ? "..." : "")
                        : ""}
                    </Link>
                  </h3>
                  <p className="text">{item.description || ""}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
