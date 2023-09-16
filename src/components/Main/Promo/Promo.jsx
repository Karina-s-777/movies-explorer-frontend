import promoLogo from "../../../images/pic__COLOR_landing-logo.svg";
import "./Promo.css"

function Promo() {
  return(
    <section className="promo">
      <img src={promoLogo} alt="Логотип проекта" className="promo__logo"/>
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  )
}

export default Promo