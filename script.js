const menu = document.getElementById("menu");
const panel = document.querySelector(".info-panel");
const closeButton = document.querySelector(".panel-close");
const showPanelButton = document.querySelector(".test-panel-button");

// Menu
menu.addEventListener("click", () => {
  document.body.classList.toggle("menu-toggle");
});

// Test panel
showPanelButton.addEventListener("click", () => {
  console.log("Toggle.");
  panel.classList.add("open");
});

// Close information panel
closeButton.addEventListener("click", () => {
  panel.classList.remove("open");
});

