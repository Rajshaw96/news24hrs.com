"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function CommentForm() {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  // extract newsId from URL like /news/[newsid]
  const newsId = pathname.split("/").pop();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      
      const res = await fetch(`${host}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, message, newsId }),
      });

      if (!res.ok) throw new Error("Failed to post comment");

      const data = await res.json();
      console.log("Comment added:", data);

      // reset form
      setUserName("");
      setEmail("");
      setMessage("");
      alert("Comment posted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error posting comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-form-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="section-title">
              <h3 className="title">Leave a Comment</h3>
            </div>
            <div className="post-form-box">
              <form action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Full User Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-box">
                      <textarea
                        cols="30"
                        rows="10"
                        placeholder="Tell us about your message…"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <button
                        className="main-btn"
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? "Posting..." : "Send Comment"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
