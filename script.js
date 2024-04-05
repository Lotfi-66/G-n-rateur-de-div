//rgb(255, 255, 0)=> jaune
//on crée une fonction qui génere en chiffre entre 0 et 255
function randomNumber(){
    return Math.floor(Math.random() * 256);
}

//function qui retourne une couleur aléatoire en rgb
function randomColor(){
    return "rgb("+ randomNumber() + "," + randomNumber() + "," + randomNumber() +")";
}






//créé une fonction qui va générer une div
function addDiv() {
    //on récupere la div avec l'id container
    let container = document.getElementById('container');
    //on créé une div => <div></div>
    let newDiv = document.createElement('div');
    //on va ajouter une classe à notre div <div class="box"></div>
    //newDiv.classList.add("box"); //1ère méthode
    newDiv.className = 'box'; //2ème méthode
    //on va ajouter un style a notre div => <div class="box" style="background-color: red"></div>
    newDiv.style.backgroundColor = randomColor();
    //on va imbriquer la nouvelle div dans la div container
    container.appendChild(newDiv);
}


//on ajoute un evenement a notre bouton avec l'id "addButton"
//je recupère le bouton avc l'id "addButton"
let addButton = document.getElementById('addButton');
//on ajoute un bouton click
addButton.addEventListener("click", () => {
    //on appelle notre fonction addDiv
    addDiv();
});
