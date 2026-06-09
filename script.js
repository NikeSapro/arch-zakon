function hodDoVody(predmet) {
    // Najdeme si políčka v HTML, kam chceme zapisovat
    const krabiceNaEmoji = document.getElementById('emoji');
    const krabiceNaText = document.getElementById('vysledek-text');

    if (predmet === 'kov') {
        // Co se stane, když klikne na klíče
        krabiceNaEmoji.innerHTML = '⚓💀';
        krabiceNaText.innerHTML = 'Klíč letí ke dnu! Gravitace ho táhne dolů, protože kov je těžší (má větší hustotu) než voda. Vztlaková síla ho neudrží.';
    } else if (predmet === 'kachnicka') {
        // Co se stane, když klikne na kachničku
        krabiceNaEmoji.innerHTML = '🦆✨';
        krabiceNaText.innerHTML = 'Kachnička plave! Voda ji vytlačuje nahoru. Vztlaková síla vyhrála, protože kachnička má menší hustotu než voda.';
    }
}
