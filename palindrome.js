//récupérer la date d'aujourd'hui
let dateCourante = new Date();
let aujourdhui = dateCourante.toLocaleDateString('fr-FR');

const boutonNombre = document.getElementById("boutonNombre");
const xpalindromes = document.getElementById("xpalindromes");
const selectNombre = document.getElementById("input");

//déclarer les fonctions

function isValidDate(date) {

    let part = date.split("/");
    parseInt(part);

    let annee = part[2];
    let mois = part[1];
    let jour = part[0];


    //ANNEE
    if (annee > 999 && annee <= 9999) {
        console.log("Année valide")
    } else {
        console.log("Année invalide !");
        return false;
    }


    //MOIS
    if (mois > 0 && mois <= 12) {
        console.log("Mois valide")
    } else {
        console.log("Mois invalide !");
        return false;
    }

    //JOUR
    if (jour > 0 && jour <= 31) {
        let jourMax = maxDayInMonth(mois);

        if (jour > jourMax) {

            console.log("jour invalide !")
            return false

        } else {
            console.log("jour valide");
        }
    }

    else {
        console.log("Jour invalide !");
        return false;
    }

    console.log("DATE VALIDE")
    return true;
};

function maxDayInMonth(mois, annee) {
    let jourMax = 0
    if (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) {
        jourMax = 31;
    }

    else if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
        jourMax = 30;
    }

    else if (mois == 2) {

        if (annee % 4 == 0) {
            jourMax = 29;
        }
        else { jourMax = 28; }
    }
    return jourMax
};

function isPalindrome(date) {

    let part = date.split("/");

    let part1 = part[0] + part[1];
    let part2 = inverserChaine(part[2]);

    if (part1 == part2) {
        console.log("Palindrome trouvé !!!")
        return true;
    }
    else {
        return false
    }

};

function inverserChaine(str) {
    let inverse = "";
    for (let index = str.length - 1; index >= 0; index--) { inverse = inverse + str[index]; };
    return inverse;
};

function getNextDate(date) {
    let part = date.split("/");
    parseInt(part);

    let annee = part[2];
    let mois = part[1];
    let jour = part[0];


    let jourMax = maxDayInMonth(mois, annee);


    if (jour < jourMax) {
        jour++
    }
    else if (jour == jourMax && mois < 12) {
        jour = 1;
        mois++;
    }
    else if (mois == 12) {
        jour = 1;
        mois = 1;
        annee++;
    }

    let nextDate = `${jour}/${mois}/${annee}`
    return nextDate.toString()

}

function getNextPalindromes(x) {
    let tableauPalindrome = [];
    let nombreDePalindrome = 0;

    while (nombreDePalindrome < x) {
        let dateIncrementee = getNextDate(aujourdhui);
        aujourdhui = dateIncrementee;
        //On pourrait écrire aujourdhui = getNextDate(aujourdhui), 
        //On met la valeur du lendemain 

        if (isPalindrome(dateIncrementee)) {
            tableauPalindrome.push(dateIncrementee);
            nombreDePalindrome++;
        }
    }

    return tableauPalindrome;
};

function randomColor() {
    return '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
}

//Executer le code

/* Tester la date : 
console.log(isValidDate("25/04/3067"));

Tester si c'est un palindrome : 
console.log(isPalindrome("22/02/2022")); */

/* console.log(getNextPalindromes(5)); */

boutonNombre.addEventListener("click", function () {
    let nombreChoisit = selectNombre.value;

    getNextPalindromes(nombreChoisit).forEach(element => {
        const newPalindrome = document.createElement("div");
        newPalindrome.style.color = randomColor();
        newPalindrome.style.margin = "5px";
        newPalindrome.style.fontFamily = "Impact";
        newPalindrome.innerText = element;

        xpalindromes.appendChild(newPalindrome);
        xpalindromes.style.backgroundColor = "rgb(198, 255, 252)";
    });
});




