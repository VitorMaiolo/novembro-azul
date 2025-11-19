const miniButtons = document.querySelectorAll(".lang-mini span[data-lang]");
const savedLang = localStorage.getItem("lang") || "pt";

setLang(savedLang);

miniButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    setLang(lang);
    localStorage.setItem("lang", lang);
  });
});

function setLang(lang) {
  // ativa visualmente
  miniButtons.forEach(b => b.classList.remove("active"));
  document.querySelector(`.lang-mini span[data-lang="${lang}"]`).classList.add("active");

  // textos normais
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerText = translations[lang][key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}
