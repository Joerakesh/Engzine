let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// Function to toggle dropdown visibility
function toggleDropdown(button) {
  const dropdown = button.parentElement;
  dropdown.classList.toggle("active");
}

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});
