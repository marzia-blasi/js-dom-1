// Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// - direttamente nell body

// BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes()

// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// va selezionato il bottone

// elemento bottone
const button = document.getElementById("button");
const foto = document.getElementById("fig");
// (se il bottone è clikkato si accende)
console.log(foto.src);

button.addEventListener("click", function () {
  if (foto.src.includes("/img/yellow_lamp.png")) {
    // true - spegni
    foto.src = "./img/white_lamp.png";
    button.innerHTML = "<b>Accendi</b>";
  } else {
    // false - accendo
    foto.src = "./img/yellow_lamp.png";
    button.innerHTML = "<b>Spegni</b>";
  }
});

//console.log(foto);
//console.log(foto.src);
