"use client"
import AdOne from '@/components/AdsWidget/AdOne';
import FeatureNewsCarousel from '@/components/FeatureNews/FeatureNewsCarousel';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import HeaderThree from '@/components/Layout/Header/HeaderThree';
import Layout from '@/components/Layout/Layout';
import BusinessNews from '@/components/News/BusinessNews';
import EntertainmentNews from '@/components/News/EntertainmentNews';
import NewsGallary from '@/components/News/NewsGallary';
import PopularNewsCarousel from '@/components/News/PopularNewsCarousel';
import PostCarousel from '@/components/News/PostCarousel';
import SportsNewsCarousel from '@/components/News/SportsNewsCarousel';
import TrendingCarousel from '@/components/News/TrendingCarousel';
import TwoPostCarousel from '@/components/News/TwoPostCarousel';
import VideoNews from '@/components/News/VideoNews';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import MostShare from '@/components/Sidebar/MostShare';
import MostviewNews from '@/components/Sidebar/MostviewNews';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import SidebarCategories from '@/components/Sidebar/SidebarCategories';
import SportsFixtures from '@/components/Sidebar/SportsFixtures';
import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
import TrendingNewPost from '@/components/TrendingNews/TrendingNewPost';
import useToggle from '@/Hooks/useToggle';

import Link from 'next/link';

export default function HomeTwo() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-dark">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <HeaderThree action={drawerAction.toggle} />
        <PostCarousel dark="true" />
        <section className="post__gallery__area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <NewsGallary />
              </div>
              <div className="col-lg-4">
                <div className="post_gallery_sidebar post_gallery_sidebar_dark">
                  <NewsTabs dark />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeatureNewsCarousel dark="true" />
        <section className="trending-news-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title section-title-2">
                  <h3 className="title">Trending News</h3>
                </div>
                <TrendingCarousel dark />
                <TrendingNewPost dark />
              </div>
              <div className="col-lg-4">
                <div className="trending-right-sidebar">
                  <WidgetOne dark />
                  <MostviewNews dark />
                </div>
              </div>
            </div>
          </div>
        </section>
        <TwoPostCarousel dark />
        <section className="video-news-area video-news-dark">
          <div className="container custom-container">
            <div className="video-news-box video-news-box-dark">
              <div className="row">
                <div className="col-lg-8">
                  <VideoNews dark />
                </div>
                <div className="col-lg-4">
                  <PopularNewsCarousel dark />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="all-post-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <EntertainmentNews dark />
                <div className="sports-news-area">
                  <div className="section-title section-title-2">
                    <h3 className="title">Sports News</h3>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="trending-news-item trending-news-item-dark mb-30">
                        <div className="trending-news-thumb">
                          <img src="/images/sports-news.jpg" alt="sports" />
                        </div>
                        <div className="trending-news-content">
                          <div className="post-meta">
                            <div className="meta-categories">
                              <Link href="/post-details-two">TECHNOLOGY</Link>
                            </div>
                            <div className="meta-date">
                              <span>March 26, 2020</span>
                            </div>
                          </div>
                          <h3 className="title">
                            <Link href="/post-details-two">
                              There may be no consoles in the future ea exec
                              says
                            </Link>
                          </h3>
                          <p className="text">
                            The property, complete with 30-seat screening from
                            room, a 100-seat amphitheater and a swimming pond
                            with sandy shower…
                          </p>
                          <Link href="/post-details-two">Read more</Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <SportsNewsCarousel dark />
                    </div>
                  </div>
                </div>
                <div className="post-add mt-30">
                  <a href="#">
                    <img src="/images/ads/banner.png" alt="ad" />
                  </a>
                </div>
                <BusinessNews dark />
              </div>
              <div className="col-lg-4">
                <MostShare />
                <SportsFixtures dark />
                <NewsLetter dark />
                <SidebarCategories dark />
                <AdOne />
              </div>
            </div>
          </div>
        </section>
        <Footer dark />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
