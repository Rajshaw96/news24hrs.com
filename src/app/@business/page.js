"use client";
import AdWidgetTwo from '@/components/AdsWidget/AdWidgetTwo';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import TrendingNewsWidget from '@/components/NewsWidgets/TrendNewsWidget';
import BreadCrumb from '@/components/Others/BreadCrumb';
import Pagination from '@/components/Others/Pagination';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
import useToggle from '@/Hooks/useToggle';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns'; // Import date-fns for formatting

export default function Business() {
  const [drawer, drawerAction] = useToggle(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/news?category=business`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
        }
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching business news:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessNews();
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
    <Layout title="Business">
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <section className="about-item-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BreadCrumb CategoryName="Business" />
            </div>
            <div className="col-lg-8">
              <div className="about-tab-btn mt-40">
                <div className="archive-btn">
                  <ul>
                    <li>
                      <span>
                        Category: <span>Business</span>
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
                        <p>No business news found.</p>
                      ) : (
                        newsData.map((item, index) => (
                          <div className="business-post-item mb-40" key={item.id || index}>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="business-post-thumb">
                                  <img
                                    src={item.image || '/images/default-news.jpg'}
                                    alt={item.title || 'business'}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="trending-news-item">
                                  <div className="trending-news-content">
                                    <div className="post-meta">
                                      <div className="meta-categories">
                                        <a href="#">
                                          {item.category
                                            ? item.category.toUpperCase()
                                            : 'BUSINESS'}
                                        </a>
                                      </div>
                                      <div className="meta-date">
                                        <span>
                                          {item.publishedAt
                                            ? formatDateTime(item.publishedAt)
                                            : 'Unknown Date'}
                                        </span>
                                      </div>
                                    </div>
                                    <h3 className="title">
                                      <a
                                        href={item.url || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {item.title || 'No Title'}
                                      </a>
                                    </h3>
                                    <p className="text">
                                      {item.description ||
                                        'No description available.'}
                                    </p>
                                    <a href={item.url || '#'}>Read more</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="col-lg-12">
                      <Pagination />
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