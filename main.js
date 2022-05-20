let img_in_content = document.querySelector(".img");
let container = document.querySelector(".container");

function phones(phone) {
  img_in_content.src = phone;
}
function colors(color, size) {
  container.style.background = color;
  container.style.width += size;
}
