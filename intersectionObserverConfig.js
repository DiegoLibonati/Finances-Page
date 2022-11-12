const sections = document.querySelectorAll("section");
const svgs = document.querySelectorAll("svg");

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

observer.observe(sections[0]);
observer.observe(sections[1]);
observer.observe(sections[2]);
observer.observe(sections[3]);
observer.observe(sections[4]);

observer.observe(svgs[0]);
observer.observe(svgs[1]);
observer.observe(svgs[2]);
observer.observe(svgs[3]);
observer.observe(svgs[4]);
