# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Build out the project to the designs provided

### Screenshot

![result on desktop](./screenshot/profile-card-component-dekstop.png)
screenshot on desktop

![result on mobile](./screenshot/profile-card-component-mobile.png)
screenshot on mobile

### Links

- [Link to solution repository](https://github.com/rickyxyz/frontendmentor-projects/tree/main/profile-card-component-main)
- [Link to live site](https://rickyxyz.dev/frontendmentor-projects/profile-card-component-main/index.html)

## My process

### Built with

- CSS custom properties
- Flexbox

### What I learned

When I first looked at the challenge, I thought this shouldn't take too long to complete. However, I were wrong. The issue come to light pretty early, that is how to position the two circles in the background. I spent a good hour trying to figure it out, until I decided to look at how other people did this challenge. Then I saw instead of forcing the circle to stay in the corner, they just pushed the circle into the corner

```css
body {
    ...
    background: url("./images/bg-pattern-top.svg"), url("./images/bg-pattern-bottom.svg"), var(--dark-cyan);
    background-repeat: no-repeat;
    /* pushing the circle to the corner */
    background-position: bottom calc(50vh - 5vw) right calc(50vw + 8%), top calc(40vh + 6vw) left calc(50vw + 8%);
    ...
}
```

### Continued development

I think, I still need to work out how to structure the HTML better and improve how I name things, so they can be reused in the future.

### Useful resources

- [ApplePieGiraffe's Solution](https://www.frontendmentor.io/solutions/card-component-with-3d-animation-t0NqrfqMT) - This is the solution I looked at to figure out how to place the circles in the background.

## Author

- Website - [rickyxyz.dev](https://www.rickyxyz.github.io)
- Frontend Mentor - [@rickyxyz](https://www.frontendmentor.io/profile/rickyxyz)

## Acknowledgments

Shout-out to [@ApplePieGiraffe](https://www.frontendmentor.io/profile/ApplePieGiraffe)
