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

const postData = [
  {
    postThumb: '/images/business-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-4.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-3.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-2.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-4.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
  {
    postThumb: '/images/business-1.jpg',
    postTag: 'TECHNOLOGY',
    postDate: 'March 26, 2020',
    postTitle: 'There may be no consoles in the future eaexec says',
    postDesc:
      'The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…',
  },
];

export default function business() {
  const [drawer, drawerAction] = useToggle(false);
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
                      {postData.map((item) => (
                        <div className="business-post-item mb-40">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="business-post-thumb">
                                <img src={item.postThumb} alt="business" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="trending-news-item">
                                <div className="trending-news-content">
                                  <div className="post-meta">
                                    <div className="meta-categories">
                                      <a href="#">{item.postTag}</a>
                                    </div>
                                    <div className="meta-date">
                                      <span>{item.postDate}</span>
                                    </div>
                                  </div>
                                  <h3 className="title">
                                    <a href="#">{item.postTitle}</a>
                                  </h3>
                                  <p className="text">{item.postDesc}</p>
                                  <a href="#">Read more</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
