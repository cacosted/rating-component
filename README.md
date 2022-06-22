
# Frontend Mentor - Interactive rating component solution

  

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

  

## Table of contents

  

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Author](#author)


  

## Overview

  

### The challenge

  

Users should be able to:

  

- View the optimal layout for the app depending on their device's screen size

- See hover states for all interactive elements on the page

- Select and submit a number rating

- See the "Thank you" card state after submitting a rating

  

### Screenshot

  

![](./screenshot.jpg)

  

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

  

## My process

  

### Built with

  

- Semantic HTML5 markup

- CSS custom properties

- Flexbox

- CSS Grid

- Mobile-first workflow

- JavaScript and DOM manipulation

  

### What I learned

  

The main most challenging part of this challenge was to hide the `radio` input inside the `label` tag in a way that didn't afected the positioning of the number, after some test I could finally get the result using the `opacity`.

  

This is an example of this:

  

Function to create dynamically the labels

```js

const  createRatings = (amount = 5) => {

	for (let  index = 1; index <= amount; index++) {

		const  label = document.createElement('label');

		label.classList.add('form__rating');

		label.for = `rating-${index}`;

		label.innerHTML = `
		<span class="form__rating__text">${index}</span>
		<input type="radio" name="form__rating__input" id="rating-${index}" class="form__rating__radio" value="${index}">
		`
		formBody.append(label);
	}
}

```

  

This is how the labels look on HTML

```html

<label  class="form__rating">
	<span  class="form__rating__text">4</span>
	<input  type="radio"  name="form__rating__input"  id="rating-4"  class="form__rating__radio"  value="4">
</label>

```

  

The CSS class to hide the radio input

```css

.form__rating__radio {
	opacity: 0;
}

```
  
## Author

 
- Frontend Mentor - [@cacosted](https://www.frontendmentor.io/profile/cacosted)

- Twitter - [@cacosted](https://www.twitter.com/cacosted)

 
