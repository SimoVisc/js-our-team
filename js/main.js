"use strict"
// creare un array di oggetti per rappresentare i membri del team
const members = [
{
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
},
{
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
},
{
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
},
{
    name: "Angela Lopez" ,
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
},
{
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
},
{
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
}
]
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i=0; i< members.length; i++){
    console.log(members);
    // Stampare le stesse informazioni su DOM sottoforma di stringhe
    const teamMembers = members[i];
    const  listMembers = `
    <li>
        <h4>Name: ${teamMembers.name}</h4>
        <p> Ruolo: ${teamMembers.role}</p>
        <p><img src="img/${teamMembers.image}"></p>
    </li>
    `;
    document.getElementById("team-members").innerHTML += listMembers
}

