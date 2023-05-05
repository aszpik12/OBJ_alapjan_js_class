import Termek from "./Termek.js";
import { KEDVENCLISTA, LISTA } from "./adatok.js";

class Termekek {
  #kedvencek = [];
  constructor() {
    const ARTICLE = $("article");
    for (let i = 0; i < LISTA.length; i++) {
      const TERMEK = new Termek(ARTICLE, LISTA[i], i);
    }

    $(window).on("elemKattintas", (event) => {
      KEDVENCLISTA.push(event.detail)
      console.log(KEDVENCLISTA)
    });
  }
}
export default Termekek;
