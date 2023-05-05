import Termek from "./Termek.js";
import { KEDVENCLISTA, LISTA } from "./adatok.js";
import Aszinkron from "./Aszinkron.js";

class Termekek {
  #vegpont
  #kedvencek = [];
  constructor() {
    const aszinkron = new Aszinkron();
    this.#vegpont = "http://localhost:3000/LISTA";
    aszinkron.adatBeolvas(this.#vegpont, this.#termekMegjelenito);

    $(window).on("kedvencekhez", (event) => {
      KEDVENCLISTA.push(event.detail);
      console.log(KEDVENCLISTA);
    });

 
    $(window).on("torol", (event) => {
      console.log(event.detail)


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
