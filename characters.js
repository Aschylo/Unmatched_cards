const heroList = [
  "King Arthur",
  "Medusa",
  "Alice",
  "Sinbad",
  "Dracula",
  "Invisible Man",
  "Jekyll & Hyde",
  "Sherlock Holmes",
  "Big Foot",
  "Robin Hood",
  "Achilles",
  "Bloody Mary",
  "Sun Wukong",
  "Yennega",
  "Beowulf",
  "Little Red",
  "Buffy",
  "Spike",
  "Willow",
  "Angel",
  "Elektra",
  "Daredevil",
  "Bullseye",
  "Black Widow",
  "Black Panther",
  "Winter Soldier",
  "Harry Houdini",
  "The Genie",
  "Nikola Tesla",
  "Dr. Jill Trent",
  "Golden Bat",
  "Annie Christmas",
  "Oda Nobunaga",
  "Tomoe Gozen",
  "Raptors (x3)",
  "Robert Muldoon",
  "Deadpool",
  "Cloak Dagger (x2)",
  "Doctor Strange",
  "Ghost Rider",
  "Hamlet",
  "Luke Cage",
  "Spiderman",
  "She Hulk",
  "Squirrel Girl",
  "T-Rex",
  "Dr. Sattler",
  "Moon Knight",
  "Ms. Marvel",
  "Shakespeare",
  "The Wayward Sisters",
  "Titania",
  "Geralt of Rivia",
  "Ciri",
  "Ancient Leshen",
  "Philippa",
  "Eredin",
  "Yennefer & Triss",
  "Blackbeard",
  "Chupacabra",
  "Pandora",
  "Loki",
  "Leonardo",
  "Donatello",
  "Michelangelo",
  "Raphael",
  "Shredder",
  "Krang",
  "Bruce Lee",
  "Muhammad Ali",
  // Add more characters anytime!
];

const heroes = {
    "King Arthur": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/WWzu16BEFGsEdu5NsMbMI.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/q2P9K10o3vHFETym77rtX.png",
        passive: "When King Arthur attacks, you may BOOST that attack, Play the BOOST card, face down, along with your attack card.",
        hp: "18 & 7 (Merlin)",
        movement: 2,
        attack : "Melee & Range (Merlin)",
        sidekicks: [
            { name: "Merlin", hp: 7, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/4Rl9Oq9N82zhatbTShnXn.webp" },
        ]
    },

    "Medusa": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ROSMO3sRi6Jh1o7S_riGI.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/UiSptDItsyT0i3wGg7lsQ.png",
        passive: "At the start of your turn, you may deal 1 damage to an opposing fighter in Medusa's zone",
        hp: 16,
        movement: 3,
        attack : "Range & Melee (Harpies)",
        sidekicks: [
            { name: "Harpies (x3)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/G42WIKYZ1cmwACVwMggzM.webp" },
        ]
    },
    
    "Alice": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UyRTRFSeylTWqKpnkSIus.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Ee_-ka3SXBQZV6njNIO04.png",
        passive: "When you place Alice, choose whether she starts the game BIG or SMALL. \nWhen Alice is BIG, add 2 to the value of her attack cards. \nWhen Alice is SMALL, add 1 to the value of her defense cards.",
        hp: "13 & 8 (The JabberWock)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "The JabberWock", hp: 8, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/2Xt6pTFi1BqovPgKbANOJ.webp" },
        ]
    },

    "Sinbad": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/iX3R40hAP80XJ-UalPt6E.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/bRwR67vg0D2H_RRkrxLU0.png",
        passive: "When you maneuver, you may move fighters +1 space for each VOYAGE card in your discard pile.",
        hp: "15 & 6 (The Porter)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "The Porter", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/2SD817c0HhsliZ40hRdB8.webp" },
        ]
    },

    "Dracula": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/vI43Lyv3aAGgUa9vfv-uT.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/jhgwbg00y5So-428_BJm9.png",
        passive: "At the start of your turn, you may deal 1 damage to a fighter adjacent to Dracula. If you do, draw a card.",
        hp: 13,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "The Sisters (x3)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/wPJcRfNBRXAKcAp5BRSRI.webp" },
        ]
    },

    "Invisible Man": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UaF-LncvMygaqpZvmecew.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/_n9W_ZqFRU6x8h0NCyCvN.png",
        passive: "At the start of the game, after you place Invisible Man, place 3 fog tokens in separate spaces in his zone. When Invisible Man is on a space with a fog token, add 1 to the value of his defense cards. Invisible Man may move between two spaces with fog tokens as if they were adjacent.",
        hp: 15,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

    "Jekyll & Hyde": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ALEF6sBXvEA3kUuJEb3gb.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/NpoqqaDotShInZPyA0iGz.png",
        passive: "Start the game as Dr. Jekyll. At the start of your turn, you may transform into Dr. Jekyll or Mr. Hyde. While Mr. Hyde, after you maneuver, take 1 damage.",
        hp: 16,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Sherlock Holmes": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ZTs8B3IyqHabuE3aeXHF_.png",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/r9zw0GPND8xV35Ay13-KV.png",
        passive: "Effects on HOLMES and DR. WATSON cards cannot be canceled by an opponent. Effects on ANY cards can be canceled.",
        hp: "16 & 8 (Dr. Watson)",
        movement: 2,
        attack : "Melee & Range (Watson)",
        sidekicks: [
            { name: "Dr. Watson", hp: 8, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/fym_KtKQPbkrtdjrGcnfS.webp" },
        ]
    },

    "Big Foot": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mbjF8pursj8AYkalODyXa.jpg",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/gwHNCnAJz-IQeacafU2Yt.png",
        passive: "At the end of your turn, if there are no opposing fighters in Bigfoot's zone, you may draw 1 card.",
        hp: "16 & 6 (The Jackalope)",
        movement: 3,
        attack : "Melee",
        sidekicks: [
            { name: "The Jackalope", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/brjO1wbtbusXfYkfTDsZ6.webp" },
        ]
    },

     "Robin Hood": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nTLDla5Mkj_Hc2DfFQULj.jpg",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Zj6oVuurvT5yBZNyNfxs2.png",
        passive: "After you attack, you may move your attacking fighter up to 2 spaces.",
        hp: 13,
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Outlaws", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/KwI9DqW6Y6Je1Sj_ippng.webp" },
        ]
    },

     "Achilles": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/INWx-zVx8tsyrlQD4gFE2.gif",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/tX4mC2uFjsi-ZAXbCM1KK.png",
        passive: "When Patroclus is defeated, discard 2 random cards. While Patroclus is defeated: \n- Add +2 to the value of all Achilles' attacks \n- If Achilles wins combat, draw 1 card.",
        hp: "18 & 6 (Patroclus)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Patroclus", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/PQzBXj7JAn0vanxqXAJtz.webp" },
        ]
    },

     "Bloody Mary": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/_R8K6Xw1JWJfBSOOfhB9t.gif",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/J33GVzbyOLhSVmtl-7D_q.png",
        passive: "At the start of your turn, if you have exactly 3 cards in hand, gain 1 action.",
        hp: 16,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Sun Wukong": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/EoDLc4PNqSqST9akf5nVn.jpg",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/OkS_VNxzdYn5EiVtS2AIF.png",
        passive: "At the start of your turn, you may take 1 damage to summon a Clone in an empty space adjacent to Sun Wukong. Do not start with any Clones on the board.",
        hp: 17,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Clones (x3)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/lTECznDU1KVakYyjpL0UF.webp" },
        ]
    },

     "Yennega": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/QQfafCmj_R9Qhz1-XKvhr.jpg",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/1-1EOCUYmO8In4O1qxX60.png",
        passive: "If Yennenga would take damage, you may assign any amount of that damage to one or more Archers in her zone instead. (You may not assign more damage to an Archer that their remaining health.)",
        hp: "15 & 2 (Archers)",
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Archers (x2)", hp: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/u7j4wXbMN6Pj37wFcICa9.webp" },
        ]
    },

     "Beowulf": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/UQLFTSR_LuIMa60bOFMPl.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/uo8XF5-fxB71_cKMXaUsU.webp",
        passive: "Beowulf starts with 1 Rage. When Beowulf is dealt damage, he gains 1 Rage. Beowulf has a maximum of 3 rage.",
        hp: "17 & 9 (Wiglaf)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Wiglaf", hp: 9, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/DrIgRWxmrpgvOZC_2xlbi.webp" },
        ]
    },

     "Little Red": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/xLyD7qzSKyz94f_F6QtEi.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/MBmHiJAwDSgFZTG-aUKSQ.webp",
        passive: "Resolve an effect on a card you play if the symbol next to the effect matches the item in your basket. At the start of the game, place LITTLE RED's BASKET in your discard pile. \nLittle Red's Basket: This starts in your discard pile. It does not count as a card. 🌟 counts as any one 🐺🌹⚔️ symbol.",
        hp: "14 & 9 (Huntsman)",
        movement: 2,
        attack : "Melee & Range (Huntsman)",
        sidekicks: [
            { name: "Huntsman", hp: 9, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/VEXTjKWJLRGqwdY7_NCr5.webp" },
        ]
    },

     "Buffy": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/jQ74IjwVi4uRKQfRxjE2i.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Ui4NxwdyvYkJPVMel-xUb.png",
        passive: "Buffy may move through spaces containing opposing fighters (including when she is moved by effects).",
        hp: "14 & 6 (Giles & Xander)",
        movement: 3,
        attack : "Melee",
        sidekicks: [
            { name: "Giles", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/lX2Ni2j2OmM_FsmKiq_37.webp" },
            { name: "Xander", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/gEGkzo7WB5L9AIfreXglk.webp" },
        ]
    },

     "Spike": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/NK3Qs9KU2YSv7HERD-zm4.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/WdWjKv6796SEeqYxHOvkN.png",
        passive: "At the start of your turn, you may place a Shadow token in any space adjacent to Spike or Drusilla.",
        hp: "15 & 7 (Drusilla)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Drusilla", hp: 7, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/ObnvDVQFY0eF3ucC8GmOK.webp" },
        ]
    },

     "Willow": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/rsxAPjEmhngg8mZ-yXDIk.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/kzQeRTJOWLUZm4apRUHkE.png",
        passive: "When Willow or Tara is dealt damage, Willow becomes Dark Willow. At the end of your turn, if Dark Willow is adjacent to Tara, she becomes Willow.",
        hp: "14 & 6 (Tara)",
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Tara", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/QI42fwcI7yl86Z9bsO8Md.webp" },
        ]
    },

     "Angel": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/zOn8WP6ucoOiZ4aFxZ5Rb.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/1Rew9R1rQPplTttKkBY6U.png",
        passive: "After Angel or Faith attacks, if you lost the combat, draw 1 card.",
        hp: "16 & 8 (Faith)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Faith", hp: 8, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/zgrjtwbbMWfA63a9QjL1W.webp" },
        ]
    },

     "Elektra": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/BiC5iLlqu_RyyelKidLWp.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/tJRw0ZUTKvJbd--1kl60e.webp",
        passive: "The first time Elektra would be defeated, remove her and all Hand from the board. She is not defeated. At the start of your next turn, Resurrect her. (Ignore effects with the RESURRECTED symbol.) \nWhen Elektra Resurrects: Flip your health dial. Shuffle your discard pile into your deck. Place Elektra and all Hand back onto the board with each fighter in a different zone. (You must resolve effects with the RESURRECTED symbol.)",
        hp: 7,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "The Hand (x4)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/jVYlwwR6-cnjRKz5ngHRK.webp" },
        ]
    },

     "Daredevil": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/B0qnKxZyoG3KLwRNvKsrG.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/NgBt8ama_QbEh8TaPBIUf.webp",
        passive: "DURING COMBAT: If you have 2 or fewer cards in your hand, you may BLIND BOOST your attack or defense. (If you have other DURING COMBAT effects, choose the order.)",
        hp: 17,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Bullseye": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/RBfXKmTmIQ_rAq7TjQ1bV.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Xtr7QarL3PqLpOodHDKon.webp",
        passive: "Bullseye can attack from up to 5 spaces away (ignoring zones).",
        hp: 14,
        movement: 2,
        attack : "Range",
        sidekicks: []
    },

     "Black Widow": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/wlWum83DPKQPdY0TfJEcm.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/3Y5Nfd4U4I4QvCrmgMPuB.webp",
        passive: "Before drawing your starting hand, add THE MOSCOW PROTOCOL card to your hand. Then, shuffle your deck and draw 5 cards. (Your starting hand is 6 cards instead of 5.)",
        hp: "13 & 6 (Maria Hill)",
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Maria Hill", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/-0_qY__PQH4Ltj9azkWle.webp" },
        ]
    },

     "Black Panther": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/VuFF0FGwy-spBM3-5NfDA.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/EvAPWVmCZBEXQ1LyvzAfq.webp",
        passive: "Whenever you BOOST, draw 1 card. Cards stored in your VIBRANIUM SUIT can only be used to BOOST.",
        hp: "14 & 6 (Shuri)",
        movement: 2,
        attack : "Melee & Range (Shuri)",
        sidekicks: [
            { name: "Shuri", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/sYUUC_eJ5vb8F7UhVEbaP.webp" },
        ]
    },

     "Winter Soldier": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/JxKGaAvQQUDqjJK1ec8Ua.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/zAkSjJBH-iA6jsfrSNg4g.webp",
        passive: "Effects on Winter Soldier's cards cannot be canceled",
        hp: 15,
        movement: 2,
        attack : "Range",
        sidekicks: []
    },

     "Harry Houdini": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/HkwPbbhKUMb_XWpndh6DN.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/SvNtWjcY7hVT3mxUbCIxG.webp",
        passive: "When you take the maneuver action and BOOST, you may place Houdini in any space instead of moving. (Bess moves as normal.)",
        hp: "14 & 5 (Bess)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Bess", hp: 5, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/RVJ0aO7DR1Zc0lSGyYd6b.webp" },
        ]
    },

     "The Genie": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/iZi7oBFoZ34YyVa1Qg28u.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/ZxFSRLXLxEeinvGfBma9Y.webp",
        passive: "At the start of your turn, you may discard 1 card to gain 1 action.",
        hp: 16,
        movement: 3,
        attack : "Range",
        sidekicks: []
    },

     "Nikola Tesla": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/byq-c3l_HktvangjGc33q.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/TMqUZQi2isOak5hcf3neO.webp",
        passive: "Start the game with 1 coil charged. At the end of your turn, charge 1 coil. At the start of your turn, if both coils are charged, deal 1 damage to each opposing fighter adjacent to Tesla and move them up to 1 space.",
        hp: 14,
        movement: 2,
        attack : "Range",
        sidekicks: []
    },

     "Dr. Jill Trent": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/CvsgmaMFob3JNZ9OFOjgA.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/wW2Xi-Mb9UiucKxO_xB5c.webp",
        passive: "GADGETOLOGY \nAt the start of your turn, activate one of your gadgets. Whenever Jill Trent attacks, resolve the active gadget's effect.\n\nHypnoray Blaster\nDURING COMBAT: If your card's printed value is lower than your opponent's, reveal the top card of your opponent's deck. Increase the value of your attack by the BOOST value of the revealed card.\n\nUltrabiotic Tonic \nAFTER COMBAT: If your card's printed value is higher than your opponent's, Jill Trent Recovers 1 health.",
        hp: "13 & 6 (Daisy)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Daisy", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/oKA7tGyNoa1DQ8_8Or4sT.webp" },
        ]
    },

     "Golden Bat": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/A891P2gL7IPp2_Kjk3P7b.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/sAb2-6ADLLjYckLhnvliJ.webp",
        passive: "If you haven't taken a Maneuver action this turn, add +2 to the value of Golden Bat's attacks.",
        hp: 18,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Annie Christmas": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/tM1nfezImPsBo-Dnd6wNG.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/wTjG3LZ2FB7Ngw_4c-LRq.webp",
        passive: "Add +2 to the value of Annie's attacks if she has less health than the defender.",
        hp: "14 & 8 (Charlie)",
        movement: 2,
        attack : "Melee & Range (Charlie)",
        sidekicks: [
            { name: "Charlie", hp: 8, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/dUqMEP7OOzM1NxL64T9f2.webp" },
        ]
    },

     "Oda Nobunaga": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/_hVP2Ah-uMSD_kH5-LUol.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/_yMu4Yc9LeQ6ipWoH-aSJ.webp",
        passive: "Other friendly fighters in Oda Nobunaga's zone add +1 to the value of their played combat cards. (Oda Nobunaga does not benefit from this ability.)",
        hp: "13 & 6 (Honor Guard)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Honor Guard", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/eMvbI3i99GtNmhcdnu-9W.webp" },
            { hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/ZlI0yBS6cYzLAUtBW3bUm.webp" },
        ]
    },

     "Tomoe Gozen": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8P9zI-HHRr-qgJASxttfi.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/_mLRNfHYPM4a_A5XzT_ij.webp",
        passive: "When an opposing hero leaves Tomoe Gozen's zone, deal 1 damage to that hero.",
        hp: 14,
        movement: 2,
        attack : "Range",
        sidekicks: []
    },

     "Raptors (x3)": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/591BE1ij7PVn6uzsqucd1.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/g5TYUnp2IFQW22nwxj8h6.webp",
        passive: "Raptors add 1 to the value of their attack cards for each of your other Raptors adjacent to the defender.",
        hp: "7 (x3)",
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Robert Muldoon": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8TYpVxAqscVJYDfMuPeyk.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Dw70vqFIwNtWUWHbHRnxZ.webp",
        passive: "At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.",
        hp: 14,
        movement: 3,
        attack : "Range",
        sidekicks: [
            { name: "Ingen Worker (x3)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/wpBiKqADJ_d9bCeyXphQ_.webp" },
        ]
    },

     "Deadpool": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mF-7XGbmp7eHQrbMSaX6v.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Ex0R0j4c4NFOsCGwU6fBV.webp",
        passive: "After you attack, Deadpool recovers 1 health. Also, if your opponent's real name is Logan, all your attacks are +5.",
        hp: 10,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Cloak Dagger (x2)": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/WK4lDtMPBv8cTVuZXVBzv.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/olZeMAjc1b1WeWfVjdX1E.webp",
        passive: "UMBRA \nAfter you attack, if Cloak dealt at least 2 combat damage, your opponent discards 1 card.\n\nREFRACTION\nAfter you attack, if Dagger dealt at least 2 combat damage, gain 1 action.",
        hp: "8 (x2)",
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Doctor Strange": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nV6hmlXVda7Kf4ABbW26Y.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Mx_3FAv1rokmDyyyufSLu.webp",
        passive: "After each combat, if Doctor Strange played a card, you may deal 1 damage to him. If you do, put that card on the bottom of your deck and draw 1 card.",
        hp: "14 & 6 (Wong)",
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Wong", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/WOhUVtWlnBO9m_4ZNpDvc.webp" },
        ]
    },

    "Ghost Rider": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/LRuz2YID8471dnTGfM1_b.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/7Is0TMXsQNA0jPXY-Idhk.webp",
        passive: "Ghost Rider starts the game with 5 Hellfire. When you maneuver you may spend 1 Hellfire. If you do, increase Ghost Rider's move value to 4, and he mave move through opposing fighters. Then deal 1 damage to each opposing fighter he moved through.",
        hp: 17,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Hamlet": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/bg3s8IEdB07YlbFJQSGS5.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/KCW4JwtH3WkcN6gO9YvM2.webp",
        passive: "At the start of your turn, choose TO BE or NOT TO BE. If you choose NOT TO BE, deal 2 damage to one of your fighters.\nTO BE: When you maneuver, draw 1 additional card.\nNOT TO BE: Add +2 to the value of Hamlet's attacks.",
        hp: "15 & 6 (Rosencrantz & Guildenstern)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Rosencrantz & Guildenstern", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/SgxYZQRA_yzaMm3IiCIaB.webp" },
        ]
    },

     "Luke Cage": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/SkGReM3sdO9x2AGIumUao.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/XLi5fhPKhpMBJpvQY-jc2.webp",
        passive: "Luke Cage takes 2 less combat damage from attacks.",
        hp: "13 & 6 (Misty Knight)",
        movement: 2,
        attack : "Melee & Range (Misty Knight)",
        sidekicks: [
            { name: "Misty Knight", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/2AE6EtfUgKK3fYsZzVZR5.webp" },
        ]
    },

     "Spiderman": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/Kngv_p0P1hdxfOANliL7Y.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/NqpGHuTfbMIyWr6X7Jk5S.webp",
        passive: "When an opponent attacks Spider-Man, before you play a defense card, they must tell you the printed value of their card.",
        hp: 15,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "She Hulk": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/dfiv68ElGn0Gf-G0Il-Vy.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/iMAbujPP_IIC91h7pwYzd.webp",
        passive: "At the start of your turn, you may discard a card to deal damage equal to its BOOST value to a fighter in your zone.",
        hp: 20,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Squirrel Girl": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/5eoggYWJKVJ_PNs8bQOCr.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/PnGG2OrgYkePzoOwAKveC.webp",
        passive: "At the start of your turn, summon a squirrel in a space adjacent to Squirrel Girl.\nSquirrels are small fighters. Do not start with any squirrels on the board.",
        hp: 13,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Squirrel (x8)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/0s3SiJxqXxNTDgWvg4SDS.webp" },
        ]
    },

     "T-Rex": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/mURpEFDw_zxQRn19mYXgG.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/WtQqhW1m7pXp494PtRk8G.webp",
        passive: "T-Rex is a large fighter. (She can attack up to 2 spaces away.) At the end of your turn, draw a card.\nLarge fighters have an extended base that can occupy up to two spaces. Large fighters may start moving from any space they are in. When they do, rotate them so that the head is moving into the new space. Their tail always follows behind their head, entering the space the left. Large fighters also ignore one-way arrows on maps and cannot use secret passages.\nLarge fighters can attack up to 2 spaces away, even over fighters that occupy one of those spaces.",
        hp: 27,
        movement: 1,
        attack : "Melee",
        sidekicks: []
    },

     "Dr. Sattler": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/xrt_5GcTzDQd9Bb0P2Z56.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/dqce0fgLWcxiifaXfdRUL.webp",
        passive: "After Dr. Sattler or Dr. Malcolm move, place an insight token in their new space. You have 5 insight tokens.\nWhenever either of your fighters moves to a new space, place and insight token in their new space. Tokens may be placed in spaces with other tokens, including other insight tokens\nThere tokens have no effect themselves but any of your cards interact with them. When you remove insight tokens from the board, return them to your supply. You can place them on the board again in the future.\nIf you would place an insight token but don't have any in your supply, nothing happens.",
        hp: "13 & 7 (Dr. Malcolm)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Dr. Malcolm", hp: 7, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/xzpneexU1oeuZJokn9a3U.webp" },
        ]
    },

     "Moon Knight": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/nh0wyjVp6hYSrGY8HS47C.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/NskPhEYxXL0AmVcxOp8Bn.webp",
        passive: "Moon Knight\nAt the start of your turn, move up to 2 spaces.\n\nKhonshu\nKhonshu adds +2 to the value of his attack cards. He does not take damage from effects other than combat damage.\n\nMr. Knight\nMr. Knight adds +1 to all his defense values.\n\nAt the end of your turn, change to your next identity (In order, Moon Knight -> Khonshu -> Mr. Knight, repeating).",
        hp: 16,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Ms. Marvel": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/MFiQb6grYsbNNYwR_hoh1.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/w-c5wvLOZYCYK0udNG-DV.webp",
        passive: "At the start of your turn, you may move Ms. Marvel 1 space.\nMs. Marvel can attack from up to 2 spaces away (ignoring zones).",
        hp: 14,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Shakespeare": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/pqYPwbvPq9hp_RtpsQB5B.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/heMR-dVjfavjBxRwETZw7.webp",
        passive: "After you attack or defend, add your card to your line.\nWhen your line has 10 or more syllables, discard your line. If there are exactly 10 syllables, resolve the completion effect on the last card.",
        hp: 13,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Actor (x3)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/hbQ6WG0TcQ6VASLvqYwsv.webp" },
        ]
    },

     "The Wayward Sisters": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/epUAsiZCbo09Q_Tew3OxK.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/Dghjfo7bw9_VXryAQ6Kck.webp",
        passive: "Your cards go into your cauldron instead of your discard pile.\nAfter you attack, you may cast one spell that you have the ingredients for If you do, discard all the cards in your cauldron.",
        hp: "6 (x3)",
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

    //Special
     "Titania": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/hq3qeQJWxR1UIcSt9aIkw.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/7Jj-_I5v6Pc1xCWUkZkwo.webp",
        passive: "If you do not have a face-up glamour at the start of your turn, flip the top card of your glamour deck face-up. Its effect is ongoing while it remains face-up.",
        hp: "12 & 6 (Oberon)",
        movement: 2,
        attack : "Range & Melee (Oberon)",
        sidekicks: [
            { name: "Oberon", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/Yjiame4Tws6PmxbH4EYt7.webp" },
        ]
    },

    //Special
     "Geralt of Rivia": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/CNnTH-5_N8SAAWXV_RSZV.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/muFEJXX9TP7Wa1MupzYpJ.webp",
        passive: "At the start of the game, choose your gear. Select a POTION, ARMOR, and SWORD, and shuffle 2 copies of each into your deck.",
        hp: "16 & 5 (Dandelion)",
        movement: 2,
        attack : "Melee & Range (Dandelion)",
        sidekicks: [
            { name: "Dandelion", hp: 5, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/oojOmpDUPdr9ZxOqcYUGh.webp" },
        ]
    },

     "Ciri": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/sr7i7S_M7FHSAVuqn21jE.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/YYCSdDbtWO0ILTgF_m5nV.webp",
        passive: "🔵 x7 | Effects on Ciri's cards cannot be canceled.",
        hp: "15 & 7 (Ihuarraquax)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Ihuarraquax", hp: 7, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/BJJwG1YxmhbiplYjMpbZg.webp" },
        ]
    },

     "Ancient Leshen": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/A-XrmwVNY2Gf9TvYj6FES.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/9pSNW7Q8f10Phh20h1oPw.webp",
        passive: "Add +3 to the value of the Leshen's attacks if it already attacked this turn.\nYour Wolves have a move value of 3.",
        hp: 13,
        movement: "1 & 3 (Wolf)",
        attack : "Range & Melee (Wolf)",
        sidekicks: [
            { name: "Wolf (x2)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/KTmoO7novnPa5cybKurfF.webp" },
        ]
    },

     "Philippa": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/u0_PFJIp0z0ITwRgpitzx.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/SjVEiU_LpTHT5lWsStVXT.webp",
        passive: "At the end of your turn, you may draw until you have a hand of 4 cards.",
        hp: "12 & 6 (Djikstra)",
        movement: 2,
        attack : "Range & Melee (Djikstra)",
        sidekicks: [
            { name: "Djikstra", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/BaHYP8NMlFG4KWkk6ACcJ.webp" },
        ]
    },

     "Eredin": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/s3I7T0MDElqnYmN5Kzv3r.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/7Zy0wHm8tnQjlzwatp8sj.webp",
        passive: "While all of your Red Riders are defeated, Eredin is ENRAGED.\nIf Eredin is ENRAGED, add +1 to the value of your combat cards, and your move value is 3.",
        hp: 14,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Red Rider (x4)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/Yrz3oVniu6raoQiIBG6vN.webp" },
        ]
    },

     "Yennefer & Triss": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/wyF2xEhMaHY_hYfRIkWWv.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/ccNLBHg6vMXOcQ_beQQtg.webp",
        passive: "At the beginning of the game, choose Yennefer or Triss to be your hero.\n\nSorceress of Vengerberg\nIMMEDIATELY: If Yennefer is attacking, you may BOOST her attack. (This effect cannot be canceled.)\n\nMerigold the Fearless\nAfter Triss plays a scheme, deal 2 damage to a fighter adjacent to Triss.",
        hp: "14 & 6 (Other Sorcereress)",
        movement: 2,
        attack : "Range",
        sidekicks: [
            { name: "Yennefer", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/vRJHkX8qnuUDEMat7lJf7.webp" },
            { name: "Triss", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/jAg2R0LWV7AzCbyl1piwT.webp" },
            {hp: 0, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/YUsg_JtOmIRozkTV2O5jD.webp" },
        ]
    },

     "Blackbeard": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/ZeiHZOD0yDLap-wB9yF_x.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/PL2zOdyCoWbpnYzjDbHLc.webp",
        passive: "Start the game with 1 doubloon in the treasury, you have the other 2.\n- At the start of your turn, you may pay 1 doubloon to gain 1 action.\n- When Blackbeard takes combat damage, pay 1 doubloon.\n\nBLACKBEARD'S DOUBLOONS\nDoubloons that Blackbeard doesn't have are kept in the Treasury.\n\nBlackbeard pays a doubloon to the Treasury when he takes combat damage. He may also pay a doubloon at the start of his turn to gain an extra action.\n\nThe effects on many of Blackbeard's cards can be ignored by paying a ransom. Any opponent can pay the amount of doubloons shown at the end of an effect to ignore that effect. These doubloons are taken from the Treasury and given to Blackbeard.",
        hp: 13,
        movement: 2,
        attack : "Range & Melee (Sea Dog)",
        sidekicks: [
            { name: "Sea Dog (x2)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/QYPUl2leIgUSyklnUueb_.webp" },
        ]
    },

     "Chupacabra": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/5U0kpiJx-RzRDYQ-FulgJ.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/xZt3ZMNBE54rJTXyQ5j7U.webp",
        passive: "After you attack, you may draw a card.",
        hp: 14,
        movement: 3,
        attack : "Melee",
        sidekicks: []
    },

     "Pandora": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/y-rllviOUoiq6y6RZrAEC.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/-VPrUIqa3AJ2RoglkAqQk.webp",
        passive: "Do not start with any Kakodamons on the board.\nAt the start of your turn, open Pandora's Box.\n\nPandora's Box is a deck of seven cards called MISERIES.\nWhen you open Pandora's Box, reveal the top card and resolve its effect if any). You may keep revealing and resolving additional cards, one at a time, until you choose to stop.\nIf there are three or more total feathers on revealed cards, you must stop revealing, then Pandora takes 1 damage for each revealed MISERY. At the end of your turn, shuffle all revealed MISERIES back into Pandora's Box.",
        hp: 14,
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Kakodaemon (x2)", hp: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/UMswbYvLOE0zSFZ1561M-.webp" },
        ]
    },

     "Loki": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/2pgzlSmJ7oYmSHBTVRXzU.webp",
        figure: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/minis/q_zeVnJBynCZ-s6Jq4QF8.webp",
        passive: "After you play a TRICK, put that card into your opponent's hand instead of your discard pile.\nIf an opponent discards a TRICK from their hand, return that card to your hand or the top of your deck.\nAdd +1 to your move value for eachTRICK in your opponents hands.",
        hp: 16,
        movement: 2,
        attack : "Melee",
        sidekicks: []
    },

     "Leonardo": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/gfXNPRe_fZDGIBg2eddJW.avif",
        figure: "",
        passive: "At the start of your turn, move any fighter up to 1 space.",
        hp: "16 & 9 (Splinter)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Splinter", hp: 9, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/p9SHLwIUUyYQzTh0uqh2R.webp" },
        ]
    },

     "Donatello": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/j5FBZhwgc6DDMP7J5R5xE.webp",
        figure: "",
        passive: "When you maneuver, you may draw 2 cards instead of 1. If you do, put a card in your hand on the bottom of your deck.\nAfter you play an invention, tuck it under this card. For the rest of the game, its invention bonus applies.",
        hp: "14 & 7 (Metalhead)",
        movement: 2,
        attack : "Melee",
        sidekicks: [
            { name: "Metalhead", hp: 7, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/FgiRRkshMeb1x4vsgScF9.webp" },
        ]
    },

     "Raphael": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/9Fluf82O6L7-685G-EosQ.webp",
        figure: "",
        passive: "On each of your turns, the first time you lose combat, gain 1 action.",
        hp: "17 & 8 (Casey Jones)",
        movement: 2,
        attack : "Melee & Range (Casey Jones)",
        sidekicks: [
            { name: "Casey Jones", hp: 8, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/DeNkCmvEIYtmhH1Olhv3S.webp" },
        ]
    },

     "Michelangelo": {
        background: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/card-covers/8uec00oaRZstZ9ontmkPw.webp",
        figure: "",
        passive: "After you attack or scheme, draw 1 card.\nYour starting and maximum hand size is 3.",
        hp: "14 & 6 (April O'Neil)",
        movement: 3,
        attack : "Melee & Range (April O'Neil)",
        sidekicks: [
            { name: "April O'Neil", hp: 6, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/heroes/sidekicks/Nq9hPlIceAQPnTYjYaOPR.webp" },
        ]
    },

     "Shredder": {
        background: "",
        figure: "",
        passive: "",
        hp: 0,
        movement: 0,
        attack : "",
        sidekicks: [
            { name: "", hp: 0, image: "" },
        ]
    },

     "Krang": {
        background: "",
        figure: "",
        passive: "",
        hp: 0,
        movement: 0,
        attack : "",
        sidekicks: [
            { name: "", hp: 0, image: "" },
        ]
    },

     "Bruce Lee": {
        background: "",
        figure: "",
        passive: "",
        hp: 0,
        movement: 0,
        attack : "",
        sidekicks: [
            { name: "", hp: 0, image: "" },
        ]
    },

     "Muhammad Ali": {
        background: "",
        figure: "",
        passive: "",
        hp: 0,
        movement: 0,
        attack : "",
        sidekicks: [
            { name: "", hp: 0, image: "" },
        ]
    },
};

