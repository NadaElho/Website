let chooseColor = document.querySelector(".chooseColor");
let color = document.querySelector(".color");
let choose = document.querySelectorAll(".co");
let nam = document.getElementById("name");
let review = document.getElementById("review");
let photos = document.querySelectorAll(".pers img");
let up = document.querySelector(".top");
let prev = document.querySelector(".left");
let next = document.querySelector(".right");
let imgBox = document.querySelectorAll(".imgBox");
let bullets = document.querySelectorAll(".bull");
let ans = document.querySelectorAll(".ans");
let ques = document.querySelectorAll(".ques");
let down = document.querySelectorAll(".down");
let check = document.querySelectorAll(".check");
let home = document.querySelector(".home");
let hOme = document.querySelector(".hOme");
let aboutUs = document.querySelector(".aboutUs");
let about = document.querySelector(".about");
let faq = document.querySelector(".faq");
let fAq = document.querySelector(".fAq");
let h = document.querySelectorAll(".h");
let bar = document.querySelector(".bar");
let menu = document.querySelector(".menu");

chooseColor.onclick = () => {
  color.classList.toggle("hide");
};
choose.forEach(function (ele, i, arr) {
  arr[i].onclick = () => {
    window.localStorage.color = arr[i].id;
    document.documentElement.style.setProperty("--main-color", ele.id);
  };
  if (localStorage.color) {
    document.documentElement.style.setProperty(
      "--main-color",
      localStorage.color
    );
  }
});

let persons = [
  {
    na: "Ahmed",
    review:
      "In addition, groups and toolbars should be given an explicit label, asmost assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but alternatives such as aria-labelledby can also be used.Due to the specific HTML and CSS used to justify buttons (namely display: table-cell), the borders between them are doubled.",
  },
  {
    na: "Sayed",
    review:
      "In addition, groups and toolbars should be given an explicit label, asmost assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but alternatives such as aria-labelledby can also be used.Due to the specific HTML and CSS used to justify buttons (namely display: table-cell), the borders between them are doubled.",
  },
  {
    na: "AbdElaziz",
    review:
      "In addition, groups and toolbars should be given an explicit label, asmost assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use aria-label, but alternatives such as aria-labelledby can also be used.Due to the specific HTML and CSS used to justify buttons (namely display: table-cell), the borders between them are doubled.",
  },
];
window.onload = () => {
  photos[0].click();
  faq.classList.add("hide");
  aboutUs.classList.add("hide");
  home.classList.remove("hide");
};
photos.forEach(function (ele, i, arr) {
  ele.addEventListener(
    "click",
    (ele.onclick = () => {
      for (let j = 0; j < arr.length; j++) {
        arr[j].style.opacity = "45%";
      }
      nam.innerText = persons[i].na;
      review.innerText = persons[i].review;
      ele.style.opacity = "100%";
    })
  );
});

window.onscroll = () => {
  if (window.scrollY > 400) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.onclick = () => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
};
let i = 0;
slide(i);
function imgNum(n) {
  i = n;
  slide(i);
}
function slide(n) {
  if (n >= imgBox.length) {
    i = 0;
  }
  if (n < 0) {
    i = imgBox.length - 1;
  }
  for (let j = 0; j < bullets.length; j++) {
    bullets[j].classList.remove("active");
    imgBox[j].style.display = "none";
  }
  bullets[i].classList.add("active");
  imgBox[i].style.display = "flex";
}
prev.onclick = () => {
  slide(i -= 1);
};
next.onclick = () => {
  slide(i += 1);
};
ques.forEach(function (ele, i) {
  ele.onclick = () => {
    ans[i].classList.toggle("hide");
    check[i].classList.toggle("hide");
    down[i].classList.toggle("active");
  };
});
let homeFun = () => {
  hOme.classList.add("active");
  about.classList.remove("active");
  fAq.classList.remove("active");
  faq.classList.add("hide");
  aboutUs.classList.add("hide");
  home.classList.remove("hide");
};
hOme.onclick = () => {
  homeFun();
};
h[0].onclick = () => {
  homeFun();
};
h[1].onclick = () => {
  homeFun();
};
about.onclick = () => {
  hOme.classList.remove("active");
  about.classList.add("active");
  fAq.classList.remove("active");
  faq.classList.add("hide");
  home.classList.add("hide");
  aboutUs.classList.remove("hide");
};
fAq.onclick = () => {
  hOme.classList.remove("active");
  about.classList.remove("active");
  fAq.classList.add("active");
  aboutUs.classList.add("hide");
  home.classList.add("hide");
  faq.classList.remove("hide");
};

/*document.querySelector(".service").onclick=()=>{
  document.querySelector(".srv").classList.toggle("active");
}*/

/*menu.onclick = () => {
  bar.classList.toggle("showBars");
};*/