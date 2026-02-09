const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

// Mobile menu
burger?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

// Telegram message helper (no backend)
function openTelegramMessage({ name, contact, message }) {
  // O'zingizning telegram username ni shu yerda yozing:
  const telegramUsername = "yourusername"; // <-- o'zgartiring

  const text = encodeURIComponent(
    `Salom! Sayt buyurtma:\n\nIsm: ${name}\nAloqa: ${contact}\nXabar: ${message}`
  );

  // 2 xil variant: t.me link yoki Telegram app
  const url = `https://t.me/${telegramUsername}?text=${text}`;
  window.open(url, "_blank");
}

// Quick form
document.getElementById("quickForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const contact = form.contact.value.trim();

  openTelegramMessage({ name, contact, message: "Qisqa so‘rov. Tafsilotlarni yozaman." });
  form.reset();
});

// Contact form
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const contact = form.contact.value.trim();
  const message = form.message.value.trim();

  openTelegramMessage({ name, contact, message });
  form.reset();
});
