fetch("dropdrone.json")
.then((response)=>response.json())
.then((data)=>{
    let userselect=document.getElementById("userselect")
    Object.keys(data.tarifs.standard.distance).forEach(tarif => {
        let option = document.createElement("option");
        option.value =  tarif;
        option.textContent = tarif;
        userselect.appendChild(option);
    });
})
// let data; // Declare the variable globally to store the fetched data

// // Fetch the data
// fetch("dropdrone.json")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     data = jsonData; // Store the fetched data in the global variable
//     let userselect = document.getElementById("userselect");
//     let tarif = data.tarifs.standard;

//     // Populate the distance options in the dropdown
//     if (tarif.distance) {
//       for (let distance in tarif.distance) {
//         let option = document.createElement("option");
//         option.value = distance;
//         option.textContent = distance;
//         userselect.appendChild(option);
//       }
//     }
//   })
//   .catch((error) => {
//     console.error("Error fetching the JSON data:", error);
//   });

// Event listener for calculating the cost
let calcule = document.getElementById("calculer");
calcule.addEventListener("click", () => {
  if (!data) {
    alert("Les données n'ont pas encore été chargées.");
    return;
  }

  const selectuser = document.getElementById("userselect").value;
  const poid = parseFloat(document.getElementById("poids").value);
  const largeur = parseFloat(document.getElementById("largeur").value);
  const langeur = parseFloat(document.getElementById("langeur").value);
  const hauteur = parseFloat(document.getElementById("hauteur").value);

  let tarif = data.tarifs.standard;
  let tariff = data.tarifs.express;

  if (isNaN(poid) || isNaN(largeur) || isNaN(langeur) || isNaN(hauteur)) {
    alert("Veuillez entrer un nombre valide.");
    return;
  }

  // Calculate standard delivery cost
  let resultStandard = 0;
  if (selectuser === "entre 100km et 300km") {
    resultStandard = tarif.base + (poid * tarif.poids) + ((largeur + langeur + hauteur) * tarif.dimension) + tarif.distance["entre 100km et 300km"];
  } else if (selectuser === "moins de 10 km") {
    resultStandard = tarif.base + (poid * tarif.poids) + ((largeur + langeur + hauteur) * tarif.dimension) + tarif.distance["moins de 10 km"];
  } else if (selectuser === "entre 10km et 50km") {
    resultStandard = tarif.base + (poid * tarif.poids) + ((largeur + langeur + hauteur) * tarif.dimension) + tarif.distance["entre 10km et 50km"];
  } else if (selectuser === "entre 50km et 100km") {
    resultStandard = tarif.base + (poid * tarif.poids) + ((largeur + langeur + hauteur) * tarif.dimension) + tarif.distance["entre 50km et 100km"];
  } else if (selectuser === "plus de 300km") {
    resultStandard = tarif.base + (poid * tarif.poids) + ((largeur + langeur + hauteur) * tarif.dimension) + tarif.distance["plus de 300km"];
  }

  // Calculate express delivery cost
  let resultExpress = 0;
  if (selectuser === "entre 100km et 300km") {
    resultExpress = tariff.base + (poid * tariff.poids) + ((largeur + langeur + hauteur) * tariff.dimension) + tariff.distance["entre 100km et 300km"];
  } else if (selectuser === "moins de 10 km") {
    resultExpress = tariff.base + (poid * tariff.poids) + ((largeur + langeur + hauteur) * tariff.dimension) + tariff.distance["moins de 10 km"];
  } else if (selectuser === "entre 10km et 50km") {
    resultExpress = tariff.base + (poid * tariff.poids) + ((largeur + langeur + hauteur) * tariff.dimension) + tariff.distance["entre 10km et 50km"];
  } else if (selectuser === "entre 50km et 100km") {
    resultExpress = tariff.base + (poid * tariff.poids) + ((largeur + langeur + hauteur) * tariff.dimension) + tariff.distance["entre 50km et 100km"];
  } else if (selectuser === "plus de 300km") {
    resultExpress = tariff.base + (poid * tariff.poids) + ((largeur + langeur + hauteur) * tariff.dimension) + tariff.distance["plus de 300km"];
  }

  // Display results
  document.getElementById("prix").innerHTML = `${resultStandard.toFixed(0)} MAD`;
  document.getElementById("prixex").innerHTML = `${resultExpress.toFixed(0)} MAD`;

  // Scroll to the results section
  document.getElementById("section4").scrollIntoView({ behavior: "smooth" });
});
