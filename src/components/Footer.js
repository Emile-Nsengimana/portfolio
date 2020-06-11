import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/Emile-Nsengimana" target="_blank"><FontAwesomeIcon className="footer-links-social footer-links-social_git" icon={faGithub} /></a>
        <a href="https://www.facebook.com/nemile1" target="_blank"><FontAwesomeIcon className="footer-links-social footer-links-social_fb" icon={faFacebook} /></a>
        <a href="https://www.linkedin.com/in/nsengimana-emile-580204111" target="_blank"><FontAwesomeIcon className="footer-links-social footer-links-social_linkedin" icon={faLinkedinIn} /></a>
        <a href="https://www.instagram.com/emilereas7" target="_blank"><FontAwesomeIcon className="footer-links-social footer-links-social_instagram" icon={faInstagram} /></a>
      </div>
      <h5>EMILE NSENGIMANA &copy;2020.</h5>
    </footer>)
};

export default Footer;
