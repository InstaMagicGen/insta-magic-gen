(function() {
  const pseudos = [
    "SkyNomad","InstaGhost","SaharaVibes",
    "UrbanWolf","MysticSoul","NomadeChic",
    "DreamWalker","VibeNinja"
  ];
  const bios = [
    "Dreaming big, living bigger ✨",
    "Coffee in hand, goals in mind ☕️",
    "Chasing sunsets & big dreams 🌅",
    "Living my best aesthetic life 🎨",
    "Simplicity is the ultimate sophistication 🖤"
  ];
  const citations = [
    "You only fail when you stop trying.",
    "Stay focused and never give up.",
    "Create your own sunshine.",
    "Dream big. Start small. Act now.",
    "Hustle in silence, let success make the noise."
  ];

  function setupGenerator(btnId, resultId, items) {
    const btn = document.getElementById(btnId);
    const result = document.getElementById(resultId);
    btn.addEventListener("click", () => {
      const random = items[Math.floor(Math.random() * items.length)];
      result.textContent = random;
    });
  }

  setupGenerator("pseudo-btn", "pseudo-result", pseudos);
  setupGenerator("bio-btn", "bio-result", bios);
  setupGenerator("citation-btn", "citation-result", citations);
})();
