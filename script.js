//créé une fonction qui va générer une div
function addDiv() {
    //on récupere la div avec l'id container
    let container = document.getElementById('container');
    //on créé une div
    let newDiv = document.createElement('div');
    //on va ajouter une classe à notre div <div class="box"></div>
    //newDiv.classList.add("box"); //1ère méthode
    newDiv.className = 'box'; //2ème méthode
    //on va ajouter un style a notre div => <div class="box" style="background-color: red"></div>
    newDiv.style.backgroundColor = 'red';
    //on va imbriquer la nouvelle div dans la div container
    container.appendChild(newDiv);
}
