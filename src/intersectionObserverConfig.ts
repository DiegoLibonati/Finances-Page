import { allSections, svgs } from "./elements";

const loadContent = (entrys: IntersectionObserverEntry[]) => {
  entrys.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("showSection");
    }
  });
};

const observer = new IntersectionObserver(loadContent, {
  root: null,
  rootMargin: `0px 0px 0px 0px`,
});

allSections.forEach((section) => {
  observer.observe(section as HTMLElement);
});

svgs.forEach((svg) => {
  observer.observe(svg as HTMLElement);
});
