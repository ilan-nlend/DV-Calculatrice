
function collecterNombres() {
    let nombres = []; 
    let saisie;
    prompt("fyfjjhfjhfjgfjg")

    while (true) {
        saisie = prompt("Entrez un nombre (ou cliquez sur Annuler pour terminer) :");

        if (saisie === null) {
            
            break;
        }

        if (isNaN(saisie)) {
            alert("Veuillez entrer un nombre valide !");
        } else {
            
            nombres.push(Number(saisie));
        }
    }

    return nombres; 
}

function demanderOperation() {
    let operation;

    while (true) {
        operation = prompt("Quel calcul souhaitez-vous effectuer ? (+, -, *, /)");

        if (["+", "-", "*", "/"].includes(operation)) {
            return operation; 
        } else {
            alert("Veuillez entrer une opération valide : +, -, *, /");
        }
    }
}


function calculer(nombres, operation) {
    let resultat = nombres[0]; 

    for (let i = 1; i < nombres.length; i++) {
        switch (operation) {
            case "+":
                resultat += nombres[i];
                break;
            case "-":
                resultat -= nombres[i];
                break;
            case "*":
                resultat *= nombres[i];
                break;
            case "/":
                if (nombres[i] === 0) {
                    alert("Erreur : Division par zéro !");
                    return "Impossible (division par zéro)";
                }
                resultat /= nombres[i];
                break;
        }
    }

    return resultat; 
}


alert("Bienvenue dans le calculateur !");


let nombres = collecterNombres();

if (nombres.length < 2) {
    alert("Vous devez entrer au moins deux nombres pour effectuer un calcul.");
} else {
    let operation = demanderOperation();

    let resultat = calculer(nombres, operation);

    alert("Le résultat du calcul est :", ${resultat});
    console.log("Les nombres saisis :", nombres);
    console.log("Opération choisie :", operation);
    console.log("Résultat :", resultat);
}