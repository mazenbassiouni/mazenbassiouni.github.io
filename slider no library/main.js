// mazenbassiouni@gmail.com

const title = document.querySelector(".title-container");
const image = document.querySelector(".image-container");
const text = document.querySelector(".text-container");
const index = document.querySelector(".true");
const rightToLeft = [title, image, text, index];
const slidesNum = 5;
const animationTime = 1000;
const intervalTime = 4000;
const auto = true;

let slideInterval;
let num = 1;

function next() {
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, intervalTime);
  }
  document.querySelector(".anime-next").classList.add("goNext");
  setTimeout(() => {
    document.querySelector(".anime-next").classList.remove("goNext");
  }, animationTime);
  num++;
  if (num > slidesNum) {
    rightToLeft.forEach((x) => {
      x.classList.add("slide-" + num);
    });
    num = 1;
    setTimeout(() => {
      rightToLeft.forEach((x) => {
        x.className = x.classList[0];
      });
    }, animationTime);
  } else if (num == 1) {
    rightToLeft.forEach((x) => {
      x.classList.add("animation");
      x.classList.remove("slide-0");
    });

    setTimeout(() => {
      rightToLeft.forEach((x) => {
        x.classList.remove("animation");
      });
    }, animationTime);
  } else {
    rightToLeft.forEach((x) => {
      x.classList.add("slide-" + num);
    });
  }
}

console.log("copyright : mazenbassiouni@gmail.com");

function prev() {
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, intervalTime);
  }
  document.querySelector(".anime-prev").classList.add("goPrev");
  setTimeout(() => {
    document.querySelector(".anime-prev").classList.remove("goPrev");
  }, animationTime);
  if (num == 2) {
    rightToLeft.forEach((x) => {
      x.classList.add("animation");
      x.classList.remove("slide-" + num);
    });

    setTimeout(() => {
      rightToLeft.forEach((x) => {
        x.classList.remove("animation");
      });
    }, animationTime);
    num--;
  } else if (num == 1) {
    num = slidesNum;
    rightToLeft.forEach((x) => {
      x.classList.add("slide-0");
    });

    setTimeout(() => {
      rightToLeft.forEach((x) => {
        x.classList.remove("slide-0");
        x.classList.add("last");
      });

      setTimeout(() => {
        rightToLeft.forEach((x) => {
          x.classList.remove("last");
        });
        for (i = 2; i <= slidesNum; i++) {
          rightToLeft.forEach((x) => {
            x.classList.add("slide-" + i);
          });
        }
      }, 20);
    }, animationTime);
  } else {
    rightToLeft.forEach((x) => {
      x.classList.remove("slide-" + num);
    });

    num--;
  }
}
slideInterval = setInterval(next, intervalTime);

document.querySelector("#close").addEventListener("click", () => {
  document.querySelector("body").classList.add("close");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
});

// mazenbassiouni@gmail.com
