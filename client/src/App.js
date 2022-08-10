import {useState} from "react";
import Home from './Pages/Home';
import Litepaper from "./Pages/Litepaper";
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Nav2 from './Components/Nav/Nav2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mistake404 from './Pages/Mistake404';
import "./App.scss"
import ThankYouPage from './Pages/ThankYouPage';
import CookiesPage from './Pages/Cookies';
import Welcome from "./Pages/Welcome";
import Giveaway from "./Pages/Giveaway";
import AffiliatePage from './Pages/Affiliate';
import HowToBuy from './Pages/HowToBuy';
import Partners from './Pages/Partners';
import Docs from './Pages/Docs'



setInterval(window.onload = function () {
  const cookieContainer = document.querySelector(".cookie-container");
  const cookieButton = document.querySelector(".cookie-btn");
  if (cookieButton) {

    cookieButton.addEventListener("click", () => {
      cookieContainer.classList.remove("active");
      localStorage.setItem("cookieBannerDisplayed", "true");
    });

    setTimeout(() => {
      if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.add("active");
      }
    }, 2000);
  }

});


function App() {
  //eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <div className="App" id="light">
      <Router>
        <Switch>
          <Route path="/" exact>
          <Nav />
            <Home />
          </Route>
          <Route path="/Safepay">
          <Nav />
            <Litepaper />
          </Route>
          <Route path="/Partners">
          <Nav />
            <Partners />
          </Route>
          <Route path="/Documentation">
          <Nav />
            <Docs />
          </Route>
          <Route path="/ThankYou">
          <Nav />
            <ThankYouPage />
          </Route>
          <Route path="/Cookies">
          <Nav />
            <CookiesPage />
          </Route>
          <Route path="/Giveaway">
          <Nav />
            <Giveaway />
          </Route>
          <Route path="/Welcome">
          <Nav />
            <Welcome />
            </Route>
          <Route path="/Affiliate">
          <Nav />
            <AffiliatePage />
          </Route>
          <Route path="/HowToBuy">
          <Nav2 />
            <HowToBuy />
          </Route>
          <Mistake404 />
          <Route>

          </Route>
        </Switch>
        <Footer />
      </Router>
      <div className="cookie-container">
        <div className="cookies_block">
          <p>
            This site uses cookies to offer you a better browsing experience.
            Find out more on <a href="/cookies">how we use cookies.</a>
          </p>
          <div className="btn_cookies">
            <button className="cookie-btn">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;