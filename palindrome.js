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

        else {
            console.log("Jour invalide !");
            return false;
        }

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

function isPalindrome(date) {

    let part = date.split("/");
    let part1 = part[0] + part[1];
    let part2 = part[2]

    if (part1 == part2) {
        console.log("Palindrome")
        return true;
    }
    else {
        console.log("Pas un Palindrome")
        return false
    }

};

console.log(isValidDate("25/04/3067"));
console.log(isPalindrome("22/02/2022"));


