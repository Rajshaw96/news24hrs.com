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
import { format } from 'date-fns'; // Import date-fns for formatting

export default function Entertainment() {
  const [drawer, drawerAction] = useToggle(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntertainmentNews = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/news?category=entertainment`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
        }
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching entertainment news:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntertainmentNews();
  }, []);

  // Function to format publishedAt date and time
  const formatDateTime = (publishedAt) => {
    try {
      return format(new Date(publishedAt), 'MMMM d, yyyy, h:mm a'); // e.g., August 16, 2025, 11:39 PM
    } catch (error) {
      return 'Unknown Date';
    }
  };

  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <section className="about-item-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BreadCrumb CategoryName="Entertainment" />
              </div>
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>Entertainment</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-post-items">
                    <div className="row">
                      <div className="col-lg-12">
                        {loading ? (
                          <p>Loading...</p>
                        ) : newsData.length === 0 ? (
                          <p>No entertainment news found.</p>
                        ) : (
                          newsData.map((item, i) => (
                            <div
                              className="bussiness-post-item mb-40"
                              key={item.id || i}
                            >
                              <div className="bussiness-post-thumb">
                                <img
                                  src={item.image || '/images/default-news.jpg'}
                                  alt={item.title || 'entertainment'}
                                />
                              </div>
                              <div className="bussiness-post-content">
                                <h3 className="title">
                                  <a
                                    href={item.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.title || 'No Title'}
                                  </a>
                                </h3>
                                <div className="meta-date-link">
                                  <span>
                                    {item.publishedAt
                                      ? formatDateTime(item.publishedAt)
                                      : 'Unknown Date'}
                                  </span>
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fal fa-bookmark"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-share"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>{item.description || 'No description available.'}</p>
                                <a href={item.url || '#'}>
                                  LEARN MORE{' '}
                                  <img src="/images/arrow-2.svg" alt="" />
                                </a>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
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
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}