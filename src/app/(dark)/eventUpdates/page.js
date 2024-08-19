import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PageHeader from '@/components/Headers/PageHeader';
import BlogList from '@/components/Blogs/BlogList';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Novotech - News Updates'
}

export default function BlogListPage() {
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
      <PageHeader classText="sub-bg" title="Our News."
        paragraph="All the most Current News and events of Our creative team." />
      <BlogList />
      <Footer />
    </>
  )
}
