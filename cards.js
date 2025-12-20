const decks = {
  "King Arthur": [
    { name: "Excalibur", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MUg5EqgEkpVO7BlZzLg2b.png" },
    { name: "The Aid of Morgana", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TP7asWDpYXrA0nlHswXv2.png" },
    { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tAkvLLR_ROEm6VXw6fB_G.png" },
    { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z_DD4Lst_yNhW4gIyLHO9.png" },
    { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wY2lPCKq7Fq8FAETbE-hA.png" },
    { name: "Divine Intervention", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5oTdi6J4MQn-2qaHi3uJK.png" },
    { name: "Noble Sacrifice", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZQANGWkuzt05qZUuymcDy.png" },
    { name: "Swift Strike", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HMC00pUJKwDqIwxj3SmKu.png" },
    { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/m_XWrkFd9LL9xbL3LQAIW.png" },
    { name: "The Holy Grail", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LQBqQGu7HVAN2CtHiiBvG.png" },
    { name: "The Lady of the Lake", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vjXO9jS52h2fArpVsJeUP.png" },        

    // Merlin cards
    { name: "Aid the Chosen One", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xrSWcG1MngCeCDuh3Xde8.png" },
    { name: "Prophecy", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FEYthGCw1DnAx0Q27-rDE.png" },
    { name: "Restless Spirits", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sf5JgTHJ8OJ_f7s8Tbi_B.png" },
    { name: "Command the Storms", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HwDrz-Ce1kmqSzUQcUQbm.png" },
    { name: "Bewilderment", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_VbQcT4mEpsnZhYTRfC_f.png" }
  ],

  "Medusa": [
  { name: "Second Shot", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QX8jIcNWWchG0LH4-Wx2A.png" },
  { name: "Gaze of Stone", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dDKLFFrQCU3LSvzUl9bp4.png" },
  { name: "The Hounds of Mighty Zeus", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xGLsMbYto7YoNAt3RA45A.png" },
  { name: "Snipe", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fhUdyrvTn_Zb5lTyVzWEa.png" },
  { name: "Clutching Claws", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Qre7TFvmMq68AngOsCeFw.png" },
  { name: "Dash", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cOvxOF9B439EZxLEzfikf.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZD9U8bSiANWAnoqRIJVsd.png" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Wphnfqps0JrMOGuF8p4_A.png" },
  { name: "Hiss and Slither", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1RJzwMo_7NUp2I4ay-Ry3.png" },
  { name: "A Momentary Glance", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vFHm4dsYKGOKlV_QEF715.png" },
  { name: "Winged Frenzy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tMn-Qj6hEIQKIx9jQyklL.png" }
  ],

  "Alice": [
    { name: "Jaws That Bite", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9xEruteCEb14TMByq1JLw.png" },
    { name: "O Frabjous Day!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZO7NGd4SnARTpBcq4-KV-.png" },
    { name: "The Other Side of the Mushroom", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/z6kN3nl1jmAhWMAR5emKd.png" },
    { name: "Claws That Catch", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/53DBnZQNovHxUzNnawOEN.png" },
    { name: "Snicker-Snack", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wYu1u5p1hSScD0WpW6ZKT.png" },
    { name: "Skirmish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ILmRkJcUhTcrAdZbpK-8x.png" },
    { name: "Mad as a Hatter", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VxdbsUrj7G80VNS2nR-7L.png" },
    { name: "Momentous Shift", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fRuakUo5NUs-ATLiwyEXR.png" },
    { name: "Manxome Foe", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uQ1feRYQURGNmxOJarPIs.png" },
    { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2ZEVTutEY5FqrmsrOvvRR.png" },
    { name: "I'm Late, I'm Late", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oVbRA4HeZdLbiOobnuiIo.png" },
    { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/h68QUA6qoxnE59MPE4J5M.png" },
    { name: "Looking Glass", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/y-YLWF04SEe2SwBqATStn.png" },
    { name: "Drink Me", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6D69xVw0Qd6SotM6_IaAe.png" },
    { name: "Eat Me", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WSjLpGG3nuz_lejw7qh1Y.png" }
  ],

  "Sinbad": [
  { name: "Commanding Impact", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_jpB9222Bw2GwzjnvTBFj.png" },
  { name: "By Fortune and Fate", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kBvJfJX8qAvFHSQMm8g6y.png" },
  { name: "Voyage to the Cannibals With the Root of Madness", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/s8N8SIQotcO3kGxz7omgV.png" },
  { name: "Voyage to the Creature With Eyes Like Coals of Fire", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/m6cVkxlnOyjeG68qawGxZ.png" },
  { name: "Voyage to the City of the King of Serendib", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Q-N4hjLRKYvizLcnmzNIM.png" },
  { name: "Voyage to the Valley of the Giant Snakes", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QaLnVYXz2_m917vyRMUvh.png" },
  { name: "Voyage Home", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QDPY2vqrgCde8hqFhuWCc.png" },
  { name: "Voyage to the City of the Man-Eating Apes", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QS6XLldxWu_PM5-87C94s.png" },
  { name: "Voyage to the Island That Was a Whale", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IJZ-AAchFZLaGLcVO_IiI.png" },
  { name: "Exploit", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UhlUFXr74L339Pm2PdGgz.png" },
  { name: "Leap Away", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u4EIl-QkbvWJ9zlhduf2A.webp" },
  { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5Yz2eME1ZJNq7E5tmGJoK.png" },
  { name: "Toil and Danger", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5Yz2eME1ZJNq7E5tmGJoK.png" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fCrz_yRzBhWOZ1kR799zH.png" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u9cvvtmTiByln765B1mic.png" },
  { name: "Riches Beyond Compare", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ildknUF_12a15pdfcX6IY.png" }
  ],

  "Dracula": [
  { name: "Beastform", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6BP08cn7nsLPcSfsszMH7.webp" },
  { name: "Thirst for Sustenance", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eVBC7X2wJq5cF6N_gCOAq.webp" },
  { name: "Ambush", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lB_wRdJ7O6vaMggLV7Myp.webp" },
  { name: "Feeding Frenzy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TofaAjr1joW172-NCHVWy.webp" },
  { name: "Exploit", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/31euhPzOcGgFPAUmjWKAB.webp" },
  { name: "Dash", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HOVky5pTZndIx5bFMFFj1.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2k3JIwU4kw4YSemTYmIvO.webp" },
  { name: "Do My Bidding", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vQytPFEBo8TIGx8wd1Izh.webp" },
  { name: "Look Into My Eyes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z_XEeMtV027k2ZfAO0rz2.webp" },
  { name: "Prey Upon", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Xz1hDgRRDlwBtXXZ1qsYu.webp" },
  { name: "Mistform", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hX48E_mXnlsnvgsLdtamW.webp" },
  { name: "Baptism of Blood", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Cmq0PgjLA22NhWzmmCY-0.webp" },
  { name: "Ravening Seduction", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/G02A_Og3IqMNrw7PC6ROc.webp" }
  ],

  "Jekyll & Hyde": [
  { name: "Forever Hyde", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-05aruis4rhEh7psaXnea.webp" },
  { name: "Recoiling Blow", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eEYajsgspLNDHftUQoyh2.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kAt5fbRGnyOOoLbnH3IHj.webp" },
  { name: "Madness Relents", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/06Jlzh3Z6J1lXv7Qtpeij.webp" },
  { name: "Distracted Triage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/csopeUMi81YRNZoVOJsOu.webp" },
  { name: "Duality of Man", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GedWJHc2J89uic7Osdp9J.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yl8m2rtNR-3_ceH2ypSQ5.webp" },
  { name: "Succumb to Compulsion", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eNtbRMAuH_m4Rod5SiE6K.webp" },
  { name: "With Haste", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0-rSDxkZMI3zuFpNs3S4M.webp" },
  { name: "Scientific Method", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Vcan1hwzVhdu1k34cw_iQ.webp" },
  { name: "Pure Evil", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/R0G_c23-MGkGE7fKhFG-u.webp" },
  { name: "Strange Case", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zCwYyB4XLQ5xfbAfUEAhk.webp" },
  { name: "Calming Research", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/o4AV8k2CdNfa632fSQn8C.webp" }
  ],

  "Sherlock Holmes": [
  { name: "Service Revolver", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/m8nTSFvU2gX-GWedp5ehA.webp" },
  { name: "The Game is Afoot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JrcvaqibTo7jDNAsWKE71.webp" },
  { name: "Counterpunch", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ehlc3zejv9A4T_SJO5iQ0.webp" },
  { name: "Fixed Point in a Changing Age", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/907P5tYEhh_UMpy7BI2i0.webp" },
  { name: "Education Never Ends", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/w-KDKMXFIuT9w9iyhxKVZ.webp" },
  { name: "Deduce Strategy", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sZk2f1XlUJBA8RnNX3r_m.webp" },
  { name: "Study Methods", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zaPFmZH0U_F8FzZ8ZQMBV.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hvZsfkDEZmul71LlSmz-B.webp" },
  { name: "Elementary", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TmrqhZE_0eC875YJwDEDe.webp" },
  { name: "Eliminate the Impossible", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/R6u5u1z2ZAwIhu7TD3unZ.webp" },
  { name: "Confirm Suspicion", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/N3u0lbDULQh04_qEjT5oF.webp" },
  { name: "Master of Disguise", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xB_OgYUID7KflnOHEtYHF.webp" },
  { name: "Administer Aid", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HBjt0NNoiRyQc6B39nSWI.webp" }
  ],

  "Invisible Man": [
  { name: "Surprise Attack", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gMvanRVa5_4dsReKVNFCj.webp" },
  { name: "Emerge From Mist", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/krSnMMFwGhm3biy1-243k.webp" },
  { name: "Slip Away", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6i5jvgaIi9izfoS3W9o9h.webp" },
  { name: "Confound", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gwQMfuzdy9soE1xWaLlV9.webp" },
  { name: "Dreaming of Revenge", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0ZWKCaI8IPCPvxQyUFeiq.webp" },
  { name: "Impossible to See", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kdvAvFkq7_JZT5ivdgvvA.webp" },
  { name: "Covert Preparation", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/W5Izj6OnXVWEcB9lapW7m.webp" },
  { name: "Into Thin Air", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/myB4spCQkOhfBZ1WN9O8N.webp" },
  { name: "Coded Notes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9rMbQNlsI_7-iqlkrPAAM.webp" },
  { name: "Lurking", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uFpkKKOqKpCpi4hWLO1vL.webp" },
  { name: "Rolling Fog", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TOUUly68AA33H14svV9sa.webp" },
  { name: "Step Lightly", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/J_UcmqMstuOa08e5vLEFO.webp" },
  { name: "Vanish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ECt_MyzOBNLLkw0yyZQOv.webp" },
  { name: "Reign of Terror", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yyYipteHT9ysfU_iuQvf3.webp" }
  ],

  "Big Foot": [
  { name: "Larger Than Life", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fDrxsznCi3qYCediQHeom.png"},
  { name: "Savagery", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dvW4SgFX44eZbsXkfZUJN.png" },
  { name: "Crash Through the Trees", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IPakEd-Z5GQTF6JQ3Bpbp.png" },

  // Sidekick Jackalope:
  { name: "Jackalope Horns", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/clS7OW-VsK3I3bc4R75dM.png"},

  // Any / versatile cards:
  { name: "Hoax", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YfKwvNbyAZivP60QROf0C.png"},
  { name: "Disengage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AcEoowMwF7g8rv2yJtj4V.png"},
  { name: "It’s Just Your Imagination", count: 2, image : "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VgxMQeKN4Mo91Ws-lrwz8.png" },

  // Basic cards (shared common cards):
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mdwcQ12hMJSfzRnsXlqer.png" },
  { name: "Regroup", count: 3 , image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DuJisutuNYBuB51zPCDq9.png"},
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/B1gktwtX71Q7CFI9g0JDJ.png" },
  { name: "Momentous Shift", count: 3, image : "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_cSnaMXnYEo1ZDZrLUjIx.png" }
  ],

  "Robin Hood": [
  { name: "A Hunter's Eye", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6h4XaFv8RQBbzrL6DWdqG.png" },
  { name: "Steal From The Rich", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/auH5Cm3BFTIA8U3YmlABM.png" },
  { name: "Disarming Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/l4w9h4RHqtr44BSEiHb5r.png" },
  { name: "Piercing Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gIXbyV3zLCF3oEGYXJmlz.png" },

  // Outlaws sidekick cards
  { name: "Highway Robbery", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vFr43cAiuTeSuonALEjhU.png" },

  // Any / versatile cards
  { name: "Defenders of Sherwood", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/s6n5Yn14HcKXWjcH4H3Ov.png" },

  // Basic / common cards
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3_qUTLTF8i6wmW7AUDfXB.png" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8yVt75YUuexIavAER74NB.png" },
  { name: "Wily Fighting", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nN6NsP5nPGTW8rnkU2ebb.png" },
  { name: "Snark", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/l55xeh16xNlokk_ncOenW.png" },
  { name: "Ambush", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1t3ZVP72MyWGWZx8QHhYe.png" }
  ],

  "Achilles": [
  { name: "Brother in Arms", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oC5YZ2RscAp3WecXfGpd8.webp" },
  { name: "Battle Frenzy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/N2cgR0MJdVlbO46Dd-W74.webp" },
  { name: "The Day of Your Doom", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xxx5l7rKKdvypYApWNoja.webp" },
  { name: "Test For Weakness", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2hM9U-X2zA9y99SNIhq0W.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0XMmCuefYmduTbRDqfu9f.webp" },
  { name: "Wily Fighting", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/K-T70Fh6ygr5ohjhj0rEr.webp" },
  { name: "Blessed by Hermes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jTDnOy8Y4y6BnVMJayWTW.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/r8mTfsPTPIM9Tm3LG_ejL.webp" },
  { name: "Battle Hardened", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/COm9UZzAQ-FWoWPUTM5ye.webp" },
  { name: "Achilles' Heel", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HkIoTHIHLphfN1E4Jzlr9.webp" },
  { name: "Under Achilles' Helm", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zFiXIy6c_ro4J77SL0tB7.webp" },
  { name: "Spear Throw", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kmBFeB9U3SiEvNj3h6NL3.webp" },
  ],

  "Bloody Mary": [
  { name: "Speak Three Times", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4rgh5YIVjfRV7VwPVlg1I.webp" },
  { name: "Bloody Requiem", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bDTm5PxWKTXceXZNpzP4M.webp" },
  { name: "Out Of The Mirror", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BNuM0lHxX1xswQznH_2_m.webp" },
  { name: "Ghostly Touch", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pQD6iBETP2AyKfquai-ow.webp" },
  { name: "Infinity Mirror", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FQZqPul4zadnSOyxd8OA6.webp" },
  { name: "Broken Glass", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/L8MWu-QhtYu-R3Y3d02Lo.webp" },
  { name: "Jump Scare", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SHqc6en_BjbyegcjDQnjn.webp" },
  { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QM20v1wR9OmCgXcimH1LO.webp" },
  { name: "Trick of the Light", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wPTXuSNJyNVbZ0FJbi6m5.webp" },
  { name: "Evade", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3--YMTS_EEUizxKFnK8Bh.webp" },
  { name: "Mirror Image", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/K4xJ6R8r2QLfWxS0XHHZX.webp" },
  { name: "Stolen Memories", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/buD1g5_KlRmYTeRHa3_aq.webp" },
  { name: "Closer Than She Appears", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1mJbzrGO5b7faLc1sqDTH.webp" }
  ],

  "Sun Wukong": [
    { name: "Ox Form", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/USelEZoxP6dw_zfUbxw0A.webp" },
    { name: "Taunting Laughter", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vxEcWXo5_aEbQhOxOBs-9.webp" },
    { name: "Infinite Strikes", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/T3uLq0GA28OIoFtY8TJwx.webp" },
    { name: "Ruyi Jingo Bang", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uLoW5_8Mm30zPo6gX-5j6.webp" },
    { name: "Wily Fighting", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2gOzDDi4qLORSqRA6dpUu.webp" },
    { name: "72 Transformations", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BDvpo6NCG8XrN4XpUY45p.webp" },
    { name: "Sly Monkey", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jMKhYm4rh75mo2HJETvo0.webp" },
    { name: "Tortoise Form", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mYOVqdfM9hvAv1bx6qDsM.webp" },
    { name: "Golden Chain Mail", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/G1ArkwrtK-TxW5fPHyrLb.webp" },
    { name: "Bewilderment", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1FPxyvPytZu7AmK0woEL-.webp" },
    { name: "Fiery Eyes That See", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/54_2tlYADIbVdvNOcHzQK.webp" },
    { name: "Phoenix Form", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/H7lSNMYXLHe68VHtwc5x6.webp" }
  ],

  "Yennega": [
    { name: "Rain of Arrows", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Nzhk2vpqgx69vfXovcKvN.webp" },
    { name: "Surprise Volley", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cSns_twgpOW20lVd-5BKj.webp" },
    { name: "Shield Formation", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/589HToVAoq3PFu6bWsUFR.webp" },
    { name: "Master of the Hunt", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zE_IqHq4E4ifJ47tRM4Wz.webp" },
    { name: "One With The Land", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AfCCssrG_YOyxMWX01ka7.webp" },

    // Any / versatile cards
    { name: "Stallion Charge", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7EAMIyQYIh-pixQp9hs0K.webp" },
    { name: "Jaws of the Beast", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SAcHF2gY_3VKKlWl2F8pl.webp" },
    { name: "Point Blank", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CalicNwo5KgWj8ZQnNv-H.webp" },

    // Basic / common cards
    { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5SuEU7XoU7-Hhd_ycvPYU.webp" },
    { name: "Divide and Conquer", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/y1TIWBwHaAzyV45NjEyRy.webp" },
    { name: "Pin the Prey", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MjgC1IAlU2kE_f_DGo20C.webp" },
    { name: "Skirmish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7WuifQr99rVaOIGnEOnb3.webp" }
  ],

  "Beowulf": [
  { name: "Fatal Struggle", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VbkWX205NWPI0UDJWXfS2.webp" },
  { name: "The Ancient Heirloom", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/qba2MQ4FU-UxXpvWxhTu4.webp" },
  { name: "Hot for the Battle", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ojThj5Hgn8RcVvMKMeb-G.webp" },
  { name: "No Contest Expecteth", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Si_z-YZTGnXFikezVHyFl.webp" },
  { name: "Epic Poem", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SgOncM9zbKzxQ8zxs5Hx3.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Dzd86YwnpQWqLj1yj7qSd.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Znor5U3YmyuCHTzPyIDiC.webp" },
  { name: "The War‑King", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MxHcU2xYTZaqweyO1mcT0.webp" },
  { name: "The Equal of Grendel", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sKoyfXqK3QG-F6WcXUQ4A.webp" },
  { name: "Remnant of Valor", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5P-iN2SYdB0-kjbS0Ihbs.webp" },
  { name: "Golden Drinking Horn", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iEXo8SGmYwvMPlx_ehoch.webp" },
  { name: "Vigor and Courage", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mT3ll7AkCaAZmLvLTeQ96.webp" }
  ],

  "Little Red": [
  { name: "What Big Ears You Have", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/O2_JGSYt-WCqkqDxhSdq9.webp" },
  { name: "Long Have I Sought You", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tPwXTaRvd97smA0qNHRAK.webp" },
  { name: "What Large Hands You Have", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bZ_2InTU7elCGo1wxbAoW.webp" },
  { name: "What's That In My Basket?", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ixYx-aN0Sq76KAPM3tM9Q.webp" },
  { name: "Once Upon a Time", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UMlgFXCLxLAqNX8YNF3wz.webp" },
  { name: "What Big Eyes You Have", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Bw34A8eSA9vWRq1MYEhwO.webp" },
  { name: "Stones in the Belly", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/B7mKmB491GA_iqCXE7W4w.webp" },
  { name: "The Wolf's Skin", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8qTW6rNcONaMGVHZIOXQd.webp" },
  { name: "What a Terrible Big Mouth You Have", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MFk-_yPhM6jcizrUuYdYu.webp" },
  { name: "Never Leave the Path", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rBFJyAYYcJv8l_mG4E3p0.webp" },
  { name: "A Grimm Tale", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z_vhyAWFFIwqE5Y9JHiHi.webp" },
  { name: "Into the Woods", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zbor2pw7IucurrmUXBHLP.webp" },
  { name: "Into the Woods (rose)", count: 1, image: "little-red/Rose.png" },
  { name: "Into the Woods (sword)", count: 1, image: "little-red/Sword.png" }
  ],

  "Buffy": [
  { name: "Mr. Pointy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/x3dmsC1t6RRCCQhpuqS89.webp" },
  { name: "Daring Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HwqbJN2LUhS15lxL9Ue43.webp" },
  { name: "Military Knowledge", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lKGzXF2kQuBdagfvsz1KU.webp" },
  { name: "Swift Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YXrlk_bcK5JUPkxK-zFv4.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KVfdQzLUOLG5UlN2sCpTv.webp" },
  { name: "Slayer's Strength", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_4dVLIKDDtguJhPouZPpE.webp" },
  { name: "Rapid Recovery", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NESDv0Q1LAYmruBLewqXt.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aBOklV4YSko05aXV_hIMv.webp" },
  { name: "Right-hand Man", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hAdR-iTl7JeNEh5te36rR.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fdwz4r-sinwbmWjIJM4gl.webp" },
  { name: "Cartwheel Kick", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ziIAIm83p5AjQb4P_h40Y.webp" },
  { name: "Insight", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JdxwYooqWNS82rv8YzgeI.webp" },
  { name: "Training", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Gt9ah0Zcz_mWJFkTqbjt7.webp" }
  ],

  "Angel": [
  { name: "Angelus, Scourge of Europe", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/RrHDlthFrrnh2dLidPuQi.webp" },
  { name: "Five by Five", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/r6McfixzXHs7eqSJCAT1B.webp" },
  { name: "Disengage", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EfA6o0fCaCSzNiY4ETLSY.webp" },
  { name: "Cursed with a Soul", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4-_VFs2yx3kOGdQYItAFh.webp" },
  { name: "Wisdom of Ages", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yEbqDRlo6BUE9bw68Z6b7.webp" },
  { name: "Brooding", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lruUbNUppoMiIA7rAR23W.webp" },
  { name: "The Rogue Slayer", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BBWh1UkGO2t3bf-SDqJpb.webp" },
  { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WrUq-mFscFBuc00jN4HW5.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/E1k3aFoGgETUNrzu43HQl.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XuTnIYBJkuQLMW-9FDCnm.webp" },
  { name: "Haunted by the Faces", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rm3617KFTO636t9JjF1yo.webp" },
  { name: "Killer of the Dead", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hhEYr2ftFrMq_nWQWJV4F.webp" }
  ],

  "Willow": [
  { name: "Flayed Alive", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9huFLP19JFX8rhU4NrMs2.webp" },
  { name: "When Good Magic Fails", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/PuTmng-J-ea711s5d7owr.webp" },
  { name: "Rending Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/89S9HCXoOmFjET85BNi9t.webp" },
  { name: "Swift Strike", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rt8ni9QGwd2SDVgUgUjGD.webp" },
  { name: "Knowledge of the Craft", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uQ75ukwOd7bMxNvAqX6x4.webp" },
  { name: "Black Magic", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uHiOy25VlBJZQ08EYZXu8.webp" },
  { name: "Revoke", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/PKpLdJafW802mFItqsn_u.webp" },
  { name: "Hacker", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zez7NUZIG3V1ndqjsLNBF.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/V7bS-8uB7ihfsDeiF9dfh.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HKj2OFTldYO5uxp_dxRIF.webp" },
  { name: "Meditation", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/crDhqOPHzDN7x-IFlLuVb.webp" },
  { name: "Love and Loss", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3sc1UdG17XM45GGzANxWk.webp" },
  { name: "Resurrect", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/l8ZjoVHqY3OYzSU00SzQd.webp" }
  ],

  "Spike": [
  { name: "Arrogance", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jJRoHOLQsSGMwGmjGcxsz.webp" },
  { name: "The Rush", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0CV49CxcurdGSy_iFfzx8.webp" },
  { name: "Leap Away", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LWycrR5mTPszdcMhjq935.webp" },
  { name: "Skirmish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7FL03IkI0x2xMaa-LPHK8.webp" },
  { name: "Let's Dance", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4PxF-jwp44Tst7GqY-PPD.webp" },
  { name: "Bloody Hell!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FY_17xGC_Cl9Vm68btcGa.webp" },
  { name: "Empathy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cweZQvZV6bVsXskrCh1B8.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KdxUMqY2WHLZTqvUreNOT.webp" },
  { name: "Always Surprising", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iUSffxzep7ceR3ohPoXuq.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Mq_ojZd32FK4A3VB8CAXX.webp" },
  { name: "The Sight", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/qRMEW-IqobZFiTLvzOWY2.webp" },
  { name: "Seek the Shadows", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MLkZgfGYJy3hLOnCFFse1.webp" }
  ],
  
  "Elektra": [
  { name: "Mystic Assassin", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4FPi4AjtLB4eaUIWqUPRG.webp" },
  { name: "Hands of Red", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/R5YcXJMlgGRriJqObl_tj.webp" },
  { name: "The Fist", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EVqpMpdWvzroaCwzN-V7i.webp" },
  { name: "Sai", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BzWJgL6NhGQzUhCHao9rL.webp" },
  { name: "Ninjitsu", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/x4HovsaRTPuFsImtc7TU5.webp" },
  { name: "Cloaked In Shadow", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FHiXw37LC-CHIrYVNdvyh.webp" },
  { name: "Whirlwind", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LQ6m1g104AjNCkLFl7vO5.webp" },
  { name: "Intercept", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/O2VPwbJAR_WcpSj4fCGpS.webp" },
  { name: "Snakeroot Clan", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SWCv1ldI1B6sHF0DnVRAv.webp" },
  { name: "Mesmerize", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iPsJRW3xDlw76mQxGQ3Xg.webp" }
  ],

  "Bullseye": [
  { name: "World's Greatest Assassin", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hq3a7lj5bJsljfZ05qwFx.webp" },
  { name: "I Never Miss", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/32kRmhWO7_z5yWLhN4cPt.webp" },
  { name: "For My Next Trick", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Lr-9qPnvTUPtSeGoxxI_w.webp" },
  { name: "I Planned To Be Here", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Hbh3H_nPsUm-YRo7svlt9.webp" },
  { name: "Ricochet", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ud-KzSzXrDtCyR4fQlDIP.webp" },
  { name: "Master Strategist", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mdxxmL2NUs4vgJ2C3fGT_.webp" },
  { name: "Right Between The Eyes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UMI_jVZOFbJvcRIgeNTdM.webp" },
  { name: "I'm Better And I'll Prove It", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cH6tJ9lGG2qx0_HVctoTn.webp" },
  { name: "Arrogant But Effective", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/PmmVkf03nERxkFA4h2_Y1.webp" },
  { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YpP6BFLEYmq9FLVoT-L8H.webp" },
  { name: "Tactical Retreat", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ArfBS85AHEePaoqAMk0Bj.webp" },
  { name: "Study The Target", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LvJ9voPeAdgTtbjciNP7d.webp" }
  ],

  "Daredevil": [
  { name: "Devil of Hell's Kitchen", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pzxMu7x1XmXebzLROaJV9.webp" },
  { name: "Man Without Fear", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ouW6zD-4eiSKsw1H4mjDQ.webp" },
  { name: "Take A Knee", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-ZLZQs8e1ANqlrACkGBi4.webp" },
  { name: "Grappling Hook", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Vm8XDQRxok179_Xb3WPzZ.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-reNDDVaozTirKUsI8xp4.webp" },
  { name: "Son Of A Boxer", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SCPrVi5GlZj99cYFEVjaW.webp" },
  { name: "Breather", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/d6zy8Fki5tsMU1-ZysvsI.webp" },
  { name: "Through Adversity", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YjIW79x2-7sGq7y0c0MmC.webp" }
  ],

  "Black Widow": [
  { name: "Widow's Sting", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kMOTWj7x_npPi4v3_kbSh.webp" },
  { name: "Widow's Bite", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QnVgu63l1WOKx_EycWFVt.webp" },
  { name: "Fake Out", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JCx76VOwAr9fDVC_ND6TC.webp" },
  { name: "Acting Director of S.H.I.E.L.D.", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fOKajnfyzmbsRHvLJR0O7.webp" },
  { name: "Widow's Kiss", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JtJFDUZd6yIwQkDWVSSXj.webp" },
  { name: "Widow's Line", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ahURnR4-7pIVYHr7EmFDC.webp" },
  { name: "Caught in a Web", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AFeqKAdz7WPgt05iQHbSL.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ly_Dx8ATHwTKTZWmHWEWi.webp" },
  { name: "Double Identity", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/g2X8lHDEqkAG5AqIazn6S.webp" },
  { name: "Life Model Decoy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DZ34DeAEBXI43wKIf2yW3.webp" },
  { name: "The Budapest Gambit", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5uHvLPCgR1PV2QVJxaahS.webp" },
  { name: "The Moscow Protocol", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/RHO5Xm5xOFiZVXdtuXZEm.webp" },
  { name: "The Firenze Agenda", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nC_MokLYZU2a804Ls96H-.webp" },
  { name: "The Kinshasa Directive", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EAZqDIWFIL6K9PQjatA37.webp" },
  { name: "The Madripoor Sanction", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yp40RjtpONLtmDqcmogRu.webp" }
  ],

  "Winter Soldier": [
  { name: "Marksman", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6xq1FxlgHa0DNXAbrdYvA.webp" },
  { name: "Programmed to Kill", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/08i2fVZIkPh1x5lHavpo3.webp" },
  { name: "Without Remorse", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wOY3qcv98zuxJWpVC1_K8.webp" },
  { name: "Bionic Arm", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/M5i-7JOiE9nH2q323EJGS.webp" },
  { name: "A Boy Named Bucky", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/A741stmoxycZ9UjflenMq.webp" },
  { name: "Reflexive Memories", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nzIaN_mtwD3j7VMhxI738.webp" },
  { name: "Reprogram", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wuFAi9syiZXf3VEdsMgBy.webp" },
  { name: "Complete the Mission", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8_gOzhg8os8vtjKAJaVOp.webp" },
  { name: "Wily Fighting", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CcOgcMaRXhCUv403SkYZa.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dwG3jJk4cUTbMxGXPDvHV.webp" },
  { name: "Manipulation", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/j_WUcHjvd89JEEzK97MwI.webp" },
  { name: "Born in the Barracks", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OsSrDKKaQoH2Shr4dh6hR.webp" }
  ],

  "Black Panther": [
  { name: "Analyze and Adjust", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NcEQNsNXaFZny_WJeKGps.webp" },
  { name: "Vibranium Shockwave", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fhvfrCd3K646i6ea6kXFA.webp" },
  { name: "Ancestral Insight", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SlHn8kRF8R3PVovjmyAnO.webp" },
  { name: "Cat‑Like Reflexes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TpZwCICNkntuH9MJxlU6Y.webp" },
  { name: "Wakanda Forever!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vjS554fTCV9DoJTi0sX5a.webp" },
  { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/m01Dib04cIfqA28P8E-nU.webp" },
  { name: "Nanotriage Processor", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hGZHv1A7b02UcHKXlu8y6.webp" },
  { name: "Anti‑Metal Claws", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hV83kDB4fql6OluK_sqj2.webp" },
  { name: "Regroup", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hQsanz9scI8YYG24EgMpP.webp" },
  { name: "Evade", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/L_aLpO2FvTQm-yQ3LjyCZ.webp" },
  { name: "Microweave Mesh", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z9xDOITWmOpKnbbSllcBa.webp" },
  { name: "Tactical Remote Scanning", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZLkIdBj1tH3qmMZv7WITd.webp" },
  { name: "Stalking Panther", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hIClRxe0O6Eucd6M-xY53.webp" }
  ],

  "The Genie": [
  { name: "Careful What You Wish For", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/z7ZOahKvKJ7zluTXyznjP.webp" },
  { name: "I Am Freed", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KS_Kym1Zkb7p1Eb30l0fv.webp" },
  { name: "Imprisoned Wrath", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2ou8-vB4R9QgyUQb-2OVK.webp" },
  { name: "Your Wish is My Command", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cZxCJC_P8X6G8dVUeVf2r.webp" },
  { name: "Wishing For More Wishes", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xICdLVuMJ_O5jEl3UwAcu.webp" },
  { name: "I've Made Sultans Out of Less", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CMlZNrIBXuKEIdaWysKVk.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EwGC-EW5zisaK9jFOlLkU.webp" },
  { name: "I Grant You Death", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FRAwNAzemfyHYN__gpmBm.webp" },
  { name: "This is No Parlor Trick", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z1hidROGC49pxBJ7eHYeB.webp" },
  { name: "Prisoner's Torment", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WN6ycdi0fcmAYJbFhCI71.webp" },
  { name: "Back In The Lamp", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QIte-pjADz99FJ-RB_L4L.webp" },
  { name: "Three Wishes", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NdgUyLxcnDvLqu0ZjIL2y.webp" }
  ],

  "Harry Houdini": [
    { name: "An Illusion of My Own Design", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xSJGi5zKCuupo5zFgnp2p.webp" },
    { name: "Flourish", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ElfaTvjEtQAu8xjKLXqfT.webp" },
    { name: "The Big Reveal", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VwfiLMmcunOJPbhK63jit.webp" },
    { name: "For My Next Trick", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AmcbDubfPb6zM_EZSSigq.webp" },
    { name: "A Sleight of Hand", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HvmKzVi6rdoqkZthdAXTR.webp" },
    { name: "And the Beautiful Bess", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6_lpDsj46BKKxocZ3BJLK.webp" },
    { name: "Smoke and Mirrors", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0dm2U_XHsVx5W6CsW7YCr.webp" },
    { name: "Misdirection", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OJ5-928DVbFYMUVT8rWYC.webp" },
    { name: "Vanishing Act", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dG51wxUeQ_w1Y1RE76aIk.webp" },
    { name: "All Part of the Show", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2BiWcxdhcJdP5JqBycC-4.webp" },
    { name: "Grand Escape", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HVcSB4eJDW4-tPUdj7hia.webp" },
    { name: "A Magician Never Reveals His Secrets", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6urJ09PpC8gteJPul8M7C.webp" },
    { name: "Set the Stage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NQDk0raZq_A9qsFMb_pxL.webp" },
  ],

  "Nikola Tesla": [
  { name: "The Alternating Current", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/azprtaxdbhUKNMQmAlKtR.webp" },
  { name: "7 Hertz", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XvmYQ20mnMvFPC1gvaH9J.webp" },
  { name: "Death Ray", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vBx7p9DHD6DQiejgttQmI.webp" },
  { name: "X-Ray Radiation", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2jWArWvzUD_TQnsP5q6O9.webp" },
  { name: "Lightning Storm", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MAj_wVl6MkTdOb2DvDolH.webp" },
  { name: "Polyphase Coils", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2kYErwQoIco5nzHzEOU6X.webp" },
  { name: "Repulsion Blast", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/G3qztsHtd_ZfKCJaFDfR6.webp" },
  { name: "Kinetic Induction", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vXGpb848aJ014iJiWEhGl.webp" },
  { name: "Intense Experimentation", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bsOMTZ-wH-F8AcSMGJgkF.webp" },
  { name: "Fully Charged", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Qtzz7Ga-wDX1UX7XuPg0D.webp" },
  { name: "Remote Control", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WG2KiKcEcZCQa5LGhogIb.webp" }
  ],

  "Golden Bat": [
  { name: "Super Strength", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/M3EBGcSYxlVEOAPfH05Qw.webp" },
  { name: "Vaporizing Eyebeams", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sAfPEYPbICD6lw7WQPh1x.webp" },
  { name: "A Punch to Shake the Earth", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WHjZ1Vn42Q-5LowEPC7x3.webp" },
  { name: "Skirmish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HcA_MAgJVyUIIqNIUofGw.webp" },
  { name: "Terrifying Roar", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ocdma-VPOfr2yE14_073u.webp" },
  { name: "Insight of the Ancients", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-l2lChbj56ehhRklyj3nv.webp" },
  { name: "Like a Flash of Golden Light", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oAYMpm3vK0RQiJGxXp8iA.webp" },
  { name: "Sight Beyond Sight", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/q5yJC57tHW0g9-xChRBgD.webp" },
  { name: "He Laughs at Your Feebleness", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rIUfKRiZKw0Mesdm0p9T-.webp" },
  { name: "Imposing Presence", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jAnEH-S7_7dcTbSxAbupt.webp" },
  { name: "Alpine Fortress", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OJDcsBNIvJ3CvT3Jzs84k.webp" },
  { name: "Arrive Just in Time", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HIIMEJxRykFwLkyybpSBY.webp" }
  ],

  "Annie Christmas": [
  { name: "Lagniappe", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_c92wypz2NSFPYR3dX_Ls.webp" },
  { name: "Bottom Dealing", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vVSxlXBlSjbZwZKwqhiAl.webp" },
  { name: "Better Together", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nCnenWSf-vQdtzu66wMUQ.webp" },
  { name: "Long Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MR_sYiTW_9Eg1tcOPDrBf.webp" },
  { name: "Quite a Pair", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pOqBfow6KMIl2Z6mYBX7c.webp" },
  { name: "Keep Your Hands to Yourself", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/RImoTPkteNLphI3VnYKVu.webp" },
  { name: "The Turn and the River", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SVkVqgZbImS0-6-zqyI2z.webp" },
  { name: "Striking Beauty", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WfhPztdsJa5adCOtEsQvw.webp" },
  { name: "Slick Talker", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/N44l_AitKobUyBHeZYfFM.webp" },
  { name: "Mississippi Queen", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9NSb3HkJ-FawN-cK2mRZH.webp" },
  { name: "Captain's Orders", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Y42Afra-oa5NJfGshei7B.webp" },
  { name: "A Few More Pearls", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZBAcSas_s4McwOaffxNyb.webp" }
  ],

  "Dr. Jill Trent": [
  { name: "Energizing Spray", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FpmV32WJ4tTXVU-yZ8vdY.webp" },
  { name: "Battle of Wits", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hyYwT9y5cQ0-WyFQY8MWn.webp" },
  { name: "Ace Fighter", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/X7tQoe6ZXzcnukeoXdIcV.webp" },
  { name: "Gyroscopic Jetpack", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NUjFV2N56_QK8N4VGLM4t.webp" },
  { name: "Utility Belt", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uEz92XMOlDjP5oFWNrHqL.webp" },
  { name: "Insightful Deduction", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mKUWbKMw6Z6-JBs-Zt1on.webp" },
  { name: "Sisters in Arms", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/phFt0WBVv8uwOH7ZggPxp.webp" },
  { name: "Stasis Diffuser", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/n8jPNxV3C6hZh6GykjVek.webp" },
  { name: "Laser Pen", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/66FgsWN4OI30kJ3-M-ZLB.webp" },
  { name: "Caught Red‑Handed", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/w1Ov8A6ymLIvXZJyvZ86W.webp" },
  { name: "Indestructible Cloth", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/S-kTdRxoshezIfMY6DWUS.webp" },
  { name: "Hypnotist", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ftO6zRNquyGjvX2Iz7OE_.webp" },
  { name: "Helpful Assistant", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ILsnF1SJ_-m9iG9aq1h98.webp" }
  ],

  "Oda Nobunaga": [
  { name: "Student of War", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6FcELjOg09cR5NTDpw-Nw.webp" },
  { name: "Lightning and Thunder", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oW5E1ZjncnnIWBtdaQlBy.webp" },
  { name: "Fire and Flames", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hM8lsNlKgXuyc0c5gmKFN.webp" },
  { name: "Sun and Moon", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JBFsMF7GgRp_C6MPm56Vh.webp" },
  { name: "Momentous Shift", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xLtenBYt6Jzezu_6DkFEd.webp" },
  { name: "Battle Maneuvers", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/K-COKV71z7oL1ZbOKcMKT.webp" },
  { name: "Patience and Strategy", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_uRX9GZXjYI1kacXUV8xQ.webp" },
  { name: "Pragmatism", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ohrdTFtVusW8h1Vk-tKD6.webp" },
  { name: "Spring the Trap", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/R7id0Dm0DLYq8zkIDrHxh.webp" },
  { name: "Reinforce", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_UjQWLFU10zuJigd2dXV7.webp" },
  { name: "Demon King of the Sixth Heaven", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WX-zT5B00aBwYjCKrQcNY.webp" }
  ],

  "Tomoe Gozen": [
  { name: "Witness My Last Battle", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DZ0xXp4k7AksfbS2-fXt0.webp" },
  { name: "Five Against Thousands", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/paH8fKnbdzsYdnMAQsmZu.webp" },
  { name: "Fearsome Strength", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fRXcYSnVsjA51kQ8iIGjT.webp" },
  { name: "A Warrior's Way", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hIOhN7EXcVd9-L_j-B6c4.webp" },
  { name: "Piercing Shot", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vp0-RSKTDoCKhk0oHarys.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xG_glJvc_rwZkwIRxk-dQ.webp" },
  { name: "A Worthy Opponent", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MIy3TLZ4cAbEQgmtJGV2v.webp" },
  { name: "Confront Any Demon or God", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/650w-gCKdbT0Y6B_lz4U1.webp" },
  { name: "Flash of Steel", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Z73bGGnRP95LAKiSu4H1g.webp" },
  { name: "Refuse to Retreat", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JVqW_q9gm5a4DNZTIazO5.webp" },
  { name: "Deeds of Valor", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vwAMHyYJkRHjWwQvyJGBL.webp" },
  { name: "Lord Kiso's Final Stand", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UbACTSxGYB0OmQfSBan6w.webp" }
  ],
  
  "Raptors (x3)": [
  { name: "Eviscerate", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/awpBWn8baMHeTEWz3PUeW.webp" },
  { name: "Disengage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uqp4BOfqUgISO5zyf_I_r.webp" },
  { name: "Pack Hunters", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Wy2Af1esighREI63XHs4v.webp" },
  { name: "Clever Girl", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kmJ1lz9divvxfiPwL3pao.webp" },
  { name: "They Remember", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mdcED5VFeplBBQIM-ZFRm.webp" },
  { name: "Ambush", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BOkONLMCr8D5vRYhtBlgP.webp" },
  { name: "Eaten Alive", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7r77d6pzmwXdsdfkpDVkf.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oVTMEzf7MMgw2qDsr-9Aq.webp" },
  { name: "Decoy", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JIpOttCvrm-NCka3ft5-v.webp" },
  { name: "Working Things Out", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vA2TldzEqwqUblieTUcvQ.webp" },
  { name: "Coordinated Attack Pattern", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3X9hQClV68-EDuSE9Fw41.webp" }
  ],

  "Robert Muldoon": [
  { name: "They Should All Be Destroyed", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GV8FMT4wcSRV-xLRKJ46h.webp" },
  { name: "Shoot Her!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wEkdUpCniOpoeMRBT9a9f.webp" },
  { name: "Rending Shot", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tDyfNWUyv92p2xsbhTFOM.webp" },
  { name: "Second Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CDJ9JVoZ-npsQygZ21g0p.webp" },
  { name: "Leap Away", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xpamrIQonEMpfmc2r-4H4.webp" },
  { name: "Tactical Advance", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zGD9-xY8FsRqg8AMIZxss.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/U-vq_L18kOtmI3dmcNkYN.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4tRtvKmQ0YTuzEOpjcpdb.webp" },
  { name: "I've Hunted Most Things That Can Hunt You", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OGdKk-Q5euituX_25VYHM.webp" },
  { name: "Call for Backup", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KimkaQv0abiTdYWEKeFPb.webp" },
  { name: "Remote Detonation", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tY-lspSZIttrJp8Sc-W84.webp" }
  ],

  "Deadpool": [
  { name: "Underrated Super Heroes", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0Dbe0wgsehv4C6djGnxp1.webp" },
  { name: "Deadpool™ Merc For Hire, LLC", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7pLva7LE3N9WrXXVwE_d_.webp" },
  { name: "Rob's Pouch & Shoe Emporium", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kURKW_2qRxAB9tjA3p6kP.webp" },
  { name: "Klunkin' Heads", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sG3PgXFcxtJ7IT3MNfNv0.webp" },
  { name: "Xavier Institute Faculty", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5Z3eNpYYX0nErJpf8TqaS.webp" },
  { name: "3 of Hearts", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_7YImENFtkQ6xou-1pQ9G.webp" },
  { name: "Excuse Me While I Grow Some Limbs.", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rC5bp9SG9BXWj4lyPJuR5.webp" },
  { name: "Wanna Bet?", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WFW5GTcVpaa1Hvfk8TIyV.webp" },
  { name: "Gaze of Stone", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KNhc68pgLRHG9-HAjWe9M.webp" },
  { name: "Exploding Card!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8Nxu51dpoFDa_UXc05dyp.webp" },
  { name: "Cha‑Ching!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vveVRSvLi-A1qhAGhucKw.webp" },
  { name: "Super Feint", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/y5KAhmpsAKeJOtoZBJekn.webp" },
  { name: "Non‑Retinal Scan Access to Danger Room", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BrAG5vkAN0HCR3yLXDO38.webp" },
  { name: "Gimme Gimme Chimichanga", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/29bRixLDLUvuawSIiolrH.webp" },
  { name: "I Always Get The Last Word", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_vab3Jr_pqB3uLUnLewAW.webp" },
  { name: "Call Me", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0gi6Lb1X0NPKvAgMYUO4b.webp" },
  { name: "And For My Next Move…", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/o5E4x9EEE_ohlxnrZE6Cs.webp" },
  { name: "Chimichanga Break!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VCZWnG7cmzT9rQHhlUkFl.webp" },
  { name: "Feint", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/i1WXCyAKCMTg1ji7Ctk32.webp" },
  { name: "I'm Not Wearing Pants", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FuCWEcZD4ilunt3-MnYaD.webp" },
  { name: "Push to Teleport", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nu3JnPj6e4lpt4OVbwqB9.webp" },
  { name: "Time Out Time Out Time Out!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u8-MCLPxJspCRkK57JlAo.webp" },
  { name: "Passwords", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/E0n6_j53oTFkytb4AYzNU.webp" },
  { name: "They Have An Amazing Buffet", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/59mL8jvaxVqcCSz46D2wx.webp" },
  { name: "Transit Card", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YlkVCbUag2YJpCjsp_x44.webp" },
  { name: "Eat Me", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wEsr7v48q-K9vt3DSun1Q.webp" },
  { name: "Sweeet!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-I6uSn1ntpdXPRPJSZcou.webp" },
  { name: "Dumpster Divin' Deadpool", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2diRHtSwoU5QXDfpl_yvm.webp" },
  { name: "Faint", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OarRi8YkNua-BCnPqH3Oz.webp" },
  { name: "Holy Mackerel!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nSuKLCaRYvYSQcZiSIc9q.webp" }
  ],

  "Cloak Dagger (x2)": [
  { name: "Lightforce Barrage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GJYK-1F1J9iEfOSWXJzH1.webp" },
  { name: "Commanding Impact", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZnDzcNjMMQ3BHt3O9-tek.webp" },
  { name: "Darkforce Dimension", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YOQikOKN8PNBGG25D7j2q.webp" },
  { name: "Channel the Dark", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/suhhDzoTkSyplK7EeQ4pQ.webp" },
  { name: "Into the Void", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hq158vxxW4XGJXSbovii5.webp" },
  { name: "Perfect Balance", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/SK5nBDGxM88tfi4KJeamZ.webp" },
  { name: "The Living Light", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IiJZHdn-raXM5wg4gDAj4.webp" },
  { name: "Into Darkness", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/b4F7P2kc9iNT7pWRZuCW1.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3vPEwj6WG6MRAxOTGGd5-.webp" },
  { name: "Traverse the Darkforce", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yXVcrKtMpjtaORN8S5d-F.webp" },
  { name: "Living Shadow", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XffyL2td-ugyv5U0u9Aax.webp" },
  { name: "Chosen Fate", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XM92zzfFQZ4K-FdTdDX6b.webp" }
  ],

  "Squirrel Girl": [
  { name: "Fuzzball Special", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/PSe-FEbf8S_Rfg_QuRyEr.webp" },
  { name: "Bite of Steel", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u7glkX7r2dI_sIeqaQ2mj.webp" },
  { name: "Kick Butts", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WdaDwuYLz63HF2_J2l0n-.webp" },
  { name: "Squirmish", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/frK4SjKJfHEFwek5JocWf.webp" },
  { name: "Unbeatable Squirrel Girl", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ei6au-ZKlIX2oEpViuL-G.webp" },
  { name: "Dash", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TvicSZM8rtKyouoFbwoFR.webp" },
  { name: "Get 'Em Tippy‑Toe!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AO0F3gyru6Sl1Q5sig46y.webp" },
  { name: "Call of the Mild", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/taxCNXe7QGp1BHfcFU1X8.webp" },
  { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BMuV1OpEVB9CxKAPqK2Ci.webp" },
  { name: "Squirgility", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ylpThx-_V6hDiEyzh5CuT.webp" },
  { name: "Eat Nuts", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rubpxy_L4Zkw-D4fwYYlK.webp" },
  { name: "Horde of Squirrels", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9y9AcB3E17NoCtB8NHlZD.webp" },
  { name: "Nutwork of Spies", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zfbmRVTbnYqDJWkSSZzHw.webp" }
  ],

  "Ms. Marvel": [
  { name: "Big Wind Up", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FJNre61tnk_w2KIn0EniE.webp" },
  { name: "I'm Not Touching You", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5xnhK3H5xuCa9yGdUQKNx.webp" },
  { name: "Fangirl", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XslM86crQ-ICUC8oLj6_Y.webp" },
  { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sr9znK-93OjuRi0O7zVhP.webp" },
  { name: "Easy Peasy", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0lSA6bdiAwPGRLsuoIGbc.webp" },
  { name: "Embiggen", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/qVI5dBPXqq8xU_xpQCITG.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rzGRv-n5NZunSKgnpISG-.webp" },
  { name: "Shrink! Shrink! Shrink!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4kRVO4gSOBw1K4WIxEdeZ.webp" },
  { name: "Slingshot", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fAC00YZMOmnHF4Q7ion4o.webp" },
  { name: "Friends and Family", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wz9yJJLf2srTiDazL1Fgm.webp" },
  { name: "Gyro and Fries", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DgUkG8ZagG5HShQ2EFQrC.webp" }
  ],

  "Doctor Strange": [
  { name: "The Winds of Watoomb", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Fri9w8N0XppNrFlxfmP-1.webp" },
  { name: "The Rings of Raggadorr", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VkLlX9cWvdaKK_YmH52yk.webp" },
  { name: "Bolts of Balthakk", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hV2oaZsE26XklXv7P0PiQ.webp" },
  { name: "Seven Suns of Cinnibus", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/q5kKkdT7UP0IlCgpYgcRd.webp" },
  { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5n-4QQezaGGqlV2W1fAAq.webp" },
  { name: "Steadfast Disciple", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2oDFa-zKOTme_vk5XB9-g.webp" },
  { name: "Cloak of Levitation", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GDIAAG0cdWG5hOe6Scczc.webp" },
  { name: "Master of Kamar-Taj", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OQkaPXGu2SP6Iu_G7wDZZ.webp" },
  { name: "The Mists of Munnopor", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Fq4d_LyPhgWAqkJCFxWvZ.webp" },
  { name: "Eye of Agamotto", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mREa07xmWlu1HclQYOcc2.webp" },
  { name: "No Really, I'm a Doctor", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GhA7mtI-_5EUZStNj51v9.webp" }
  ],

  "Spiderman": [
  { name: "Swinging Kick", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VKCBQZXWenxnDzTEkoUer.webp" },
  { name: "Thwip!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yvtyVgr0KUc-jFdyi3wF0.webp" },
  { name: "Disarming Shot", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bpc9RYxYf2myBVEd0Tmbi.webp" },
  { name: "Right in the Face!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5YIPZbcXQLOgyvdYpLNWw.webp" },
  { name: "Snark", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nB-oYYhgaZlN8OufJztXX.webp" },
  { name: "Wall Crawler", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cDSswIdsXCUjtp1_D2I-_.webp" },
  { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4_D0ZOWYDrjzEjl38-TYA.webp" },
  { name: "Spider‑Sense Tingling!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/n0i32M4JNpShcE5QGIAaH.webp" },
  { name: "Counter‑Attack", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ckHmpJCXgdONZdNYAvA7F.webp" },
  { name: "Web Shooters", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tucNPjXiY460vOk6E3mMr.webp" },
  { name: "Friendly Neighborhood Spider‑Man", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hURAgWzdhXMZ_u1Sn_oRx.webp" },
  { name: "With Great Power", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yuj2mdj_emrcoqFZnclMk.webp" }
  ],

  "She Hulk": [
  { name: "Omega‑Level Threat", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kfkWDzKNi9QM6K2k5Uqmc.webp" },
  { name: "Sensational", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1RXhZVN7Oyk6jJ0LfTHW2.webp" },
  { name: "The Savage She‑Hulk", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iVGzWjEaCrltyEDCZKTpl.webp" },
  { name: "Green Energy", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GXaOlIMYdmr66CajlBme4.webp" },
  { name: "Nerve Cluster Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6MHhMiYnarQPJ6ozROSYN.webp" },
  { name: "Legalese", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/y3B_3Zu9nIxiOjbxqf1aG.webp" },
  { name: "Cease and Desist", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ze7VKd4bdZ0GoI3-rVPMX.webp" },
  { name: "The Defense Rests", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/i_5u-R44fPv4At3tQM59C.webp" },
  { name: "Lady Justice", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Tj-oaihkna4-7Hf3NfNwU.webp" },
  { name: "Jennifer Walters, Esq.", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FNsAmlUY_-2DlKl1fUDQ7.webp" },
  { name: "Leap Toward", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/X8FBj1g_4HGRZeQhmjp6d.webp" },
  { name: "Double Jeopardy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aW1UsGQsktXB7P5dj1qko.webp" }
  ],

  "Ghost Rider": [
    { name: "Spirit Of Vengeance", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rNqvSmmlw3b3cOewg6LxK.webp" },
    { name: "I Brought The Devil With Me", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8_GCXv2DLvPKz4TkIjNLR.webp" },
    { name: "Blaze of Glory", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/d1rCgM4jWuucRkQARn1eH.webp" },
    { name: "Penance Stare", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TPjUPOBa-Wh_hjZ1SkQAB.webp" },
    { name: "I Finally Escaped Hell", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jb3OmBaT1ebvV7IK8crfz.webp" },
    { name: "The Wicked Will Burn", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9k7EGVhPU0ZgbIGJiGvc4.webp" },
    { name: "Feint", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pfVslHGiXhF9guWWazxca.webp" },
    { name: "Control The Demon", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6PZlG4PKKybxsz1QmYU7C.webp" },
    { name: "Deal With The Devil", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Qsno3F7b1sdE1p8kq6Zt_.webp" },
    { name: "Stoke The Flames", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ujfnp7oXuJnMpi_nEsx1f.webp" },
    { name: "Hell Rides With Me", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/zJLeiUfKtCZe-YtXpRcuy.webp" },
    { name: "Chains of Hellfire", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/K-roL1d66lEJtuWLuayIG.webp" }
  ],

  "Luke Cage": [
  { name: "Sweet Christmas!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MuSKPGTEn2xWYsLG27X5J.webp" },
  { name: "Commanding Impact", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2FtDbo-hHCl_KYCx-VnZ7.webp" },
  { name: "Get Paid", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2LQGc7Q31LRNJzm8is_B4.webp" },
  { name: "Still Standing", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1UhZaBVLCebQugmrdXILA.webp" },
  { name: "Hero For Hire", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wFt4t3hCtrwiVdMfm84Jz.webp" },
  { name: "Pushback", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xRLJzwc2L_Zxr6N2Wb5wV.webp" },
  { name: "Daughter of the Dragon", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/k3Z9i6kzFWCiMu3sQIQ0d.webp" },
  { name: "Regroup", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/a5TkIa0VlruQ9NLhzBtxK.webp" },
  { name: "Trash Talk", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/7fCFeqVdD4rNDztZmMoeQ.webp" },
  { name: "Power Man", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6Xl4z2ZbvgH707wAmzlZB.webp" },
  { name: "Got My Back?", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JmdrBClBye0nWLSR-9NKU.webp" },
  { name: "Skin Like Titanium", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nQtvnpJWFhNq19L44KY62.webp" },
  { name: "Where's My Money?", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TjVCTvDy3_6KXjy0fbC_o.webp" }
  ],

  "Moon Knight": [
  { name: "I'm Not Real", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1X52aI2G432BMMepygB2k.webp" },
  { name: "That's Why I Always Win", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jwWuIOAG3suJjf7KxbPdu.webp" },
  { name: "Good Enough For Us", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AbLnq6iBGiGz-drGc52d5.webp" },
  { name: "That's The Part I Like", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fEaL59ZXAx05VIef4fkAC.webp" },
  { name: "Fist of Khonshu", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iU9WWa-Tu5eikNlsYyDGy.webp" },
  { name: "A Totally Sane Thing To Do", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1GSW8ochoDI5l6KeLU272.webp" },
  { name: "Past and Present Intermingle", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nFYHBWxFYnPtHe6knaX_l.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lXlJh5-4OXVtOqgf72YUf.webp" },
  { name: "Let Your Insanity Guide You", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aszwnJIpVBOSaxsOLtKKI.webp" },
  { name: "We're All In This Together", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FkeCt-wfra6AZ4LF6Zjfp.webp" },
  { name: "Travelers of The Night", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Cu2FGuq42MJ8tBe3m4lSF.webp" },
  { name: "Madness Will Keep You Alive", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/F0PVvMsQSFllXpfOmpITn.webp" }
  ],

  "Hamlet": [
  { name: "To Sleep, Perchance To Dream", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lM0WKzH55Ur5v5KkqZgjZ.webp" },
  { name: "Uncertain Doom", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cGA-vDrB57IoqqO5U0oU3.webp" },
  { name: "Cruel To Be Kind", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/G6V38iu8ARMU5MyZq5Pav.webp" },
  { name: "The Play's The Thing", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6PxGTnvST42FBgPy3sz75.webp" },
  { name: "The Readiness Is All", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Pm9C38p3-uf2TLKXGijk2.webp" },
  { name: "Blood Will Have Blood", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/qtnfi1IYtpUmkmtoq9R3B.webp" },
  { name: "Outrageous Fortune", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xdyWidG2Pg4tsiRrHiwKk.webp" },
  { name: "Nothing Either Good Or Bad", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/blxzNsD718YCE9EX486I9.webp" },
  { name: "The Rest Is Silence", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/RzS4Bw4mx9a0BHex7qE_t.webp" },
  { name: "Maddening Insight", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5GYhShVUamcwDqdu3ZC17.webp" },
  { name: "The Ghost", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AlEL0DFCU2Oro23kVlVNd.webp" },
  { name: "Method In The Madness", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/TxWZIVg9K-WB-2n7x7ZRV.webp" }
  ],

  "Shakespeare": [
  { name: "My Kingdom For a Horse", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1_SNkepgrMYwEQw7v6vOD.webp" },
  { name: "Horror", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1t0abvnyQnmVMUBGcjkMA.webp" },
  { name: "Horror", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/tnom66HIIlb4l426_LTPi.webp" },
  { name: "Horror", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/q3KwtxAk4H6Y53hUkIhXD.webp" },
  { name: "Horror", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eRD_CbK7I4H1_4w5L84jd.webp" },
  { name: "Horror", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1CZXujMNIHiYxvTJfLNe8.webp" },
  { name: "All Are Punished", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iSPscG_5sqg4xNQ7XPHNI.webp" },
  { name: "Places, Places!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2dRzMhQavwYKCZL7cnUCf.webp" },
  { name: "Such Sweet Sorrow", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vPyV04xezeMQ3ET_EdzbP.webp" },
  { name: "Once More Unto The Breach", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KuMHDGvO3IpAZNhHErJkt.webp" },
  { name: "Again", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u3STuIH6siKSBahE1tF96.webp" },
  { name: "Et Tu, Brute?", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Xshv1NknS6vVefKESzmF3.webp" },
  { name: "Deceive", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/50vfHWgmiO47NL_rAeRIu.webp" },
  { name: "Alas", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fVECsJ1cgaTET3BZ5zh66.webp" },
  { name: "The Ides Of March", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ev3a1AUmGve_jlx2PhXVx.webp" },
  { name: "Revise", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/k6Y4eWzUrgElxJ1bTSEyB.webp" }
  ],

  "Titania": [
  { name: "Met By Moonlight", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xnqwqTkWY0oS9xbFwIjTq.webp" },
  { name: "Queen Of The Fairies", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/X3Z5krfDaMtlfQKo5Qk4K.webp" },
  { name: "Whisked Away", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4ejcIdT0ckDB6yEAwD_Ly.webp" },
  { name: "The Moon Looks Down", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-R1X4Bw__Kk0in-fudnZ8.webp" },
  { name: "Fairy Song", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9oVmcQqaEO3R6J5nJITqj.webp" },
  { name: "As Wise As Beautiful", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YU0Kao9i85dfwyFmxB9nP.webp" },
  { name: "Parting Gift", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AkeBA8Z-FnNaEV4ikDReE.webp" },
  { name: "Protection Of The Fairy Woods", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OMNVSykkDGb9yOS_5yxmI.webp" },
  { name: "But A Dream", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/D7h4qepE_gc7nrlhDarwW.webp" },
  { name: "What Fools These Mortals Be", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vFOakSP-u8yvwkAfx2ERk.webp" },
  { name: "A Momentary Glance", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Haiqt6F7H29j_dSGMysNh.webp" },
  { name: "Gift Of The Fair Folk", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/S_OePRE0EtBNNFaxEWaIJ.webp" }
  ],

  "The Wayward Sisters": [
  { name: "All‑Seeing Familiar", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cVd_xMXMEKkQizwOel6Xp.webp" },
  { name: "Double, Double", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FLW3vlcDLdB5YR6oaTBLm.webp" },
  { name: "Hurly‑Burly", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/65JJ52usWfv3pMJoNCdEU.webp" },
  { name: "Fire Burn And Cauldron Bubble", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QMwnXh2kitadoF2SfDpiD.webp" },
  { name: "Ward", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yqtBWdvkLPO1npdQ7Xj1E.webp" },
  { name: "Curious Familiar", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/N-pIVMeHHhXNS_36iHbRd.webp" },
  { name: "The Stars Align", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/U3r4z-4rdtomWxxLiPmti.webp" },
  { name: "Pricking Of My Thumbs", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eossS7f_AwbKC5AAP93gi.webp" },
  { name: "Toil And Trouble", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3ULvkX0S6_XKQqnnCfhOs.webp" },
  { name: "Unnatural Remedy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IKqOa6MOTaipyG5qEGyAj.webp" },
  { name: "Something Wicked This Way Comes", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vJZuXXmSbLlapBuHc4zcY.webp" },
  { name: "Prophecy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eYnwQh9_q86pXbQWoBm1f.webp" }
  ],

  "Geralt of Rivia": [
  { name: "Gear: Sword of silver", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_FsCudH2UV-lt9L8Kf6dW.webp" },
  { name: "Gear: Sword of steel", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/6t6yQmqU-_y1SBbHEjipR.webp" },
  { name: "Igni", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/600cnSFSQOa3PmF03SMvd.webp" },
  { name: "Damn, you're ugly", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vApKWl2oCSg_jDwd6WErQ.webp" },
  { name: "Disciplined Duelist", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kGk6gv_W5xhZ5x7jLQ_sA.webp" },
  { name: "Annoying tune", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UFprpR1p2YlYldNZCR-gt.webp" },
  { name: "Rend", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/galgNnYZ8hFA2BIKXxTdM.webp" },
  { name: "Plot twist", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/I8z5kq_3tcuZtIWetEZzQ.webp" },
  { name: "Riposte", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/YFAZFMNfzKhYiMj1vFLUE.webp" },
  { name: "Yrden", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/w71XY2RecLevxU5YuDgCt.webp" },
  { name: "Gear: Wolf Medallion", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Jn7vDWlFrr-jhOFFby-mn.webp" },
  { name: "Gear: Armor of the Forgotten Wolf", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/qxX1mOBK576h-HZ7Kr0dV.webp" },
  { name: "Witcher Senses", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IpJEH4lefYwmW7I-nRhLf.webp" },
  { name: "Gear: Blizzard", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/os--kq7ybewh7Db9l2kE9.webp" },
  { name: "Gear: Tawny Owl", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lYZM2_bQL3jjCCwUj4ILq.webp" }
  ],

  "Ancient Leshen": [
  { name: "Flock of Birds", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pcSkdcsM4yKySYT8I_fyQ.webp" },
  { name: "Primeval Slam", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/h7C2X_iVweVJUHVh0p0rh.webp" },
  { name: "Command the Forest", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/XMDWg57bm7CZj824F_fwv.webp" },
  { name: "Nature Abounds", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/33wM4dtPLYNc9VUW2I0IW.webp" },
  { name: "Disturbing Howls", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/b6ZO3YuvlZy3qCSI3NhG0.webp" },
  { name: "Planted Feet", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xNI7yxu_FE8mCW_D6D4li.webp" },
  { name: "Wily Fighting", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DD0KZPchtdS9PSdYx08MH.webp" },
  { name: "Harrying Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2X_Gy8RwmSFVnfLe5tGml.webp" },
  { name: "Primeval Guardian", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DeekkF0TwNZdXBqaZMa5K.webp" },
  { name: "Strength of the Pack", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/et3H-ZtJEcGNK4ghJjnh1.webp" },
  { name: "Vanish into Murder", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/a1pgYC2jOnLWieAbkECJp.webp" }
  ],

  "Ciri": [
  { name: "Bane of the Aen Elle", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/H2z7Iwfe98UmUpnaczkME.webp" },
  { name: "Lion Cub of Cintra", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/J5nBuneaOBNMqYZVv5jeC.webp" },
  { name: "Channel the Source", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ayXrH5G83xSTARpUZ4PjL.webp" },
  { name: "Blink", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AMd9ZfFSQxQmjB_91gmGL.webp" },
  { name: "Pushed to the Brink", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/j1imxqLLMwxPZCyoZK-0a.webp" },
  { name: "Searching Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FilQJ3BT-l-B2PHbygMBW.webp" },
  { name: "Zireael", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/alo92bECsgAwg9W33P60z.webp" },
  { name: "The Lady of Space and Time", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/BCcbIXY5YgMv5-W2hBAft.webp" },
  { name: "Parry", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/E_BmN7arVDTjflZpXlA0T.webp" },
  { name: "Child of the Elder Blood", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rDvZuGVLk_MKT7bdDiStH.webp" },
  { name: "Unicorn Ally", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/sMlyrUjzaLrNk7fBEKnkZ.webp" }
  ],

  "Yennefer & Triss": [
  { name: "Incinerate", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gKxCT3CaUIWeNQiKuptGZ.webp" },
  { name: "Merigold's Hailstorm", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eTe6rRVr_al55gULLONSC.webp" },
  { name: "Echoing Blast", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/NXBaSREDDhFH8H6P93VqR.webp" },
  { name: "Portal to Anywhere", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-SMbA9BYslU4xEq2LN5VP.webp" },
  { name: "Ball Lightning", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1uY7CWeatkndo1jqNYwi1.webp" },
  { name: "Telepathy", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nE7TcJ8fFP5K__d_kIXke.webp" },
  { name: "Quick and Ready", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/z-A_jHFhJ-ah9OIcmwjDi.webp" },
  { name: "Magical Barrier", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4hkFG38AJP79qqbK9iGK5.webp" },
  { name: "Paralyzing Fetters", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wuEXZ-KlUH5LPkVoYgEvz.webp" },
  { name: "Lodge of Sorceresses", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9CeaCE_fv0lG7sQiaawYe.webp" },
  { name: "Advisor to the King", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/avPeRHe3tBF8JusW4W7V4.webp" }
  ],

  "Philippa": [
  { name: "Regicide", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1NmIZdvV3ptI44nkKK38P.webp" },
  { name: "Owlform", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/MsrFtkqRT8DXcVKS3wtdW.webp" },
  { name: "Lightning Bolt", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5UPrgNaRNxdNsG-s4aqdk.webp" },
  { name: "Chain Lightning", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/GvC7JWNKgCTyUZNWRi4nT.webp" },
  { name: "Cunning", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rTLOPVPYoLRQyRjuMeP8T.webp" },
  { name: "Spellbreaker", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3JRV4jmdLTq3xr30x9Esh.webp" },
  { name: "Redanian Plot", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5HeLnpsEXng3iW3MPPdWW.webp" },
  { name: "Do My Bidding", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QuRw5HoInGirXXwdnItyT.webp" },
  { name: "Paralyzing Fetters", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-mQYkiNXQQeIFTm22NdXx.webp" },
  { name: "Blinding Dust", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/17qymqUTkQoF6YbySYDUU.webp" },
  { name: "Spymaster's Ruse", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CaN559rCyk30pEstwIg3i.webp" },
  { name: "Backup Plan", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/O9OclC1BZptJFzbu--wty.webp" },
  { name: "Polymorphy", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/xj-thp0ukQrakhO2SFMh5.webp" }
  ],

  "Eredin": [
  { name: "Backhand", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CjqEHKmMKo5fvaCkAVZo7.webp" },
  { name: "Foul Purpose", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yQdZNQ-3al6mkbPyvKU1s.webp" },
  { name: "Brutal Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lgFbMSjmJ9YsBKBdG0RIf.webp" },
  { name: "Unyielding Horder", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/cX1MT0_YBkw3AqNA0_Hlb.webp" },
  { name: "Skirmish", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/S5X9y45Z4mzAT1b6L6kaE.webp" },
  { name: "Wild Hunt", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_3t9dqYEL1V3jRQygpM94.webp" },
  { name: "Icy Guile", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eQq9Aw0R1JOfGfvXVkKmk.webp" },
  { name: "Implacable", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dPSYUe-d57U2gYRrMWAlb.webp" },
  { name: "Portal Defense", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/jo6DWKHBRXbGJwpahX7ta.webp" },
  { name: "Close for the Kill", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1w6ptPgNMWhHKd56hser3.webp" },
  { name: "Might of the Aen Elle", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_chadVspDT5NR_K9gm239.webp" }
  ],

  "Blackbeard": [
  { name: "Avast Ye!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Aq781zSk1MrYo2f0KkcSG.webp" },
  { name: "Give No Quarter", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ojYfUDOnggCikmcgNrKMh.webp" },
  { name: "Light the Fuse", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4Sk9hrIaAsT4F7ErrPt6f.webp" },
  { name: "A Brace of Primed Pistols", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JVLIR75n_WAqqKlB7vdT5.webp" },
  { name: "Queen Anne's Revenge", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/maf53cKMLeLZCho3JmReg.webp" },
  { name: "Parley", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/5UIFoJN4-2gpDNF48jVzH.webp" },
  { name: "Fearsome and Calculating", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/OGFti3U6hoWnqptOS-kTC.webp" },
  { name: "Show a Leg!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/8SoyWr4Qj0e-uN8MqmYrX.webp" },
  { name: "No Prey, No Pay", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3y_XA0OkFGzidRdVRHu6O.webp" },
  { name: "Intimidating Visage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ORpfO5sc7wUU_6t9-c59X.webp" },
  { name: "Plunder", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fEOSwLTi7todHOjqbaUKz.webp" },
  { name: "Scourge of the Seven Seas", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/RuDpm9b9ako83x78iTVIV.webp" }
  ],

  "Chupacabra": [
  { name: "Blood in the Air", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/vgh0_Hn0b5zQC1SwnyhOw.webp" },
  { name: "Feeding", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kiXTdTPCFRUZ0RJbiDovf.webp" },
  { name: "Ambush", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/oVPCqrDcFepHp5c0kUNO5.webp" },
  { name: "The More They Struggle", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/w8zyNZuufT9inSHFlL7U3.webp" },
  { name: "Wounded Beast", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/r4QYT9ZzjxnUvI_Tgck7e.webp" },
  { name: "Ravenous Lunge", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/H-bX_sYc8pUbhHYW4tCmJ.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/08SXlLQ1PLVwWN2oP0IVJ.webp" },
  { name: "Tooth and Tail", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ELsH_WhayW_vpgOhKUSRN.webp" },
  { name: "Natural Toughness", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/q7Gjkf0ExHrrBhDiv8xIQ.webp" },
  { name: "Traveler of the Night", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aiS83lHi7bhTbQyq1MI9O.webp" },
  { name: "Unsettle", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/H9wxqJEY4cay7ohCvOlf1.webp" }
  ],

  "Pandora": [
  { name: "HERA'S CURIOSITY", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WHeJscXVIjWV0wGCwddcJ.webp" },
  { name: "Spite", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CnTn6SYlw5FuQAbjIxGRV.webp" },
  { name: "HINDSIGHT", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3grck0o9iEVNCRA7AhVF9.webp" },
  { name: "APHRODITE'S BEAUTY", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Q6NtM2a0W6u2eFgw9RyEQ.webp" },
  { name: "DIVINE INTERVENTION", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/f8gZ0fYYS8ln_xOieYBTG.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Dshcd-roza2eO3a_X8ik4.webp" },
  { name: "Malice", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IGCWpw6WY4oPu-AjoH790.webp" },
  { name: "GUIDED BY THE FATES", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dtMsCLvrPQEqf5Xq1LTX6.webp" },
  { name: "OFFERING TO THE GODS", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_xYDvIvfe8wjguv7nTe5e.webp" },
  { name: "CELESTIAL RAIMENTS", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/VfytdNjSJ3tlwsOt5Vwe_.webp" },
  { name: "FORGED BY HEPHAESTUS", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/yLocv2OlHXjtym50x6BzO.webp" },
  { name: "ZEUS'S MISCHIEF", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LQkKDWI4Z3vKYsMYeBugY.webp" }
  ],

  "Loki": [
  { name: "Trick: Baldr's Downfall", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UHkxu0Nnjw_tkEu66joRk.webp" },
  { name: "Looking for Trouble", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CpuE6AwR9PdwX4UBxGWDR.webp" },
  { name: "Shapeshifter", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/v1KM7ojGIl-QSxznAZQ73.webp" },
  { name: "Ragnarök", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/r54WWSVX1w-KCPOWEF8nY.webp" },
  { name: "Malicious Flyting", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HGObcQWI7AmTM91YRpBSo.webp" },
  { name: "Underhanded", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/U0rkV9MWMKw_RWT1jcij0.webp" },
  { name: "Trick: Freyja's Rescue", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/h5Mz7qXTFFszwSYY1BkeA.webp" },
  { name: "God of Mischief", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/0x80GSjEFxAiKW2pjXLGw.webp" },
  { name: "Laevateinn", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_q3aaEKDpjNXYCCy8gvJ1.webp" },
  { name: "Trick: Sindri's Bet", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/wvNsf89q6_fpwLe7uuJn1.webp" },
  { name: "Trick: Svadilfari's Lure", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pAfjtAfmjrdToSfekDBXS.webp" }
  ],

  "Donatello": [
  { name: "Thinking Ahead", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/9rhyeLDdpFgNDNTxU_6bC.webp" },
  { name: "Turtle Power!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Qk0iVpJ1FB75ywDWUIE3n.webp" },
  { name: "Electro Grenade", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/54dy2ZTjlAWi_947t0I0-.webp" },
  { name: "Quick Strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Uql0lc11lc2vr0bQpmyWx.webp" },
  { name: "Short Circuit", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3xTfCfon7DJ2GigZlbFkJ.webp" },
  { name: "Untested Enhancements", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/hrE0l6IGUNGfCOSnKI8q5.webp" },
  { name: "Shift Focus", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/uRoD8_REuYkJUVYW1m-wo.webp" },
  { name: "Heroes in a Half Shell", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/89eyARbdUb3mWFs41homf.webp" },
  { name: "Bo Staff", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KpjP_WMcoHi2D9kyd1Ke1.webp" },
  { name: "Self Defense Grid", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EDHByeh0zGXS3LLDdfL7F.webp" },
  { name: "Party Wagon!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gFTss5v9z45U6qIRXJ5Jm.webp" },
  { name: "Smoke Bomb", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pFCxDDC0qK86obvF66oMV.webp" },
  { name: "Donatello Does Machines", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/UiJNtQa1c-PcxyLe9ztZi.webp" },
  { name: "The Future of Ninjutsu", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/DbEocFJNcofv_3mY6uE_U.webp" }
  ],

  "Michelangelo": [
  { name: "Hi‑yaaaaah!!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/CIBRcZdSHs8VSay5LrHuI.webp" },
  { name: "Turtle power!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/_xvhyb8QehP6KppQmboZf.webp" },
  { name: "Boisterous beatdown", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/kiNfRhe7HJBYDjgueUnPc.webp" },
  { name: "Hard‑hitting investigation", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/eZZF9OFRRidLU8kRl7UpE.webp" },
  { name: "Let's go", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/gnDmwAIOIvZQgKPKtHPJY.webp" },
  { name: "Cowabunga!!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/u7vXf-HMH1N-Ons7ta4iG.webp" },
  { name: "Guaranteed delivery", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ABlJhoxRDmsIO2RHQ1poD.webp" },
  { name: "Heroes in a half shell", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1_jb0HFp8T3e8hX5Z7-pm.webp" },
  { name: "Back for seconds", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bHDTUxE4aTtM1HZvz0AwO.webp" },
  { name: "Michelangelo is a party dude!!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QZojyJTtNKY4I4-Dw8SMu.webp" },
  { name: "Nunchaku", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/KVJu7dtX3QLZbG18t5ub1.webp" },
  { name: "Shell insertion", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Wz8Xb1b8b34VNUwh4-C9P.webp" }
  ],

  "Leonardo": [
  { name: "Katana", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/pmeR-m-RMmayJnFtEpY6T.webp" },
  { name: "For Sensei", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dG0pJbirNMCv9wLIjSuTL.webp" },
  { name: "Turtle power!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/f8oKnz1VNTU8apGZzBSzc.webp" },
  { name: "Fearless leader", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/h2qRwrlhu99_GIqWKjnUF.webp" },
  { name: "Quick strike", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/2E7Kiri2Kc-0JbrvyQKVP.webp" },
  { name: "Spatial awareness", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/rMTepIU1xH8yDzienauNv.webp" },
  { name: "Eat, sleep, and breath ninjutsu", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/1eiAvI4Zvy8QPjpSdAdiq.webp" },
  { name: "Wise beyond his years", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/dWyPJ0haeTtiraHL0yrBs.webp" },
  { name: "I have a plan", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aNSq3j1M7eIwVyih1EuoM.webp" },
  { name: "Heroes in a half shell", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/C5Z7OYcrwI8bCIOrBzuqk.webp" },
  { name: "Protective father", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Te4drypJnO4_tBRHuE92A.webp" },
  { name: "Leonardo leads", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/aAPfowPZobqo4FJtSrV0b.webp" }
  ],

  "Raphael": [
  { name: "Batter up!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/t2EgLCLzQjlQm_iy1Aeql.webp" },
  { name: "Turtle power!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/akq4AgvwLp__jlR0Cy5S7.webp" },
  { name: "Unbridled rage", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/JfGeEyhZco3gdJ4ye300j.webp" },
  { name: "Crowd control", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/bC5jEaElKH9vIpIVRd_Jq.webp" },
  { name: "Let's do this!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IJW79FVNBRDM5b2LMvUmm.webp" },
  { name: "Sai", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Ab_Ptl-ihtBrATm1G4L90.webp" },
  { name: "Relentless", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fLuuLEa7MYHacib6qWwEM.webp" },
  { name: "Break something", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/fMnQKVDOh1_vUSLb0a_qD.webp" },
  { name: "Payback time!", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/4ORiRWiEM17-6itzTfcuI.webp" },
  { name: "Slapshot", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/WV00f950_H-_wuVcBsAAA.webp" },
  { name: "Heroes in a half shell", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FROqtI7tNLLGWdCOMNPtZ.webp" },
  { name: "Raphael is cool but rude", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZiNMDv_W7CNW8-PK2pvt2.webp" }
  ],

  "T-Rex": [
  { name: "Commanding Impact", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-GaTw_eq1gfLo3ruXsZNk.webp" },
  { name: "15,000 Pounds of Muscle", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/EW4jRFVf2mxCnslnWB8nv.webp" },
  { name: "Reckless Lunge", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ePGahQLl6XFtYIqk3zV_k.webp" },
  { name: "When Dinosaurs Ruled the Earth", count: 4, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/D5kEd71Wf1CzYzjOX2QFB.webp" },
  { name: "Momentous Shift", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/H1q7AupwvyXAVa7cTsBa1.webp" },
  { name: "Terrifying Roar", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/FSV7wVDdir3K2IaTtx9h7.webp" },
  { name: "Thrash", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/mDPX69OyY5e11I6lWdkpS.webp" },
  { name: "You're Just Making Her Angry", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/QmWnpYfB_h5HNgj-Sw61s.webp" },
  { name: "Ripples in the Water", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/V671yFXGLvBhixe2JKgFK.webp" },
  { name: "65 Million Years of Gut Instinct", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/ZBvY4lqNRVWC__zjPAoKw.webp" },
  { name: "Closer Than She Appears", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HOQ-sOXfoUNQ1J47Cx8lJ.webp" }
  ],

  "Dr. Sattler": [
  { name: "You Never Had Control, That's the Illusion", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/-bOmg30ev8VVKo8vGKAZ8.webp" },
  { name: "Hey! Hey! Hey!", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/nSyprHEBbNTo5Xdu5SM-Y.webp" },
  { name: "Must Go Faster", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/HHKWs3MuG8SOh2zB8RuAj.webp" },
  { name: "Violently, If Necessary", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/iVe3CtM-BeTwnrCwapu_2.webp" },
  { name: "Feint", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/A0h7d3mEbkFiNY6ageCbi.webp" },
  { name: "Chaotician", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/lqqd3RQXIT5e9cv9Fr4Y0.webp" },
  { name: "Life Finds a Way", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Gqssz0K2MJT1kj7DOX2Ym.webp" },
  { name: "Woman Inherits the Earth", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/3u0sPTMRLkk1VeCvOuu37.webp" },
  { name: "Regroup", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/IPXVbBk5YqaGtIZTk7OlY.webp" },
  { name: "Sexism in Survival Situations", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Q-cRapUigZYJ-pVJZ3c7e.webp" },
  { name: "I Think We're Back In Business", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/AcaqsfHavGcyRTo9BmMAG.webp" },
  { name: "The Concept of Attraction", count: 3, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/Hcxt3c6W0ResgN1ZI-z7w.webp" },
  { name: "Lock The Doors!", count: 2, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/C4G9hdt8v5z07YnLCD_ed.webp" },
  { name: "The Future Ex‑Mrs. Malcolm", count: 1, image: "https://yptpnirqgfmxphjvsdjz.supabase.co/storage/v1/object/public/decks/LrAQFX-RbZbQpWWJIlp9s.webp" }
  ],

  "Hercules": [
  { name: "augean", count: 1, image: "hercules/augean.jpeg" },
  { name: "belt", count: 1, image: "hercules/belt.jpeg" },
  { name: "burden", count: 2, image: "hercules/burden.jpeg" },
  { name: "cattle", count: 1, image: "hercules/cattle.jpeg" },
  { name: "ceryneian", count: 1, image: "hercules/ceryneian.jpeg" },
  { name: "cretan", count: 1, image: "hercules/cretan.jpeg" },
  { name: "erymanthian", count: 1, image: "hercules/erymanthian.jpeg" },
  { name: "feint", count: 2, image: "hercules/feint.jpeg" },
  { name: "gatekeeper", count: 1, image: "hercules/gatekeeper.jpeg" },
  { name: "gift", count: 3, image: "hercules/gift.jpeg" },
  { name: "god", count: 2, image: "hercules/god.jpeg" },
  { name: "golden", count: 1, image: "hercules/golden.jpeg" },
  { name: "hound", count: 1, image: "hercules/hound.jpeg" },
  { name: "lernean", count: 1, image: "hercules/lernean.jpeg" },
  { name: "mares", count: 1, image: "hercules/mares.jpeg" },
  { name: "maw", count: 2, image: "hercules/maw.jpeg" },
  { name: "measured", count: 2, image: "hercules/measured.jpeg" }, 
  { name: "nemean", count: 1, image: "hercules/nemean.jpeg" },
  { name: "path", count: 2, image: "hercules/path.jpeg" },
  { name: "stymphalian", count: 1, image: "hercules/stymphalian.jpeg" },
  { name: "unchained", count: 2, image: "hercules/unchained.jpeg" },
  ],

  "Kirby" : [
  { name: "Mike", count: 2, image: "kirby/mike.png" },
  { name: "Poison", count: 2, image: "kirby/poison.png" },
  { name: "Fire", count: 3, image: "kirby/fire.png" },
  { name: "Esp", count: 2, image: "kirby/esp.png" },
  { name: "Mirror", count: 2, image: "kirby/mirror.png" },
  { name: "Sword", count: 3, image: "kirby/sword.png" },
  { name: "Cook", count: 3, image: "kirby/cook.png" },
  { name: "Shock", count: 2, image: "kirby/shock.png" },
  { name: "Paint", count: 3, image: "kirby/paint.png" },
  { name: "Beam", count: 2, image: "kirby/beam.png" },
  { name: "Freeze", count: 3, image: "kirby/freeze.png" },
  { name: "Ufo", count: 3, image: "kirby/ufo.png" },
  ],

  "Barbara McClintock" : [
  { name: "cytogenesis", count: 3, image: "barbara/cytogenesis.png" },
  { name: "enzyme", count: 3, image: "barbara/enzyme.png" },
  { name: "genetic", count: 2, image: "barbara/genetic.png" },
  { name: "genetic_r", count: 2, image: "barbara/genetic_r.png" },
  { name: "maize", count: 3, image: "barbara/maize.png" },
  { name: "meiosis", count: 2, image: "barbara/meiosis.png" },
  { name: "mutating", count: 2, image: "barbara/mutating.png" },
  { name: "ring", count: 2, image: "barbara/ring.png" },
  { name: "telomere", count: 2, image: "barbara/telomere.png" },
  { name: "transposon", count: 3, image: "barbara/transposon.png" },
  { name: "triploid", count: 3, image: "barbara/triploid.png" },
  { name: "mutation", count: 3, image: "barbara/mutation.png" },
  ],

  "Princess Zelda" : [
  { name: "to", count: 3, image: "zelda/to.png" },
  { name: "recall", count: 2, image: "zelda/recall.png" },
  { name: "forbidden", count: 2, image: "zelda/forbidden.png" },
  { name: "something", count: 2, image: "zelda/something.png" },
  { name: "dragon", count: 2, image: "zelda/dragon.png" },
  { name: "wisdom", count: 2, image: "zelda/wisdom.png" },
  { name: "find", count: 2, image: "zelda/find.png" },
  { name: "draconic", count: 2, image: "zelda/draconic.png" },
  { name: "faith", count: 2, image: "zelda/faith.png" },
  { name: "purifying", count: 2, image: "zelda/purifying.png" },
  { name: "centuries", count: 3, image: "zelda/centuries.png" },
  { name: "benevolence", count: 2, image: "zelda/benevolence.png" },
  { name: "restoration", count: 2, image: "zelda/restoration.png" },
  { name: "sage", count: 2, image: "zelda/sage.png" },
  ]
};

const pandoraFateDeck = [
  { name : "Confusion", image: "pandoras-box/Confusion.jpg"},
  { name : "Greed", image: "pandoras-box/Greed.jpg"},
  { name : "Hope", image: "pandoras-box/Hope.jpg"},
  { name : "Misfortune", image: "pandoras-box/Misfortune.jpg"},
  { name : "Pain", image: "pandoras-box/Pain.jpg"},
  { name : "Toil", image: "pandoras-box/Toil.jpg"},
  { name : "Woe", image: "pandoras-box/Woe.jpg"}
];

const TitaniaGlamourDeck = [
  { name : "Glamour of Greed", image: "glamour/Greed.png"},
  { name : "Glamour of Invisibility", image: "glamour/Invisibility.png"},
  { name : "Glamour of Jealous", image: "glamour/Jealous.png"},
  { name : "Glamour of Love", image: "glamour/Love.png"},
  { name : "Glamour of Rhyme", image: "glamour/Rhyme.png"},
  { name : "Glamour of Sleep", image: "glamour/Sleep.png"}
];
  