import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import aboutMeFoto from "../../../images/mefoto.jpeg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__text">
          <h3 className="about-me__info-title">Карина</h3>
          <p className="about-me__info-subtitle">
            Фронтенд-разработчик, 29 лет
          </p>
          <p className="about-me__info-text">
           Я родилась в прекрасном городе Зеленоградске. Сейчас живу в Калининграде.
           У меня есть три котика, я обожаю читать захватывающие кники, летать на самолете и смотреть из окна на салюты. 
           По образованию я менеджер инновационных проектов и сейчас стремлюсь найти себя в веб-разработке и посвятить этому свое время
          </p>
          <Link
            to="https://github.com/Karina-s-777"
            className="about-me__info-link"
            target="_blank"
          >
            Github
          </Link>
        </div>
        <img src={aboutMeFoto} alt="Фота автора" className="about-me__foto" />
      </div>
    </section>
  );
}

export default AboutMe;
