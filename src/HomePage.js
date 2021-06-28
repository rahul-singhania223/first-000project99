import React from 'react';
import Header from './Header';
import Title from './Title';
import OfferSection from './HomeOfferSection'
import ProductCategorySection from './ProductCategorySection';
import TimelineOfferSection from './TimelineOfferSection';
import NewsSection from './NewsSection';
import SignupSection from './SignupSection';
import Footer from './Footer';

function HomePage(props) {
    return (
        <div>
            <Header />
            <Title />
            <OfferSection />
            <ProductCategorySection />
            <TimelineOfferSection />
            <SignupSection />
        </div>
    );
}

export default HomePage;