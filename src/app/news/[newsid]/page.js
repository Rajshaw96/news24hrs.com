"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import AdWidgetTwo from "@/components/AdsWidget/AdWidgetTwo";
import WideAdWidget from "@/components/AdsWidget/WideAdWidget";
import CommentForm from "@/components/Comments/CommentForm";
import CommentList from "@/components/Comments/CommentList";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Header from "@/components/Layout/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import TrendingNewsWidget from "@/components/NewsWidgets/TrendNewsWidget";
import BreadCrumb from "@/components/Others/BreadCrumb";
import LatestNews from "@/components/Others/LatestNews";
import MostShare from "@/components/Sidebar/MostShare";
import NewsTabs from "@/components/Sidebar/NewsTabs";
import WidgetOne from "@/components/SocialMediaWidgets/WidgetOne";
import TrendingSingleCarousel from "@/components/TrendingNews/TrendingSingleCarousel";
import useToggle from "@/Hooks/useToggle";

export default function PostDetailsOne() {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const { newsid } = useParams();
  const [drawer, drawerAction] = useToggle(false);
  const [article, setArticle] = useState ();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!newsid) return;

    async function fetchArticle() {
      try {
        const res = await fetch(`${host}/api/news/${newsid}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [newsid]);

  if (loading) {
    return (
      <Layout>
        <div className="container text-center py-20">Loading article...</div>
      </Layout>
    );
  }

  if (!article) {
    return (
      <Layout>
        <div className="container text-center py-20 text-red-500">
          Article not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />

        <section className="post-layout-1-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <BreadCrumb 
                  CategoryName={
                    article.category.charAt(0).toUpperCase() + article.category.slice(1)
                  } 
                />
              </div>
              <div className="col-lg-8">
                <div className="post-layout-top-content">
                  <div className="post-categories d-flex justify-content-between align-content-center">
                    <div className="categories-item">
                      <span>{article.category?.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="post-content">
                    <h3 className="title">{article.title}</h3>
                    <p>{article.description}</p>
                    <div className="thumb">
                      <img
                        src={article.image || "/images/post-layout.png"}
                        alt={article.title}
                      />
                    </div>
                  </div>

                  <div className="post-author mt-4">
                    <div className="author-info">
                      <div className="thumb">
                        <img src="/images/author.png" alt="author" />
                      </div>
                      <h5 className="title">{article.source?.name}</h5>
                      <ul>
                        <li>
                          {new Date(article.publishedAt).toLocaleDateString()}
                        </li>
                        <li>
                          Updated{" "}
                          {new Date(article.updatedAt).toLocaleTimeString()}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="post-text mt-30">
                    <p>{article.content}</p>
                  </div>

                  <div className="post-tags mt-4">
                    <ul>
                      <li>
                        <i className="fas fa-tag"></i> Tags
                      </li>
                      <li>
                        <a href="#">{article.category}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="post_gallery_sidebar mt-40">
                  <NewsTabs />
                  <WidgetOne customClass="mt-30" />
                  <TrendingSingleCarousel />
                  <TrendingNewsWidget />
                  <AdWidgetTwo />
                  <MostShare customClass="mt-40" />
                  <NewsLetter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestNews />
        <CommentForm />
        <CommentList />
        <WideAdWidget />
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
