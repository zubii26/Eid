/* ═══════════════════════════════════════ EID WEBSITE — SCRIPT ══ */

// ══════ GLOBALS ══════
let currentLang = 'ur', currentWishIdx = 0, totalScore = 0;
let generatedURL = '', carouselInterval;

const wishes = {
    ur: [
        "عید مبارک! اللہ آپ کی ہر دعا قبول فرمائے۔",
        "عید مبارک! آپ کے گھر میں خوشیاں بھر دے۔",
        "یہ عید آپ کی زندگی میں نور لائے۔",
        "اللہ آپ کو صحت اور سکون عطا فرمائے۔",
        "ہر خواہش پوری ہو — عید مبارک!",
        "عید کی خوشیاں آپ کے گھر کو بہشت بنائیں۔",
        "اللہ تعالیٰ آپ کے دل کی مرادیں پوری کریں۔",
        "عید مبارک! ہر قدم پر کامیابی آپ کا مقدر ہو۔",
        "خوشیاں بانٹنے سے بڑھتی ہیں — عید مبارک!",
        "یہ عید آپ کے لیے محبت اور امن لائے۔",
        "اللہ آپ کو اور آپ کے گھر والوں کو خوش رکھے۔",
        "عید مبارک! آپ کی محنت رنگ لائے اور آپ کامیاب ہوں۔",
        "اس عید پر دعا ہے کہ آپ ہمیشہ مسکراتے رہیں۔",
        "عید مبارک! ہر دن آپ کے لیے خوشی کا دن ہو۔",
        "رب کریم آپ کی تمام مشکلات آسان فرمائے۔",
        "عید مبارک! آپ کی دعاؤں کا جواب ملے۔",
        "اس عید کی خوشیاں آپ کے دل کو تروتازہ کریں۔",
        "عید مبارک! آپ کے چہرے پر ہمیشہ مسکراہٹ رہے۔",
        "اللہ آپ کو غنی رکھے اور کسی کا محتاج نہ کرے۔",
        "عید مبارک! یہ لمحہ ہمیشہ یاد رہے آپ کو۔"
    ],
    ar: [
        "عيد مبارك! تقبل الله منا ومنكم صالح الأعمال",
        "كل عام وأنتم بخير وعافية وسعادة",
        "عيد مبارك! جعل الله أيامكم كلها أفراح",
        "اللهم تقبل صيامنا وقيامنا وصالح أعمالنا",
        "عيد سعيد مليء بالفرح والبركات والسلام",
        "أعاده الله عليكم بالخير والنعمة والبركة",
        "تقبل الله منا ومنكم وجعلنا من العتقاء من النار",
        "كل عام وأنت بألف خير وسعادة دائمة",
        "بارك الله لكم في هذه الأيام المباركة",
        "عيد مبارك! نسأل الله أن يتقبل طاعتكم",
        "جعل الله هذا العيد بداية أيام مشرقة لكم",
        "عيد سعيد وكل عام وأنتم في رعاية الله",
        "اللهم بارك لنا في أعمارنا وأهلينا وأرزاقنا",
        "عيد مبارك! وكل لحظة تمر عليكم تكون بهجة ونور",
        "أدام الله عليكم نعمة الصحة والعافية والسعادة",
        "عيد مبارك! أسأل الله أن يكتب لكم السعادة دائماً",
        "تقبل الله صيامكم وقيامكم وصالح أعمالكم",
        "بارك الله في أوقاتكم وجمعكم على الخير",
        "كل عام وقلوبكم مليئة بالإيمان والأمل والفرح",
        "عيد مبارك وعام مليء بالصحة والبركة والسرور"
    ],
    en: [
        "Eid Mubarak! May Allah shower His choicest blessings upon you.",
        "Wishing you a joyful Eid filled with laughter and endless blessings.",
        "May this Eid bring peace to your heart and prosperity to your home.",
        "Eid Mubarak! May every day be as beautiful as this day.",
        "May Allah accept our prayers and grant us all we hope for.",
        "Eid Mubarak! May your home be filled with light, love, and laughter.",
        "Wishing you and your family a blessed and joyful Eid celebration.",
        "May Allah bless you with health, wealth, and happiness always.",
        "Eid Mubarak! May this special day bring joy to your heart forever.",
        "May the magic of Eid fill your heart with peace and happiness.",
        "Eid Mubarak! May Allah's blessings surround you and your loved ones.",
        "On this blessed day, may Allah answer your every dua with goodness.",
        "Wishing you an Eid filled with love, laughter, and celebrations.",
        "May your generosity on this Eid return to you a thousandfold.",
        "Eid Mubarak! May each new day bring you closer to your dreams.",
        "May the spirit of Eid inspire love, forgiveness, and unity around us.",
        "Wishing you a sparkling Eid full of smiles, hugs, and good memories.",
        "May every hardship you faced this year be washed away this Eid.",
        "Eid Mubarak! May your faith grow stronger with each passing year.",
        "May this Eid be the beginning of a year filled with blessings and hope."
    ]
};

const catWishes = {
    family: [
        "Eid Mubarak! May our home always be a sanctuary of love, laughter, and Allah's blessings.",
        "To my dearest family — may every Eid we share be more beautiful than the last.",
        "Eid Mubarak! You are my greatest blessing. May Allah protect us and keep us together.",
        "Family is the heart of everything. Eid Mubarak — may our bond grow stronger every year.",
        "May this Eid fill our home with warmth, joy, and the sweetness of togetherness.",
        "اللہ ہمارے گھر کو ہمیشہ خوشیوں سے بھرا رکھے — عید مبارک!"
    ],
    friends: [
        "Eid Mubarak, buddy! May your Eidi be fat and your biryani be fresh!",
        "Happy Eid! May our friendship be as bright as the crescent moon and as endless as the stars.",
        "Eid Mubarak! Life is sweeter because of people like you. May Allah bless you abundantly.",
        "To my bestie — may you collect more Eidi than anyone else this year! 💰",
        "Eid Mubarak! Friends like you are rare and precious. May Allah keep us close always.",
        "یار، عید مبارک! دعا ہے کہ ہماری دوستی ہمیشہ قائم رہے۔"
    ],
    colleagues: [
        "Eid Mubarak! Wishing you success, clarity, and joy in the office and beyond.",
        "To a wonderful colleague: may this Eid renew your energy and inspire your best work yet.",
        "Happy Eid! May your projects flourish, your deadlines be kind, and your inbox be empty! 😊",
        "Eid Mubarak! Working with you is a blessing. May Allah reward your dedication.",
        "May this Eid bring you rest, reward, and a beautiful new chapter in your career.",
        "عید مبارک! آپ کی محنت اور لگن رنگ لائے — ان شاءاللہ۔"
    ]
};

const relativeWishes = {
    dadaDadi: [
        "دادا جان، آپ کی دعاؤں کا سایہ ہمیشہ ہم پر رہے — عید مبارک! 🌙",
        "دادی جان، آپ کی محبت اور شفقت ہمارا سرمایہ ہے — عید مبارک! ❤️",
        "آپ کی دعائیں ہماری طاقت ہیں — عید بہت بہت مبارک ہو!"
    ],
    nanaNani: [
        "نانا جان، آپ کا پیار ہمیشہ ہمارے دل میں ہے — عید مبارک! 🌸",
        "نانی جان، آپ کی گود میں جنت کا احساس ہوتا ہے — عید مبارک! 💛",
        "آپ کی لمبی عمر اور سلامتی کے لیے دعا گو ہیں — عید مبارک!"
    ],
    chacha: [
        "چاچا جان، آپ ہمارے لیے ہمیشہ مشعل راہ ہیں — عید مبارک! 🪔",
        "عید کی خوشیاں آپ کے آنگن میں ہمیشہ بکھری رہیں — عید مبارک چاچا!"
    ],
    mamu: [
        "ماموں جان، آپ کی محبت بے مثال ہے — عید مبارک! 🌟",
        "ہر عید پر آپ کی یاد آتی ہے — دعاؤں کے ساتھ عید مبارک!"
    ],
    phupho: [
        "پھوپھو جان، آپ کی شفقت ماں جیسی ہے — عید مبارک! 🌺",
        "عید مبارک! آپ کی مسکراہٹ ہمارے گھر کی روشنی ہے۔"
    ],
    khala: [
        "خالہ جان، آپ کا پیار ہمارا نصیب ہے — عید مبارک! 💜",
        "خوشیاں اور برکتیں آپ کے گھر میں آئیں — عید مبارک!"
    ],
    cousins: [
        "کزن، بہت مزے کی عید ہو! 🎈 خوب Eidi ملے اور شرارتیں بھی!",
        "ہر عید آپ کے ساتھ یادگار ہوتی ہے — عید مبارک یار! 🤝",
        "Cousin ki taraf se: Eid Mubarak! May our bond never break."
    ],
    brother: [
        "بھائی جان، آپ میری طاقت ہیں — عید مبارک! 💪",
        "Eid Mubarak, bro! You're the best brother anyone could ask for. 🌟",
        "عید مبارک! دعا ہے ہمارا رشتہ ہمیشہ مضبوط رہے۔"
    ],
    sister: [
        "آپی، آپ کی مسکراہٹ ہمارا سرمایہ ہے — عید مبارک! 🌸",
        "Eid Mubarak sis! You make every moment more beautiful. 💕",
        "عید مبارک! آپ کے بغیر عید کی خوشی ادھوری ہے۔"
    ]
};



const giftWishes = [
    "May this Eid bring you closer to Allah's mercy and light ✨",
    "Eid Mubarak! Hope your Eidi covers your Netflix subscription 🎉",
    "Yayyyy! No school, lots of sweets! Best day ever! 🍬🎈",
    "May your life be as sweet as sheer khurma! 🥣🌙",
    "Happy Eid! Stay blessed and dress your best!",
    "May Allah grant you peace, health, and endless joy 🌙"
];

const catIdx = { family: 0, friends: 0, colleagues: 0 };

// ══════ PARTICLES ══════
(function () {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    const emojis = ['✨', '🌙', '⭐', '🌸', '💫', '🌟'];
    const count = window.innerWidth < 640 ? 22 : 50;

    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize);
    resize();

    class P {
        constructor() { this.reset(); this.y = Math.random() * H; }
        reset() {
            this.x = Math.random() * W;
            this.y = H + 20;
            this.size = 10 + Math.random() * 14;
            this.speedY = -0.4 - Math.random() * 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.opacity = 0.3 + Math.random() * 0.5;
            this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        }
        update() { this.y += this.speedY; this.x += this.speedX; if (this.y < -20) this.reset(); }
        draw() { ctx.globalAlpha = this.opacity; ctx.font = this.size + 'px serif'; ctx.fillText(this.emoji, this.x, this.y); }
    }

    for (let i = 0; i < count; i++) particles.push(new P());

    function loop() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        ctx.globalAlpha = 1;
        requestAnimationFrame(loop);
    }
    loop();
})();

// ══════ SCROLL EFFECTS ══════

// 1. Scroll progress bar + parallax
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    const bar = document.getElementById('scroll-progress');
    if (bar) bar.style.width = pct + '%';

    // Parallax hero background
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        const bgDiv = heroSection.querySelector('div[style*="background-image"]');
        if (bgDiv) bgDiv.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
}, { passive: true });

// 2. IntersectionObserver for all reveal variants
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => revealObserver.observe(el));

// 3. Stagger observer — stagger children of .stagger containers
const staggerObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            [...e.target.children].forEach((child, i) => {
                child.classList.add('reveal');
                setTimeout(() => child.classList.add('visible'), i * 130);
            });
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.stagger').forEach(el => staggerObserver.observe(el));



// ══════ URL PERSONALIZATION ══════
function applyName(name) {
    name = (name || '').trim() || 'Zubair';
    document.getElementById('hero-name').textContent = name;
    document.getElementById('card-name').textContent = name;
    document.title = 'Eid Mubarak from ' + name + ' ✨';
}

(function () {
    const name = new URLSearchParams(window.location.search).get('name');
    if (name) { applyName(name); setTimeout(() => boom(), 1200); }
})();

// ══════ CAROUSEL ══════
function renderWish() {
    const el = document.getElementById('wish-text');
    const w = wishes[currentLang][currentWishIdx];
    el.style.opacity = 0;
    setTimeout(() => {
        el.textContent = w;
        el.dir = currentLang !== 'en' ? 'rtl' : 'ltr';
        el.style.transition = 'opacity 0.5s';
        el.style.opacity = 1;
    }, 300);
    document.querySelectorAll('.wish-dot').forEach((d, i) => {
        d.classList.toggle('bg-yellow-400', i === currentWishIdx);
        d.classList.toggle('scale-125', i === currentWishIdx);
    });
    ['ur', 'ar', 'en'].forEach(l => {
        const t = document.getElementById('tab-' + l);
        if (t) {
            t.classList.toggle('bg-yellow-400', l === currentLang);
            t.classList.toggle('text-white', l === currentLang);
        }
    });
}

function buildDots() {
    const c = document.getElementById('wish-dots');
    c.innerHTML = '';
    wishes[currentLang].forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'wish-dot w-3 h-3 rounded-full bg-white/30 transition-all';
        d.onclick = () => { currentWishIdx = i; renderWish(); };
        c.appendChild(d);
    });
    renderWish();
}

function switchLang(lang) {
    currentLang = lang;
    currentWishIdx = 0;
    buildDots();
}

function copyWish() {
    navigator.clipboard.writeText(wishes[currentLang][currentWishIdx]).then(() => toast('Wish copied! 📋'));
}

buildDots();
clearInterval(carouselInterval);
carouselInterval = setInterval(() => {
    currentWishIdx = (currentWishIdx + 1) % wishes[currentLang].length;
    renderWish();
}, 4500);

// ══════ CATEGORY WISHES ══════
function shuffleWish(cat, el) {
    const p = document.getElementById('wish-' + cat);
    p.style.opacity = 0;
    setTimeout(() => {
        catIdx[cat] = (catIdx[cat] + 1) % catWishes[cat].length;
        p.textContent = '"' + catWishes[cat][catIdx[cat]] + '"';
        p.style.transition = 'opacity 0.4s';
        p.style.opacity = 1;
    }, 300);
    addScore(5);
}

// ══════ RELATIVES WISHES ══════
const relIdx = {};
Object.keys(relativeWishes || {}).forEach(k => relIdx[k] = 0);

function shuffleRelative(rel, el) {
    if (!relativeWishes[rel]) return;
    const p = el.querySelector('.relative-wish-text');
    if (!p) return;
    p.style.opacity = 0;
    setTimeout(() => {
        if (relIdx[rel] === undefined) relIdx[rel] = 0;
        relIdx[rel] = (relIdx[rel] + 1) % relativeWishes[rel].length;
        p.textContent = relativeWishes[rel][relIdx[rel]];
        p.style.transition = 'opacity 0.4s';
        p.style.opacity = 1;
    }, 300);
    addScore(5);
    toast('Wish copied to your heart! ❤️');
}

function copyRelativeWish(rel) {
    if (!relativeWishes[rel]) return;
    const wish = relativeWishes[rel][relIdx[rel] || 0];
    navigator.clipboard.writeText(wish).then(() => toast('Wish copied! 📋'));
}

// ══════ GIFT BOX ══════
function openGift() {
    const scene = document.getElementById('gift-scene');
    if (scene.classList.contains('opened')) return;
    document.getElementById('gift-wish-text').textContent = giftWishes[Math.floor(Math.random() * giftWishes.length)];
    scene.classList.add('opened');
    boom();
    document.getElementById('gift-reset-btn').classList.remove('hidden');
    addScore(20);
    toast('A surprise blessing for you! 🎁');
}

function resetGift() {
    const scene = document.getElementById('gift-scene');
    scene.classList.remove('opened');
    document.getElementById('gift-lid').style.animation = 'giftFloat 3s ease-in-out infinite';
    document.getElementById('gift-reset-btn').classList.add('hidden');
}

// ══════ PLAYGROUND ══════
function litLantern(el) {
    el.classList.toggle('lit');
    const lit = el.classList.contains('lit');
    el.style.filter = lit ? 'drop-shadow(0 0 20px rgba(245,200,66,0.9)) brightness(1.3)' : '';
    const rect = el.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        const s = document.createElement('span');
        s.textContent = '⭐';
        s.style.cssText = `position:fixed;font-size:1.4rem;pointer-events:none;left:${rect.left + 20}px;top:${rect.top}px;z-index:999;animation:coinPop 0.8s ease forwards;animation-delay:${i * 0.1}s;`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 1200);
    }
    tone(880, 0.1, 0.5);
    addScore(10);
}

function baaa(el) {
    const goat = el.querySelector('.text-6xl');
    const bubble = el.querySelector('.speech-bubble');
    goat.style.animation = 'jumpUp 0.6s cubic-bezier(0.28,0.84,0.42,1)';
    bubble.classList.remove('hidden');
    tone(150, 0.1, 0.4);
    addScore(10);
    setTimeout(() => {
        goat.style.animation = '';
        bubble.classList.add('hidden');
    }, 2000);
}

function popBalloon(el) {
    if (el.classList.contains('fly')) return;
    el.classList.add('fly');
    const rect = el.getBoundingClientRect();
    confetti({
        particleCount: 30, spread: 50,
        origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: rect.top / window.innerHeight },
        colors: ['#EF4444', '#FCD34D', '#3B82F6', '#10B981']
    });
    tone(200, 0.1, 0.1);
    addScore(10);
    setTimeout(() => el.classList.remove('fly'), 3000);
}

function moonClick(el) {
    const wrap = el.querySelector('.stars-wrap');
    ['💫', '⭐', '🌟', '✨', '💥'].forEach((s, i) => {
        const span = document.createElement('span');
        span.textContent = s;
        span.style.cssText = `position:absolute;font-size:1.5rem;left:${20 + i * 18}%;top:${Math.random() * 60}%;animation:twinkle 1s ease ${i * 0.15}s forwards;`;
        wrap.appendChild(span);
        setTimeout(() => span.remove(), 2000);
    });
    tone(600, 0.06, 0.6);
    addScore(10);
}

function openCandy(el) {
    const box = el.querySelector('.candy-box');
    const rain = el.querySelector('.candy-rain');
    box.style.animation = 'bounce 0.5s ease';
    const candies = ['🍭', '🍫', '🍬', '🎁', '🎀', '🍪', '🧁', '🌸'];
    for (let i = 0; i < 12; i++) {
        const c = document.createElement('span');
        c.textContent = candies[Math.floor(Math.random() * candies.length)];
        c.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:0;font-size:1.4rem;animation:confettiDrop 1.2s ease ${i * 0.08}s forwards;`;
        rain.appendChild(c);
    }
    tone(600, 0.08, 0.3);
    addScore(10);
    setTimeout(() => { box.style.animation = ''; rain.innerHTML = ''; }, 1500);
}

// ══════ AUDIO ══════
let audioCtx;
function tone(freq, vol, dur) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.connect(g);
        g.connect(audioCtx.destination);
        osc.frequency.value = freq;
        g.gain.setValueAtTime(vol, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
        osc.start();
        osc.stop(audioCtx.currentTime + dur);
    } catch (e) { }
}

// ══════ SCORE ══════
function addScore(n) {
    totalScore += n;
    document.getElementById('scoreVal').textContent = totalScore;
    document.getElementById('inline-score').textContent = totalScore;
    const badge = document.getElementById('score-badge');
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 300);
}

// ══════ MODALS ══════
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function closeOnBackdrop(e, id) { if (e.target === document.getElementById(id)) closeModal(id); }

// ══════ CARD GENERATION ══════
function generateMyCard() {
    const name = document.getElementById('name-input').value.trim();
    if (!name) { toast('Please enter your name first!'); return; }
    applyName(name);
    generatedURL = window.location.origin + window.location.pathname + '?name=' + encodeURIComponent(name);
    document.getElementById('share-url').textContent = generatedURL;
    closeModal('name-modal');
    openModal('eidi-modal');
    setTimeout(() => { closeModal('eidi-modal'); openModal('link-modal'); }, 2000);
    boom();
    toast('Your card is ready! 🎊');
}

// ══════ SHARING ══════
function doShareWhatsApp() {
    const name = document.getElementById('card-name').textContent;
    const text = encodeURIComponent(`🌙 *Eid Mubarak* from *${name}*! ✨\n\nI made a personalized Eid card!\n👉 ${generatedURL}\n\nعید مبارک! 🌸`);
    window.open('https://wa.me/?text=' + text, '_blank');
}

function doCopyUrl() {
    navigator.clipboard.writeText(generatedURL).then(() => toast('Link copied! 🔗'));
}

function shareWhatsApp() {
    const name = document.getElementById('card-name').textContent;
    const url = window.location.href;
    const text = encodeURIComponent(`🌙 *Eid Mubarak* from *${name}*! ✨\n\nWishing you a blessed Eid!\n👉 ${url}\n\nعید مبارک! 🌸`);
    window.open('https://wa.me/?text=' + text, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => toast('Link copied! 🔗'));
}

// ══════ CONFETTI BURST ══════
function boom() {
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1, y: 0.6 } }), 200);
    setTimeout(() => confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0, y: 0.6 } }), 400);
}

// ══════ TOAST ══════
let toastTimer;
function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ══════════════════════════════════ NASHEED AUDIO PLAYER ══════════
/*
 * Priority 1 — Local file: place any Eid nasheed as  music.mp3  in the project folder.
 * Priority 2 — YouTube iframe fallback plays in the hidden div if mp3 is not found.
 *
 * Controls: single 🎵 button top-right. Fades in/out smoothly.
 */

let musicPlaying = false;
let fadeTimer = null;

const getAudio = () => document.getElementById('nasheed-audio');
const getMusicBtn = () => document.getElementById('music-btn');

function setMusicBtn(isPlaying) {
    const btn = getMusicBtn();
    if (!btn) return;
    if (isPlaying) {
        btn.textContent = '🔊';
        btn.classList.add('playing');
    } else {
        btn.textContent = '🎵';
        btn.classList.remove('playing');
    }
}

/* Smooth volume fade */
function fadeAudio(audio, from, to, duration, cb) {
    clearInterval(fadeTimer);
    const steps = 30;
    const stepMs = duration / steps;
    const stepVal = (to - from) / steps;
    let current = from;
    audio.volume = from;
    fadeTimer = setInterval(() => {
        current = Math.min(1, Math.max(0, current + stepVal));
        audio.volume = current;
        if ((stepVal > 0 && current >= to) || (stepVal < 0 && current <= to)) {
            clearInterval(fadeTimer);
            if (cb) cb();
        }
    }, stepMs);
}

/* Try to play the local mp3. If it errors (file missing), switch to YouTube fallback. */
function startMusic() {
    if (musicPlaying) return;
    const audio = getAudio();

    // Resume AudioContext if suspended (browser autoplay policy)
    audio.volume = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // Local mp3 found ✅
            musicPlaying = true;
            fadeAudio(audio, 0, 0.75, 1800); // fade in over 1.8s
            setMusicBtn(true);
            toast('🎵 Eid Nasheed playing — enjoy! 🌙');
        }).catch(() => {
            // Local mp3 not found — fallback to YouTube
            useYoutubeFallback();
        });
    } else {
        musicPlaying = true;
        setMusicBtn(true);
        toast('🎵 Eid Nasheed playing! 🌙');
    }
}

function stopMusic() {
    const audio = getAudio();
    musicPlaying = false;

    if (!audio.paused) {
        fadeAudio(audio, audio.volume, 0, 800, () => audio.pause());
    }

    // Also stop YouTube fallback if active
    try {
        const yt = document.getElementById('yt-player');
        if (yt && yt.contentWindow) {
            yt.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    } catch (_) { }

    setMusicBtn(false);
    toast('🔇 Music paused');
}

function useYoutubeFallback() {
    // Reload iframe with autoplay=1 to trigger playback
    const iframe = document.getElementById('yt-player');
    if (iframe) {
        iframe.src = "https://www.youtube.com/embed/7Bqk2kQs8q0?enablejsapi=1&autoplay=1&loop=1&playlist=7Bqk2kQs8q0&mute=0";
        musicPlaying = true;
        setMusicBtn(true);
        toast('🎵 Playing Eid Nasheed via stream 🌙');
    } else {
        toast('⚠️ Add music.mp3 to the project folder for music!');
    }
}

function toggleMusic() {
    if (musicPlaying) stopMusic();
    else startMusic();
}



// ══════════════════════════════════ HERO WELCOME ENHANCEMENTS ══

// ── String Lights ──
(function buildLights() {
    const container = document.getElementById('lights-string');
    if (!container) return;
    const colours = ['#FF4444', '#FFD700', '#44BB44', '#4488FF', '#FF69B4', '#FF8C00', '#9B59B6', '#00CED1'];
    const count = Math.min(28, Math.floor(window.innerWidth / 46));
    for (let i = 0; i < count; i++) {
        const b = document.createElement('div');
        b.className = 'light-bulb';
        b.style.color = colours[i % colours.length];
        b.style.background = colours[i % colours.length];
        b.style.setProperty('--blink-dur', (1.2 + Math.random() * 2.2).toFixed(2) + 's');
        container.appendChild(b);
    }
})();

// ── Ticker ──
(function buildTicker() {
    const track = document.getElementById('ticker-track');
    if (!track) return;
    const msgs = [
        '🌙 عید مبارک', '✨ Eid Mubarak', '🎉 Mubarak Ho!', '🌸 عید الفطر مبارک',
        '🪔 Happy Eid', '💛 تقبل الله منا ومنكم', '🎊 Khushiyan Hi Khushiyan',
        '🌟 بہت بہت مبارک', '🕌 Eid Mubarak to All', '🍬 Meethi Eid!',
        '💰 Eidi Mubarak!', '🐐 Eid ul Fitr Mubarak'
    ];
    // Duplicate for seamless loop
    const full = [...msgs, ...msgs];
    full.forEach((msg, i) => {
        const span = document.createElement('span');
        span.textContent = msg;
        if (i % 3 === 0) span.className = 'sep';
        track.appendChild(span);
    });
})();

// ── Money / Sweets Rain (DOM-based) ──
const RAIN_EMOJIS = ['💵', '💴', '💶', '💷', '🪙', '💰', '🍬', '🍭', '🍫', '🧁', '🍪', '🎊', '🎉', '⭐', '✨'];

function spawnRainDrop() {
    const el = document.createElement('span');
    el.textContent = RAIN_EMOJIS[Math.floor(Math.random() * RAIN_EMOJIS.length)];
    const size = 1.2 + Math.random() * 1.6;
    const left = Math.random() * 100;
    const dur = 2.2 + Math.random() * 2.8;
    const del = Math.random() * 0.5;
    el.style.cssText = `
        position:fixed; top:-60px; left:${left}vw; font-size:${size}rem;
        z-index:10; pointer-events:none;
        animation: moneyFall ${dur}s ease-in ${del}s forwards;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), (dur + del + 0.5) * 1000);
}

let rainInterval = null;
function startRain(duration = 4000, density = 180) {
    rainInterval = setInterval(spawnRainDrop, density);
    setTimeout(() => { clearInterval(rainInterval); rainInterval = null; }, duration);
}

// ── Hurray Burst ──
let hurrayEl = null;
function showHurray(text = '🎉 Eid Mubarak! 🎉') {
    if (!hurrayEl) {
        hurrayEl = document.createElement('div');
        hurrayEl.className = 'hurray-burst';
        document.body.appendChild(hurrayEl);
    }
    hurrayEl.textContent = text;
    hurrayEl.classList.remove('go');
    void hurrayEl.offsetWidth; // reflow
    hurrayEl.classList.add('go');
    setTimeout(() => hurrayEl.classList.remove('go'), 2400);
}

// ── Full Celebration Sequence ──
function triggerCelebration() {
    showHurray('🎉 عید مبارک! 🎉');
    boom();
    startRain(5000, 120);
    tone(880, 0.12, 0.18);
    setTimeout(() => { showHurray('💰 Eidi Time! 🍬'); tone(1040, 0.1, 0.15); }, 1200);
    setTimeout(() => { boom(); showHurray('🌙 Eid Mubarak! 🌸'); }, 2500);
    toast('🎊 Eid Mubarak! Celebrate! 🎊');
}

// ── Page Load Welcome Sequence ──
let interactionHandled = false;

function handleInteraction() {
    if (interactionHandled) return;
    interactionHandled = true;

    // Resume AudioContext if suspended
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const welcomeAudio = document.getElementById('welcome-audio');
    if (welcomeAudio) {
        welcomeAudio.volume = 1;
        const playPromise = welcomeAudio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                welcomeAudio.onended = () => startMusic();
            }).catch(() => {
                startMusic(); // Missing file or blocked
            });
            return;
        }
    }
    startMusic(); // Fallback
}

window.addEventListener('load', () => {
    // Initial celebration
    setTimeout(() => { boom(); showHurray('🌙 عید مبارک! 🎉'); }, 800);
    setTimeout(() => startRain(2500, 160), 900);
    setTimeout(() => { showHurray('✨ Eid Mubarak! ✨'); }, 2200);

    // Add interaction listener to document for first interaction
    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
});

// ══════════════════════════════════ POEM SECTION ══════════

let currentPoemLang = 'ur';

function switchPoem(lang) {
    ['ur', 'ar', 'en'].forEach(l => {
        const body = document.getElementById('poem-' + l);
        const tab = document.getElementById('poem-tab-' + l);
        if (body) body.classList.remove('active');
        if (tab) tab.classList.remove('poem-tab-active');
    });
    const active = document.getElementById('poem-' + lang);
    const activeTab = document.getElementById('poem-tab-' + lang);
    if (active) {
        active.classList.add('active');
        active.style.animation = 'none';
        void active.offsetWidth;
        active.style.animation = '';
    }
    if (activeTab) activeTab.classList.add('poem-tab-active');
    currentPoemLang = lang;
}

function copyPoem() {
    const body = document.getElementById('poem-' + currentPoemLang);
    if (!body) return;
    const lines = [...body.querySelectorAll('.poem-line')].map(p => p.textContent.trim());
    const text = lines.filter(Boolean).join('\n');
    navigator.clipboard.writeText(text).then(() => {
        toast('✨ Poem copied! Share it with your family 💛');
        addScore(10);
    });
}
