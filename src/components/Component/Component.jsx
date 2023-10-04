import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function Component({ name, ...props }) {
  return (
    <>
      <Header name="promo" />
      <Main {...props} />
      <Footer />
    </>
  );
}
