import React from 'react';
import TrendingCarousel from '../News/TrendingCarousel';
import MostviewNews from '../Sidebar/MostviewNews';
import WidgetOne from '../SocialMediaWidgets/WidgetOne';
import TrendingNewPost from './TrendingNewPost';

export default function TrendingNewsArea({ customClass, dark }) {
  return (
    <section className={`trending-news-area ${customClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={`section-title ${dark ? 'section-title-2' : ''}`}>
              <h3 className="title">Trending News</h3>
            </div>
            <TrendingCarousel />
            <TrendingNewPost />
          </div>
          <div className="col-lg-4">
            <div className="trending-right-sidebar">
              <WidgetOne />
              <MostviewNews />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
