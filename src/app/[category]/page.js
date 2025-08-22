// components/CategoryContent.js
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Layout and other component imports
import useToggle from "@/Hooks/useToggle";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Header from "@/components/Layout/Header/Header";
import Layout from "@/components/Layout/Layout";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import BreadCrumb from "@/components/Others/BreadCrumb";
import Pagination from "@/components/Others/Pagination";
import NewsTabs from "@/components/Sidebar/NewsTabs";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import TrendingSingleCarousel from "@/components/TrendingNews/TrendingSingleCarousel";
import TrendingNewsWidget from "@/components/NewsWidgets/TrendNewsWidget";
import AdWidgetTwo from "@/components/AdsWidget/AdWidgetTwo";

export default function CategoryContent() {
  const { category } = useParams(); // ✅ get category from URL
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawer, drawerAction] = useToggle(false);
  const host = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!category) return;

    async function getNews() {
      try {
        const res = await fetch(`${host}/api/news?category=${category}`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setArticles(data.slice(0, 15));
        } else {
          setArticles([]);
        }
      } catch (err) {
        console.error("Failed to fetch news:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    getNews();
  }, [category, host]);

  return (
    <Layout title={category}>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <section className="about-item-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BreadCrumb CategoryName={category} />
            </div>
            <div className="col-lg-8">
              <div className="about-tab-btn mt-40">
                <div className="archive-btn">
                  <ul>
                    <li>
                      <span>
                        Category: <span>{category}</span>
                      </span>
                    </li>
                  </ul>
                </div>

                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <div className="about-post-items">
                    <div className="row">
                      <div className="col-lg-12">
                        {articles.map((item, index) => (
                          <div key={index} className="business-post-item mb-40">
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="business-post-thumb">
                                  <img
                                    src={
                                      item.urlToImage ||
                                      item.image ||
                                      "/images/gallery-1.jpg"
                                    }
                                    alt={category}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="trending-news-item">
                                  <div className="trending-news-content">
                                    <div className="post-meta">
                                      <div className="meta-categories">
                                        <a href={`/news/${item._id || item.id}`}>{category}</a>
                                      </div>
                                      <div className="meta-date">
                                        <span>{item.publishedAt}</span>
                                      </div>
                                    </div>
                                    <h3 className="title">
                                      <a href={`/news/${item._id || item.id}`}>{item.title}</a>
                                    </h3>
                                    <p className="text">{item.description}</p>
                                    <a href={`/news/${item._id || item.id}`}>Read more</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <Pagination />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="post_gallery_sidebar mt-40">
                <NewsTabs />
                <NewsLetter />
                <TrendingSingleCarousel />
                <TrendingNewsWidget />
                <AdWidgetTwo />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FooterCopyright />
    </Layout>
  );
}
