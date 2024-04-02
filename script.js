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

// function locomotiveAnimation() {
//   gsap.registerPlugin(ScrollTrigger);

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true,

//     // for tablet smooth
//     tablet: { smooth: true },

//     // for mobile
//     smartphone: { smooth: true },
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },

//     // follwoing line is not required to work pinning on touch screen

//     /* pinType: document.querySelector(".main").style.transform
//       ? "transform"
//       : "fixed"*/
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   ScrollTrigger.refresh();
// }

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

navAnimation();

page2Animation();

locomotiveAnimation();

page3VideoAnimation();

pageColorAnimation();

page4VideoAnimation();
