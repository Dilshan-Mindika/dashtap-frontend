import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="01.jpeg" alt="Logo" className="footer-logo" />
          <span className="footer-company">DASH TAP</span>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
            <p>© 2024. All rights reserved.</p>
          </div>
          <div className='contacts'>
            <div >
              <p className="footer-contact">Tel: 071 xxx xxxx</p>
            </div>
            <div className="footer-socials">
              <a href="https://dpitcampus.lk/si"><i className="fab fa-facebook"></i></a>
              <a href="https://dpitcampus.lk/si"><i className="fab fa-twitter"></i></a>
              <a href="https://dpitcampus.lk/si"><i className="fab fa-youtube"></i></a>
              <a href="https://dpitcampus.lk/si"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;