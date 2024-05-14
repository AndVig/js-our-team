const team=[
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        image:"wayne-barnett-founder-ceo.jpg",
    },
    {
        name:"Angela Caroll",
        role:"Chief Editor",
        image:"angela-caroll-chief-editor.jpg",
    },
    {
        name:"Walter Gordon",
        role:"Office Manager",
        image:"walter-gordon-office-manager.jpg",
    },
    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        image:"angela-lopez-social-media-manager.jpg",
    },
    {
        name:"Scott Estrada",
        role:"Developer",
        image:"scott-estrada-developer.jpg",
    },
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg",
    }
]

const prova= document.querySelector(".prova");
const prova2=document.getElementById("prova2");

prova2.addEventListener('click',  addTeam)

for (let i=0;i<team.length;i++){
    console.log(team[i]);
    const user = team[i];

    prova.innerHTML += `
    <div class="col-4 p-5">
        <div class="card">
            <img src="./img/${user.image}" class="card-img-top">
            <div class="card-body">
                <div class="card-text">
                    <h3 class="title">${user.name}</h3>
                    <span>${user.role}</span>

                </div>  
            </div>
        </div>
    </div>
    `;
}
function addTeam() {
    
}