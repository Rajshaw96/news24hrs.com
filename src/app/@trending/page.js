"use client";
import WideAdWidget from '@/components/AdsWidget/WideAdWidget';
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
import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
import useToggle from '@/Hooks/useToggle';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function Trending() {
  const [drawer, drawerAction] = useToggle(false);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/news`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}, Message: ${await response.text()}`);
        }
        const data = await response.json();
        setNewsData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching trending news:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingNews();
  }, []);

  // Function to format publishedAt date and time
  const formatDateTime = (publishedAt) => {
    try {
      return format(new Date(publishedAt), 'MMMM d, yyyy, h:mm a'); // e.g., August 16, 2025, 11:53 PM
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
                <BreadCrumb CategoryName="Trending" />
              </div>
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>Trending</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-post-items">
                    <div className="row">
                      {loading ? (
                        <p>Loading...</p>
                      ) : newsData.length === 0 ? (
                        <p>No trending news found.</p>
                      ) : (
                        newsData.map((item, index) => (
                          <div className="col-lg-6 col-md-6" key={item.id || index}>
                            <div className="trending-news-item mb-30">
                              <div className="trending-news-thumb">
                                <img
                                  src={item.image || '/images/default-news.jpg'}
                                  alt={item.title || 'trending'}
                                />
                                <div className="icon">
                                  <a href={item.url || '#'} tabIndex="-1">
                                    <i className="fas fa-bolt"></i>
                                  </a>
                                </div>
                              </div>
                              <div className="trending-news-content">
                                <div className="post-meta">
                                  <div className="meta-categories">
                                    <a href={item.url || '#'}>
                                      {item.category
                                        ? item.category.toUpperCase()
                                        : 'TRENDING'}
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
                                  <Link href={item.url || '/post-details-one'}>
                                    {item.title || 'No Title'}
                                  </Link>
                                </h3>
                                <p className="text">
                                  {item.description || 'No description available.'}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
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
                  <WidgetOne />
                </div>
              </div>
            </div>
          </div>
        </section>
        <WideAdWidget />
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}