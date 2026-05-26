// Boucherie Al-Baraka — frontend JS
// Jour 4 : formulaire de contact branché à Supabase.

const SUPABASE_URL = "https://csspxsnqobftispxvnmw.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzc3B4c25xb2JmdGlzcHh2bm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NDQxNzksImV4cCI6MjA5NTMyMDE3OX0.tfRk-xICDPzxsNXNuGE7IqfR7m4HAkC6QybnXD8fNvE";

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initContactForm();
  initChatbotStub();
});

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = "Merci de remplir tous les champs obligatoires.";
      status.className = "form-status is-error";
      form.reportValidity();
      return;
    }

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim() || null,
      subject: form.subject.value,
      message: form.message.value.trim(),
    };

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Envoi en cours…";
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/contact_submissions`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(
          `Supabase a renvoyé une erreur ${response.status} : ${errorBody}`
        );
      }

      status.textContent =
        "Merci, votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.";
      status.className = "form-status is-success";
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent =
        "Désolé, votre message n'a pas pu être envoyé. Vous pouvez nous appeler au 01 47 35 99 12.";
      status.className = "form-status is-error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

function initChatbotStub() {
  const chatbot = document.querySelector(".chatbot-stub");
  if (!chatbot) return;

  chatbot.addEventListener("click", () => {
    window.alert(
      "Le chatbot FAQ sera branché ici au Jour 5 (Chatbase ou API Claude)."
    );
  });
}
