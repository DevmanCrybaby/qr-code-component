# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![final result screenshot](./src/images/Frontend%20Mentor%20QR%20code%20component.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

I've practiced React, which is a technology that I'm still not acquainted with. So it was very productive.
Making a brief recap.
- Create the project with the command "npm create-react-app ..." 
- Delete some useless files
- So in index.js the first content will be displayed, and ther it will be used the method Render with all created components so far
- index.css will stylize this part
- I just created the component Card, in the file Card.jsx is where I mix up JS and HTML, but the CSS file is made apart.

```jsx
import React from 'react';
import './Card.css';

import QR from '../images/image-qr-code.png'

export default props =>
    <div className='main'>
        <img className='img' src={QR} alt="qr-code" />
        <h1 className='title'>Improve your front-end skills by building projects</h1>
        <p className='details'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
```

### Continued development

I plan to see more about the concept of routes in React, despite I still have a lot to improve in the technology.

## Author

- Github - [DevManCrybaby](https://github.com/DevManCrybaby)
- Frontend Mentor - [@DevmanCrybaby](https://www.frontendmentor.io/profile/DevManCrybaby)
