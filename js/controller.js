// Données
const tableData = [
    {
        club:'Real Madrid', 
        nom:"Kylian", 
        prenom:"Mbappe", 
        age:25, 
        position:"ST",
    },
    {
        club:'Barcelona',
        nom:"Lewandowski",
        prenom:"Robert",
        age:35,
        position:"ST",
    },
    {
        club:'Arsenal',
        nom:"Saka",
        prenom:"Bukayo",
        age:20,
        position:"M",
    },
    {
        club:'Paris Saint-Germain',
        nom:"Neymar",
        prenom:"Jr",
        age:30,
        position:"F",
    },
    {
        club:'Liverpool',
        nom:"Salah",
        prenom:"Mohamed",
        age:29,
        position:"F",
    },
    {
        club:'Manchester City',
        nom:"De Bruyne",
        prenom:"Kevin",
        age:30,
        position:"M",
    },
    {
        club:'Juventus',
        nom:"Ronaldo",
        prenom:"Cristiano",
        age:36,
        position:"F",
    },
    {
        club:'Bayern Munich',
        nom:"Kimmich",
        prenom:"Joshua",
        age:26,
        position:"M",
    }
];


// Fonction pour générer les lignes du tableau
const generateTableRows = players => {
    let rows = '';
    for (let i = 0; i < players.length; i++) {
        rows += `<tr><td>${players[i].club}</td><td>${players[i].nom}</td><td>${players[i].prenom}</td><td>${players[i].age}</td><td>${players[i].position}</td></tr>`;
    }
    return rows;
}

// Fonction pour insérer les lignes dans le tableau
const insertRowsIntoTable = rows => {
    const tBody = document.querySelector('#myTable tbody');
    tBody.innerHTML = rows;
}

// Générer les lignes du tableau en fonction des données
const rows = generateTableRows(tableData);

// Insérer les lignes dans le tableau
insertRowsIntoTable(rows);

