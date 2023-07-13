document.querySelectorAll(".form-check-input")
        .forEach(input=> {
          input.addEventListener("change",calculateWithCheckboxes)
        });

        function calculateWithCheckboxes(){
          selectedDisciplinesTotalValues = 0;
          document.querySelectorAll(".form-check-input")
          .forEach(input=> {
            if (input.checked) {
              selectedDisciplinesTotalValues += Number.parseInt(input.getAttribute("value"));
            }
          });
        }