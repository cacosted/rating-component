// 

const form = document.querySelector('.form');
const formBody = document.querySelector('.form__body');

const colorRating = (element) => {
    element.classList.add('orange__back')
}

const getInputs = () => {
    
    const inputList = document.querySelectorAll('.form__rating__radio');
    return inputList;
}

const createRatings = (amount = 5) => {
    
    
    for (let index = 1; index <= amount; index++) {
        const label = document.createElement('label');
        
        label.classList.add('form__rating');
        label.for = `rating-${index}`;
        label.innerHTML = 
        `
        <span class="form__rating__text">${index}</span>
        <input type="radio" name="form__rating__input" id="rating-${index}" class="form__rating__radio" value="${index}">
        
        `
        formBody.append(label);
    }

}

createRatings();

form.addEventListener('change', (e) => {
    e.stopPropagation();
    const inputList = getInputs();
    // console.log(inputList);
    inputList.forEach(input => {
        if(input.checked) {
            input.parentElement.classList.add('orange__back');
        }
        else {
            input.parentElement.classList.remove('orange__back');
        }
    })
},)

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const cardForm = document.querySelector('.card__form');
    const cardThanks = document.querySelector('.card__thanks');
    const inputValue = form['form__rating__input'].value;
    const ratedValue = document.querySelector('#ratingValue');

    ratedValue.textContent = inputValue != '' ? inputValue : 0;
    cardThanks.classList.remove('hidden');
    cardForm.classList.add('hidden');

})

