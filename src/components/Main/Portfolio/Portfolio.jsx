import { Link } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
      <li className="portfolio__list-element">
          <Link
            className="portfolio__link"
            to="https://github.com/Karina-s-777/how-to-learn"
            target="_blank"
          >
           Статичный сайт<span className="portfolio__icon">↗</span>
          </Link>
        </li>
        <li className="portfolio__list-element">
          <Link
            className="portfolio__link"
            to="https://github.com/Karina-s-777/russian-travel"
            target="_blank"
          >
            Адаптивный сайт<span className="portfolio__icon ">↗</span>
          </Link>
        </li>
        <li className="portfolio__list-element portfolio__list-element_without-underscore">
          <Link
            className="portfolio__link"
            to="https://github.com/Karina-s-777/express-mesto-gha"
            target="_blank"
          >
            Одностраничное приложение<span className="portfolio__icon">↗</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio