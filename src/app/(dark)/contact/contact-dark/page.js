import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Contact Us'
}

export default function ContactPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />
        <div className="map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.293006988053!2d55.32961947561479!3d25.260727029124162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzM4LjYiTiA1NcKwMTknNTUuOSJF!5e0!3m2!1sen!2sae!4v1723882432145!5m2!1sen!2sae"
            width="100%" height="100%" loading="lazy"></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </>
  )
}
