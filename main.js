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

projectBody.forEach((elem) => {
  elem.addEventListener("mouseleave", () => {
    changeTheSwitch(elem);
  });
  elem.addEventListener("touchstart", () => {
    changeTheSwitch(elem);
  });
  elem.addEventListener("touchend", () => {
    changeTheSwitch(elem);
  });
  elem.addEventListener("mouseenter", () => {
    changeTheSwitch(elem);
  });
  return;
});

// for scroll animation
let options = {
  threshold: 1.0,
  rootMargin: "50%",
};

const observer = new IntersectionObserver((entries, observer = observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
    }
  });
}, options);

// for email

(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

function sendTheMail(e) {
  const fullName = document.querySelector("#txt").value;
  const email = document.querySelector("#eml").value;
  const textMessage = document.querySelector("#msg").value;

  e.preventDefault();
  const emailParams = {
    name: `${fullName}`,
    message: `clientEmail: ${email},
    details: ${textMessage}`,
  };

  emailjs
    .send(
      "service_e0ld1ma",
      "template_9f7ihqm",
      emailParams,
      "KktaVBb_AQy4Lt-3Q"
    )
    .then(() => {
      alert("meassage succefully sent");
      e.target.reset();
    });
}

const myform = document.querySelector("#myForm");

myform.addEventListener("submit", sendTheMail);
