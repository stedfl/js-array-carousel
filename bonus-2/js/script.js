const imageArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
];

let imagesTags = "";
const sliderBox = document.getElementById("items-wrapper");
for (let i = 0; i < imageArray.length; i++) {
  imagesTags += `
  <img class="item" src="img/${imageArray[i]}" alt="${imageArray[i]}"</img>
  `;
}
sliderBox.innerHTML = imagesTags;

const thumbBox = document.querySelector(".thumb-slider");
let thumbTags = "";
for (let i = 0; i < imageArray.length; i++) {
  thumbTags += `
  <img class="thumb-item" src="img/${imageArray[i]}" alt="${imageArray[i]}"</img>
  `;
}
thumbBox.innerHTML = thumbTags;


imagesList = document.getElementsByClassName("item");
thumbList = document.getElementsByClassName("thumb-item");
let counterImages = 0;
imagesList[counterImages].classList.add("active");
thumbList[counterImages].classList.add("thumb-active");


const btnUp = document.querySelector(".btn-arrow.up");
const btnDown = document.querySelector(".btn-arrow.down");

btnDown.addEventListener("click", function() {
  imagesList[counterImages].classList.remove("active");
  thumbList[counterImages++].classList.remove("thumb-active");
  if (counterImages >= imagesList.length) {
    counterImages = 0;
  }
  imagesList[counterImages].classList.add("active");
  thumbList[counterImages].classList.add("thumb-active");
})

btnUp.addEventListener("click", function() {
  imagesList[counterImages].classList.remove("active");
  thumbList[counterImages--].classList.remove("thumb-active");
  if (counterImages < 0 ) {
    counterImages = (imagesList.length - 1);
  }
  imagesList[counterImages].classList.add("active");
  thumbList[counterImages].classList.add("thumb-active");
})