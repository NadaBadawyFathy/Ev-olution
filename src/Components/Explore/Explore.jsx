import React from 'react';
import './Explore.css'; 
const Explore = () => {
  return (
    <div className="explore-section" id='explore'>
      <div className="container">
        <h2><span>Explore</span> Our Features</h2>
        <div className="features">
          <div className="feature-item">
            <h4>Feature 1: Discover New Content</h4>
            <p>Explore a vast array of new and exciting content curated just for you. Stay updated with the latest trends.</p>
          </div>
          <div className="feature-item">
            <h4>Feature 2: Personalized Recommendations</h4>
            <p>Based on your preferences, we provide personalized recommendations to enhance your experience.</p>
          </div>
          <div className="feature-item">
            <h4>Feature 3: Seamless Navigation</h4>
            <p>Our platform offers seamless navigation, ensuring you can explore effortlessly and efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
