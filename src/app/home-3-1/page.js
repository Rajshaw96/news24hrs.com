"use client"
import VerticalBusinessNews from '@/components/Business/VerticalBusinessNews';
import InternationVerticalCard from '@/components/Cards/InternationVerticalCard';
import MostViewVerticalCard from '@/components/Cards/MostViewVerticalCard';
import OpinionCard from '@/components/Cards/OpinionCard';
import SportsNewsVerticalCard from '@/components/Cards/SportsNewsVerticalCard';
import FeatureNewsCarouselTwo from '@/components/FeatureNews/FeatureNewsCarouselTwo';
import FInanceNews from '@/components/Finance/FInanceNews';
import Drawer from '@/components/Layout/Drawer/Drawer';
import FooterCopyrightLight from '@/components/Layout/Footer/FooterCopyrightLight';
import FooterThree from '@/components/Layout/Footer/FooterThree';
import HeaderFour from '@/components/Layout/Header/HeaderFour';
import TopbarThree from '@/components/Layout/Header/TopbarThree';
import Layout from '@/components/Layout/Layout';
import MostViewTwo from '@/components/NewsCarousel/MostViewTwo';
import TrendingLargeCarousel from '@/components/NewsCarousel/TrendingLargeCarousel';
import WhatsNew from '@/components/NewsCarousel/WhatsNew';
import NewsLetterWhite from '@/components/Newsletter/NewsLetterWhite';
import WidgetTwo from '@/components/SocialMediaWidgets/WidgetTwo';
import VerticalTabTwo from '@/components/Tabs/VerticalTabTwo';
import VideoNewsLg from '@/components/VideoNews/VideoNewsLg';
import useToggle from '@/Hooks/useToggle';
import React from 'react';

export default function HomeThreeOne() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-2-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <HeaderFour action={drawerAction.toggle} />
        <section className="all-post-style-2-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-8">
                <TrendingLargeCarousel />
                <div className="feature-news-box mt-40">
                  <div className="section-title">
                    <h3 className="title">Feature News</h3>
                  </div>
                </div>
                <FeatureNewsCarouselTwo />
                <VerticalBusinessNews />
              </div>
              <div className="col-lg-4">
                <div className="all-post-sidebar-style-2 mt-40">
                  <MostViewTwo />
                  <div className="ad mt-40">
                    <a href="#">
                      <img src="/images/ad/ad-3.png" alt="" />
                    </a>
                  </div>
                  <FInanceNews />
                </div>
              </div>
            </div>
          </div>
        </section>
        <VideoNewsLg />
        <section className="post-style-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <VerticalTabTwo />
              </div>
              <div className="col-lg-5 col-md-6">
                <OpinionCard />
              </div>
              <div className="col-lg-4">
                <WhatsNew />
              </div>
            </div>
          </div>
        </section>
        <section className="post-footer-style-2-area pb-100">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <NewsLetterWhite />
                    <SportsNewsVerticalCard />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <MostViewVerticalCard />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post-footer-sidebar">
                  <WidgetTwo />
                </div>
                <InternationVerticalCard />
              </div>
            </div>
          </div>
        </section>
        <FooterThree />
        <FooterCopyrightLight />
      </div>
    </Layout>
  );
}
