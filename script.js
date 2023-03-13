// gsap.to("#one", {
//   width: "100%",
//   ease: Expo.easeInOut,
//   duration: 2,
// });

// document.querySelectorAll(".imageContainer").forEach(function (elem) {
//   gsap.to(elem, {
//     ease: Expo.easeInOut,
//     width: "100%",
//     duration: 2,
//     stagger: 1,
//   });
// });

var timeLine = gsap.timeline({
  repeat: -1,
});

timeLine.to(".imageContainer", {
  ease: Expo.easeInOut,
  width: "100%",
  duration: 2,
  stagger: 2,
},"ali");

timeLine.to(".text h1", {
  //   delay: 2,
  ease: Expo.easeInOut,
  //   width: "100%",
  //   duration: 2,
  stagger: 2,
  top: 0,
},"ali");

timeLine.to(".text h1", {
  delay: 1,
  ease: Expo.easeInOut,
  //   width: "100%",
  // duration: 2,
  stagger: 2,
  top: "-100%",
},"ali");

// var timeLine = gsap.timeline({
//   repeat: -1,
// });

// timeLine
//   .to(
//     ".imageContainer",
//     {
//       ease: Expo.easeInOut,
//       width: "100%",
//       // duration: 2,
//       stagger: 2,
//     },
//     "ali"
//   )

//   .to(
//     ".text h1",
//     {
//       //   delay: 2,
//       ease: Expo.easeInOut,
//       //   width: "100%",
//       //   duration: 2,
//       stagger: 1,
//       top: 0,
//     },
//     "ali"
//   )

//   .to(
//     ".text h1",
//     {
//       delay: 1,
//       ease: Expo.easeInOut,
//     //   width: "100%",
//       //   duration: 2,
//       stagger: 2,
//       top: "-100%",
//     },
//     "ali"
//   );
