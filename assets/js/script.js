// Boucherie Al-Baraka — frontend JS
// Pour l'instant : toggle du menu mobile + soumission du formulaire de contact (Supabase à venir).

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // TODO Jour 4 : envoyer les données vers Supabase.
      status.textContent =
        "Merci, votre message est bien enregistré côté formulaire. La connexion à Supabase sera ajoutée au Jour 4.";
      status.classList.remove("is-error");
      status.classList.add("is-success");
      form.reset();
    });
  }

  const chatbot = document.querySelector(".chatbot-stub");
  if (chatbot) {
    chatbot.addEventListener("click", () => {
      window.alert(
        "Le chatbot FAQ sera branché ici au Jour 5 (Chatbase ou API Claude)."
      );
    });
  }
});
