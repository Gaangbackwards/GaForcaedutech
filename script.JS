// === Basic Config: change these to your info ===
const CONFIG = {
  brandName: "GaForca edutech",
  tagline: "Dari pengguna jadi pencipta — skill digital sebagai pengetahuan untuk karier dan masa depan",
  location: "Pangalengan, Bandung, Jawa Barat",
  email: "anggasandinugraha0@gmail.com",
  instagram: "https://www.instagram.com/angga_s.n100223zzzz?igsh=MXFlNTNqaGRvNnk3cw==",
  tiktok: "https://www.tiktok.com/@gaadeforce01?_t=ZS-8z9Cx8itQrB&_r=1",
  youtube: "https://youtube.com/@gaforca_edutech?si=jF4KQslGuGEYJZT-",
  // WhatsApp in international format without + (example: 62 for Indonesia)
  whatsappNumber: "6281222634834",
  // Google Form registration link (replace with your actual form URL)
  registerForm: "https://docs.google.com/forms/d/e/1FAIpQLScf5ojmuljieHu3ez7U3WFVF6CT0-pin3yMnpLlK62zp8xoNw/viewform?usp=dialog",
  // Hero CTA links
  primaryCTA: "courses.html",
  secondaryCTA: "https://docs.google.com/forms/d/e/1FAIpQLScf5ojmuljieHu3ez7U3WFVF6CT0-pin3yMnpLlK62zp8xoNw/viewform?usp=dialog"
};

// Utility: build WhatsApp chat link with a default message
function waLink(message="Halo, saya mau daftar ke salah satu program dari GaForca edutech") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}

// === Apply config to DOM (elements with data-config attr) ===
document.addEventListener("DOMContentLoaded", () => {
  const mapping = {
    brand: CONFIG.brandName,
    tagline: CONFIG.tagline,
    location: CONFIG.location,
    email: CONFIG.email
  };

  for (const [key, value] of Object.entries(mapping)) {
    document.querySelectorAll(`[data-config="${key}"]`).forEach(el => el.textContent = value);
  }

  // Links
  const ig = document.querySelectorAll('[data-link="instagram"]');
  ig.forEach(a => a.href = CONFIG.instagram);

  const tk = document.querySelectorAll('[data-link="tiktok"]');
  tk.forEach(a => a.href = CONFIG.tiktok);

  const reg = document.querySelectorAll('[data-link="register"]');
  reg.forEach(a => a.href = CONFIG.registerForm);

  const wa = document.querySelectorAll('[data-link="whatsapp"]');
  wa.forEach(a => a.href = waLink());

  const pcta = document.querySelectorAll('[data-link="primary-cta"]');
  pcta.forEach(a => a.href = CONFIG.primaryCTA);

  const scta = document.querySelectorAll('[data-link="secondary-cta"]');
  scta.forEach(a => a.href = CONFIG.secondaryCTA);

  const youtube = document.querySelectorAll('[data-link="youtube"]');
  youtube.forEach(a => a.href = CONFIG.youtube);

  // Mobile menu toggle
  const burger = document.querySelector("#burger");
  const nav = document.querySelector("#mobile-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    btn.addEventListener("click", () => {
      const open = ans.getAttribute("data-open") === "true";
      ans.style.maxHeight = open ? "0px" : ans.scrollHeight + "px";
      ans.setAttribute("data-open", open ? "false" : "true");
      item.classList.toggle("active", !open);
    });
  });
});
