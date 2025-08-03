import AboutNewsArea from '@/components/About/AboutNewsArea';
// import AuthorProfile from '@/components/About/AuthorProfile';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Layout from '@/components/Layout/Layout';
import React from 'react';

export default function About() {
  return (
    <Layout title="About">
      <div className="home-1-bg">
        {/* <AuthorProfile /> */}
        <AboutNewsArea />
      </div>
      <Footer />
      <FooterCopyright />
    </Layout>
  );
}
