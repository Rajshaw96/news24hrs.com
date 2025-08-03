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
import React from 'react';

const postData = [
  {
    postThumb: '/images/feature/feature-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-3.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-3.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-3.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-3.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-1.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
  {
    postThumb: '/images/feature/feature-news-2.jpg',
    postTag: 'TECHNOLOGY',
    postDesc:
      'The worried doctors stood together after their rounds, weighing the risks.',
  },
];

export default function Sports() {
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
                <BreadCrumb CategoryName="Sports" />
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
                      {postData.map((item, i) => (
                        <div class="col-md-6" key={i + 1}>
                          <div class="feature-news-item">
                            <div class="feature-news-thumb">
                              <img src={item.postThumb} alt="feature" />
                              <div class="meta-categores">
                                <span>{item.postTag}</span>
                              </div>
                            </div>
                            <div class="feature-news-content">
                              <p>{item.postDesc}</p>
                            </div>
                          </div>
                        </div>
                      ))}

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
