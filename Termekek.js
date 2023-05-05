import Termek from "./Termek.js";
import { KEDVENCLISTA, LISTA } from "./adatok.js";
import Aszinkron from "./Aszinkron.js";

class Termekek {
  #kedvencek = [];
  constructor() {
    const aszinkron = new Aszinkron();
    let vegpont = "adatok.json";
    aszinkron.adatBeolvas(vegpont, this.#termekMegjelenito);

    $(window).on("elemKattintas", (event) => {
      KEDVENCLISTA.push(event.detail);
      console.log(KEDVENCLISTA);
    });
  }

  #termekMegjelenito(lista) {
    let sajatlista = lista.LISTA;
    const ARTICLE = $("article");
    for (let i = 0; i < sajatlista.length; i++) {
      const TERMEK = new Termek(ARTICLE, sajatlista[i]);
    }
  }
}
export default Termekek;
