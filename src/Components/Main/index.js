import React, { useEffect } from 'react';
import Header from '../Header';
import Main from './main';
import '../../styles/main.css'
import Search from './Search/search.js';
import Slider from './Slider'
import Footer from '../Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home">
      <Header />
      <main id="main">
        <Main data-aos="fade-up" data-aos-delay="200" />
        <Search/>
        <Slider data-aos="fade-up" data-aos-delay="200" />
      </main>
      <Footer />
    </div>
  );
}