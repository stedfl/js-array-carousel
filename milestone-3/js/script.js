const imageArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
]

let imagesTags = "";
const sliderBox = document.getElementById("items-wrapper");
console.log(sliderBox);
for (let i = 0; i < imageArray.length; i++) {
  imagesTags += `
  <img class="item" src="img/${imageArray[i]}" alt="${imageArray[i]}"</img>
   `
}
console.log(imagesTags);
sliderBox.innerHTML = imagesTags;

imagesList = document.getElementsByClassName("item");
let counterImages = 0;
imagesList[counterImages].classList.add("active");

const btnUp = document.querySelector(".btn-arrow.up");
const btnDown = document.querySelector(".btn-arrow.down");

btnDown.addEventListener("click", function() {
  if (counterImages === (imagesList.length - 1)) {
    counterImages = 0;
    imagesList[counterImages].classList.add("active");
    imagesList[imagesList.length - 1].classList.remove("active");
  } else {
  imagesList[counterImages].classList.remove("active");
  imagesList[++counterImages].classList.add("active");
  }
})

btnUp.addEventListener("click", function() {
  if (counterImages === 0) {
    counterImages = imagesList.length - 1;
    imagesList[counterImages].classList.add("active");
    imagesList[0].classList.remove("active");
  } else {
  imagesList[counterImages].classList.remove("active");
  imagesList[--counterImages].classList.add("active");
  }
})