// Shows the English or Spanish half of the page: ?lang=es|en, else the browser's language.
(() => {
  const q = new URLSearchParams(location.search).get("lang");
  const lang = q === "es" || q === "en" ? q : ((navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en");
  document.documentElement.lang = lang;
  document.querySelectorAll("[lang]").forEach(el => { if (el !== document.documentElement && el.lang === lang) el.classList.add("on"); });
})();
