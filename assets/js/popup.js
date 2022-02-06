// Pop up controls for link to wine club
const button = document.querySelector("button");
const popup = document.querySelector(".popup-background");
const close = document.querySelector(".popup-exit");

button.addEventListener("click", () => {
	popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});