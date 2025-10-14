"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SidebarCategories({ dark }) {
  const [categories, setCategories] = useState([]);
  const host = process.env.NEXT_PUBLIC_API_URL;

  // An array of the images to cycle through for each category
  const categoryImages = [
    "/images/categories-1.jpg",
    "/images/categories-2.jpg",
    "/images/categories-3.jpg",
    "/images/categories-4.jpg",
    "/images/categories-5.jpg",
    "/images/categories-6.jpg",
  ];

  useEffect(() => {
    async function loadCategories() {
      try {
        // This endpoint should return an array of unique category names
        const res = await fetch(`${host}/api/news`);
        const data = await res.json();
        console.log("Data of category ", data);
        
        // Assuming the API returns an array of strings: ['Business', 'Technology', ...]
        setCategories(data.slice(0, 6)); // Limit to 6 to match the number of images
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    loadCategories();
  }, [host]);

  return (
    <div className="Categories-post mt-40">
      <div
        className={`section-title d-flex justify-content-between align-items-center ${
          dark ? 'section-title-2' : ''
        }`}
      >
        <h3 className="title">Categories</h3>
        <Link href="/categories">SEE ALL</Link>
      </div>
      <div className="Categories-item">
        {categories.map((item, index) => (
          <div className="item" key={index} style={{width: "350px", height: "70px"}}>
            <img
              src={item.image}
              alt={item.category}
              style={{objectFit: "cover",width: "350px", height: "70px"}}
            />
            <div className="Categories-content" >
              <Link href={`/category/${item.category.toLowerCase()}`}>
                <span style={{ textTransform: 'capitalize' }}>{item.category}</span>
                <img src="/images/arrow.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
