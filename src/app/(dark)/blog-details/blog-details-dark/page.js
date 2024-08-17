import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogDetails from '@/components/Blogs/BlogDetails';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Russian-Emirati Forum'
}

export default function BlogDetailsPage() {
  return (
    <>
      <Loading />
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar />
      <PageHeader title="Emirati-Russian Investment Forum 2024: A Gateway to Global Business Opportunities" paragraph="We are thrilled to announce the Emirati-Russian Investment Forum, taking place on October 4, 2024, in Dubai. This premier event is designed to foster stronger trade and investment relations between the UAE and Russia, offering unparalleled opportunities for businesses and investors from both regions." />
      <BlogDetails />
      <Footer />
    </>
  )
}