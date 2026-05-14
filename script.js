// Liste complète des armes avec leurs images personnalisées
const weaponsData = [
    // PISTOLETS
    { name: "GLUEGUN", cat: "pistolets", price: 15, image: "gluegun.png" },
    { name: "Revolver Carrot", cat: "pistolets", price: 8, image: "Revolver Carrot.png" },
    { name: "Revolver DRAGON", cat: "pistolets", price: 15, image: "Revolver DRAGON.png" },
    { name: "Deagle DRAGON", cat: "pistolets", price: 8, image: "Deagle DRAGON.png" },
    { name: "Deagle WOLDVERN", cat: "pistolets", price: 8, image: "Deagle WOLDVERN.png" },
    { name: "Revolver ULTRA", cat: "pistolets", price: 15, image: "Revolver ULTRA.png" },
    { name: "Revolver .357", cat: "pistolets", price: 15, image: "Revolver .357.png" },
    { name: "Deagle NIKE", cat: "pistolets", price: 8, image: "Deagle NIKE.png" },
    { name: "Deagle PURPLE", cat: "pistolets", price: 8, image: "Deagle PURPLE.png" },
    { name: "Deagle XMAS", cat: "pistolets", price: 8, image: "Deagle XMAS.png" },
    { name: "Deagle Pumpkin", cat: "pistolets", price: 8, image: "Deagle Pumpkin.png" },
    { name: "Deagle SHARK", cat: "pistolets", price: 8, image: "Deagle SHARK.png" },
    { name: "Revolver SUMMER", cat: "pistolets", price: 15, image: "Pistol CAVEIRA.png" },
    { name: "Pistol CAVEIRA", cat: "pistolets", price: 5, image: "Pistol CAVEIRA.png" },
    { name: "Pistol RAVEN", cat: "pistolets", price: 5, image: "Pistol RAVEN.png" },
    { name: "Pistol SCOM", cat: "pistolets", price: 5, image: "Pistol SCOM.png" },
    { name: "Glock 17", cat: "pistolets", price: 5, image: "Glock 17.png" },
    { name: "Pistol SOVEREIGN", cat: "pistolets", price: 5, image: "Pistol SOVEREIGN.png" },
    { name: "Pistol Juillet", cat: "pistolets", price: 5, image: "Pistol Juillet.png" },
    { name: "Pistol Chocolat", cat: "pistolets", price: 5, image: "Pistol Chocolat.png" },
    { name: "Pistol Lapin", cat: "pistolets", price: 5, image: "Pistol Lapin.png" },
    { name: "Pistol New Years", cat: "pistolets", price: 5, image: "Pistol New Years.png" },
    { name: "Pistol KISS", cat: "pistolets", price: 5, image: "Pistol KISS.png" },
    { name: "Pistol CUP", cat: "pistolets", price: 5, image: "Pistol CUP.png" },
    { name: "Pistol FN", cat: "pistolets", price: 5, image: "Pistol FN.png" },
    { name: "Pistol HALL", cat: "pistolets", price: 5, image: "Pistol HALL.png" },
    { name: "Pistol Old", cat: "pistolets", price: 5, image: "Pistol Old.png" },
    { name: "Pistol USA", cat: "pistolets", price: 5, image: "Pistol USA.png" },
    { name: "Pistol Kraken", cat: "pistolets", price: 5, image: "Pistol Kraken.png" },
    { name: "Pistol Serpent", cat: "pistolets", price: 5, image: "Pistol Serpent.png" },
    { name: "Pistol XMAS", cat: "pistolets", price: 5, image: "Pistol XMAS.png" },
    { name: "Pistol Patriot", cat: "pistolets", price: 5, image: "Pistol Patriot.png" },
    { name: "Pistol Valentine Noir", cat: "pistolets", price: 5, image: "Pistol Valentine Noir.png" },
    
    // SMG
    { name: "SMG MK2", cat: "smg", price: 7, image: "SMG MK2.png" },
    { name: "STRIKER 74", cat: "smg", price: 15, image: "STRIKER 74.png" },
    { name: "Santas", cat: "smg", price: 5, image: "Santas.png" },
    { name: "PPSH41", cat: "smg", price: 75, image: "ppsh41.png" },
    { name: "Tec Carrot", cat: "smg", price: 2, image: "Tec Carrot.png" },
    { name: "WOLFRIFLE V2", cat: "smg", price: 30, image: "WOLFRIFLE V2.png" },
    { name: "SCARHARG", cat: "smg", price: 25, image: "scarharg.png" },
    { name: "SCREAM SPEAR", cat: "smg", price: 30, image: "SCREAM SPEAR.png" },
    { name: "SWERV AR13", cat: "smg", price: 30, image: "SWERV AR13.png" },
    { name: "Compaact Compact", cat: "smg", price: 10, image: "Compaact Compact.png" },
    
    // FUSILS D'ASSAUT
    { name: "PREDATOR", cat: "fusils", price: 10, image: "predator.png" },
    { name: "AK-REDL", cat: "fusils", price: 10, image: "AK-REDL.png" },
    { name: "AKOLD", cat: "fusils", price: 10, image: "akold.png" },
    { name: "STEIN", cat: "fusils", price: 10, image: "stein.png" },
    { name: "MCXMODULAR", cat: "fusils", price: 40, image: "mcxmodular.png" },
    { name: "ROM22", cat: "fusils", price: 80, image: "rom22.png" },
    { name: "CARABINE ASSAUT MK-2", cat: "fusils", price: 10, image: "CARABINE ASSAUT MK-2.png" },
    { name: "CARABINE SPECIAL MK-2", cat: "fusils", price: 10, image: "CARABINE SPECIAL MK-2.png" },
    { name: "M4 NEBULA PINK", cat: "fusils", price: 25, image: "M4 NEBULA _PINK.png" },
    { name: "SKULLAR", cat: "fusils", price: 70, image: "skullar.png" },
    { name: "Unicorn", cat: "fusils", price: 8, image: "unicorn.png" },
    
    // POMPES
    { name: "Carabine d'assaut", cat: "pompes", price: 15, image: "Carabine d'assaut.png" },
    { name: "Carabine Bulpup", cat: "pompes", price: 10, image: "Carabine Bulpup.png" },
    { name: "Fusil à Pompe", cat: "pompes", price: 10, image: "Fusil à Pompe.png" },
    { name: "Pompe winter", cat: "pompes", price: 10, image: "Pompe winter.png" },
    { name: "Pompe Shortkraken", cat: "pompes", price: 10, image: "Pompe Shortkraken.png" },
    { name: "Pompe 680S", cat: "pompes", price: 10, image: "Pompe 680S.png" },
    { name: "Pompe Ravenshot", cat: "pompes", price: 10, image: "Pompe Ravenshot.png" },
    { name: "Pompe Shotxmas", cat: "pompes", price: 10, image: "Pompe Shotxmas.png" },
    { name: "Canon Scié", cat: "pompes", price: 10, image: "Canon Scié.png" },
    { name: "Fusil à Pompe Automatique", cat: "pompes", price: 15, image: "Fusil à Pompe Automatique.png" },
    { name: "Pompe non létal", cat: "pompes", price: 5, image: "Pompe non létal.png" },
    { name: "Fusil à Pompe Double Canon Scié", cat: "pompes", price: 10, image: "Fusil à Pompe Double Canon Scié.png" },
    { name: "Pompe Shotgunk", cat: "pompes", price: 10, image: "Pompe Shotgunk.png" },
    { name: "Fusil à Pompe Lourd", cat: "pompes", price: 30, image: "Fusil à Pompe Lourd.png" },
    { name: "Fusil à Pompe MK2", cat: "pompes", price: 10, image: "Fusil à Pompe MK2.png" },
    { name: "Pompe Shotgunshark", cat: "pompes", price: 10, image: "Pompe Shotgunshark.png" },
    { name: "Pompe Summershot", cat: "pompes", price: 10, image: "Pompe Summershot.png" },
    { name: "Pompe Shotpaj", cat: "pompes", price: 10, image: "Pompe Shotpaj.png" },
    { name: "Pompe Shothall", cat: "pompes", price: 10, image: "Pompe Shothall.png" },
    { name: "Pompe SAWNKRAKEN", cat: "pompes", price: 10, image: "Pompe SAWNKRAKEN.png" },
    { name: "Pompe COACHGUN", cat: "pompes", price: 15, image: "Pompe COACHGUN.png" },
    { name: "Pompe SLIMAQ", cat: "pompes", price: 15, image: "Pompe SLIMAQ.png" },
    { name: "Double Barrel", cat: "pompes", price: 10, image: "Double Barrel.png" },
    { name: "Pompe Noël", cat: "pompes", price: 15, image: "Pompe Noël.png" },
    { name: "Pompe Hall", cat: "pompes", price: 10, image: "Pompe Hall.png" },
    { name: "Pompe Paque", cat: "pompes", price: 15, image: "Pompe Paque.png" },
    { name: "Pompe Carrot", cat: "pompes", price: 8, image: "Pompe Carrot.png" },
    { name: "Pompe Xmas", cat: "pompes", price: 8, image: "Pompe Xmas.png" },
    
    // SNIPERS
    { name: "Sniper Lourd MK2", cat: "snipers", price: 45, image: "Sniper Lourd MK2.png" },
    { name: "Hell Sniper", cat: "snipers", price: 50, image: "Hell Sniper.png" },
    { name: "Black Sniper", cat: "snipers", price: 45, image: "Black Sniper.png" },
    { name: "Sniper July", cat: "snipers", price: 40, image: "Sniper July.png" },
    { name: "Sniper East", cat: "snipers", price: 45, image: "Sniper East.png" },
    { name: "Hkhall", cat: "snipers", price: 18, image: "hkhall.png" },
    { name: "Sniper Hall", cat: "snipers", price: 50, image: "Sniper Hall.png" }
];

// ============ GESTION DE LA MUSIQUE ============
const audio = document.getElementById('background-music');
const musicBtn = document.getElementById('music-btn');
const volumeSlider = document.getElementById('volume-slider');
const volumeValue = document.getElementById('volume-value');
const volumeControl = document.getElementById('volume-control');
let isPlaying = false;
let volumeTimeout;

// Volume initial à 30%
audio.volume = 0.3;

// Fonction pour démarrer la musique
function playMusic() {
    audio.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
        musicBtn.querySelector('.music-note').textContent = 'PAUSE';
    }).catch(err => {
        console.log('Lecture automatique bloquée, clic utilisateur requis');
        isPlaying = false;
        musicBtn.classList.remove('playing');
        musicBtn.querySelector('.music-note').textContent = 'PLAY';
    });
}

// Fonction pour mettre en pause
function pauseMusic() {
    audio.pause();
    isPlaying = false;
    musicBtn.classList.remove('playing');
    musicBtn.querySelector('.music-note').textContent = '';
}

// Toggle pause/play
musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});

// Gestion du volume
volumeSlider.addEventListener('input', (e) => {
    const vol = e.target.value / 100;
    audio.volume = vol;
    volumeValue.textContent = e.target.value + '%';
    
    // Afficher le contrôle du volume
    volumeControl.classList.add('visible');
    clearTimeout(volumeTimeout);
    volumeTimeout = setTimeout(() => {
        volumeControl.classList.remove('visible');
    }, 2000);
});

// Afficher le contrôle du volume au survol du bouton musique
musicBtn.addEventListener('mouseenter', () => {
    volumeControl.classList.add('visible');
    clearTimeout(volumeTimeout);
});

musicBtn.addEventListener('mouseleave', () => {
    volumeTimeout = setTimeout(() => {
        volumeControl.classList.remove('visible');
    }, 1500);
});

volumeControl.addEventListener('mouseenter', () => {
    clearTimeout(volumeTimeout);
    volumeControl.classList.add('visible');
});

volumeControl.addEventListener('mouseleave', () => {
    volumeTimeout = setTimeout(() => {
        volumeControl.classList.remove('visible');
    }, 1000);
});

// Tenter la lecture automatique au chargement
window.addEventListener('load', () => {
    playMusic();
});

// Première interaction utilisateur pour démarrer la musique si bloquée
document.addEventListener('click', function initAudio() {
    if (!isPlaying) {
        playMusic();
    }
    document.removeEventListener('click', initAudio);
}, { once: false });

// ============ FIN GESTION MUSIQUE ============

function initBackground() {
    const bg = document.getElementById('animated-bg');
    for(let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 100 + 50;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDelay = Math.random() * 20 + 's';
        p.style.animationDuration = (Math.random() * 10 + 10) + 's';
        bg.appendChild(p);
    }
}

function openLogin() { document.getElementById('login-modal').style.display = 'flex'; }
function closeLogin() { document.getElementById('login-modal').style.display = 'none'; }

function confirmLogin() {
    const id = document.getElementById('fivem-id').value;
    if (id.length < 5) return;
    localStorage.setItem('fivem_user', id);
    updateUserUI();
    closeLogin();
}

function updateUserUI() {
    const user = localStorage.getItem('fivem_user');
    if (user) {
        document.getElementById('login-btn').classList.add('hidden');
        document.getElementById('user-profile').classList.remove('hidden');
        document.getElementById('username-display').innerText = user.substring(0, 15) + '...';
    }
}

function logout() {
    localStorage.removeItem('fivem_user');
    location.reload();
}

function loadRecentBuyers() {
    const container = document.getElementById('recent-buyers');
    const fakeBuyers = [
        { name: 'Kylian_75', amount: '25€', item: 'M4 NEBULA PINK' },
        { name: 'Zoxea', amount: '120€', item: 'ROM22' },
        { name: 'Sky_Lover', amount: '45€', item: 'SMG MK2' },
        { name: 'Momo_RP', amount: '60€', item: 'Fusil à Pompe Lourd' }
    ];
    
    container.innerHTML = fakeBuyers.map(b => `
        <div class="flex-shrink-0 flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-lg border border-white/10">
            <div class="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-[10px] font-bold">RP</div>
            <div>
                <p class="font-bold text-xs">${b.name}</p>
                <p class="text-[10px] text-gray-500">${b.item} - <span class="text-red-400">${b.amount}</span></p>
            </div>
        </div>
    `).join('');
}

function renderShop(filter = 'all') {
    const container = document.getElementById('weapon-container');
    container.innerHTML = '';
    const filtered = filter === 'all' ? weaponsData : weaponsData.filter(w => w.cat === filter);
    
    filtered.forEach(w => {
        const card = document.createElement('div');
        card.className = 'glass p-6 weapon-card red-glow flex flex-col items-center text-center';
        
        card.innerHTML = `
            <div class="h-48 flex items-center mb-4">
                <img src="${w.image}" alt="${w.name}" class="max-w-full max-h-full object-contain">
            </div>
            <span class="text-xs uppercase text-red-500 font-bold mb-1 tracking-wider">${w.cat}</span>
            <h3 class="text-xl font-bold mb-4">${w.name}</h3>
            <div class="mt-auto w-full flex flex-col gap-3">
                <div class="flex items-center justify-between">
                    <span class="text-2xl font-black">${w.price.toFixed(2)}€</span>
                    <span class="text-[10px] text-gray-500 italic uppercase">Permanent</span>
                </div>
                <a href="arme.html" class="btn-red w-full py-3 rounded-lg text-base font-bold inline-block text-center">Acheter l'article</a>
            </div>
        `;
        container.appendChild(card);
    });
}

function updateCounts() {
    const categories = ['pistolets', 'smg', 'fusils', 'pompes', 'snipers'];
    categories.forEach(cat => {
        const count = weaponsData.filter(w => w.cat === cat).length;
        const el = document.getElementById(`count-${cat}`);
        if (el) el.innerText = count;
    });
}

function filterWeapons(cat, element) {
    document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
    renderShop(cat);
}

function copyConnect() {
    const el = document.createElement('textarea');
    el.value = 'connect cfx.re/join/jjkbjp';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const notify = document.getElementById('copy-notification');
    notify.style.display = 'block';
    setTimeout(() => { notify.style.display = 'none'; }, 2000);
}

window.onload = () => {
    initBackground();
    renderShop();
    updateCounts();
    loadRecentBuyers();
    updateUserUI();
};