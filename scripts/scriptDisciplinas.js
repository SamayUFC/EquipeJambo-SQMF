let disciplinas = [
    {
        nome: "Autoração Multimídia I",
        cod: "SMD0088",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        nome: "Desenho I",
        cod: "SMD0089",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        nome: "Programação I",
        cod: "SMD0095",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        nome: "Comunicação Visual I",
        cod: "SMD0105",
        preRequisitos:  [
            {
                nome: "Autoração Multimídia I",
                cod: "SMD0088",
                preRequisitos:  null,
                cargaHoraria: 64,
                creditos: 4,
                natureza: "Obrigatória",
                semestre: 1
            }
        ],
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 2
    },
    {
        nome: "Matemática Aplicada à Multimídia",
        cod: "SMD0106",
        preRequisitos:  [
            {
                nome: "Programação I",
                cod: "SMD0095",
                preRequisitos:  null,
                cargaHoraria: 64,
                creditos: 4,
                natureza: "Obrigatória",
                semestre: 1
            }
        ],
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 2
    },
    {
        nome: "Programação II",
        cod: "SMD0096",
        preRequisitos:  [
            {
                nome: "Programação I",
                cod: "SMD0095",
                preRequisitos:  null,
                cargaHoraria: 64,
                creditos: 4,
                natureza: "Obrigatória",
                semestre: 1
            }
        ],
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 2
    },
];

function url(params) {
    if(params){
        return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/matriz/"+params
    }else{
        return "http://localhost/EquipeJambo-SQMF/api_meuDiploma/public/"; 
    }
 
}



function getAll() {


    const endpoint = url('78');             
    try {                
        
        fetch(endpoint)
        .then(response => response.json())

        .then(data => {
        console.log(data);

        })
        
        
        
                    
    } catch(e) {
        console.log(e);
    }

}

getAll();

let outFirst = document.querySelectorAll("#primeiroSemestreInputs");
let outSecond = document.querySelectorAll("#segundoSemestreInputs");
let outThird = document.querySelectorAll("#terceiroSemestreInputs");

disciplinas.forEach((disciplina)=> {
    if (disciplina.semestre == 1) {
        outFirst[0].innerHTML = outFirst[0].innerHTML + 
        `<input type="checkbox" id=${disciplina.cod} name=${disciplina.nome} value=${disciplina.cargaHoraria} />
        <label for=${disciplina.cod}>${disciplina.nome}</label><br>`;
    }
    if (disciplina.semestre == 2) {
        outSecond[0].innerHTML = outSecond[0].innerHTML + 
        `<input type="checkbox" id=${disciplina.cod} name=${disciplina.nome} value=${disciplina.cargaHoraria} />
        <label for=${disciplina.cod}>${disciplina.nome}</label><br>`;
    }
    if (disciplina.semestre == 3) {
        outThird[0].innerHTML = outThird[0].innerHTML + 
        `<input type="checkbox" id=${disciplina.cod} name=${disciplina.nome} value=${disciplina.cargaHoraria} />
        <label for=${disciplina.cod}>${disciplina.nome}</label><br>`;
    }
});


const submitCheckboxes = document.querySelector('#submitCheckboxes');
submitCheckboxes.addEventListener('click', (event) => {
    let selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    let horasValores = 0;
    for (let i = 0; i <= selectedCheckboxes.length; i++) {
        selectedCheckboxes.forEach((checkbox) => {
            horasValores += Number(checkbox.value);
        });
    }
    alert(Number(horasValores));
    
    let names = [];
    selectedCheckboxes.forEach((checkbox) => {
        names.push(" " + checkbox.name);
    });
    alert(names);
});