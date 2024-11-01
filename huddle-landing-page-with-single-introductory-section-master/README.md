# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![result on desktop](./screenshot/huddle-landing-page-with-single-introductory-section-desktop.png)
result on screen wider than 900px

![result on mobile](./screenshot/huddle-landing-page-with-single-introductory-section-mobile.png)
result on mobile device

### Links

- Solution URL: [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/huddle-landing-page-with-single-introductory-section-master)
- Live Site URL: [Link to live site](https://rickyxyz.dev/frontendmentor-projects/huddle-landing-page-with-single-introductory-section-master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Icons from https://ionic.io/ionicons

### What I learned

I don't feel I learned anything major from this challenge. However, a small thing I learned and never utilized until now is that hover selector can be chained to the child element. I needed to do this, because I nested the nav icon inside a li and gave border to the li tag instead of the svg tag. So during hover, I needed to change the border of the li and the svg color separately. On second thought, maybe I should've given the border to the svg instead of the li tag.

```css
/* chaining :hover with child element */
nav li:hover svg,
nav li:active svg {
  fill: var(--soft-magenta);
}
```

This challenge do make me realize I need to practice more on my general frond-end skills, since there are still a lot of things I cannot do and not know.

### Useful resources

- [Stackoverflow Thread](https://stackoverflow.com/questions/5061940/changing-the-child-elements-css-when-the-parent-is-hovered) - This thread is the thread that showed me that the :hover selector can be chained.

## Author

- Website - [rickyxyz.dev](https://www.rickyxyz.github.io)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)
