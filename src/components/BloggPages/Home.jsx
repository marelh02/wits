import owl from "../../res/owl.png"
import "./home.css";

export default function Home() {
    return(
      <>
      <div id="homeGrid">
      <div id="b1">
        <h1>
            Bienvenue à Wits
        </h1>
        <p>Le meilleur endroit pour trouver un contenue de qualité</p>
      </div>

      <div id="b2">
      <img id="owl" src={owl} alt="owl" />
      </div>
      </div>
      </>
    );
  }