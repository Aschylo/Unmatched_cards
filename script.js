function buildDeck(heroName) {
    const hero = decks[heroName];
    if (!hero) return [];
    const flat = [];
    hero.forEach(card => {
        for (let i = 0; i < card.count; i++) {
            flat.push({ name: card.name, image: card.image });
        }
    });
    return flat;
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function updateDeckCount() {
    document.getElementById("deck-count").textContent = deck.length;
}

// --- Variables ---
let deck = [];
let hand = [];
let discardPile = [];
let selectedHero = "";
let selectedCard = null; // {type: "hand"|"discard", index}
// --- Pandora Variables ---
let pandoraBox = []; // The draw pile
let pandoraHand = []; // Cards currently "rolled"

// Initialize Pandora Box
function initPandoraFate() {
    pandoraBox = [...pandoraFateDeck]; // copy original fate deck
    shuffle(pandoraBox);
    pandoraHand = [];
    updatePandoraHandUI();
}

// Update Pandora Hand UI
function updatePandoraHandUI() {
    const div = document.getElementById("pandora-hand");
    div.innerHTML = "";

    pandoraHand.forEach((card, index) => {
        const img = document.createElement("img");
        img.src = card.image;
        img.classList.add("pandora-card");
        div.appendChild(img);
    });
}

// --- Pandora Buttons ---
// Roll a card
document.getElementById("pandora-roll-btn").onclick = () => {
    if (pandoraBox.length === 0) {
        alert("Pandora box empty! Reset to continue.");
        return;
    }
    const card = pandoraBox.pop();
    pandoraHand.push(card);
    updatePandoraHandUI();
};

// Return all hand cards to box
document.getElementById("pandora-reset-btn").onclick = () => {
    if (pandoraHand.length === 0) return alert("Pandora hand is empty!");
    
    // Return all to box
    pandoraBox = pandoraBox.concat(pandoraHand);
    pandoraHand = [];
    updatePandoraHandUI();
};

// Shuffle Pandora box
function shufflePandoraBox() {
    shuffle(pandoraBox);
    alert("Pandora box shuffled!");
}

document.getElementById("pandora-shuffle-btn").onclick = () => {
    shufflePandoraBox();
};

let titaniaDeck = [];
let titaniaCurrentCard = null;
let titaniaDiscard = [];

// Initialize Titania Glamour
function initTitaniaGlamour() {
    titaniaDeck = [...TitaniaGlamourDeck]; // copy deck
    titaniaCurrentCard = null;
    titaniaDiscard = [];
    shuffle(titaniaDeck); // optional shuffle
    updateTitaniaUI();
}

// Update UI
function updateTitaniaUI() {
    const div = document.getElementById("titania-card");
    div.innerHTML = "";

    if (titaniaCurrentCard) {
        const img = document.createElement("img");
        img.src = titaniaCurrentCard.image;
        img.classList.add("titania-card-img");
        img.title = titaniaCurrentCard.name;
        div.appendChild(img);
    } else {
        div.textContent = "No Glamour card drawn yet.";
        div.style.color = "white";
    }
}

// Reroll Titania card
document.getElementById("titania-reroll-btn").onclick = () => {
    if (titaniaDeck.length === 0) {
        alert("Titania deck is empty!");
        return;
    }

    if (titaniaCurrentCard) {
        // Move current card to hidden discard
        titaniaDiscard.push(titaniaCurrentCard);
    }

    // Draw new card
    titaniaCurrentCard = titaniaDeck.pop();
    updateTitaniaUI();
};

// --- Hand UI ---
function updateHandUI() {
    const handDiv = document.getElementById("hand");
    handDiv.innerHTML = "";

    hand.forEach((card, index) => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container";

        const img = document.createElement("img");
        img.src = card.image;
        img.className = "hand-card";

        // Highlight if selected
        if (selectedCard && selectedCard.type === "hand" && selectedCard.index === index) {
            img.classList.add("selected-card");
        }

        // Click to select
        img.onclick = () => {
            selectedCard = { type: "hand", index };
            updateHandUI();
            updateDiscardUI();
        };

        cardContainer.appendChild(img);
        handDiv.appendChild(cardContainer);
    });
}

// --- Discard UI ---
function updateDiscardUI() {
    const discardDiv = document.getElementById("discard");
    discardDiv.innerHTML = "";

    discardPile.forEach((card, index) => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container";

        const img = document.createElement("img");
        img.src = card.image;
        img.className = "discard-card";

        // Highlight if selected
        if (selectedCard && selectedCard.type === "discard" && selectedCard.index === index) {
            img.classList.add("selected-card");
        }

        // Click to select
        img.onclick = () => {
            selectedCard = { type: "discard", index };
            updateHandUI();
            updateDiscardUI();
        };

        cardContainer.appendChild(img);
        discardDiv.appendChild(cardContainer);
    });
}

// --- Actions ---
function playCard(i) {
    const playedCard = hand.splice(i, 1)[0];
    discardPile.push(playedCard);
    selectedCard = null;
    updateHandUI();
    updateDiscardUI();
}

function returnCardToDeck(card, position = "top") {
    if (position === "top") deck.push(card);
    else if (position === "bottom") deck.unshift(card);
    updateDeckCount();
}

// --- Event Listeners ---
window.onload = () => {
    const heroButtons = document.querySelectorAll(".hero-btn");
    heroButtons.forEach(btn => {
        const heroName = btn.dataset.hero;
        
        // Add figure image if you want
        if (heroes[heroName]) {
            btn.style.backgroundImage = `url(${heroes[heroName].background})`;
        }

        btn.onclick = () => selectHero(heroName);
    });
};

function updateSidekicks(hero) {
    const skDiv = document.getElementById("sidekick-figures");
    skDiv.innerHTML = ""; // Clear previous

    if (!hero.sidekicks || hero.sidekicks.length === 0) return; // No sidekicks

    hero.sidekicks.forEach(sk => {
        const img = document.createElement("img");
        img.src = sk.image;
        img.className = "sidekick-img";
        img.title = `${sk.name} (HP: ${sk.hp})`;
        skDiv.appendChild(img);
    });
}


function selectHero(heroName) {
    const hero = heroes[heroName];
    selectedHero = heroName;

    if (heroName === "Pandora") {
        document.getElementById("pandora-fate-wrapper").style.display = "block";
        initPandoraFate();
    } else {
        document.getElementById("pandora-fate-wrapper").style.display = "none";
    }

    if (heroName === "Titania") {
        document.getElementById("titania-glamour-wrapper").style.display = "block";
        initTitaniaGlamour();
    } else {
        document.getElementById("titania-glamour-wrapper").style.display = "none";
    }
    deck = buildDeck(heroName);
    shuffle(deck);
    updateDeckCount();

    hand = [];
    discardPile = [];
    selectedCard = null;

    document.getElementById("character-selection").style.display = "none";
    document.getElementById("game-screen").style.display = "block";

    let nameText = heroName;
    if (hero.sidekicks && hero.sidekicks.length > 0) {
        const skNames = hero.sidekicks.map(sk => sk.name).join(", ");
        nameText += " & " + skNames;
    }
    document.getElementById("hero-name").textContent = nameText;
    document.getElementById("hero-figure").src = hero.figure;
    updateSidekicks(hero);
    document.getElementById("hero-passive").textContent = hero.passive;
    document.getElementById("hero-hp").textContent = `HP: ${hero.hp}`;
    document.getElementById("hero-movement").textContent = `Move: ${hero.movement}`;
    document.getElementById("hero-attack").textContent = `Attack Type: ${hero.attack}`;


    updateHandUI();
    updateDiscardUI();
}


document.getElementById("shuffleBtn").onclick = () => {
    shuffle(deck);
    updateDeckCount();
    alert("Deck shuffled!");
};

document.getElementById("drawBtn").onclick = () => {
    if (deck.length === 0) return alert("Deck empty!");
    const card = deck.pop();
    hand.push(card);
    updateHandUI();
    updateDeckCount();
};

document.getElementById("backBtn").onclick = () => {
    deck = [];
    hand = [];
    discardPile = [];
    selectedHero = "";
    selectedCard = null;
    updateHandUI();
    updateDiscardUI();
    updateDeckCount();
    document.getElementById("character-selection").style.display = "block";
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("hero-name").textContent = "";
};

// --- Action Buttons ---
document.getElementById("playBtn").onclick = () => {
    if (!selectedCard || selectedCard.type !== "hand") return alert("Select a hand card!");
    playCard(selectedCard.index);
};

document.getElementById("deckTopBtn").onclick = () => {
    if (!selectedCard) return alert("Select a card!");
    let card;
    if (selectedCard.type === "hand") card = hand.splice(selectedCard.index, 1)[0];
    else card = discardPile.splice(selectedCard.index, 1)[0];
    returnCardToDeck(card, "top");
    selectedCard = null;
    updateHandUI();
    updateDiscardUI();
};

document.getElementById("deckBottomBtn").onclick = () => {
    if (!selectedCard) return alert("Select a card!");
    let card;
    if (selectedCard.type === "hand") card = hand.splice(selectedCard.index, 1)[0];
    else card = discardPile.splice(selectedCard.index, 1)[0];
    returnCardToDeck(card, "bottom");
    selectedCard = null;
    updateHandUI();
    updateDiscardUI();
};

const container = document.getElementById("hero-buttons-container");

heroList.forEach(hero => {
    const btn = document.createElement("button");
    btn.classList.add("hero-btn");
    btn.dataset.hero = hero;
    btn.textContent = hero;
    container.appendChild(btn);
});

document.getElementById("drawAllBtn").onclick = () => {
    if (deck.length === 0) return alert("Deck is already empty!");
    
    // Move all remaining deck cards to hand
    hand = hand.concat(deck);
    deck = [];
    
    updateHandUI();
    updateDeckCount();
};

document.getElementById("shuffleHandBtn").onclick = () => {
    if (hand.length === 0) return alert("Hand is empty!");

    // Move all hand cards to the top of the deck (keeping order)
    deck = deck.concat(hand.reverse()); // reverse so first card in hand becomes top of deck
    hand = [];

    updateHandUI();
    updateDeckCount();
};
