import React, { useState } from "react";
import NewsLetterTwo from "../Newsletter/NewsLetterTwo";
import WidgetOne from "../SocialMediaWidgets/WidgetOne";

export default function ContactFormArea() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    phoneNumber: "",
    message: ""
  });

  const [status, setStatus] = useState(""); 

  // ✅ Use env variable or fallback
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "https://api.news24hrs.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.fullName || !formData.subject || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          fullName: "",
          subject: "",
          email: "",
          phoneNumber: "",
          message: ""
        });
      } else {
        setStatus(`❌ Error: ${data.error || "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Please try again later.");
    }
  };

  return (
    <section className="contact-area pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="contact-box">
              <form onSubmit={handleSubmit}>
                <h3 className="title">
                  Let’s work together! <br /> Fill out the form.
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box">
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-box">
                      <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        placeholder="Tell us about your message…"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <button type="submit" className="main-btn">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
                {status && <p style={{ marginTop: "10px" }}>{status}</p>}
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-sidebar">
              <WidgetOne />
              <NewsLetterTwo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
