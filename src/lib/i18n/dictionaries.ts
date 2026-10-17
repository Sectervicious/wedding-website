import type { Locale } from "./config";

const hu = {
  meta: {
    title: "Anna & Márton — Esküvő",
    description:
      "Hivatalos esküvői oldal: program, helyszínek, szállás és visszajelzés.",
  },
  brand: {
    names: "Anna & Márton",
    date: "2027. június 12.",
    tagline: "Együtt ünneplünk — veletek.",
  },
  nav: {
    schedule: "Program",
    venues: "Helyszínek",
    travel: "Utazás",
    dress: "Dress code",
    faq: "GYIK",
    contact: "Kapcsolat",
    rsvp: "Visszajelzés",
  },
  hero: {
    cta: "Visszajelzés",
    scroll: "Görgess tovább",
  },
  schedule: {
    title: "A nap menete",
    lead: "Időpontok helyőrzők — később pontosítjuk.",
    items: [
      {
        time: "15:00",
        title: "Vendégfogadás",
        detail: "Kertben, frissítőkkel.",
      },
      {
        time: "16:00",
        title: "Szertartás",
        detail: "Helyszín neve — hamarosan.",
      },
      {
        time: "17:30",
        title: "Fotózás & koccintás",
        detail: "Rövid szünet a kertben.",
      },
      {
        time: "19:00",
        title: "Vacsora",
        detail: "Ültetett vacsora, majd tánc.",
      },
    ],
  },
  venues: {
    title: "Helyszínek",
    lead: "Térképek és címek helyőrzők — cseréld ki a linkeket.",
    ceremony: {
      label: "Szertartás",
      name: "Szertartás helyszíne",
      address: "Utcanev 1., Város — cím hamarosan",
      mapLabel: "Térkép megnyitása",
      mapUrl: "https://maps.google.com",
    },
    reception: {
      label: "Fogadás",
      name: "Fogadás helyszíne",
      address: "Utcanev 2., Város — cím hamarosan",
      mapLabel: "Térkép megnyitása",
      mapUrl: "https://maps.google.com",
    },
  },
  travel: {
    title: "Utazás & szállás",
    lead: "Hogyan érkezz, hol aludj — részletek helyőrzők.",
    items: [
      {
        title: "Autóval",
        body: "Parkolás a helyszín mellett. Navigációs pin később.",
      },
      {
        title: "Tömegközlekedés",
        body: "Átszállási tippek és megálló neve — hamarosan.",
      },
      {
        title: "Szállás",
        body: "Ajánlott szállodák listája — hamarosan frissül.",
      },
    ],
  },
  dress: {
    title: "Dress code",
    lead: "Kerti ünneplés, elegáns, de kényelmes.",
    body: "Kérjük a sötétzöld és a fehér elkerülését a szertartáson. Magassarkú helyett ajánlott a kényelmes cipő a füvön.",
  },
  faq: {
    title: "Gyakori kérdések",
    lead: "Rövid válaszok — bővíthető lista.",
    items: [
      {
        q: "Mikor kell visszajelezni?",
        a: "Kérjük, a meghívón szereplő határidőig töltsd ki a visszajelző űrlapot.",
      },
      {
        q: "Vihetek +1-et?",
        a: "Ha a meghívód ezt lehetővé teszi, jelöld az űrlapon. Egyébként írj nekünk.",
      },
      {
        q: "Lesz parkolás?",
        a: "Igen — a pontos helyszínnél jelezzük a részleteket.",
      },
      {
        q: "Gyerekek jöhetnek?",
        a: "A meghívó szerint. Ha kérdésed van, írj a kapcsolati címre.",
      },
    ],
  },
  contact: {
    title: "Kapcsolat",
    lead: "Írj nyugodtan, ha bármi kérdésed van.",
    emailLabel: "E-mail",
    email: "hello@pelda.hu",
    note: "Cseréld ki a címet a sajátotokra.",
  },
  rsvp: {
    title: "Visszajelzés",
    lead: "Pár perc, és tudjuk, számíthatunk-e rád.",
    name: "Név",
    email: "E-mail",
    attendance: "Részt veszel?",
    yes: "Igen, ott leszek",
    no: "Sajnos nem tudok jönni",
    plusOne: "Hozol +1-et?",
    plusOneYes: "Igen",
    plusOneNo: "Nem",
    plusOneName: "+1 neve (opcionális)",
    diet: "Étrend / allergia",
    dietPlaceholder: "Pl. vegetáriánus, gluténmentes…",
    message: "Üzenet (opcionális)",
    submit: "Küldés",
    submitting: "Küldés…",
    success: "Köszönjük! Megkaptuk a visszajelzésedet.",
    error:
      "Nem sikerült elküldeni. Próbáld újra, vagy írj e-mailben.",
    unconfigured:
      "Az űrlap még nincs bekötve. Állítsd be a FORMSPREE_FORM_ID vagy a Supabase környezeti változókat (lásd README).",
  },
  footer: {
    made: "Készült szeretettel",
  },
};

export type Dictionary = typeof hu;

const en: Dictionary = {
  meta: {
    title: "Anna & Márton — Wedding",
    description:
      "Official wedding site: schedule, venues, travel, and RSVP.",
  },
  brand: {
    names: "Anna & Márton",
    date: "12 June 2027",
    tagline: "Celebrating together — with you.",
  },
  nav: {
    schedule: "Schedule",
    venues: "Venues",
    travel: "Travel",
    dress: "Dress code",
    faq: "FAQ",
    contact: "Contact",
    rsvp: "RSVP",
  },
  hero: {
    cta: "RSVP",
    scroll: "Scroll",
  },
  schedule: {
    title: "The day",
    lead: "Placeholder times — we’ll refine them soon.",
    items: [
      {
        time: "3:00 PM",
        title: "Guest arrival",
        detail: "Garden welcome with drinks.",
      },
      {
        time: "4:00 PM",
        title: "Ceremony",
        detail: "Venue name — coming soon.",
      },
      {
        time: "5:30 PM",
        title: "Photos & toast",
        detail: "A short pause in the garden.",
      },
      {
        time: "7:00 PM",
        title: "Dinner",
        detail: "Seated dinner, then dancing.",
      },
    ],
  },
  venues: {
    title: "Venues",
    lead: "Map and address placeholders — swap in your links.",
    ceremony: {
      label: "Ceremony",
      name: "Ceremony venue",
      address: "Street 1, City — address soon",
      mapLabel: "Open map",
      mapUrl: "https://maps.google.com",
    },
    reception: {
      label: "Reception",
      name: "Reception venue",
      address: "Street 2, City — address soon",
      mapLabel: "Open map",
      mapUrl: "https://maps.google.com",
    },
  },
  travel: {
    title: "Travel & stay",
    lead: "How to arrive and where to sleep — placeholder notes.",
    items: [
      {
        title: "By car",
        body: "Parking near the venue. Nav pin coming soon.",
      },
      {
        title: "Public transit",
        body: "Transfer tips and stop name — soon.",
      },
      {
        title: "Stay",
        body: "Suggested hotels list — updating soon.",
      },
    ],
  },
  dress: {
    title: "Dress code",
    lead: "Garden celebration — elegant, but comfortable.",
    body: "Please avoid deep green and white at the ceremony. Comfortable shoes work better than heels on grass.",
  },
  faq: {
    title: "FAQ",
    lead: "Short answers — easy to extend.",
    items: [
      {
        q: "When should I RSVP?",
        a: "Please complete the form by the date on your invitation.",
      },
      {
        q: "Can I bring a +1?",
        a: "If your invitation allows it, mark it on the form. Otherwise message us.",
      },
      {
        q: "Is there parking?",
        a: "Yes — we’ll share details with the final venue info.",
      },
      {
        q: "Are children welcome?",
        a: "As noted on the invitation. Questions? Write to the contact email.",
      },
    ],
  },
  contact: {
    title: "Contact",
    lead: "Reach out anytime with questions.",
    emailLabel: "Email",
    email: "hello@example.com",
    note: "Replace with your real address.",
  },
  rsvp: {
    title: "RSVP",
    lead: "A few minutes — and we’ll know to expect you.",
    name: "Name",
    email: "Email",
    attendance: "Will you attend?",
    yes: "Yes, I’ll be there",
    no: "Sorry, I can’t make it",
    plusOne: "Bringing a +1?",
    plusOneYes: "Yes",
    plusOneNo: "No",
    plusOneName: "+1 name (optional)",
    diet: "Diet / allergies",
    dietPlaceholder: "e.g. vegetarian, gluten-free…",
    message: "Message (optional)",
    submit: "Send",
    submitting: "Sending…",
    success: "Thank you! We’ve received your RSVP.",
    error: "Couldn’t send. Try again, or email us.",
    unconfigured:
      "The form isn’t wired yet. Set FORMSPREE_FORM_ID or Supabase env vars (see README).",
  },
  footer: {
    made: "Made with care",
  },
};

const dictionaries: Record<Locale, Dictionary> = { hu, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
