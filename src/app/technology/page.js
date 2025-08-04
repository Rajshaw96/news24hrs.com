"use client"
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
import Link from 'next/link';
import React from 'react';

const postData = [
  {
    postThumb: '/images/trending-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/technology-item-2.png',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/trending-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/technology-item-2.png',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/trending-news-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/technology-item-2.png',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle:
      'Miami woman deliver her powerful winds kept help from home nuture to currently sell one multi million dollar home',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
];

export default function Technology() {
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
                <BreadCrumb CategoryName="Technology" />
              </div>
              <div className="col-lg-8">
                <div className="about-tab-btn mt-40">
                  <div className="archive-btn">
                    <ul>
                      <li>
                        <span>
                          Category: <span>Technology</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-post-items">
                    <div className="row">
                      <div className="col-lg-12">
                        {postData.map((item, i) => (
                          <div className="trending-news-item technology-item">
                            <div className="trending-news-thumb">
                              <img src={item.postThumb} alt="trending" />
                              <div className="icon">
                                <Link href="/post-details-one">
                                  <i className="fas fa-bolt"></i>
                                </Link>
                              </div>
                            </div>
                            <div className="trending-news-content">
                              <div className="post-meta">
                                <div className="meta-categories">
                                  <Link href="/post-details-one">
                                    {item.postTag}
                                  </Link>
                                </div>
                                <div className="meta-date">
                                  <span>{item.postDate}</span>
                                </div>
                              </div>
                              <h3 className="title">
                                <Link href="/post-details-one">
                                  {item.postTitle}
                                </Link>
                              </h3>
                              <p className="text">{item.postDesc}</p>
                            </div>
                          </div>
                        ))}
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
