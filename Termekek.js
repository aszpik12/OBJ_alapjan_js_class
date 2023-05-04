import Termek from "./Termek.js";
import { LISTA } from "./adatok.js";

class Termekek {
  constructor() {
    const ARTICLE = $("article");
    for (let i = 0; i < LISTA.length; i++) {
        const TERMEK = new Termek(ARTICLE, LISTA[i]);
        
    }
  }
}
export default Termekek;
