let slide = document.querySelectorAll(".slide");
let slideArr = Array.from(slide);
console.log(slideArr);

//position of active slide start
function nextPrev() {
  let active = document.querySelector(".active");
  let actPos = slideArr.indexOf(active);

  let prev;
  let next;
  if (actPos == 0) {
    prev = slideArr[slideArr.length - 1];
  } else {
    prev = slideArr[actPos - 1];
  }
  if (actPos == slideArr.length - 1) {
    next = slideArr[0];
  } else {
    next = [actPos + 1];
  }
  /* console.log("actPos:",actPos);
  console.log("prev:", prev);
  console.log("activePos:", slideArr[actPos]);
  console.log("next:", next);*/

  return [next, prev];
}
//position of active slide end

//translate-X postion satrt

function Xposition() {
  let active = document.querySelector(".active");
  let actPos = slideArr.indexOf(active);
  let [next, prev] = nextPrev();

  slideArr.map((pic, index) => {
    if (actPos == index) {
      pic.style.transform = "translateX(0)";
    } else if (pic == prev) {
      pic.style.transform = "translateX(-100%)";
    } else if (pic == next) {
      pic.style.transform = "translateX(100%)";
    }
  });
}
//translate-X postion end
let nbut = document.querySelector(".nbut");
let pbut = document.querySelector(".pbut");

nbut.addEventListener("click", function () {
  let next = document.querySelector(".next");
  let active = document.querySelector(".active");

  let [n, p] = nextPrev();

  active.classList.remove("active");
  active.style.transform = "translateX(-100%)";
  n.classList.add("active");
  n.style.transform = "translateX(0)";
  Xposition();
});

/*prev.addEventListener("click", () => {
  let active = document.querySelector(".active");
  let [prev] = nextPrev();
  active.classList.remove("active");
  active.style.transform = "translateX(-100%)";
  prev.classList.add("active");
  prev.style.transform = "translateX(0)";
  Xposition();
});*/
