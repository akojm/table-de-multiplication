let error = document.getElementById("error");
let resultat = document.getElementById("result");
let titleTable = document.querySelector(".title-table")
console.log(titleTable);

let table = (nb) =>{
    nb = parseInt(nb) // analyse du nombre (nb) et récupere le nombre associé en parametre //
    error.innerHTML = " "

    if (isNaN(nb)) { // si ce n'est pas un nombre //
        error.innerHTML += "Vous devez saisir un nombre !"
        error.classList.add("error")
        return;
    }

let index = 0;
resultat.innerHTML = " "
resultat.innerHTML += `<h4>Table de multiplicataion par ${nb}</h4>`
 while (index<21) {
    resultat.innerHTML += `
    <div class = "${index%2 ? 'impair' : 'pair'} ">
    <span>${nb}</span>
    <span>X</span>
    <span>${index}</span>
    <span>=</span>
    <span>${index*nb}</span>
    </div>`
    
    index++
} 
resultat.style.visibility=("visible");

}

