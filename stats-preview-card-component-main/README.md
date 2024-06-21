# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![solution on desktop](./screenshot/stats-preview-card-component-desktop.png)

![solution on mobile](./screenshot/stats-preview-card-component-mobile.png)

![solution in size between](./screenshot/stats-preview-card-component-between.png)

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/stats-preview-card-component-main/tree/main/order-summary-component-main)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/stats-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

Two major issues surfaced during development.

The simpler issue is to give the image a purple color overlay. My first idea is to use CSS filter to obtain the result, however none of the filter combinations that I tried came out right. So, instead I used a pseudo element with slightly transparent background-color to overlay the image.

```css
.card__image {
    ...
    /* one of the filter combination I tried */
    filter: sepia(100%) hue-rotate(240deg) saturate(300%) brightness(0.6);
    ...
}
```

```css
/* pseudo-element I used to overlay the image */
.card__image::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: var(--filter-purple);
}
```

The other issue I faced is how to scale the text and the image, so it will come out right on most device sizes. The source of this issue is the text will get clipped by the image if the screen width is not long enough.

![screenshot of text getting clipped by image](./screenshot/stats-preview-card-component-issue-2.png)

The simplest solution I found is to just to change at what size the layout changes from desktop to mobile. This way the layout will switch to mobile layout when the text container cannot show the whole text content, in this case I set the layout to change at 1010px width.

```css
@media screen and (max-width: 1010px) {
  /* switch to mobile layout */
  ...;
}
```

### Continued development

Until the end of this challenge, I still have not figured out how to take care of the text getting clipped by image problem. Additionally, because of my approach to the issue, on some screen the result does not look good.

### Useful resources

- [CSS Tricks Filter](https://css-tricks.com/almanac/properties/f/filter/) - This article showed me a good example of the filter effects.

## Author

- Website - [rickyxyz.dev](https://rickyxyz.dev/)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
