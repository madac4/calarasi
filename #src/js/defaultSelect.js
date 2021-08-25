@@include('choices.min.js', {});

const region = () => {
    const region = document.querySelector('#choice');
    if (region) {
        const regionChoice = new Choices((region), {
            searchEnabled: false,
        });
    }
}

region();


const inputFieldYear = document.querySelector('.choice-value__year');
if (inputFieldYear) {
    const dropdown = document.querySelector('.choice-list__year');
    const dropdownArray = [...dropdown.querySelectorAll('.choice-item')];
    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    const closeDropdown = () => {
        dropdown.classList.remove('open');
    }

    inputFieldYear.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputFieldYear.value.toLowerCase();
        let valueSubstring;
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                    dropdownArray[j].classList.add('closed');
                } else {
                    dropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
            }
        }
    });

    dropdownArray.forEach(item => {
        item.addEventListener('click', (evt) => {
            inputFieldYear.value = item.textContent;
            dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
            });
        });
    })

    inputFieldYear.addEventListener('focus', () => {
        inputFieldYear.placeholder = 'Select Year';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
            dropdown.classList.remove('closed');
        });
    });

    inputFieldYear.addEventListener('blur', () => {
        inputFieldYear.placeholder = 'Year';
        dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputFieldYear.contains(evt.target);
        if (!isDropdown && !isInput) {
            dropdown.classList.remove('open');
        }
    });
}

const inputFieldMonth = document.querySelector('.choice-value__month');
if (inputFieldMonth) {
    const dropdown = document.querySelector('.choice-list__month');
    const dropdownArray = [...dropdown.querySelectorAll('.choice-item')];
    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    const closeDropdown = () => {
        dropdown.classList.remove('open');
    }

    inputFieldMonth.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputFieldMonth.value.toLowerCase();
        let valueSubstring;
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                    dropdownArray[j].classList.add('closed');
                } else {
                    dropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
            }
        }
    });

    dropdownArray.forEach(item => {
        item.addEventListener('click', (evt) => {
            inputFieldMonth.value = item.textContent;
            dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
            });
        });
    })

    inputFieldMonth.addEventListener('focus', () => {
        inputFieldMonth.placeholder = 'Select Month';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
            dropdown.classList.remove('closed');
        });
    });

    inputFieldMonth.addEventListener('blur', () => {
        inputFieldMonth.placeholder = 'Mouth';
        dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputFieldMonth.contains(evt.target);
        if (!isDropdown && !isInput) {
            dropdown.classList.remove('open');
        }
    });
}

const inputFieldDate = document.querySelector('.choice-value__date');
if (inputFieldDate) {
    const dropdown = document.querySelector('.choice-list__date');
    const dropdownArray = [...dropdown.querySelectorAll('.choice-item')];
    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    const closeDropdown = () => {
        dropdown.classList.remove('open');
    }

    inputFieldDate.addEventListener('input', () => {
        dropdown.classList.add('open');
        let inputValue = inputFieldDate.value.toLowerCase();
        let valueSubstring;
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                    dropdownArray[j].classList.add('closed');
                } else {
                    dropdownArray[j].classList.remove('closed');
                }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
            }
        }
    });

    dropdownArray.forEach(item => {
        item.addEventListener('click', (evt) => {
            inputFieldDate.value = item.textContent;
            dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
            });
        });
    })

    inputFieldDate.addEventListener('focus', () => {
        inputFieldDate.placeholder = 'Select Date';
        dropdown.classList.add('open');
        dropdownArray.forEach(dropdown => {
            dropdown.classList.remove('closed');
        });
    });

    inputFieldDate.addEventListener('blur', () => {
        inputFieldDate.placeholder = 'Date';
        dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
        const isDropdown = dropdown.contains(evt.target);
        const isInput = inputFieldDate.contains(evt.target);
        if (!isDropdown && !isInput) {
            dropdown.classList.remove('open');
        }
    });
}




const multiChoices = () => {
    const block = document.querySelector('.choice-selector__block')
    block.forEach(el =>{
        const choices = new Choices(el,{
            
    })
})
}