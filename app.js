// #  Our Team

// - Creare ourTeam con gli oggetti
const ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    },
]

// - Stampare in console per ogni membro del team le sue informazioni 
stampaConsoleObjectOfArray(ourTeam);

// - Stampare le informazioni sul DOM sottoforma di stringhe
const ourTeamDOMElement = document.getElementById("our-team");

//     - Creare il contenuto tramite funzione creaContentHtml
creaContentHtml(ourTeamDOMElement, ourTeam)

// ----------------------FUNZIONI----------------------------

// Funzione per stampare il contenuto di un oggetto dentro un array
function stampaConsoleObjectOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let key in array[i]){
            console.log(key,": ",array[i][key])
        }
    }   
}              

// Funzione per creare il contenuto Html
function creaContentHtml(DOMElement, array){
    for(let i = 0; i < array.length; i++ ){
        DOMElement.innerHTML += `
            <div>
                <h1>Member ${i + 1}</h1>
                <p>Nome: ${array[i].nome}</p>
                <p>Ruolo: ${array[i].ruolo}</p>
                <p>Foto: ${array[i].foto}</p>
            </div>
        `;
    }
}        