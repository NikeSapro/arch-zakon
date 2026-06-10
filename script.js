function aktualizujLab() {
    const vaha = parseInt(document.getElementById('weight-slider').value);
    const objem = parseInt(document.getElementById('volume-slider').value);

    document.getElementById('weight-val').innerText = vaha;
    document.getElementById('volume-val').innerText = objem;

    const fg = vaha * 10;  
    const fb = objem * 10; 

    const maxSila = 150; 
    document.getElementById('fg-bar').style.width = (fg / maxSila * 100) + '%';
    document.getElementById('fb-bar').style.width = (fb / maxSila * 100) + '%';

    const panel = document.getElementById('status-card');
    const grafika = document.getElementById('graphic-status');
    const titulek = document.getElementById('verdict-title');
    const popis = document.getElementById('verdict-desc');

    if (fg > fb) {
        panel.className = "display-panel state-sink";
        grafika.innerHTML = "⚓";
        titulek.innerHTML = "❌ TĚLESO SE POTÁPÍ";
        popis.innerHTML = `Gravitační síla (${fg} N) překonala vztlakovou sílu vody (${fb} N). Hustota tělesa je větší než hustota vody, proto předmět padá nekompromisně ke dnu!`;
    } else if (fg < fb) {
        panel.className = "display-panel state-float";
        grafika.innerHTML = "🚢";
        titulek.innerHTML = "✅ TĚLESO PLAVE";
        popis.innerHTML = `Vztlaková síla (${fb} N) vyhrála nad gravitací (${fg} N)! Protože má těleso jako celek menší hustotu než voda, síla vody ho vytlačuje nahoru a drží bezpečně na hladině.`;
    } else {
        panel.className = "display-panel";
        grafika.innerHTML = "🐟";
        titulek.innerHTML = "⚖️ DOKONALÁ ROVNOVÁHA";
        popis.innerHTML = `Nastala absolutní shoda! Gravitační i vztlaková síla jsou stejné (${fg} N). Těleso má přesně stejnou hustotu jako voda, takže se vznáší uvnitř kapaliny jako ryba.`;
    }
}

function nastavPreset(vaha, objem) {
    document.getElementById('weight-slider').value = vaha;
    document.getElementById('volume-slider').value = objem;
    aktualizujLab(); 
}

aktualizujLab();
