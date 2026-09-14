/* =========================================================
   SOLAR SYSTEM · PLANET DATA
   ========================================================= */

const PLANETS = {
    mercury: {
        name: 'Mercury',
        video: 'planets/mercury.mp4',
        desc: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. It has almost no atmosphere, so heat escapes quickly — temperatures swing from 430°C during the day to -180°C at night, the most extreme range of any planet. Its surface is heavily cratered, resembling the Moon, and it completes one orbit around the Sun in just 88 Earth days — the fastest of all planets.',
        facts: [
            { label: 'Type', value: 'Terrestrial' },
            { label: 'Diameter', value: '4,879 km' },
            { label: 'Distance from Sun', value: '57.9 million km' },
            { label: 'Day Length', value: '58.6 Earth days' },
            { label: 'Year Length', value: '88 Earth days' },
            { label: 'Moons', value: '0' }
        ],
        earthDaysPerYear: 88
    },
    venus: {
        name: 'Venus',
        video: 'planets/venus.mp4',
        desc: 'Venus is the second planet from the Sun and the hottest in the Solar System, with surface temperatures around 465°C — hot enough to melt lead. Its thick atmosphere of carbon dioxide traps heat in a runaway greenhouse effect, and clouds of sulfuric acid reflect sunlight, making it the brightest natural object in our night sky after the Moon. Venus also rotates backwards, so the Sun rises in the west and sets in the east.',
        facts: [
            { label: 'Type', value: 'Terrestrial' },
            { label: 'Diameter', value: '12,104 km' },
            { label: 'Distance from Sun', value: '108.2 million km' },
            { label: 'Day Length', value: '243 Earth days' },
            { label: 'Year Length', value: '224.7 Earth days' },
            { label: 'Moons', value: '0' }
        ],
        earthDaysPerYear: 224.7
    },
    earth: {
        name: 'Earth',
        video: 'planets/earth.mp4',
        desc: 'Earth is the third planet from the Sun and the only known planet to support life. About 71% of its surface is covered in liquid water, and its atmosphere is 78% nitrogen and 21% oxygen. Earth\'s magnetic field shields the surface from harmful solar radiation, while its axial tilt of 23.5° gives us the four seasons. It is the densest planet in the Solar System.',
        facts: [
            { label: 'Type', value: 'Terrestrial' },
            { label: 'Diameter', value: '12,742 km' },
            { label: 'Distance from Sun', value: '149.6 million km' },
            { label: 'Day Length', value: '24 hours' },
            { label: 'Year Length', value: '365.25 days' },
            { label: 'Moons', value: '1' }
        ],
        earthDaysPerYear: 365.25
    },
    mars: {
        name: 'Mars',
        video: 'planets/mars.mp4',
        desc: 'Mars is the fourth planet from the Sun and is known as the Red Planet because iron oxide (rust) covers its surface. It hosts Olympus Mons, the tallest volcano in the Solar System at 22 km high — nearly three times the height of Mount Everest. Mars has two small moons, Phobos and Deimos, and strong evidence suggests it once had flowing liquid water, making it a prime target in the search for past life.',
        facts: [
            { label: 'Type', value: 'Terrestrial' },
            { label: 'Diameter', value: '6,779 km' },
            { label: 'Distance from Sun', value: '227.9 million km' },
            { label: 'Day Length', value: '24.6 hours' },
            { label: 'Year Length', value: '687 Earth days' },
            { label: 'Moons', value: '2' }
        ],
        earthDaysPerYear: 687
    },
    jupiter: {
        name: 'Jupiter',
        video: 'planets/jupiter.mp4',
        desc: 'Jupiter is the largest planet in the Solar System — so massive that all other planets could fit inside it twice over. It is a gas giant made mostly of hydrogen and helium, with no solid surface. Its Great Red Spot is a giant storm larger than Earth that has been raging for at least 350 years. Jupiter has the strongest magnetic field of any planet and over 95 known moons, including Ganymede, the largest moon in the Solar System.',
        facts: [
            { label: 'Type', value: 'Gas Giant' },
            { label: 'Diameter', value: '139,820 km' },
            { label: 'Distance from Sun', value: '778.5 million km' },
            { label: 'Day Length', value: '9.9 hours' },
            { label: 'Year Length', value: '11.86 Earth years' },
            { label: 'Moons', value: '95' }
        ],
        earthDaysPerYear: 4333
    },
    saturn: {
        name: 'Saturn',
        video: 'planets/saturn.mp4',
        desc: 'Saturn is the sixth planet from the Sun and is famous for its spectacular ring system, made of billions of ice and rock particles. It is the second-largest planet and the least dense — it would float in water if there were a bathtub big enough. Saturn has over 146 known moons, including Titan, which has a thick atmosphere and lakes of liquid methane. Its rings stretch 282,000 km across but are only about 10 meters thick.',
        facts: [
            { label: 'Type', value: 'Gas Giant' },
            { label: 'Diameter', value: '116,460 km' },
            { label: 'Distance from Sun', value: '1.43 billion km' },
            { label: 'Day Length', value: '10.7 hours' },
            { label: 'Year Length', value: '29.45 Earth years' },
            { label: 'Moons', value: '146' }
        ],
        earthDaysPerYear: 10759
    },
    uranus: {
        name: 'Uranus',
        video: 'planets/uranus.mp4',
        desc: 'Uranus is the seventh planet from the Sun and is an ice giant composed mainly of hydrogen, helium, and methane — the methane gives it its pale blue-green color. It rotates on its side at a 98° tilt, likely due to a massive collision long ago, so it essentially rolls around the Sun like a ball. Uranus has 28 known moons and 13 faint rings, and it holds the record for the coldest temperature ever measured in the Solar System: -224°C.',
        facts: [
            { label: 'Type', value: 'Ice Giant' },
            { label: 'Diameter', value: '50,724 km' },
            { label: 'Distance from Sun', value: '2.87 billion km' },
            { label: 'Day Length', value: '17.2 hours' },
            { label: 'Year Length', value: '84 Earth years' },
            { label: 'Moons', value: '28' }
        ],
        earthDaysPerYear: 30687
    },
    neptune: {
        name: 'Neptune',
        video: 'planets/neptune.mp4',
        desc: 'Neptune is the eighth and farthest known planet from the Sun, and the windiest — with speeds reaching 2,100 km/h, faster than the speed of sound on Earth. It is a cold, dark ice giant with a deep blue color caused by methane in its atmosphere. Neptune takes 165 Earth years to complete one orbit, and since its discovery in 1846, it has completed only one full orbit. It has 16 known moons, the largest being Triton.',
        facts: [
            { label: 'Type', value: 'Ice Giant' },
            { label: 'Diameter', value: '49,244 km' },
            { label: 'Distance from Sun', value: '4.5 billion km' },
            { label: 'Day Length', value: '16.1 hours' },
            { label: 'Year Length', value: '164.8 Earth years' },
            { label: 'Moons', value: '16' }
        ],
        earthDaysPerYear: 60190
    },
    pluto: {
        name: 'Pluto',
        video: 'planets/pluto.mp4',
        desc: 'Pluto is a dwarf planet in the Kuiper Belt, a ring of icy bodies beyond Neptune. Once considered the ninth planet, it was reclassified in 2006 after astronomers discovered other similar-sized objects. Pluto has a heart-shaped glacier of nitrogen ice called Tombaugh Regio, and its largest moon, Charon, is so big that the two actually orbit a point between them — making them a binary system. One year on Pluto lasts 248 Earth years.',
        facts: [
            { label: 'Type', value: 'Dwarf Planet' },
            { label: 'Diameter', value: '2,377 km' },
            { label: 'Distance from Sun', value: '5.9 billion km' },
            { label: 'Day Length', value: '6.4 Earth days' },
            { label: 'Year Length', value: '248 Earth years' },
            { label: 'Moons', value: '5' }
        ],
        earthDaysPerYear: 90560
    }
};

/* =========================================================
   ELEMENTS
   ========================================================= */
const planetCards     = document.querySelectorAll('.planet-card');
const modalOverlay    = document.getElementById('modalOverlay');
const modalClose      = document.getElementById('modalClose');
const modalVideo      = document.getElementById('modalVideo');
const modalVideoSrc   = document.getElementById('modalVideoSource');
const modalTitle      = document.getElementById('modalTitle');
const modalDesc       = document.getElementById('modalDesc');
const modalFacts      = document.getElementById('modalFacts');
const modalPlanetName = document.getElementById('modalPlanetName');
const modalAgeValue   = document.getElementById('modalAgeValue');
const modalAgeNote    = document.getElementById('modalAgeNote');
const earthAgeInput   = document.getElementById('earthAge');

let currentPlanetKey = null;

/* =========================================================
   AGE CONVERSION LOGIC
   ========================================================= */
function calculateAgeOnPlanet(earthAge, planetKey) {
    const planet = PLANETS[planetKey];
    if (!planet) return 0;
    return earthAge * (365.25 / planet.earthDaysPerYear);
}

/* =========================================================
   SMART AGE FORMATTING
   - Whole numbers → "20"
   - Decimals → "4.32" (up to 2 decimals, trailing zeros stripped)
   ========================================================= */
function formatAge(value) {
    const rounded = Math.round(value * 100) / 100;

    if (Number.isInteger(rounded)) {
        return rounded.toString();
    }

    return parseFloat(rounded.toFixed(2)).toString();
}

/* =========================================================
   MODAL OPEN / CLOSE
   ========================================================= */
function openModal(planetKey) {
    const planet = PLANETS[planetKey];
    if (!planet) return;

    currentPlanetKey = planetKey;

    // Video
    modalVideoSrc.src = planet.video;
    modalVideo.load();
    modalVideo.play().catch(() => {});

    // Title + description
    modalTitle.textContent = planet.name;
    modalDesc.textContent = planet.desc;
    modalPlanetName.textContent = planet.name;

    // Facts grid
    modalFacts.innerHTML = planet.facts.map(f => `
        <div class="fact">
            <span class="fact-label">${f.label}</span>
            <span class="fact-value">${f.value}</span>
        </div>
    `).join('');

    // Age — automatic calculation
    updateModalAge();

    // Show
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideoSrc.src = '';
    currentPlanetKey = null;
}

/* =========================================================
   AGE UPDATE (automatic)
   ========================================================= */
function updateModalAge() {
    if (!currentPlanetKey) return;

    const raw = parseFloat(earthAgeInput.value);
    const earthAge = isNaN(raw) || raw < 0 ? 0 : raw;

    const planetAge = calculateAgeOnPlanet(earthAge, currentPlanetKey);
    modalAgeValue.textContent = formatAge(planetAge);

    // Note showing the ratio
    const planet = PLANETS[currentPlanetKey];
    const earthYearsPerPlanetYear = (365.25 / planet.earthDaysPerYear);

    modalAgeNote.textContent =
        `1 Earth year = ${earthYearsPerPlanetYear.toFixed(3)} ${planet.name} years · ` +
        `${planet.name} year = ${planet.earthDaysPerYear.toLocaleString()} Earth days`;
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */

// Click planet cards
planetCards.forEach(card => {
    card.addEventListener('click', () => {
        openModal(card.dataset.planet);
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);

// Click outside modal closes it
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

// Esc key closes modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Live update age when input changes
earthAgeInput.addEventListener('input', () => {
    if (currentPlanetKey) updateModalAge();
});