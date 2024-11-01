# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![responsiveness](./screenshots/responsiveness.gif)

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/react/news-homepage-main)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/news-homepage-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [ViteJs](https://vitejs.dev/) - Build tool

### What I learned

In this project, I learned more about how to implement a responsive layout using both grid and flexbox. Creating the layout styling took longer than expected. I also learned how to make prevent scroll when a modal is open.

```tsx
useEffect(() => {
  document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
}, [isMenuOpen]);
```

I just learned that adding overflow hidden keeps track of the user's current scroll position.

### Continued development

I still have a lot to learn on how to implement responsive layout that works and interactive state and animation.

### Useful resources

- [Using A Transient CSS Stylesheet To Remove Scrolling On Body While Modal Is Open ](https://www.bennadel.com/blog/4442-using-a-transient-css-stylesheet-to-remove-scrolling-on-body-while-modal-is-open.htm) - This article helped me implement the navigation bar toggle

## Author

- Website - [rickyxyz.dev](https://rickyxyz.dev/)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
