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
