# Finances-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a website about finances, but basically what I did was to take a design from the internet and implement it on my own without seeing the original code. All this was because I wanted to keep practicing Bootstrap.

## Technologies used

1. Bootstrap
2. CSS3
3. Javascript
4. HTML5

## Galery

![finances-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/financespagebt/financespagebt.jpg)

![finances-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/financespagebt/financespagebt-1.jpg)

![finances-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/financespagebt/financespagebt-2.jpg)

![finances-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/financespagebt/financespagebt-3.jpg)

![finances-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Bootstrap/Imagenes/financespagebt/financespagebt-4.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Finances%20Page`

## Video

https://user-images.githubusercontent.com/99032604/199860006-69edf7fb-3237-469e-a56e-ef008790caea.mp4

## Documentation

### ./navbar.js

With the `activeLink` function we will be able to close the navbar, go to the section corresponding to the one we clicked on in the navbar, in the navLink and also add only one asset class to that navLink:

```
const activeLink = (e) => {
  e.preventDefault();

  navbar.classList.remove("show");
  const elementClicked = e.currentTarget;
  const sectionClicked = e.currentTarget.href.substring(
    e.currentTarget.href.indexOf("#") + 1
  );

  const headerHeight = header.offsetHeight;

  allSections.forEach(function (section) {
    if (section.id == sectionClicked) {
      const pos = section.offsetTop - headerHeight;

      document.body.scrollTo({
        left: 0,
        top: pos,
      });
    }
  });
  navLinks.forEach(function (navLink) {
    if (navLink != elementClicked) {
      navLink.classList.remove("active");
    }
  });

  elementClicked.classList.add("active");
};
```

### ./intersectionObserverConfig.js

In the `intersectionObserverConfig.js` file we are going to use the intersection observer API to intersect those sections that we are interested in and add styles to them so to speak. We register those sections as `entry` and if it is intersecting we add the `showSection` class to it. In `observer` this API is configured:

```
const loadContent = (entrys, observer) => {
  entrys.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("showSection");
    }
  });
};

const observer = new IntersectionObserver(loadContent, {
  root: null,
  rootMargin: `0px 0px 0px 0px`,
  thereshold: 1.0,
});
```
