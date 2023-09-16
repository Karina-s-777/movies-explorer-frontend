import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="technology" id="techs">
      <h2 className="technology__title">Технологии</h2>
      <h3 className="technology__section-title">7 технологий</h3>
      <p className="technology__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="technology__cards">
        <li className="technology__card-item">HTML</li>
        <li className="technology__card-item">CSS</li>
        <li className="technology__card-item">JS</li>
        <li className="technology__card-item">React</li>
        <li className="technology__card-item">Git</li>
        <li className="technology__card-item">Express.js</li>
        <li className="technology__card-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
