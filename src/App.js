import { useEffect, useState } from "react";
import Axios from "axios";

//css and bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//components
//assets
import dice from "./images/icon-dice.svg";
import dividerDesktop from "./images/pattern-divider-desktop.svg";
import dividerMobile from "./images/pattern-divider-mobile.svg";

function App() {
  const [advice, setAdvice] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    async function firstAdvice() {
      try {
        const response = await Axios.get(`https://api.adviceslip.com/advice`);
        console.log(response.data);
        setAdvice(response.data.slip.advice);
        setId(response.data.slip.id);
      } catch (e) {
        console.log("there was a problem");
      }
    }
    firstAdvice();
  }, []);

  async function handleDiceIcon() {
    try {
      const response = await Axios.get(`https://api.adviceslip.com/advice`);
      console.log(response.data);
      setAdvice(response.data.slip.advice);
      setId(response.data.slip.id);
    } catch (e) {
      console.log("there was a problem");
    }
  }

  return (
    <div className="container-fluid container-custom">
      <div className="row justify-content-center align-items-center row-custom">
        <div className="col-sm-12 col-lg-4">
          <div className=" text-center mt-3">
            <div className="advice-card d-flex flex-column p-2">
              <div className="id-text">ADVICE #{id}</div>
              <div className="advice-text py-3">"{advice}"</div>
              <div>
                <img src={dividerDesktop} className="divider-custom" alt="separator" />
              </div>
              <span onClick={handleDiceIcon} className="button-custom align-self-center p-3">
                <img src={dice} className="dice-img" alt="click-me" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <AdviceCard />
//     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
//   </header>
// </div>
