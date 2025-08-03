"use client"
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
import React from 'react';

export default function Trending() {
  const [drawer, drawerAction] = useToggle(false);
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
                          Category: <span>trending</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-post-items">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-1.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-2.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-3.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-4.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-5.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-6.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-7.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-1.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-2.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-3.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-4.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-news-item mb-30">
                          <div className="trending-news-thumb">
                            <img
                              src="/images/entertainment-dark-5.jpg"
                              alt="trending"
                            />
                            <div className="icon">
                              <a href="#" tabindex="-1">
                                <i className="fas fa-bolt"></i>
                              </a>
                            </div>
                          </div>
                          <div className="trending-news-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <Link href="/post-details-one">
                                There may be no consoles in the future ea exec
                                says
                              </Link>
                            </h3>
                            <p className="text">
                              The property, complete with 30-seat screening from
                              room, a 100-seat amphitheater and a swimming pond
                              with sandy shower…
                            </p>
                          </div>
                        </div>
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
