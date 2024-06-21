# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - NFT preview card component solution](#frontend-mentor---nft-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
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
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![desktop preview](./screenshot/desktop-preview.png)
fig 1. Result viewed from desktop

![mobile preview](./screenshot/mobile-preview.png)
fig 2. Result viewed from small screen

### Links

<<<<<<< HEAD

- # Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/nft-preview-card-component-main)
- Solution URL: [Link to solution URL](https://github.com/rickyxyz/frontendmentor-projects/tree/main/nft-preview-card-component-main)
  > > > > > > > main
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/nft-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I find that using opacity for hover effect makes it difficult to have different element with different opacity on hover. So, instead I used color with transperancy to control the opacity of different element within one hover event.

```css
.thumbnail-container:hover .thumbnail-hover,
.thumbnail-container:active .thumbnail-hover {
  background-color: var(--cyan-hover);
}
```

I used the code above instead of the code below

```css
.thumbnail-container:hover .thumbnail-hover,
.thumbnail-container:active .thumbnail-hover {
  opacity: 0.6;
}
```

Additionally, I learned that to make color transition effect works with svg path, you need to assign it a base value first.

```css
.thumbnail-hover path {
  fill: var(--transparent); /* I need this color so the transition will work*/
  transition: fill 0.5s ease;
}
```

### Continued development

From this project, I think I still need to learn how to use semantic tags and relative units (rem, em, ...). In this project I feel like I didn't pay enough attention semantic tags and mostly used exact units like pixels instead.

### Useful resources

- [Hover Effect](https://codepen.io/nxworld/pen/ZYNOBZ) - This helped me for making the hover effect for image.
- [SVG Hover](https://stackoverflow.com/questions/20012240/using-css-to-transition-the-fill-property-of-an-svg-path-on-hover) - From this thread I learned to add starting fill color to path in order to make transition work properly.

## Author

- Website - [rickyxyz.dev](https://rickyxyz.dev/)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)

## Acknowledgments

Thank you to Google Search and the people mentioned in the Useful resource section.
