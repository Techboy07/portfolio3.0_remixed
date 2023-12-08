const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-wrapper");
const bodyContent = document.querySelector(".main-content");
let active = false;

const flipTheSwitch = () => {
  active = !active;
  hamburger.setAttribute("aria-expanded", `${active}`);
  navMenu.setAttribute("data-visible", `${active}`);
};

hamburger.addEventListener("click", flipTheSwitch);
bodyContent.addEventListener("click", () => {
  if (active) flipTheSwitch();
});

async function getProjects() {
  const projects = await fetch(
    "http://portfolical-v1-api.onrender.com/projects"
  );
  return projects;
}

// for project cards

const projectBody = document.querySelectorAll(".projects-container");
let visible = false;

function changeTheSwitch(elem) {
  visible = !visible;
  elem.setAttribute("data-visible", `${visible}`);
}

projectBody.forEach((elem) =>
  elem.addEventListener("mouseenter", () => {
    changeTheSwitch(elem);
  })
);

projectBody.forEach((elem) =>
  elem.addEventListener("mouseleave", () => {
    changeTheSwitch(elem);
  })
);

// for scroll animation
let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries, observer = observer) => {
  entries.forEach((entry) => {
    if (entry.isVisible) {
      console.log(target);
    }
  });
}, options);

function doOnScroll(elem) {
  observer.observe(elem);
}

const card = projectBody[0];
doOnScroll(card);
