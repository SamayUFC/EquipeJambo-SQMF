let disciplinas = [
    {
        componente: "Autoração Multimídia I",
        cod: "SMD0088",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        componente: "Desenho I",
        cod: "SMD0089",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        componente: "Programação I",
        cod: "SMD0095",
        preRequisitos:  null,
        cargaHoraria: 64,
        creditos: 4,
        natureza: "Obrigatória",
        semestre: 1
    },
    {
        componente: "Comunicação Visual I",
        cod: "SMD0105",
        preRequisitos:  [
            {
                componente: "Autoração Multimídia I",
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
        componente: "Matemática Aplicada à Multimídia",
        cod: "SMD0106",
        preRequisitos:  [
            {
                componente: "Programação I",
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
        componente: "Programação II",
        cod: "SMD0096",
        preRequisitos:  [
            {
                componente: "Programação I",
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
            data.disciplinas.forEach((course)=> {
                if (course.natureza == "OBRIGATÓRIA") {
                    if (course.semestre == 1) {
                        outFirst[0].innerHTML = outFirst[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 2) {
                        outSecond[0].innerHTML = outSecond[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 3) {
                        outThird[0].innerHTML = outThird[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 4) {
                        outFourth[0].innerHTML = outFourth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 5) {
                        outFifth[0].innerHTML = outFifth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 6) {
                        outSixth[0].innerHTML = outSixth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 7) {
                        outSeventh[0].innerHTML = outSeventh[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 8) {
                        outEighth[0].innerHTML = outEighth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                    if (course.semestre == 9) {
                        outNinth[0].innerHTML = outNinth[0].innerHTML + 
                        `<input class="form-check-input" type="checkbox" id="flexCheckDefault" name=${course.componente} value=${course.cargahoraria} />
                        <label for="flexCheckDefault">${course.componente}</label><br>`;
                    }
                } 
                if (course.natureza == "OPTATIVA") {
                    outOptionals[0].innerHTML = outOptionals[0].innerHTML +
                    `<option value="1">${course.componente}</option>`;
                }
            });
        })              
    } catch(e) {
        console.log(e);
    }
}

getAll();

let outFirst = document.querySelectorAll("#primeiroSemestreInputs");
let outSecond = document.querySelectorAll("#segundoSemestreInputs");
let outThird = document.querySelectorAll("#terceiroSemestreInputs");
let outFourth = document.querySelectorAll("#quartoSemestreInputs");
let outFifth = document.querySelectorAll("#quintoSemestreInputs");
let outSixth = document.querySelectorAll("#sextoSemestreInputs");
let outSeventh = document.querySelectorAll("#setimoSemestreInputs");
let outEighth = document.querySelectorAll("#oitavoSemestreInputs");
let outNinth = document.querySelectorAll("#nonoSemestreInputs");
let outOptionals = document.querySelectorAll("#optativasSelect");


// const submitCheckboxes = document.querySelector('#submitCheckboxes');
// submitCheckboxes.addEventListener('click', (event) => {
//     let selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
//     let horasValores = 0;
//     for (let i = 0; i <= selectedCheckboxes.length; i++) {
//         selectedCheckboxes.forEach((checkbox) => {
//             horasValores += Number(checkbox.value);
//         });
//     }
//     alert(Number(horasValores));
    
//     let names = [];
//     selectedCheckboxes.forEach((checkbox) => {
//         names.push(" " + checkbox.name);
//     });
//     alert(names);
// });