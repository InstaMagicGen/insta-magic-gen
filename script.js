(function() {
  const pseudos_fr = ['GhostDancer', 'ModernFury', 'OceanGhost', /*... 147 autres pseudos ...*/, 'NightVolt', 'SecretNomad', 'SilentOrbit', 'UrbanSeeker'];
  const bios_fr = ['Mind full of sunsets, heart full of vibes.', /*... 147 autres bios ...*/, 'Chasing journey every day.', 'Creating growth in a travel world.'];
  const citations_fr = ['The only limit is your courage.', /*... 147 autres citations ...*/, 'Hustle in silence, let success wisdom.', 'Your potential defines your future.'];

  const pseudos_en = [...pseudos_fr];
  const bios_en = [...bios_fr];
  const citations_en = [...citations_fr];

  function setupGenerator(btnId, resultId, items) {
    const btn = document.getElementById(btnId);
    const result = document.getElementById(resultId);
    btn.addEventListener("click", () => {
      const random = items[Math.floor(Math.random() * items.length)];
      result.textContent = random;
    });
  }

  // Générateurs Français
  setupGenerator("pseudo-btn-fr", "pseudo-result-fr", pseudos_fr);
  setupGenerator("bio-btn-fr", "bio-result-fr", bios_fr);
  setupGenerator("citation-btn-fr", "citation-result-fr", citations_fr);

  // Générateurs English
  setupGenerator("pseudo-btn-en", "pseudo-result-en", pseudos_en);
  setupGenerator("bio-btn-en", "bio-result-en", bios_en);
  setupGenerator("citation-btn-en", "citation-result-en", citations_en);
})();
