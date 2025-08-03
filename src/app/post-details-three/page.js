"use client"
import AdOne from '@/components/AdsWidget/AdOne';
import WideAdWidget from '@/components/AdsWidget/WideAdWidget';
import CommentForm from '@/components/Comments/CommentForm';
import CommentList from '@/components/Comments/CommentList';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import NewsLetter from '@/components/Newsletter/NewsLetter';
import TrendingNewsWidget from '@/components/NewsWidgets/TrendNewsWidget';
import BreadCrumb from '@/components/Others/BreadCrumb';
import LatestNews from '@/components/Others/LatestNews';
import MostShare from '@/components/Sidebar/MostShare';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import WidgetOne from '@/components/SocialMediaWidgets/WidgetOne';
import TrendingSingleCarousel from '@/components/TrendingNews/TrendingSingleCarousel';
import useToggle from '@/Hooks/useToggle';
import React from 'react';

export default function PostDetailsThree() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <section className="post-layout-1-area post-layout-3-area pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BreadCrumb CategoryName="Health" />
              </div>
              <div className="col-lg-8">
                <div className="post-layout-top-content post-layout-top-content-3">
                  <div className="post-categories d-flex justify-content-between align-content-center">
                    <div className="categories-share">
                      <ul>
                        <li>
                          <i className="fas fa-comment"></i>45020
                        </li>
                        <li>
                          <i className="fas fa-fire"></i>45020
                        </li>
                        <li>6 minutes read</li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-content">
                    <h3 className="title">
                      Digital Asset help compan design create and run the next
                      generation of business applications.{' '}
                    </h3>
                    <div className="post-author">
                      <div className="author-info">
                        <div className="thumb">
                          <img src="/images/author.png" alt="" />
                        </div>
                        <h5 className="title">Subash Chandra</h5>
                        <ul>
                          <li>March 26, 2020</li>
                          <li>Updated 1:58 p.m. ET</li>
                        </ul>
                      </div>
                      <div className="author-social">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-heart"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fal fa-bookmark"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-ellipsis-v"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="thumb">
                      <img src="/images/post-layout.png" alt="" />
                    </div>
                  </div>
                  <div className="post-text mt-30">
                    <p>
                      Entilators will be taken from certain New York hospitals
                      and redistributed to the worst-hit parts of the state
                      under an order to be signed by Governor Andrew Cuomo.
                    </p>
                    <p>
                      New York saw its highest single-day increase in deaths, up
                      by 562 to 2,935 - nearly half of all virus-related US
                      deaths recorded yesterday. The White House may advise
                      those in virus hotspots to wear face coverings in public
                      to help stem the spread.
                    </p>
                    <p>The US now has 245,658 Covid-19 cases.</p>
                    <p>
                      A shortage of several hundred ventilators in New York
                      City, the epicentre of the outbreak in the US, prompted Mr
                      Cuomo to say that he will order the machines be taken from
                      various parts of the state and give them to harder-hit
                      areas.
                    </p>
                    <p>
                      Amid a deepening crisis, top health official{' '}
                      <span className="user">Dr Anthony Fauci</span> has said he
                      believes all states should issue stay-at-home orders.
                    </p>
                    <p>
                      “I don’t understand why that’s not happening,” Dr Fauci
                      told CNN on Thursday. “If you look at what’s going on in
                      this country, I just don’t understand why we’re not doing
                      that.”
                    </p>
                    <p>
                      “You’ve got to put your foot on the accelerator to bring
                      that number down,” he added, referring to infection and
                      death rates.
                    </p>
                    <h3 className="title">What’s the debate over masks?</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text">
                          <p>
                            Masks may also help lower the risk of individuals
                            catching the virus through the droplets another
                            person’s sneeze or a cough - and people can be
                            taught how put masks on and take them off correctly
                            they argue.
                          </p>
                          <p>
                            On Thursday New York mayor Bill de Blasio urged all
                            New Yorkers to cover their faces when outside and
                            near others, but not to use surgical masks, which
                            are in short supply.
                          </p>
                          <p>
                            Meanwhile, residents in Laredo, Texas will know is
                            face a $1,000 (£816) fine if they fail to cover
                            their noses and mouths while outside, after
                            officials issued an emergency ordinance to
                            approximately 250,000 residents this weekend.
                            However, more and more health experts now say
                            they’re benefits. They argue that the public use of
                            masks can primarily help by preventing.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text">
                          <img src="/images/post-thumb-7.png" alt="" />
                          <p className="mt-20">
                            Masks may also help lower the risk of individuals
                            catching the virus through the droplets another
                            person’s sneeze or a cough - and people can be
                            taught how put masks on and take them off correctly
                            they argue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-text">
                    <div className="play-thumb mt-10 mb-35">
                      <img src="/images/post-play-thumb.jpg" alt="" />
                      <span>
                        I just had a baby - now I’m going to the frontline.
                      </span>
                      <a
                        className="video-popup"
                        href="https://www.youtube.com/watch?v=JIY8wk4KBhI"
                      >
                        <i className="fas fa-play"></i>
                      </a>
                    </div>
                    <h3 className="title">Which states are not in lockdown?</h3>
                    <ul>
                      <li>
                        <a href="#">Should more of us wear face masks?</a>
                      </li>
                      <li>
                        <a href="#">
                          <u>
                            Why some countries wear face masks and others don’t
                          </u>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Coronavirus: Are homemade face masks safe?
                        </a>
                      </li>
                    </ul>
                    <p>
                      The comments from Dr Fauci, who heads the National
                      Institute of Allergy and Infectious Diseases, appeared to
                      contradict those of President Trump, who has consistently
                      dismissed the notion of a nationwide lockdown.
                    </p>
                    <p>
                      “It’s awfully tough to say, ‘close it down.’ We have to
                      have a little bit of flexibility,” Mr Trump said on
                      Wednesday.
                    </p>
                  </div>
                  <div className="post-quote post-quote-3-style text-center">
                    <div className="post-quote-content">
                      <p>
                        I must explain to you how all this mistake idea
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure because it is
                        pleasure.
                      </p>
                      <div className="user">
                        <img src="/images/author.png" alt="" />
                        <h5 className="title">Subash Chandra</h5>
                        <span>Founder at Seative Digital</span>
                      </div>
                    </div>
                  </div>
                  <div className="post-text mt-35">
                    <p>
                      Both the US Centers for Disease Control (CDC) and the
                      World Health Organization are reassessing their guidance
                      on face masks, as experts race to find ways to fight the
                      highly contagious virus.
                    </p>
                    <p>
                      Covid-19 is carried in airborne droplets from people
                      coughing or sneezing, but there is some dispute over how
                      far people should distance themselves from each other, and
                      whether masks are useful when used by the public.
                    </p>
                    <div className="thumb pt-10 pb-35">
                      <img src="/images/post-thumb-4.png" alt="" />
                    </div>
                    <p>
                      The next day I came back to my team and said, This is what
                      I just heard, we have to get ready, he said. We knew that
                      it wasn’t going to be long before we were going to have to
                      deal with it.
                    </p>
                    <p>
                      Mr. Hogan has also leaned on his wife, Yumi Hogan, a
                      Korean immigrant, who was also at the governor’s
                      convention, which included a dinner at the Korean
                      ambassador’s home. As the first Korean first lady in
                      American history, Ms. Hogan has become something of an
                      icon in South Korea. I just grabbed my wife and said,
                      Look, you speak Korean. You know the president. You know
                      the first lady. You know the ambassador. Let’s talk to
                      them in Korean, and tell them we need their help.
                    </p>
                  </div>
                  <div className="post-tags">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-tag"></i> Tags
                        </a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">World</a>
                      </li>
                      <li>
                        <a href="#">Corona</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="post-reader-text post-reader-text-2 post-reader-text-3 pt-50">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="post-reader-prev">
                        <span>
                          PREVIOUS NEWS <i className="fal fa-angle-right"></i>
                        </span>
                        <h4 className="title">
                          <a href="#">
                            Kushner puts himself in middle of white house’s
                            chaotic coronavirus response.
                          </a>
                        </h4>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="post-reader-prev">
                        <span>
                          NEXT NEWS <i className="fal fa-angle-right"></i>
                        </span>
                        <h4 className="title">
                          <a href="#">
                            C.I.A. Hunts for authentic virus totals in china,
                            dismissing government tallies
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="post_gallery_sidebar mt-20">
                  <NewsTabs />
                  <WidgetOne customClass="mt-40" />
                  <TrendingSingleCarousel />
                  <TrendingNewsWidget />
                  <AdOne />
                  <MostShare customClass="mt-40" />
                  <NewsLetter />
                </div>
              </div>
            </div>
          </div>
        </section>

        <LatestNews />
        <CommentForm />
        <CommentList />
        <WideAdWidget />
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
