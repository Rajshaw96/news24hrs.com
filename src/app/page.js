"use client";
import AdOne from "@/components/AdsWidget/AdOne";
import FeatureNewsCarousel from "@/components/FeatureNews/FeatureNewsCarousel";
import Drawer from "@/components/Layout/Drawer/Drawer";
import Footer from "@/components/Layout/Footer/Footer";
import FooterCopyright from "@/components/Layout/Footer/FooterCopyright";
import Header from "@/components/Layout/Header/Header";
import Layout from "@/components/Layout/Layout";
import BusinessNews from "@/components/News/BusinessNews";
import EntertainmentNews from "@/components/News/EntertainmentNews";
import NewsGallary from "@/components/News/NewsGallary";
import PopularNewsCarousel from "@/components/News/PopularNewsCarousel";
import SportsNewsCarousel from "@/components/News/SportsNewsCarousel";
import TrendingCarousel from "@/components/News/TrendingCarousel";
import TwoPostCarousel from "@/components/News/TwoPostCarousel";
import VideoNews from "@/components/News/VideoNews";
import NewsLetter from "@/components/Newsletter/NewsLetter";
import MostShare from "@/components/Sidebar/MostShare";
import MostviewNews from "@/components/Sidebar/MostviewNews";
import NewsTabs from "@/components/Sidebar/NewsTabs";
import SidebarCategories from "@/components/Sidebar/SidebarCategories";
import SportsFixtures from "@/components/Sidebar/SportsFixtures";
import WidgetOne from "@/components/SocialMediaWidgets/WidgetOne";
import TrendingNewPost from "@/components/TrendingNews/TrendingNewPost";
import useToggle from "@/Hooks/useToggle";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function HomeOneOne() {
  const host = process.env.NEXT_PUBLIC_API_URL;
  const [drawer, drawerAction] = useToggle(false);
  const [topSportsNews, setTopSportsNews] = useState(null);
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    async function loadNews() {
      try {
        const res = await fetch(`${host}/api/news/`);
        const res2 = await fetch(`${host}/api/news?category=sports`);

        const data = await res.json();
        const data2 = await res2.json();

        // console.log("Fetched news data:", data);
        setTopSportsNews(data2 || []);
        setNewsData(data || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    loadNews();
  }, []);
  return (
    <Layout>
      {/* <Home/> */}
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <div className="post__gallery__area pt-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <NewsGallary />
              </div>
              <div className="col-lg-4">
                <div className="post_gallery_sidebar">
                  <NewsTabs />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureNewsCarousel customClass="pb-40" />
        <section className="trending-news-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h3 className="title">Trending News</h3>
                </div>
                <TrendingCarousel />
                <TrendingNewPost />
              </div>
              <div className="col-lg-4">
                <div className="trending-right-sidebar">
                  <WidgetOne />
                  <MostviewNews />
                </div>
              </div>
            </div>
          </div>
        </section>
        <TwoPostCarousel />
        <section className="video-news-area">
          <div className="container custom-container">
            <div className="video-news-box">
              <div className="row">
                <div className="col-lg-8">
                  <VideoNews />
                </div>
                <div className="col-lg-4">
                  <PopularNewsCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="all-post-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <EntertainmentNews />
                <div className="sports-news-area">
                  <div className="section-title">
                    <h3 className="title">Sports News</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      {topSportsNews ? (
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src={
                                topSportsNews[0].image ||
                                "/images/sports-news.jpg"
                              }
                              alt={topSportsNews.title || "sports"}
                              style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <Link
                                  href={`/news/${
                                    topSportsNews[0]._id || "sports"
                                  }`}
                                >
                                  {topSportsNews[0].category || "Sports"}
                                </Link>
                              </div>
                              <div className="meta-date">
                                <span>
                                  {topSportsNews[0].publishedAt
                                    ? new Date(
                                        topSportsNews[0].publishedAt
                                      ).toLocaleDateString()
                                    : ""}
                                </span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href={`/news/${topSportsNews[0]._id}`}>
                                {topSportsNews[0].title}
                              </Link>
                            </h3>
                            <p className="text">
                              {topSportsNews[0].description ||
                                "No description available for this news item."}
                            </p>
                            <Link href={`/news/${topSportsNews[0].id}`}>
                              Read more
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <p>Loading sports news...</p>
                      )}
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <SportsNewsCarousel />
                    </div>
                  </div>
                </div>
                <div className="post-add mt-30">
                  <a href={`/news/${newsData ? newsData[0]._id : "#"}`}>
                    <img
                      src={
                        newsData ? newsData[0].image : "/images/ads/banner.png"
                      }
                      alt="ad"
                    />
                  </a>
                </div>
                <BusinessNews />
              </div>
              <div className="col-lg-4">
                <MostShare />
                <SportsFixtures />
                <NewsLetter />
                <SidebarCategories />
                <AdOne />
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
