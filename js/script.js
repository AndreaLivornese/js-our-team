// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.


// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// array di oggetti
const workers =[

    // membri dello staff

    {
        nome:"Wayne Barnett",
        ruolo:"Founder & CEO",
        img:"wayne-barnett-founder-ceo.jpg",
    },

    {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        img:"angela-caroll-chief-editor.jpg",
    },

    {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        img:"walter-gordon-office-manager.jpg",
    },

    {
        nome:"Angela Lopez",
        ruolo:"Social Media Manager",
        img:"angela-lopez-social-media-manager.jpg",
    },

    {
        nome:"Scott Estrada",
        ruolo:"Developer",
        img:"scott-estrada-developer.jpg",
    },

    {
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        img:"barbara-ramos-graphic-designer.jpg",
    }
]


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva


// BONUS 2:
// Organizzare i singoli membri in card/schede

const rowEl = document.querySelector(".row");

// for che scorre tutto l'array
for(let i=0; i< workers.length; i++){

    // creazione del contenitore della card
    const colEl = document.createElement("div");
    colEl.classList.add("col", "p-3");

    const cardEl = document.createElement("div");
    cardEl.classList.add("card")

    // creazione elemento per l'immagine del lavotore
    const imgEl = document.createElement("img");
    imgEl.classList.add("card-img-top");

    // creazione del corpo della card
    const cardbodyEl= document.createElement("div");
    cardbodyEl.classList.add("card-body", "text-center", "fw-bold", "my_min_card-body_size");

    // stringa del contenuto del card-body
    let inner= "";

    for(let key in workers[i]){
        if(key == "img"){
            imgEl.src="./img/"+workers[i][key];
        }else{
            inner += workers[i][key]+"\n";
        }
    }

    
    cardbodyEl.innerText = inner;

    // inserimento in pagina della colonna
    rowEl.append(colEl);

    // inserimento della card nella colonna
    colEl.append(cardEl);

    // inserimento dell'immagine e il card-body nella card
    cardEl.append(imgEl, cardbodyEl);

    

}