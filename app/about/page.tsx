import React from 'react'
import AboutHero from '../components/aboutHero'
import AboutSection from '../components/aboutSection'
import Footer from '../components/Footer';
import AboutPopularProduct from '../components/aboutPopularProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            <Footer />
      </div>
    );
}

export default page
