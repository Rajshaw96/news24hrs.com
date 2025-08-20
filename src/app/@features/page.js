"use client"
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
import React from 'react';

export default function Features() {
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
                <BreadCrumb CategoryName="Features" />
              </div>
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>Features</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-post-items">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-1.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-2.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-3.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-4.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-5.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-6.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-7.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-8.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-1.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-2.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-3.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="trending-image-post feature-item mt-30">
                          <img src="/images/feature/feature-4.png" alt="" />
                          <div className="trending-image-content">
                            <div className="post-meta">
                              <div className="meta-categories">
                                <a href="#">TECHNOLOGY</a>
                              </div>
                              <div className="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h3 className="title">
                              <a href="#">
                                Japans virus success has from puzzled the
                                running out?
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <Pagination customClass="pt-40" />
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
      </div>
    </Layout>
  );
}
