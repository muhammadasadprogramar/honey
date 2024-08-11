let tl = gsap.timeline();

tl.from(
  "#bee1",
  {
    left: 1500,
    top: 0,
    duration: 9,
    repeat: -1,
  },
  "bee"
);

tl.to(
  "#bee2",
  {
    left: 1000,
    top: 500,
    duration: 9,
    repeat: -1,
    yoyo: true,
  },
  "bee"
);

gsap.from("#bee3", {
  top: 500,
  duration: 9,
  repeat: -1,
  yoyo: true,
});

gsap.from("#bee4", {
  top: 500,
  right: 600,
  duration: 9,
  repeat: -1,
  yoyo: true,
});

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);

// gsap.to("#bottle", {
//   top:150,
//   duration:1,
//   scrollTrigger:{
//     trigger: "",
//     scroller:"body",
//     start: "top 50%",
//     end: "top 80%",
//     markers: true,
//     markers: true,
//   }
// })

// var time = gsap.timeline({scrollTrigger:{
//   trigger: ".about",
//   scroller:"body",
//   start: "top 50%",
//   end: "top 80%",
//   scrub: true,
//   markers: true,
// }})

// time.to("#bottle",{
//   top: "40%",
//   left: "0%"
// }, 'honey')

// tl.to("#orange-cut",{
//   top:"160%",
//   left: "23%"
// }, 'orange')
// tl.to("#orange",{
//   width: "15%",
//   top:"160%",
//   right: "10%"
// }, 'orange')
// tl.to("#leaf",{
//   top:"110%",
//   rotate: "130deg",
//   left: "70%"
// }, 'orange')
// tl.to("#leaf2",{
//   top:"110%",
//   rotate: "130deg",
//   left: "0%"
// }, 'orange')

// var tl2 = gsap.timeline({scrollTrigger:{
//   trigger: ".three",
//   start: "0% 95%",
//   end: "20% 50%",
//   scrub: true,
//   // markers: true,
// }})

// tl2.from(".lemon1",{
//   rotate: "-90deg",
//   left: "-100%",
//   top: "110%"
// }, 'ca')
// tl2.from("#cocacola",{
//   rotate: "-90deg",
//   top: "110%",
//   left: "-100%",
// }, 'ca')

// tl2.from(".lemon2",{
//   rotate: "90deg",
//   left: "100%",
//   top: "110%"
// }, 'ca')
// tl2.from("#pepsi",{
//   rotate: "90deg",
//   top: "110%",
//   left: "100%",
// }, 'ca')

// tl2.to("#orange-cut",{
//   width:"18%",
//   left: "42%",
//   top: "204%"
// }, 'ca')
// tl2.to("#fanta",{
//   width:"35%",
//   top: "210%",
//   left: "33%",
// }, 'ca')
