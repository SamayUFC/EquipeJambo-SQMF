const MultiSelectDropdown = (params) => {
  let config = {
    search: true,
    hideX: false,
    useStyles: true,
    placeholder: 'Adicione aqui as disciplinas optativas',
    txtSelected: 'Selected',
    txtAll: 'All',
    txtRemove: 'Remove',
    txtSearch: 'Procure a disciplina optativa...',
    minWidth: '95%',
    maxWidth: '95%',
    maxHeight: '20rem',
    borderRadius: 16,
    ...params
  };

  const newElement = (tag, params) => {
    let element = document.createElement(tag);
    if (params) {
      Object.keys(params).forEach((key) => {
        if (key === 'class') {
          Array.isArray(params[key])
            ? params[key].forEach((o) => (o !== '' ? element.classList.add(o) : 0))
            : params[key] !== ''
            ? element.classList.add(params[key])
            : 0;
        } else if (key === 'style') {
          Object.keys(params[key]).forEach((value) => {
            element.style[value] = params[key][value];
          });
        } else if (key === 'text') {
          params[key] === '' ? (element.innerHTML = '&nbsp;') : (element.innerText = params[key]);
        } else {
          element[key] = params[key];
        }
      });
    }
    return element;
  };

  document.querySelectorAll('select[multiple]').forEach((multiSelect) => {
    let div = newElement('div', { class: 'multiselect-dropdown' });
    multiSelect.style.display = 'none';
    multiSelect.parentNode.insertBefore(div, multiSelect.nextSibling);
    let dropdownListWrapper = newElement('div', { class: 'multiselect-dropdown-list-wrapper' });
    let dropdownList = newElement('div', { class: 'multiselect-dropdown-list', id: 'multiselect-dropdown-list' });
    let search = newElement('input', {
      class: ['multiselect-dropdown-search'].concat([config.searchInput?.class ?? 'form-control']),
      style: {
        width: '100%',
        display: config.search ? 'block' : multiSelect.attributes.search?.value === 'true' ? 'block' : 'none'
      },
      placeholder: config.txtSearch
    });
    dropdownListWrapper.appendChild(search);
    div.appendChild(dropdownListWrapper);
    dropdownListWrapper.appendChild(dropdownList);

    multiSelect.loadOptions = () => {
      dropdownList.innerHTML = '';

      if (config.selectAll || multiSelect.attributes['select-all']?.value === 'true') {
        let optionElementAll = newElement('div', { class: 'multiselect-dropdown-all-selector' });
        let optionCheckbox = newElement('input', { type: 'checkbox' });
        optionElementAll.appendChild(optionCheckbox);
        optionElementAll.appendChild(newElement('label', { text: config.txtAll }));

        optionElementAll.addEventListener('click', () => {
          optionElementAll.classList.toggle('checked');
          optionElementAll.querySelector('input').checked = !optionElementAll.querySelector('input').checked;

          let ch = optionElementAll.querySelector('input').checked;
          dropdownList.querySelectorAll(':scope > div:not(.multiselect-dropdown-all-selector)').forEach((i) => {
            if (i.style.display !== 'none') {
              i.querySelector('input').checked = ch;
              i.optEl.selected = ch;
            }
          });

          multiSelect.dispatchEvent(new Event('change'));
        });
        optionCheckbox.addEventListener('click', () => {
          optionCheckbox.checked = !optionCheckbox.checked;
        });

        dropdownList.appendChild(optionElementAll);
      }

      Array.from(multiSelect.options).map((option) => {
        let optionElement = newElement('div', { class: option.selected ? 'checked' : '', srcElement: option });
        let optionCheckbox = newElement('input', { type: 'checkbox', checked: option.selected });
        optionElement.appendChild(optionCheckbox);
        optionElement.appendChild(newElement('label', { text: option.text }));

        optionElement.addEventListener('click', () => {
          optionElement.classList.toggle('checked');
          optionElement.querySelector('input').checked = !optionElement.querySelector('input').checked;
          optionElement.srcElement.selected = !optionElement.srcElement.selected;
          multiSelect.dispatchEvent(new Event('change'));
        });
        optionCheckbox.addEventListener('click', () => {
          optionCheckbox.checked = !optionCheckbox.checked;
        });
        option.optionElement = optionElement;
        dropdownList.appendChild(optionElement);
      });
      div.dropdownListWrapper = dropdownListWrapper;

      div.refresh = () => {
        //Variável que define o total de horas optativas selecionadas
        selectedOptionalTotalValue = Number(0);

        div.querySelectorAll('span.optext, span.placeholder').forEach((placeholder) => div.removeChild(placeholder));
        let selected = Array.from(multiSelect.selectedOptions);

        selected.map((option) => {
          let span = newElement('span', {
            class: 'optext',
            text: option.text,
            srcElement: option
          });
          if (!config.hideX) {
            span.appendChild(
              newElement('span', {
                class: 'optdel',
                text: '🗙',
                title: config.txtRemove,
                onclick: (e) => {
                  span.srcElement.optionElement.dispatchEvent(new Event('click'));
                  div.refresh();
                  e.stopPropagation();
                }
              })
            );
          }
          div.appendChild(span);
          // Aqui é onde soma os valores de cada os valores de cada opção marcada
          selectedOptionalTotalValue += Number(option.value);
        });
        if (multiSelect.selectedOptions?.length === 0) {
          div.appendChild(
            newElement('span', {
              class: 'placeholder',
              text: multiSelect.attributes?.placeholder?.value ?? config.placeholder
            })
          );
          //Se nenhuma opção for escolhida, o valor de horas é 0
          selectedOptionalTotalValue = Number(0);
        }
        //Total de horas optativas exibidas na barra superior e, para testes, no console, para verificar se
        //valor está sendo inserido no input placeholder que será usado para levar as informações do form
        document.querySelectorAll(".form-check-input")
        .forEach(input=> {
          input.addEventListener("click",calculateWithCheckboxes)
        });

        function calculateWithCheckboxes(){
          selectedElectiveTotalValue = 0;
          selectedMandatoryTotalValue = 0;
          
          mandatoryPanel.querySelectorAll(".form-check-input")
          .forEach(input=> {
            if (input.checked) {
              selectedMandatoryTotalValue += Number.parseInt(input.getAttribute("value"));
            }
          });

          missingMandatories = qttMandatory - mandatoryPanel.querySelectorAll('input[type="checkbox"]:checked').length;
          totalTCC = mandatoryPanel.querySelectorAll('input[name="TRABALHO DE CONCLUSÃO DE CURSO"]:checked').value;

          electivePanel.querySelectorAll(".form-check-input")
          .forEach(input=> {
            if (input.checked) {
              selectedElectiveTotalValue += Number.parseInt(input.getAttribute("value"));
              selectedOptionalTotalValue += Number.parseInt(input.getAttribute("value"));
            }
          });

          missingElectives = qttElective - 3 - electivePanel.querySelectorAll('input[type="checkbox"]:checked').length;

          selectedDisciplinesTotalValues = selectedElectiveTotalValue + selectedMandatoryTotalValue;
        }

        if (selectedDisciplinesTotalValues+selectedOptionalTotalValue > 0) {
          displayHours.innerHTML = selectedDisciplinesTotalValues + selectedOptionalTotalValue + Number(document.getElementById('sumActivities').innerHTML);
        } else {
          displayHours.innerHTML = "0";
        }
      };
      div.refresh();
    };
    multiSelect.loadOptions();

    search.addEventListener('input', () => {
      dropdownList.querySelectorAll(':scope div:not(.multiselect-dropdown-all-selector)').forEach((div) => {
        let innerText = div.querySelector('label').innerText.toLowerCase();
        div.style.display = innerText.includes(search.value.toLowerCase()) ? 'flex' : 'none';
      });
    });

    div.addEventListener('click', () => {
      div.dropdownListWrapper.style.display = 'block';
      search.focus();
      search.select();
    });

    document.addEventListener('click', (e) => {
      if (!div.contains(e.target)) {
        dropdownListWrapper.style.display = 'none';
        div.refresh();
      }
    });
  });

  const createStyles = () => {
    let styles = {
      ':root': {
        '--color-background': '#ffffff',
        '--color-border': '#000000',
        '--color-background--option': '#99FF99',
        '--color-background--option--hover': '#d5e0a1',
        '--color-text--normal': '#000000',
        '--color-text--grey': '#24262c',
        '--color-text--red': '#cc6666',
        '--color-text--placeholder': '#ced4da',
        '--border-radius--base': `${parseInt(config.borderRadius)}px` || '6px',
        '--border-radius--small': `${parseInt(config.borderRadius) * 0.75}px` || '4px'
      },
      '.multiselect-dropdown': {
        position: 'relative',
        display: 'inline-flex',
        'flex-wrap': 'wrap',
        padding: '1rem',
        gap: '1em',
        'border-radius': 'var(--border-radius--base)',
        border: 'solid 2px var(--color-border)',
        background: 'var(--color-background)',
        'background-repeat': 'no-repeat',
        'background-position': 'right 6px center',
        'background-size': '16px 12px',
        'min-width': `${config.minWidth}`,
        'max-width': `${config.maxWidth}`,
        cursor: 'pointer',
        'color': 'var(--color-text--normal)',
        'box-shadow': '4px 4px #000000'
      },
      'span.optext, span.placeholder': {
        display: 'inline-flex',
        'justify-content': 'left',
        'align-items': 'center',
        'font-size': '16px',
        'border-radius': 'var(--border-radius--small)'
      },
      'span.optext': {
        'background-color': 'var(--color-background--option)',
        padding: '0.5em 0.5em 0.5em 1em',
        cursor: 'default',
        '-webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
      },
      'span.optext .optdel': {
        float: 'right',
        margin: '0.5em',
        'font-size': '1em',
        cursor: 'pointer',
        color: 'var(--color-text--grey)'
      },
      'span.optext .optdel:hover': {
        color: 'var(--color-text--red)'
      },
      'span.placeholder': {
        color: 'var(--color-border)'
      },
      '.multiselect-dropdown-list-wrapper': {
        'z-index': 100,
        'border-radius': 'var(--border-radius--base)',
        border: 'solid 2px var(--color-border)',
        display: 'none',
        margin: '-1px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        background: 'var(--color-background)',
        'box-shadow': '5px 4px #000000'
      },
      '.multiselect-dropdown-search': {
        padding: '1rem 1.5rem',
        'border-top-left-radius': 'var(--border-radius--base)',
        'border-top-right-radius': 'var(--border-radius--base)',
        border: 'solid 2px transparent',
        'border-bottom': 'solid 1px var(--color-border)',
        'font-size': 'inherit'
      },
      '.multiselect-dropdown-search::placeholder': {
        color: '#000000',
        'font-size': '16px'
      },
      '.multiselect-dropdown-search:focus, .multiselect-dropdown-search:focus-visible': {
        outline: 'none'
      },
      '.multiselect-dropdown-list': {
        'overflow-y': 'auto',
        'overflow-x': 'hidden',
        height: '100%',
        'max-height': `${config.maxHeight}` ?? '160px'
      },
      '.multiselect-dropdown-list::-webkit-scrollbar': {
        width: '4px'
      },
      '.multiselect-dropdown-list::-webkit-scrollbar-thumb': {
        'background-color': 'var(--color-background--option)',
        'border-radius': '1000px'
      },
      '.multiselect-dropdown-list div, .multiselect-dropdown-list div > input, .multiselect-dropdown-list div > label':
        {
          cursor: 'pointer',
          'border-radius': 'var(--border-radius--base)'
        },
      '.multiselect-dropdown-list div': {
        display: 'flex',
        'text-align': 'left',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'column-gap': '6px',
        padding: '6px',
        margin: '6px 8px 6px 6px',
        transition: '100ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'
      },
      '.multiselect-dropdown-list div:hover': {
        'background-color': 'var(--color-background--option--hover)'
      },
      '.multiselect-dropdown-list-input': {
        height: '14px',
        width: '14px',
        border: 'solid 1px var(--color-text--grey)',
        margin: 0
      },
      '.multiselect-dropdown span.maxselected': {
        width: '100%'
      },
      '.multiselect-dropdown-all-selector': {
        'border-bottom': 'solid 1px var(--color-border)'
      }
    };
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = `${Object.keys(styles)
      .map(
        (selector) =>
          `${selector} { ${Object.keys(styles[selector])
            .map((property) => `${property}: ${styles[selector][property]}`)
            .join('; ')} }`
      )
      .join('\n')}`;
    document.head.appendChild(style);
  };

  config.useStyles && createStyles();
};

window.onload = () => {
  MultiSelectDropdown(window.MultiSelectDropdownOptions);
};