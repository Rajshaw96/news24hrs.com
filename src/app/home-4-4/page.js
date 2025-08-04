"use client"
import SportsNewsVerticalCard from '@/components/Cards/SportsNewsVerticalCard';
import Drawer from '@/components/Layout/Drawer/Drawer';
import FooterCopyrightLight from '@/components/Layout/Footer/FooterCopyrightLight';
import FooterLight from '@/components/Layout/Footer/FooterLight';
import HeaderTwo from '@/components/Layout/Header/HeaderTwo';
import Layout from '@/components/Layout/Layout';
import ImageCard from '@/components/News/ImageCard';
import InternationalNews from '@/components/News/InternationalNews';
import OpinionNews from '@/components/News/OpinionNews';
import ScienceNewsCarousel from '@/components/News/ScienceNewsCarousel';
import NewsLetterThree from '@/components/Newsletter/NewsLetterThree';
import VideoNewsList from '@/components/Others/VideoNewsList';
import CategoryCardTwo from '@/components/Sidebar/CategoryCardTwo';
import WidgetTwo from '@/components/SocialMediaWidgets/WidgetTwo';
import VerticalTab from '@/components/Tabs/VerticalTab';
import TrendingAreaTwo from '@/components/TrendingNews/TrendingAreaTwo';
import TrendingThreeCol from '@/components/TrendingNews/TrendingThreeCol';
import useToggle from '@/Hooks/useToggle';

export default function HomeFour() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-3-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <HeaderTwo action={drawerAction.toggle} />
        <TrendingThreeCol />
        <TrendingAreaTwo />
        <VideoNewsList />
        <section className="all-post-3-area pb-100">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-8">
                <InternationalNews />
                <div className="ad text-center mt-40">
                  <a href="#">
                    <img src="assets/images/ad/ad-1.png" alt="" />
                  </a>
                </div>
                <ScienceNewsCarousel />
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <SportsNewsVerticalCard />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <ImageCard />
                    <VerticalTab />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="all-post-sidebar-3">
                  <WidgetTwo />
                  <OpinionNews />
                  <NewsLetterThree />
                  <CategoryCardTwo />
                  <div className="ad mt-40">
                    <a href="#">
                      <img src="/images/ads/ad-3.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterLight />
        <FooterCopyrightLight />
      </div>
    </Layout>
  );
}
