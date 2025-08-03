"use client"
import ContactFormArea from '@/components/Contact/ContactFormArea';
import ContactInfo from '@/components/Contact/ContactInfo';
import Drawer from '@/components/Layout/Drawer/Drawer';
import Footer from '@/components/Layout/Footer/Footer';
import FooterCopyright from '@/components/Layout/Footer/FooterCopyright';
import Header from '@/components/Layout/Header/Header';
import Layout from '@/components/Layout/Layout';
import useToggle from '@/Hooks/useToggle';
import React from 'react';

export default function Contact() {
  const [drawer, drawerAction] = useToggle(false);
  return (
    <Layout title="Contact">
      <div className="home-1-bg">
        <Drawer drawer={drawer} action={drawerAction.toggle} />
        <Header action={drawerAction.toggle} />
        <ContactInfo />
        <ContactFormArea />
        <Footer />
        <FooterCopyright />
      </div>
    </Layout>
  );
}
