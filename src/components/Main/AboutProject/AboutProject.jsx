
import "./AboutProject.css"

function AboutProject() {
  return(
<section className="about-project" id="about-project">
  <h2 className="about-project__title">О проекте</h2>
  <ul className="about-project__description">
    <li className="about-project__card">
      <h3 className="about-project__card-title">
        Дипломный проект включал 5 этапов
      </h3>
      <p className="about-project__card-text">
        Составление плана, работу над бэкендом, вёрстку, добавление
        функциональности и финальные доработки.
      </p>
    </li>
    <li className="about-project__card">
      <h3 className="about-project__card-title">
        На выполнение диплома ушло 5 недель
      </h3>
      <p className="about-project__card-text">
        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
        соблюдать, чтобы успешно защититься.
      </p>
    </li>
  </ul>
  <ul className="about-project__time">
    <li className="about-project__time-card">
      <h3 className="about-project__time-card-title about-project__time-card-title_exception">
        1 неделя
      </h3>
      <p className="about-project__time-card-text">Back-end</p>
    </li>
    <li className="about-project__time-card">
      <h3 className="about-project__time-card-title">4 недели</h3>
      <p className="about-project__time-card-text">Front-end</p>
    </li>
  </ul>
</section>
  )
}

export default AboutProject