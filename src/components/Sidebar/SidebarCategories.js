import Link from 'next/link';
import React from 'react';

export default function SidebarCategories({ dark }) {
  return (
    <div className="Categories-post mt-40">
      <div
        className={`section-title d-flex justify-content-between align-items-center ${
          dark ? 'section-title-2' : ''
        }`}
      >
        <h3 className="title">Categories</h3>
        <Link href="/business">SEE ALL </Link>
      </div>
      <div className="Categories-item">
        <div className="item">
          <img src="/images/categories-1.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>Restaurant</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <img src="/images/categories-2.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>Entertainment</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <img src="/images/categories-3.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>Financial</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <img src="/images/categories-4.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>Business</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <img src="/images/categories-5.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>Scientists</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
        <div className="item">
          <img src="/images/categories-6.jpg" alt="categories" />
          <div className="Categories-content">
            <Link href="/business">
              <span>International’s</span>
              <img src="/images/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
