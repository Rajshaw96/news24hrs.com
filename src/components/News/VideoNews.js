"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";

export default function VideoNews({ dark }) {
  const [isOpen, setOpen] = useState(false);
  const [videoNews, setVideoNews] = useState(null);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function loadVideoNews() {
      try {
        const res = await fetch(`${host}/api/news`);
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setVideoNews(data[0]); // ✅ Only showing the first video news item
        }
      } catch (error) {
        console.error("Error fetching video news:", error);
      }
    }
    loadVideoNews();
  }, [host]);

  return (
    <div className="video-news-post">
      <div className="section-title section-title-2">
        <h3 className="title">Videos News</h3>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="eEzD-Y97ges" // ✅ Replace with API-provided videoId if available
        onClose={() => setOpen(false)}
      />

      {videoNews && (
        <div
          className={`video-news-post-item ${
            dark ? "video-news-post-item-dark" : ""
          }`}
        >
          <div className="video-news-post-thumb">
            <img
              src={videoNews.urlToImage || videoNews.image || "/images/placeholder.jpg"}
              alt={videoNews.title}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
            <div className="play-btn" onClick={() => setOpen(true)}>
              <a
                onClick={(e) => e.preventDefault()}
                className="video-popup"
                href="#"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="video-news-post-content">
            <div className="post-meta">
              <div className="meta-categories">
                <Link href={`/news/${videoNews._id || videoNews.id}`}>
                  {videoNews.category || "Video"}
                </Link>
              </div>
              <div className="meta-date">
                <span>
                  {videoNews.publishedAt
                    ? new Date(videoNews.publishedAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
            </div>

            <h3 className="title">
              <Link href={`/news/${videoNews._id || videoNews.id}`}>
                {videoNews.title}
              </Link>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
