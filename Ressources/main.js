fetch("dronejson.json")
    .then((resp) => resp.json())
    .then((data) => {
        const selectuser = document.getElementById("userselect");
        
        // Si vous souhaitez itérer à travers les tarifs
        for (let key in data.tarifs) {
            const tarif = data.tarifs[key];  // Accédez à chaque tarif dans l'objet tarifs
            
            // Vérifiez si tarif.distance existe pour éviter les erreurs
            if (tarif.distance) {
                for (let distance in tarif.distance) {
                    const option = document.createElement("option");
                    option.value = distance;
                    option.textContent = distance;
                    selectuser.appendChild(option);
                }
            }
        }
    })
    .catch((error) => console.error("Erreur lors du chargement", error));
