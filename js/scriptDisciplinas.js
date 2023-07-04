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
            data.disciplinas.forEach((course, index) => {
                if (course.natureza == "OBRIGATÓRIA") {
                    if (course.semestre == 1) {
                        outFirst[0].innerHTML = outFirst[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 2) {
                        outSecond[0].innerHTML = outSecond[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 3) {
                        outThird[0].innerHTML = outThird[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 4) {
                        outFourth[0].innerHTML = outFourth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 5) {
                        outFifth[0].innerHTML = outFifth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 6) {
                        outSixth[0].innerHTML = outSixth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 7) {
                        outSeventh[0].innerHTML = outSeventh[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 8) {
                        outEighth[0].innerHTML = outEighth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 9) {
                        outNinth[0].innerHTML = outNinth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                }
                if (course.natureza == "ELETIVA") {
                    if (course.semestre == 4) {
                        outElectivesFourth[0].innerHTML = outElectivesFourth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                    if (course.semestre == 5) {
                        outElectivesFifth[0].innerHTML = outElectivesFifth[0].innerHTML + 
                        `<div class="checkbox-container" style="position: relative; display: block; margin-right: 10%;">
                            <input style="display: inline-block; position: absolute" class="form-check-input" type="checkbox" id=${course.codigo} name=${course.componente} value=${course.cargahoraria} />
                            <span style="display: inline; position: relative; left: 1.5rem; top: 2px" class="checkbox_label">
                               <label for=${course.codigo}>${course.componente}</label>
                            </span>
                        </div>`;
                    }
                }
                if (course.natureza == "OPTATIVA") {
                    let newOption = document.createElement("option");
                    let correctedIndex = index + 1;
                    newOption.value = `${correctedIndex}`;
                    newOption.text = `${course.componente}`;
                    outOptionals.appendChild(newOption);
                    console.log(outOptionals.value);
                }
            });
        })              
    } catch(e) {
        console.log(e);
    }
}

getAll();

const outFirst = document.querySelectorAll("#primeiroSemestreInputs");
const outSecond = document.querySelectorAll("#segundoSemestreInputs");
const outThird = document.querySelectorAll("#terceiroSemestreInputs");
const outFourth = document.querySelectorAll("#quartoSemestreInputs");
const outFifth = document.querySelectorAll("#quintoSemestreInputs");
const outSixth = document.querySelectorAll("#sextoSemestreInputs");
const outSeventh = document.querySelectorAll("#setimoSemestreInputs");
const outEighth = document.querySelectorAll("#oitavoSemestreInputs");
const outNinth = document.querySelectorAll("#nonoSemestreInputs");
const outElectivesFourth = document.querySelectorAll('#quartoSemestreInputsEletivas');
const outElectivesFifth = document.querySelectorAll('#quintoSemestreInputsEletivas');
const outOptionals = document.getElementById("optativasInputs");


const submitCheckboxes = document.querySelector('#submitCheckboxes');
submitCheckboxes.addEventListener('click', (event) => {
    let selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked')
    let horasValores = 0;
    selectedCheckboxes.forEach((checkbox) => {
        horasValores += Number(checkbox.value);
    });
    alert(Number(horasValores));
    
    let names = [];
    selectedCheckboxes.forEach((checkbox) => {
        names.push(" " + checkbox.name);
    });
    alert(names);
});