class Termek {
  #divElem;
  #adat;
  constructor(ARTICLE, OBJ) {
    this.#adat = OBJ;
    let txt = `
      <div class="card col-lg-3 col-md-4 col-sm-6">
      <h2 class="card-header">Termék 1</h2>
      <p class="card-body"> ${this.#adat.termek} </p>
      <p class="card-body"> ${this.#adat.ar} </p>
      <p class="card-body"> ${this.#adat.szin} </p>
      <div class="card-footer btn-group">
      <button id="${this.#adat.id}">ELEM</button>
      </div>
      </div>
      `;
    ARTICLE.append(txt);
    console.log(txt);

    this.#divElem = ARTICLE.children("div:last-child");

    this.#divElem.on("click", () => {
      console.log(this.#adat.id)
      this.esemenyTrigger();
    });
  }
  esemenyTrigger() {
    console.log("trigger", this.#adat.id);
    const esemeny = new CustomEvent("elemKattintas", {
      detail: this.#adat.idje,
    });
    window.dispatchEvent(esemeny);
  }
}
export default Termek;
