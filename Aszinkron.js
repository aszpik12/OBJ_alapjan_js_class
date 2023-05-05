class Aszinkron{
    constructor(){}

    adatBeolvas(vegpont, callbackFv) {
        //promisse
        console.log("a")
        fetch(vegpont, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            callbackFv(data);
          })
          .catch((error) => console.log(error));
      }

      adatTorol(vegpont, id) {
        //promisse
        vegpont = vegpont + "/" + id;
        console.log(vegpont)
         fetch(vegpont, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error)); 
      }
}

export default Aszinkron