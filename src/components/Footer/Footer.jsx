import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          <Link to="https://practicum.yandex.ru/"  className="footer__link"  target="_blank">
          Яндекс.Практикум
          </Link>
          <Link to="https://github.com/Karina-s-777"  className="footer__link"  target="_blank">
          Github
          </Link>
        </div>
          
      </div>
      
    </footer>
  )
}

export default Footer;