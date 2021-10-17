import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Shared/Fooetr/Footer';
import Menubar from '../Shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Category></Category>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;