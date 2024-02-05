import { header, navLinks, navbar } from "./elements";

const activeLink = (e: Event) => {
  e.preventDefault();

  navbar.classList.remove("show");

  const target = e.currentTarget as HTMLAnchorElement;
  const sectionClicked = target.href.substring(target.href.indexOf("#") + 1);

  const headerHeight = header.offsetHeight;

  const section = document.getElementById(sectionClicked) as HTMLElement;

  const pos = section.offsetTop - headerHeight;

  document.body.scrollTo({
    left: 0,
    top: pos,
  });

  const anchorActive = document.querySelector(".active");

  if (anchorActive) anchorActive.classList.remove("active");

  target.classList.add("active");
};

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", (e) => activeLink(e));
});
