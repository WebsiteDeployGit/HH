import React from 'react';
import Features from '../Features/Features';
import Carousel from '../Carousel/Carousel';

const Hero = () => {
  return (
<div className="position-relative overflow-hidden p-3 p-md-5 m-0 text-center bg-body-tertiary" style={{ paddingTop: '1em' }}>
      <div className="col-md-8 p-lg-5 mx-auto my-5 text-start">
        <h1 className="display-3 fw-bold text-center" style={{ fontSize: '4rem', marginTop: '-8rem' }}>Happy Home Concreations</h1>
        <p className="lead fw-normal text-muted mb-3" style={{ marginTop: '2rem' }}>
          Welcome to Happy Home Concreations, where your dream of a perfect home comes to life. We believe that a home is more than just a place to live; it's a reflection of your personality, a sanctuary of comfort, and a canvas for creativity. Our mission is to help you transform your living spaces into an embodiment of your style and a haven of happiness.
        </p>
        <section>
          <h2>Our Story</h2>
          <p>
            Happy Home Concreations was born from a passion for interior design and a love for unique, beautiful, and functional home decor. Our founders, [Founder's Name] and [Co-Founder's Name], embarked on this journey with a vision to create a one-stop destination for homeowners and decorators seeking inspiration and high-quality decor items. With years of experience in the industry, they have curated a collection that caters to diverse tastes and styles, ensuring there's something for everyone.
          </p>
        </section>
        <section>
          <h2>Our Products</h2>
          <p>
            At Happy Home Concreations, we offer a wide range of home decor products that blend aesthetics with functionality. From elegant furniture pieces and chic lighting options to cozy textiles and charming accessories, our collection is designed to elevate every corner of your home. We pride ourselves on sourcing products that are not only beautiful but also crafted with the utmost attention to quality and detail.
          </p>
        </section>
        <section>
          <h2>Sustainability and Craftsmanship</h2>
          <p>
            We are committed to sustainability and ethical craftsmanship. Our products are carefully selected to ensure they meet our high standards for quality and environmental responsibility. We work with artisans and manufacturers who share our values, creating pieces that are not only stunning but also sustainable. This commitment extends to our packaging and business practices, striving to minimize our ecological footprint while delivering exceptional value to our customers.
          </p>
        </section>
        <section>
          <h2>Customer Experience</h2>
          <p>
            At Happy Home Concreations, we understand that decorating your home is a personal and often transformative experience. That's why we prioritize providing exceptional customer service and support. Our team is dedicated to helping you find the perfect pieces to suit your space and style. Whether you're browsing our online store or visiting our showroom, you can expect a seamless and enjoyable shopping experience.
          </p>
        </section>
        <section>
          <h2>Inspiration and Community</h2>
          <p>
            We believe that inspiration is the cornerstone of great design. Our blog, [Blog Name], and social media channels are filled with ideas, tips, and trends to help you bring your vision to life. Join our community of home enthusiasts and share your own creations using #HappyHomeConcreations. We love seeing how our products become a part of your story.
          </p>
        </section>
        <section>
          <h2>Join Us</h2>
          <p>
            Happy Home Concreations is more than a store; it's a community of people who love making their homes beautiful and unique. We invite you to explore our collection, find inspiration, and create a space that truly feels like home. Thank you for choosing Happy Home Concreations to be a part of your journey in transforming your house into a happy home.
          </p>
        </section>
        <p className="lead fw-normal">
          Warm regards,
          <br />
          [Your Name]
          <br />
          Founder, Happy Home Concreations
        </p>
        <div className="d-flex gap-3 justify-content-center lead fw-normal">
          <a className="icon-link" href="#">
            Learn more
            <svg className="bi"><use href="#chevron-right"></use></svg>
          </a>
          <a className="icon-link" href="#">
            Buy
            <svg className="bi"><use href="#chevron-right"></use></svg>
          </a>
        </div>
      </div>
      <div className="product-device shadow-sm d-none d-md-block"></div>
      <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      <Features />
      <Carousel />
    </div>
  );
}

export default Hero;
