function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to(".nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-bottom", {
      height: 0,
      duration: 0.3,
    });
  });
}

function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector(".page3 video");
  var nav = document.querySelector("nav");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      opacity: 1,
      transform: "scaleX(1) scaleY(1)",
      borderRadius: 0,
    });
    // Set nav z-index back to its original value with smooth transition
    gsap.to(nav, {
      zIndex: -1000,
      duration: 0.3, // Set the duration of the transition
    });
  });

  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      opacity: 0,
      transform: "scaleX(0.7) scaleY(0)",
      borderRadius: "30px",
    });
    // Set nav z-index to a lower value with smooth transition
    gsap.to(nav, {
      zIndex: 9,
      duration: 0.3, // Set the duration of the transition
    });
  });
}

function pageColorAnimation() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".right-top p",
      // markers: true,
      scroller: ".main",
      start: "top 93%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl3.to(".page4", {
    backgroundColor: "#FFFFFF",
  });
  tl3.to(".page4 h1", {
    color: "#000",
  });
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec-bottom",
      // markers: true,
      scroller: ".main",
      start: "top 33%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl4.to(".page5", {
    backgroundColor: "#111111",
  });

  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".circle",
      // markers: true,
      scroller: ".main",
      start: "top 93%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl5.to(".page6", {
    backgroundColor: "#fff",
  });
}

function page4VideoAnimation() {
  var sections = document.querySelectorAll(".sec-rigth");
  sections.forEach(function (elems) {
    elems.addEventListener("mouseenter", function () {
      elems.childNodes[3].style.opacity = 1;
      elems.childNodes[3].play();
    });
    elems.addEventListener("mouseleave", function () {
      elems.childNodes[3].style.opacity = 0;
      elems.childNodes[3].load();
    });
  });
  var sections = document.querySelectorAll(".sec-bottom");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.style.transform = "scaleY(1.4)";

      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });

    elem.addEventListener("mouseleave", function () {
      elem.style.transform = "scaleY(1)";
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}

function page6Animations() {
  gsap.from("#btm6-part2 h4, #btm6-part3 h4, #btm6-part4 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: ".main",
      // markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: true,
    },
  });
}

function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".page1", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
  });
  tl.from(".page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "150px",
    duration: 2,
    ease: "expo.out",
  });
  tl.from("nav", {
    opacity: 0,
    delay: -0.2,
  });
  tl.from(".page1 h1, .page1 p, .page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function page7ImageAnimation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  var hideTimeout;

  elemC.addEventListener("mouseenter", function () {
    clearTimeout(hideTimeout); // Clear any existing timeout
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    // Delay hiding the image to prevent blinking
    hideTimeout = setTimeout(function () {
      fixed.style.display = "none";
    }, 10); // Adjust the delay time as needed (in milliseconds)
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });

    e.addEventListener("mousemove", function (dets) {
      var rotate = 0;
      var diffrot = 0;
      var diff = dets.clientY - e.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;

      gsap.to(fixed, {
        opacity: 1,
        ease: "power3.out",
        top: dets.clientY - 50 + "px",
        left: dets.clientX - 50 + "px",
      });
    });

    e.addEventListener("mouseleave", function (dets) {
      gsap.to(fixed, {
        // opacity: 0,
        ease: "power3.out",
        duration: 0.5,
      });
    });
  });
}

function allTextAnimation() {
  gsap.from(".page2-left, .right-elem", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      // markers: true,
      start: "top 76%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".page4-box", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".right-bottom p",
      scroller: ".main",
      // markers: true,
      start: "top 46%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".page4-part3 ", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".lstbox",
      scroller: ".main",
      // markers: true,
      start: "top 86%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".page5b-t ", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".lsteml",
      scroller: ".main",
      // markers: true,
      start: "top 56%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".page5b-b", {
    y: 120,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page5b-t",
      scroller: ".main",
      // markers: true,
      start: "top 56%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".page7-top", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page7-div p",
      scroller: ".main",
      // markers: true,
      start: "top 56%",
      end: "top 46%",
      scrub: 3,
    },
  });
  gsap.from(".pg7top5", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page7-div .antext",
      scroller: ".main",
      // markers: true,
      start: "top 56%",
      end: "top 46%",
      scrub: 3,
    },
  });
}

function cursor() {
  var cursor = document.querySelector(".cursor");
  var cursorinner = document.querySelector(".cursor2");
  var a = document.querySelectorAll("a");
  var hamburger = document.getElementById("menuToggle"); // Changed to menuToggle
  var menuIcon = document.querySelector(".menu-bg");

  document.addEventListener("mousemove", function (e) {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    cursorinner.style.left = e.clientX + "px";
    cursorinner.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("cursorinnerhover");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("cursorinnerhover");
  });

  a.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("hover");
    });
  });

  // Add event listener to the hamburger icon for hover effect
  hamburger.addEventListener("mouseover", function () {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursorinner.style.width = "30px";
    cursorinner.style.height = "30px";
  });

  // Reset cursor size when mouse leaves the hamburger icon
  hamburger.addEventListener("mouseleave", function () {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursorinner.style.width = "15px";
    cursorinner.style.height = "15px";
  });

  // Add event listener to the menu icon for hover effect
  menuIcon.addEventListener("mouseover", function () {
    cursorinner.style.width = "50px";
    cursorinner.style.height = "50px";
  });

  // Reset cursor size when mouse leaves the menu icon
  menuIcon.addEventListener("mouseleave", function () {
    cursorinner.style.width = "15px";
    cursorinner.style.height = "15px";
  });
}


locomotiveAnimation();

allTextAnimation();

loadingAnimation();

navAnimation();

page2Animation();

page3VideoAnimation();

pageColorAnimation();

page4VideoAnimation();

page7ImageAnimation();

page6Animations();

cursor();