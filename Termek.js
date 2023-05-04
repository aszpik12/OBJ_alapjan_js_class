import { KEDVENCLISTA} from "./adatok";

class Termek {
  constructor(ARTICLE, OBJ) {
    ARTICLE.append(
      `
      <div>
      <p> ${OBJ.termek} </p>
      <p> ${OBJ.ar} </p>
      <p> ${OBJ.szin} </p>
      <button id="${i}">ELEM</button>
      </div>
      `
    );

    $("button").on("click", function () {
      i = this.id;
      KEDVENCLISTA.append(i);
    });
  }
}
export default Termek;
