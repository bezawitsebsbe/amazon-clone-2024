import React from 'react'
import './Footer.css';


const Footer = () => {

  const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    };
  return (
    
      <footer>
        <div className="foot-panel1" onClick={scrollToTop}>Back to Top</div>
      
      <div className="foot-panel2">
        <ul>
          <p>Get to know Us</p>
          <li>Careers</li>
          <li>Blog</li>
          <li>about limazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Services</li>
          <li>Amazon Sciences</li>
        </ul>
        <ul>
          <p>Make Money with Us</p>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hub</li>
          <li>›See More Make Money with Us</li>
        </ul>
        <ul>
          <p>Amazon Payment Products</p>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
        <ul>
          <p>Let Us Help You</p>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li
            >Shipping Rates &
            <pre>Policies</pre>
          </li>
          <li
            >Returns &
            <pre>Replacements</pre>
          </li>
          <li
            >Manage Your
            <pre>Content and Devices</pre>
          </li>
          <li>Amazon Assistant</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="foot-panel3">
        <div className="logo"></div>
      </div>
      <div className="foot-panel4">
        <div className="pages">
          <li>Conditions of Use</li>
          <li>Privacy Notice</li>
          <li>Your Ads Privacy Choices</li>
        </div>
        <div className="copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
    
  )
}

export default Footer
