// Chatbase lazy-load
// Le widget Chatbase pèse ~400 Ko et bloque le rendu mobile.
// On le charge uniquement à la 1re interaction utilisateur, ou après 4 s.

(function () {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });
  }

  let loaded = false;
  const loadChatbase = function () {
    if (loaded) return;
    loaded = true;
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "JkMH2TOyBfO9P_iIwI5Kv";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  };

  // Trigger sur 1re interaction utilisateur (scroll, clic, touch, clavier)
  ["scroll", "click", "touchstart", "keydown"].forEach((evt) =>
    window.addEventListener(evt, loadChatbase, { once: true, passive: true })
  );

  // Fallback : déclenche après 4 s si pas d'interaction
  const fallback = () => setTimeout(loadChatbase, 4000);
  if (document.readyState === "complete") {
    fallback();
  } else {
    window.addEventListener("load", fallback);
  }
})();
