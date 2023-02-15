//BLOCK DICES
    //éléments HTML
    const diceCountSelect = document.querySelector("#blockdice__count");
    const rollBlockDiceButton = document.querySelector("#roll_blokdice");
    const diceResultDiv = document.querySelector("#blokdice_result");
        // Gérer le lancement des dés
    rollBlockDiceButton.addEventListener("click", function() {
        // Récupérer le nombre de dés sélectionné
        const diceCount = diceCountSelect.value;
    
        // Réinitialiser la section de résultats
        diceResultDiv.innerHTML = "";
        
        // Boucle pour lancer chaque dé
        for (let i = 0; i < diceCount; i++) {
            // Générer un nombre aléatoire pour le dé (entre 1 et 6)
            const diceResult = Math.floor(Math.random() * 6) + 1;
            
    
             // Afficher le résultat du dé en utilisant un icône ou une image personnelle
            const diceResultElement = document.createElement("div");
            diceResultElement.innerHTML = `<img src="img/dice-${diceResult}.png" alt="Dé : ${diceResult}">`;
            diceResultDiv.appendChild(diceResultElement);
            }
    });
        
    
    
        // DICES 6, 3, 4, 8, 16 FACES
        //éléments HTML
    const rollDiceButton = document.querySelector("#roll-dice");
    const numDiceSelect = document.querySelector("#dice__number");
    const numSidesSelect = document.querySelector("#dice__faces");
    const resultSpan = document.querySelector("#total");
    const diceContainer = document.querySelector("#dice__container");
        // Gérer le lancement des dés
    rollDiceButton.addEventListener("click", function() {
        const numDice = numDiceSelect.value;
        const numSides = numSidesSelect.value;
        // Réinitialiser la section de résultats
        diceContainer.innerHTML = "";
    
                let total = 0;
                for (let i = 0; i < numDice; i++) {
                    const roll = Math.floor(Math.random() * numSides) + 1;
                    total += roll;
                    
                    const diceDiv = document.createElement("div");
                    diceDiv.classList.add("dice");
                    diceDiv.textContent = roll;
                    diceContainer.appendChild(diceDiv);
    
                    console.log(`Résultat du dé n°${i + 1}: ${roll}`);
                    console.log(`Total : ${total}`);
                }
        resultSpan.textContent = `Total : ${total}`;
    });
    
    