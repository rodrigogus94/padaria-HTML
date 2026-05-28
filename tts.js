(() => {
  const toggleBtn = document.getElementById("ttsToggle");
  const stopBtn = document.getElementById("ttsStop");

  if (!toggleBtn || !stopBtn) return;

  const supported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  if (!supported) {
    toggleBtn.setAttribute("disabled", "disabled");
    toggleBtn.setAttribute("title", "Leitura em voz alta indisponível neste navegador");
    return;
  }

  const synth = window.speechSynthesis;
  let utterance = null;
  let started = false;

  const getText = () => {
    const main = document.querySelector("main");
    if (!main) return document.body.innerText || "";

    // Evita ler textos repetidos do menu, e tenta pegar o conteúdo principal.
    return main.innerText.replace(/\s+\n/g, "\n").trim();
  };

  const setUI = (state) => {
    // state: "idle" | "speaking" | "paused"
    if (state === "speaking") {
      toggleBtn.setAttribute("aria-pressed", "true");
      toggleBtn.setAttribute("aria-label", "Pausar leitura em voz alta");
      toggleBtn.setAttribute("title", "Pausar leitura");
      stopBtn.hidden = false;
      started = true;
      return;
    }
    if (state === "paused") {
      toggleBtn.setAttribute("aria-pressed", "true");
      toggleBtn.setAttribute("aria-label", "Continuar leitura em voz alta");
      toggleBtn.setAttribute("title", "Continuar leitura");
      stopBtn.hidden = false;
      started = true;
      return;
    }
    toggleBtn.setAttribute("aria-pressed", "false");
    toggleBtn.setAttribute("aria-label", "Ler o conteúdo da página em voz alta");
    toggleBtn.setAttribute("title", "Ler em voz alta");
    stopBtn.hidden = true;
    started = false;
  };

  const stop = () => {
    synth.cancel();
    utterance = null;
    setUI("idle");
  };

  const speakFromStart = () => {
    stop();
    const text = getText();
    if (!text) return;

    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.documentElement.lang || "pt-BR";
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => setUI("idle");
    utterance.onerror = () => setUI("idle");

    synth.speak(utterance);
    setUI("speaking");
  };

  toggleBtn.addEventListener("click", () => {
    if (synth.speaking) {
      if (synth.paused) {
        synth.resume();
        setUI("speaking");
      } else {
        synth.pause();
        setUI("paused");
      }
      return;
    }

    // Se já tinha iniciado e terminou, começa de novo
    if (started) {
      speakFromStart();
      return;
    }

    speakFromStart();
  });

  stopBtn.addEventListener("click", stop);

  // Evita leitura “presa” ao sair/recarregar
  window.addEventListener("beforeunload", () => synth.cancel());

  setUI("idle");
})();
