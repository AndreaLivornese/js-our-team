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

const ulEl = document.querySelector("ul");

// for che scorre tutto l'array
for(let i=0; i< workers.length; i++){

    const liEl = document.createElement("li");

    let inner= "";

    for(let key in workers[i]){
        inner += key+": " + workers[i][key]+"\n";
    }

    liEl.innerText = inner;

    ulEl.append(liEl);

}