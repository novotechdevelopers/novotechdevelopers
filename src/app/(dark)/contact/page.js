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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.1368714063315!2d55.334659869624915!3d25.252162011552414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d20373d1ac3%3A0x66dfa72562844eaa!2sEtihad%20Building%20-%2035%208th%20St%20-%20Port%20Saeed%20-%20Dubai!5e0!3m2!1sen!2sae!4v1734952458797!5m2!1sen!2sae"
            width="100%" height="100%" loading="lazy"></iframe>
        </div>
        <Footer hideBGCOLOR />
      </div>
    </>
  )
}
