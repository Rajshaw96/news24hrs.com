"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { bottom } from "quixote/src/descriptors/element_edge";

export default function CommentList() {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const newsId = pathname.split("/").pop();

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`${host}/api/comments/${newsId}`);
        if (!res.ok) throw new Error("Failed to fetch comments");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (newsId) {
      fetchComments();
    }
  }, [newsId]);

  if (loading) return <p>Loading comments...</p>;
  if (comments.length === 0) return <p>No comments yet. Be the first!</p>;

  return (
    <section className="post-comments-area pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title">
              <h3 className="title">Post Comments</h3>
            </div>
            <div className="post-comments-list">
                {comments.map((c) => (
                  <div key={c.id} className="post-comments-item">
                    <div className="thumb">
                      <img src="/images/userImage.jpg" alt="User Image" />
                    </div>
                    <div className="post">
                      {/* <a href="#">Reply</a> */}
                      <h5 className="title">{c.userName}</h5>
                      <p>{c.message}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="post-load-btn">
              <a className="main-btn" href="#">
                LOAD MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
