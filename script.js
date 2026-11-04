// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
}

// Scroll progress indicator
const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
  if (!scrollProgress) return;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? (window.scrollY / pageHeight) * 100 : 0;
  scrollProgress.style.width = progress + "%";
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

// Contact form opens WhatsApp with the visitor's message
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      if (formMessage) formMessage.textContent = "Please fill all the fields.";
      return;
    }

    const whatsappMessage =
      "Hello Thota Yamini,\\n\\nName: " + name +
      "\\nEmail: " + email +
      "\\nPhone: " + phone +
      "\\nMessage: " + message;

    const whatsappUrl =
      "https://wa.me/916309771856?text=" + encodeURIComponent(whatsappMessage);

    if (formMessage) formMessage.textContent = "Opening WhatsApp...";
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    contactForm.reset();
  });
}
