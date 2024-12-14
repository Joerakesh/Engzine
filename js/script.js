let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

// Function to toggle dropdown visibility
function toggleDropdown(button) {
  const dropdown = button.parentElement;
  dropdown.classList.toggle("active");
}
