// For the nav bar menu
let menuToggle = document.getElementById("menuToggle");
let navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// For the hero section
let heroText = document.querySelector("#hero-text");
let heroImage = document.querySelector("#hero-image");
window.addEventListener("load", () => {
  heroText.style.opacity = "1";
  heroText.style.transform = "translateX(0)";
  heroImage.style.opacity = "1";
  heroImage.style.transform = "translateX(0)";
});
// For the progress bar
window.addEventListener("load", () => {
  document.querySelector(".html").style.width = "85%";
  document.querySelector(".css").style.width = "75%";
  document.querySelector(".javascript").style.width = "40%";
  document.querySelector(".cybersecurity").style.width = "10%";
});
// For the model
let modal = document.getElementById('modal');
let modalImg = modal.getElementsByTagName('img')[0];
let imgCaption = document.getElementById('caption');
function openModal(clickedPic) {
  modal.style.display = 'block';
  modalImg.src = clickedPic.src;
  imgCaption.innerHTML = clickedPic.alt;
}
function closeModal() {
  modal.style.display = 'none';
}
// For the form
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  if (name === "" || email === "" || message === "") {
    formMessage.textContent =
      "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }
  formMessage.textContent =
    "Message sent successfully!";
  formMessage.style.color = "green";
  contactForm.reset();
});