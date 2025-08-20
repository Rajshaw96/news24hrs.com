"use client";
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import TrendingNewsWidget from '@/components/NewsWidgets/TrendNewsWidget';
import BreadCrumb from '@/components/Others/BreadCrumb';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
import useToggle from '@/Hooks/useToggle';
import React, { useEffect, useState } from 'react';

export default function Sports() {
  const [drawer, drawerAction] = useToggle(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSportsNews = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/news?category=sports`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
        }
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching sports news:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSportsNews();
  }, []);

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />

        <section className="about-item-area">
          <div className="container">
            <div className="row">
              {/* Breadcrumb */}
              <div className="col-lg-12">
                <BreadCrumb CategoryName="Sports" />
              </div>

              {/* Main Content */}
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>Sports</span>
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="about-post-items">
                    <div className="row">
                      {loading ? (
                        <p>Loading...</p>
                      ) : newsData.length === 0 ? (
                        <p>No sports news found.</p>
                      ) : (
                        newsData.map((item, i) => (
                          <div className="col-md-6" key={i}>
                            <div className="feature-news-item">
                              <div className="feature-news-thumb">
                                <img
                                  src={item.image || '/images/default-news.jpg'}
                                  alt={item.title || 'feature'}
                                />
                                <div className="meta-categores">
                                  <span>
                                    {item.category
                                      ? item.category.toUpperCase()
                                      : 'SPORTS'}
                                  </span>
                                </div>
                              </div>
                              <div className="feature-news-content">
                                <p>
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.title}
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}

                      <div className="col-lg-12">
                        <div className="bussiness-btn">
                          <a className="main-btn main-btn-2" href="#">
                            See more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="post_gallery_sidebar mt-40">
                  <NewsTabs />
                  <NewsLetter />
                  <TrendingSingleCarousel />
                  <TrendingNewsWidget />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}