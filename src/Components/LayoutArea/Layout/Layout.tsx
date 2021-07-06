import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../../HomeArea/Main/Main";
import Menu from "../Menu/Menu";
import "./Layout.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "../Routing/Routing";

export function Layout(): JSX.Element {
  return (
    // <div className="Layout">
    <BrowserRouter>
    {/* <marquee>I Love Leo Messi</marquee> */}
      <section>
        <header>
            <Header />
        </header>
        <aside>
            <Menu />
        </aside>
        <main>
            {/* <Main /> */}
            <Routing/>
        </main>
        <footer>
            <Footer />
        </footer>
      </section>
      </BrowserRouter>
  //  </div>
  );
}
