"use client"
import WideAdWidget from '@/components/AdsWidget/WideAdWidget';
import CommentForm from '@/components/Comments/CommentForm';
import CommentList from '@/components/Comments/CommentList';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import BreadCrumb from '@/components/Others/BreadCrumb';
import LatestNews from '@/components/Others/LatestNews';
import NewsTabs from '@/components/Sidebar/NewsTabs';
import useToggle from '@/Hooks/useToggle';
import React from 'react';

export default function PostDetailsTwo() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout>
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <section className="post-layout-1-area post-layout-2-area pb-80">
          <div className="container">
            <div className="row justify-content-lg-center">
              <div className="col-8">
                <BreadCrumb CategoryName="Health" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="post-layout-top-content post-layout-top-content-2">
                  <div className="thumb">
                    <img src="/images/post-thumb-5.png" alt="" />
                  </div>
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
                  <div className="post-content">
                    <h3 className="title">
                      Japan’s virus success has puzzled the world. Is its luck
                      running out?
                    </h3>
                  </div>
                  <div className="post-categories d-flex justify-content-start align-content-center">
                    <div className="categories-item">
                      <span>HEALTH</span>
                    </div>
                    <div className="categories-share">
                      <ul>
                        <li>
                          <i className="fas fa-comment"></i>45020
                        </li>
                        <li>
                          <i className="fas fa-fire"></i>45020
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="post-text mt-30">
                    <p>
                      Ventilators will be taken from certain New York hospitals
                      and redistributed to the worst-hit parts of state under an
                      order to be signed by Governor Andrew Cuomo.
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
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="post-text pt-20">
                        <h5 className="title">What’s the debate over masks?</h5>
                        <p>
                          Masks may also help lower the risk of individuals
                          catching the virus through the droplets another
                          person’s sneeze or a cough - and people can be taught
                          how put masks on and take them off correctly they
                          argue.
                        </p>
                        <p>
                          On Thursday New York mayor Bill de Blasio urged all
                          New Yorkers to cover their faces when outside and near
                          others, but not to use surgical masks, which are in
                          short supply.
                        </p>
                        <p>
                          Meanwhile, residents in Laredo, Texas will know is
                          face a $1,000 (£816) fine if they fail to cover their
                          noses and mouths while outside, after officials issued
                          an emergency ordinance to approximately 250,000
                          residents this weekend. However, more and more health
                          experts now say they’re benefits. They argue that the
                          public use of masks can primarily help by preventing.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="post_gallery_sidebar">
                        <NewsTabs />
                      </div>
                    </div>
                  </div>
                  <div className="post-text pt-20">
                    <p>
                      Masks may also help lower the risk of individuals catching
                      the virus through the droplets from another person’s
                      sneeze or a cough - and people can be taught how put masks
                      on and take them off correctly, they argue.
                    </p>
                    <p>
                      On Thursday New York mayor Bill de Blasio urged all New
                      Yorkers to cover their faces when outside and near others,
                      but not to use surgical masks, which are in short supply.
                    </p>
                    <p>
                      “It could be a scarf. It could be something you create
                      yourself at home. It could be a bandana,” he said.
                      Governor Cuomo weighed in on Friday, saying{' '}
                      <span className="quote-text">
                        “i think it’s fair to say that the masks couldn’t hurt
                        unless they gave you a false sense of security.”
                      </span>
                    </p>
                    <p>
                      Meanwhile, residents in Laredo, Texas will now face a
                      $1,000 (£816) fine if they fail to cover their noses and
                      mouths while outside, after city officials issued an
                      emergency ordinance to its approximately 250,000 residents
                      this week.
                    </p>
                  </div>
                  <div className="post-text">
                    <div className="row pt-10">
                      <div className="col-lg-6">
                        <div className="post-thumb">
                          <img src="/images/post-thumb-6.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text">
                          <p>
                            The WHO advises that ordinary face masks are only
                            effective if combined with careful hand-washing and
                            social-distancing, and so far it does not recommend
                            them generally for healthy people.
                          </p>
                          <p>
                            However, more and more health experts now say there
                            are benefits. They argue that the public use of
                            masks can primarily help by preventing asymptomatic
                            patients - people who have been infected with
                            Covid-19 but are not aware, and not displaying any
                            symptoms - from unknowingly spreading the virus to
                            others.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-text pt-20">
                    <h5 className="title">Which states are not in lockdown?</h5>
                    <p>
                      Both the US Centers for Disease Control (CDC) and the
                      World Health Organization (WHO) are reassessing their
                      guidance on face masks, as experts race to find ways to
                      fight the highly contagious virus.
                    </p>
                    <p>
                      Covid-19 is carried in airborne droplets from people
                      coughing or sneezing, but there is some dispute over how
                      far people should distance themselves from each other, and
                      whether masks are useful when used by the public.
                    </p>
                    <div className="play-thumb mt-20 mb-35">
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
                    <p>
                      Masks may also help lower the risk of individuals catching
                      the virus through the droplets from another person’s
                      sneeze or a cough - and people can be taught how put masks
                      on and take them off correctly, they argue.
                    </p>
                    <p>
                      On Thursday New York mayor Bill de Blasio urged all New
                      Yorkers to cover their faces when outside and near others,
                      but not to use surgical masks, which are in short supply.
                    </p>
                    <p>
                      Meanwhile, residents in Laredo, Texas will now face a
                      $1,000 (£816) fine if they fail to cover their noses and
                      mouths while outside, after city officials issued an
                      emergency ordinance to its approximately 250,000 residents
                      this week.
                    </p>
                  </div>
                  <div className="post-quote post-quote-2-style d-block d-md-flex align-items-center">
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
                      Companies in South Korea said would tests.
                    </p>
                    <div className="add pt-10 pb-35">
                      <a href="#">
                        <img src="/images/ad/ad-1.png" alt="" />
                      </a>
                    </div>
                    <p>
                      In global terms the US has the most Covid-19 cases - more
                      than 245,000. And on Thursday the US authorities said more
                      than 1,000 had died in the past 24 hours - the highest
                      daily toll so far in the world.
                    </p>
                    <p>
                      Hospitals and morgues in New York are struggling to cope
                      with the pandemic, and New York Governor Andrew Cuomo has
                      warned that New York risks running out of ventilators for
                      patients in six days.
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
                  <div className="post-reader-text post-reader-text-2 pt-50">
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
