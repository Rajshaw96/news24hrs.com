import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <Layout>
      <section className="error-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="error-thumb text-center">
                <img src="/images/404.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="error-content text-center">
                <h3 className="title">Page not found</h3>
                <p>
                  Sorry the page you were looking for cannot be found. Try
                  searching for the best match or browse the links below:
                </p>
                <ul>
                  <li>
                    <Link className="main-btn" href="/">
                      GO TO HOME
                    </Link>
                  </li>
                  <li>
                    <Link className="main-btn btn-2" href="/contact">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
