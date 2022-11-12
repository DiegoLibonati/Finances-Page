const navLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById("navbar");
const allSections = document.querySelectorAll("section");
const navbar = document.getElementById("navbarNav");

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

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", activeLink);
});
