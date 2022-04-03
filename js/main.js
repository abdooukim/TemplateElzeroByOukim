// todo ==> random background images
const landing = document.querySelector(".landing");
const images = [1, 2, 3, 4, 5];

function getImage() {
  let num = Math.floor(Math.random() * images.length);
  landing.style.backgroundImage = `url(imgs/${images[num]}.jpg)`;
}

let randomCount = setInterval(getImage, 10000);

// todo ==> show and hide settings menu
const settingsBar = document.querySelector(".settings-bar");
const settingBtn = document.getElementById("btn-sett");

settingBtn.addEventListener("click", function () {
  settingsBar.classList.toggle("show");
});

// todo ==> change root colors

const colorBox = document.querySelectorAll(".colors li");

function manageColor(){
if (localStorage.currColor != null) {
  colorBox.forEach((ele) => {
    ele.classList.remove("active");
    if (ele.dataset.color == localStorage.currColor) {
      ele.classList.add("active");
    } 
  });
}
document.body.style.setProperty("--color", localStorage.currColor);
}

manageColor() ;

colorBox.forEach((ele) => {
  ele.addEventListener("click", function () {
    colorBox.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    localStorage.currColor = ele.dataset.color;
    document.body.style.setProperty("--color", localStorage.currColor);
  });
});



// todo ==> manage the background options
const btns = document.querySelectorAll(".background-option .btn-back");

function manageBackground() {
  if (localStorage.status != null) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      if (localStorage.status == btn.dataset.statu) {
        btn.classList.add("active");
      }
    });
    check();
  }
}

manageBackground();

btns.forEach((ele) => {
  ele.addEventListener("click", function () {
    btns.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    localStorage.status = ele.dataset.statu;
    check();
  });
});

function check() {
  if (localStorage.status == "No") {
    clearInterval(randomCount);
  } else {
    randomCount = setInterval(getImage, 10000);
  }
}

// todo ==> manage show or hide bullets

const mainBullets = document.querySelector(".bullets");
const bullBtn = document.querySelectorAll(".btn-bull");

function manageBullets() {
  if (localStorage.getItem("bul-statu") != null) {
    bullBtn.forEach((ele) => {
      ele.classList.remove("active");
      if (localStorage.getItem("bul-statu") == ele.dataset.bullet) {
        ele.classList.add("active");
      }
    });
    checkBull();
  }
}

manageBullets();

bullBtn.forEach((ele) => {
  ele.addEventListener("click", function () {
    bullBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    localStorage.setItem("bul-statu", this.dataset.bullet);
    checkBull();
  });
});

function checkBull() {
  if (localStorage.getItem("bul-statu") == "No") {
    mainBullets.classList.add("hide");
  } else {
    mainBullets.classList.remove("hide");
  }
}

// todo ==> reset settings and back all as a default
const resetBtn = document.getElementById("reset");
console.log(resetBtn);
resetBtn.addEventListener("click", (_) => {
  localStorage.currColor = "#FF9800" ;
  localStorage.status = "Yes";
  localStorage.setItem("bul-statu", "Yes");

  manageColor() ;
  manageBackground();
  manageBullets();
});

// todo ==> onscroll show skills progress
const skills = document.querySelector(".skills");
const progress = document.querySelectorAll(".all-skills span");

onscroll = function () {
  if (scrollY >= skills.offsetTop - 300) {
    progress.forEach((ele) => {
      ele.style.width = `${ele.dataset.width}%`;
    });
  } else {
    progress.forEach((ele) => {
      ele.style.width = "0";
    });
  }
};

// todo ==> show the modal container

const allImages = document.querySelectorAll(".all-images img");
const galleryModal = document.querySelector(".gallery-modal");
const closeBtn = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");

allImages.forEach((img) => {
  img.onclick = function () {
    galleryModal.classList.add("show");
    modalImg.src = this.src;
    modalTitle.innerHTML = ` ${this.dataset.title} `;
  };
});

closeBtn.onclick = (_) => {
  galleryModal.classList.remove("show");
};

// todo ==> onfocus hide placeholder text
const inputs = document.querySelectorAll(".inputs input");
const textArea = document.getElementById("Message");

inputs.forEach((inp) => {
  inp.addEventListener("focus", function () {
    this.removeAttribute("placeholder");
  });
  inp.addEventListener("blur", function () {
    this.setAttribute("placeholder", `Your ${this.name}`);
  });
});

textArea.onfocus = () => {
  textArea.removeAttribute("placeholder");
};

textArea.onblur = () => {
  textArea.setAttribute("placeholder", `Your ${textArea.name}`);
};

// * Responsive ==>

// todo ==> Responsive nav-bar
const menuBar = document.querySelector(".bar-menu");
const navLinks = document.querySelector(".nav-links");

menuBar.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});
