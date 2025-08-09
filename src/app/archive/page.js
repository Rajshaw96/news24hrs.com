"use client"
import AdOne from '@/components/AdsWidget/AdOne';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import TrendingCarousel from '@/components/News/TrendingCarousel';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import useToggle from '@/Hooks/useToggle';
import Link from 'next/link';
import React from 'react';

export default function Archive() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <Header action={drawerAction.toggle} />
      <section className="home-1-bg">
        <div className="about-author-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-author-content">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Archive
                      </li>
                    </ol>
                  </nav>
                  <div className="archive-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-4">
                        <div className="archive-items">
                          <div className="section-title">
                            <h3 className="title">Archives: 2020</h3>
                          </div>
                          <div className="archive-list ">
                            <ul>
                              <li>
                                <Link href="/post-details-one">January</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">February</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">March</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">April</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-8">
                        <div className="archive-items border-left">
                          <div className="section-title">
                            <h3 className="title">Years list</h3>
                          </div>
                          <div className="archive-list">
                            <ul>
                              <li>
                                <Link href="/post-details-one">2000</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2001</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2002</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2003</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2004</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2005</Link>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <Link href="/post-details-one">2006</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2007</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2008</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2009</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2010</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2011</Link>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <Link href="/post-details-one">2012</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2013</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2014</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2015</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2016</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2017</Link>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <Link href="/post-details-one">2018</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2019</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2020</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2021</Link>
                              </li>
                              <li>
                                <Link href="/post-details-one">2022</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-item-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="about-tab-btn mt-40">
                <div className="archive-btn">
                  <ul>
                    <li>April, 2020</li>
                    <li>
                      <i className="fal fa-calendar"></i>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-one">TECHNOLOGY</Link>
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
                      <div className="pagination-item">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                01
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                02
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                ...
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                50
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                              >
                                <span aria-hidden="true">
                                  <i className="fas fa-caret-right"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </nav>
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
                <TrendingCarousel />
                <AdOne />
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
