#  Our Team

- Creare ourTeam con gli oggetti
    const ourTeam = [{nome: "nome", ruolo: "ruolo", foto: "link"}, {....}....]
- Stampare in console per ogni membro del team le sue informazioni
    - Creare funzione stampaConsoleObjectOfArray
        function stampaConsoleObjectOfArray(array){
            for(let i = 0; i < array.length; i++){
                for(let key in array[i]){
                    console.log(key,": ",array[i][key])
                }
            }
        }
    - Invocare la funzione stampaConsoleObjectOfArray       
- Stampare le informazioni sul DOM sottoforma di stringhe
    - Creare il contenuto html della pagina 
    - Creare ourTeamDOMElement tramite id "our-team"
    - Creare il contenuto tramite funzione creaContentHtml
        function creaContentHtml(DOMElement, array){
            for(let i = 0; i < array.length; i++ ){
                DOMElement.InnerHtml += `
                    <div>
                        <h1>Member ${i + 1}</h1>
                        <p>Nome: ${array[i].nome}</p>
                        <p>Ruolo: ${array[i].ruolo}</p>
                        <p>Foto: ${array[i].foto}</p>
                    </div>
                `
            }
        }

# Bonus 1

- Trasformare la stringa foto in una immagine effettiva
    function creaContentHtml(DOMElement, array){
            for(let i = 0; i < array.length; i++ ){
                DOMElement.InnerHtml += `
                    <div>
                        Member ${i}
                        Nome: ${array[i].nome}
                        Ruolo: ${array[i].ruolo}
                        <img class="image-member" src="./../img/${array[i].foto}"> 
                    </div>
                `
            }
        }

# Bonus 2

- Organizzare i singoli membri in card/schede (vedi screenshot)
    - Creao la NUOVA funzione creaCardContentHtml
        function creaCardContentHtml(DOMElement, array){
            for(let i = 0; i < array.length; i++ ){
                DOMElement.InnerHtml += `
                    <div class="card text-center">
                        <img src="./../img/${array[i].foto}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${array[i].nome}</h5>
                             <p class="card-text">${array[i].ruolo}</p>
                        </div>
                    </div>
                `
            }
        }
    - Invocare la nuova funzione
