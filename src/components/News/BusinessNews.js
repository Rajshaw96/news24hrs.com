"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { fetchTodayNews } from "@/lib/newsApi";

export default function BusinessNews({ dark }) {
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    async function loadBusinessNews() {
      try {
        const data = await fetchTodayNews("business");
        setBusinessNews(data.slice(0, 4)); // limit to 4 items
      } catch (error) {
        console.error("Error fetching business news:", error);
      }
    }
    loadBusinessNews();
  }, []);

  return (
    <div className="business-news-post pt-40">
      <div className="section-title d-flex justify-content-between align-items-center">
        <h3 className="title">Business News</h3>
        <Link href="/business-news">SEE ALL</Link>
      </div>

      <div className="business-post">
        {businessNews.map((item, i) => (
          <div
            key={item.id || i}
            className={`business-post-item mb-40 ${
              dark ? "business-post-item-dark" : ""
            }`}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="business-post-thumb">
                  <img
                    src={
                      item.urlToImage || `/images/business/business-${i + 1}.jpg`
                    }
                    alt={item.title}
                    style={{
                      width: "350px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="trending-news-item">
                  <div className="trending-news-content">
                    <div className="post-meta">
                      <div className="meta-categories">
                        <Link href={`/news/${item.id}`}>
                          {item.category || "Business"}
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
                      <Link href={`/news/${item.id}`}>
                        {item.title || ""}
                      </Link>
                    </h3>
                    <p className="text">
                      {item.description
                        ? item.description
                            .split(" ")
                            .slice(0, 20)
                            .join(" ") +
                          (item.description.split(" ").length > 20 ? "..." : "")
                        : ""}
                    </p>
                    <Link href={`/news/${item.id}`}>Read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
