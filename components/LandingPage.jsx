import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Create this file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Houseplant Store</h1>
      <p>Welcome to Houseplant Store, your one-stop shop for all kinds of houseplants. Discover a variety of beautiful and healthy plants to brighten up your home.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
