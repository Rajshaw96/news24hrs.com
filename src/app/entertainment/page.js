"use client"
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import LogoBanner from '@/components/Layout/Header/LogoBanner';
import Topbar from '@/components/Layout/Header/Topbar';
import Layout from '@/components/Layout/Layout';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import TrendingNewsWidget from '@/components/NewsWidgets/TrendNewsWidget';
import BreadCrumb from '@/components/Others/BreadCrumb';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
import useToggle from '@/Hooks/useToggle';
import React from 'react';

const postData = [
  {
    postThumb: '/images/business-post/business-post-1.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-2.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-3.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-4.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-5.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-6.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-4.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-2.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-3.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
  {
    postThumb: '/images/business-post/business-post-2.jpg',
    postTitle: 'She tried for many years now finallize pregnant happy and',
    postDate: 'April 26, 2020',
    postDesc:
      'She tried for so many years and now she finally pregnant happy and things are going well &amp; it just happens that this pregnancy takes place with this epidemic…',
  },
];

export default function Entertainment() {
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
                        {postData.map((item, i) => (
                          <div
                            className="bussiness-post-item mb-40"
                            key={i + 1}
                          >
                            <div className="bussiness-post-thumb">
                              <img src={item.postThumb} alt="business" />
                            </div>
                            <div className="bussiness-post-content">
                              <h3 className="title">
                                <a href="#">{item.postTitle}</a>
                              </h3>
                              <div className="meta-date-link">
                                <span>{item.postDate}</span>
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
                              <p>{item.postDesc}</p>
                              <a href="#">
                                LEARN MORE{' '}
                                <img src="/images/arrow-2.svg" alt="" />
                              </a>
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
