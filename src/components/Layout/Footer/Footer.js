import Link from 'next/link';
import React from 'react';
import CategoryWidget from './CategoryWidget';

export default function Footer({ dark }) {
  return (
    <footer className={`footer-area ${dark ? 'footer-dark' : ''}`}>
      <div className="container">
        <div className="footer-topbar">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-5">
              <div className="footer-logo">
                <Link href="/">
                  <img src="/images/logo/logo-color.png" alt="" width={"200px"} />
                </Link>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-7">
              <div className="footer-newaletter">
                <div className="input-box">
                  <input type="text" placeholder="Your email address" />
                  <button type="button">SIGN UP</button>
                </div>
                <p>We hate spam as much as you do</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widget-area">
          <div className="row">
            <div className="col-lg-8">
              <div className="footer-widget-right-border">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="widget widget-list">
                      <div className="section-title section-title-2">
                        <h3 className="title">News categories</h3>
                      </div>
                      <div className="list d-flex justify-content-between">
                        <ul>
                          <li>
                            <Link href="/category/politics">Politics</Link>
                          </li>
                          <li>
                            <Link href="/category/business">Business</Link>
                          </li>
                          <li>
                            <Link href="/category/technology">Technology</Link>
                          </li>
                          <li>
                            <Link href="/category/science">Science</Link>
                          </li>
                          <li>
                            <Link href="/category/health">Health</Link>
                          </li>
                          <li>
                            <Link href="/category/sports">Sports</Link>
                          </li>
                          <li>
                            <Link href="/category/entertainment">
                              Entertainment
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link href="/category/education">Education</Link>
                          </li>
                          <li>
                            <Link href="/category/obituaries">Obituaries</Link>
                          </li>
                          <li>
                            <Link href="/category/corrections">
                              Corrections
                            </Link>
                          </li>
                          <li>
                            <Link href="/category/education">Education</Link>
                          </li>
                          <li>
                            <Link href="/todays-paper">Today’s Paper</Link>
                          </li>
                          <li>
                            <Link href="/category/corrections">
                              Corrections
                            </Link>
                          </li>
                          <li>
                            <Link href="/category/foods">Foods</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="widget widget-list widget-list-2">
                      <div className="section-title section-title-2">
                        <h3 className="title">Living</h3>
                      </div>
                      <div className="list d-flex justify-content-between">
                        <ul>
                          <li>
                            <Link href="/living/crossword">Crossword</Link>
                          </li>
                          <li>
                            <Link href="/living/food">Food</Link>
                          </li>
                          <li>
                            <Link href="/living/automobiles">Automobiles</Link>
                          </li>
                          <li>
                            <Link href="/living/education">Education</Link>
                          </li>
                          <li>
                            <Link href="/living/health">Health</Link>
                          </li>
                          <li>
                            <Link href="/living/magazine">Magazine</Link>
                          </li>
                          <li>
                            <Link href="/living/weddings">Weddings</Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link href="/classifieds">Classifieds</Link>
                          </li>
                          <li>
                            <Link href="/photographies">Photographies</Link>
                          </li>
                          <li>
                            <Link href="/store">NYT Store</Link>
                          </li>
                          <li>
                            <Link href="/journalisms">Journalisms</Link>
                          </li>
                          <li>
                            <Link href="/public-editor">Public Editor</Link>
                          </li>
                          <li>
                            <Link href="/tools-services">Tools & Services</Link>
                          </li>
                          <li>
                            <Link href="/my-account">My Account</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-twitter-post">
                  <div className="row">
                    <div className="col-lg-5 col-md-5">
                      <div className="widget widget-list">
                        <div className="section-title section-title-2">
                          <h3 className="title">Opinion</h3>
                        </div>
                        <div className="list">
                          <ul>
                            <li>
                              <Link href="/opinion/todays-opinion">
                                Today’s Opinion
                              </Link>
                            </li>
                            <li>
                              <Link href="/opinion/op-ed-contributing">
                                Op-Ed Contributing
                              </Link>
                            </li>
                            <li>
                              <Link href="/opinion/contributing-writers">
                                Contributing Writers
                              </Link>
                            </li>
                            <li>
                              <Link href="/news/business">Business News</Link>
                            </li>
                            <li>
                              <Link href="/collections">Collections</Link>
                            </li>
                            <li>
                              <Link href="/todays-paper">Today’s Paper</Link>
                            </li>
                            <li>
                              <Link href="/saturday-review">Saturday Review</Link>
                            </li>
                            <li>
                              <Link href="/product-review">Product Review</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div className="widget widget-twitter-post">
                        <div className="twitter-post">
                          <div className="icon">
                            <i className="fab fa-twitter"></i>
                          </div>
                          <div className="twitter-content">
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…
                              <a
                                href="https://dribbble.com/subash_chandra"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                @newspark #technology
                                https://dribbble.com/subash_chandra
                              </a>
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                        <div className="twitter-post">
                          <div className="icon">
                            <i className="fab fa-twitter"></i>
                          </div>
                          <div className="twitter-content">
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…
                              <a
                                href="https://dribbble.com/subash_chandra"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                @newspark #technology
                                https://dribbble.com/subash_chandra
                              </a>
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-rightbar mt-60">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <CategoryWidget />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="widget wedget-service">
                      <div className="section-title section-title-2">
                        <h3 className="title">Newspark news services</h3>
                      </div>
                      <div className="service-item">
                        <ul>
                          <li>
                            <Link href="/mobile">
                              <i className="fal fa-mobile-android-alt"></i> On
                              your mobile
                            </Link>
                          </li>
                          <li>
                            <Link href="/smart-speakers">
                              <i className="fal fa-microphone-alt"></i> On smart
                              speakers
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact">
                              <i className="fal fa-envelope"></i> Contact
                              Newspark news
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
