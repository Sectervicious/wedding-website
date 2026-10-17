import type { Locale } from "./config";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Gottwald+2890+Tata+Fekete+u.+1";
const HOTEL_SITE = "https://gottwald.hu/hu/";
const HOTEL_BOOK = "https://gottwald.hu/online-foglalas/";
const HOTEL_WEDDING = "https://gottwald.hu/wedding/";

const hu = {
  meta: {
    title: "Berni & Patrik — Esküvő",
    description:
      "Berni és Patrik esküvője — 2027. május 29., Hotel Gottwald, Tata.",
  },
  brand: {
    names: "Berni & Patrik",
    date: "2027. május 29.",
    tagline: "Egy nap, egy hely — veletek együtt.",
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
    lead: "A pontos időpontokat hamarosan frissítjük.",
    items: [
      {
        time: "—",
        title: "Vendégfogadás",
        detail: "Italok és aprósütemény a szertartás előtt.",
      },
      {
        time: "—",
        title: "Szertartás",
        detail: "A hotel parkjában, az öreg tölgyfa alatt.",
      },
      {
        time: "—",
        title: "Koccintás & fotók",
        detail: "Pezsgős koccintás a szertartás után.",
      },
      {
        time: "—",
        title: "Vacsora & tánc",
        detail: "Ünneplés a bálteremben, teraszhasználattal.",
      },
    ],
  },
  venues: {
    title: "Helyszínek",
    lead: "Minden egy helyen: Hotel Gottwald, Tata — az Öreg-tó közelében.",
    hotelNote: "4★ superior szálloda · 2890 Tata, Fekete u. 1.",
    hotelLinkLabel: "Hotel weboldala & fotók",
    hotelUrl: HOTEL_SITE,
    galleryAlt: "Hotel Gottwald — vintage terasz a parkban",
    photoCredit:
      "Fotók: Hotel Gottwald (gottwald.hu) — a hotel nyilvános anyagából.",
    ceremony: {
      label: "Szertartás",
      name: "Az öreg tölgyfa alatt",
      address:
        "Hotel Gottwald parkja — több évtizedes tölgyfa, természetközeli szertartás a kertben.",
      mapLabel: "Térkép megnyitása",
      mapUrl: MAP_URL,
      detailLabel: "Helyszín részletei",
      detailUrl: HOTEL_WEDDING,
    },
    reception: {
      label: "Vacsora",
      name: "Bálterem",
      address:
        "Hotel Gottwald különterem, teraszhasználattal — 2890 Tata, Fekete u. 1.",
      mapLabel: "Térkép megnyitása",
      mapUrl: MAP_URL,
      detailLabel: "Hotel Gottwald",
      detailUrl: HOTEL_SITE,
    },
  },
  travel: {
    title: "Utazás & szállás",
    lead: "Parkolás a hotelben, szállás a Gottwaldnál, helyi taxi a Tata környékén alvóknak.",
    items: [
      {
        title: "Parkolás",
        body: "Parkolás a Hotel Gottwald területén megoldható.",
      },
      {
        title: "Taxi Tatán",
        body: "Ha nem a hotelben alszol, de Tata környékén szállsz meg, helyi taxival segítünk az odavissza úton — részletek később / írj nekünk.",
      },
      {
        title: "Megközelítés",
        body: "Tata történelmi belvárosa, az Öreg-tó partján. GPS: 47.639935, 18.312428.",
      },
    ],
    stay: {
      title: "Szállás — Hotel Gottwald",
      lead: "Ajánlott szobaárak az esküvői ajánlat alapján (változhatnak; foglaláskor egyeztessetek velünk vagy a hotellel).",
      includes:
        "Az ár tartalmazza: szállás, gazdag büféreggeli, wellness használat 10:00-ig.",
      taxNote:
        "Idegenforgalmi adó (18–70 év): 830 Ft/fő/éj — a szobaár nem tartalmazza.",
      bookLabel: "Online foglalás a hotelnél",
      bookUrl: HOTEL_BOOK,
      rooms: [
        {
          name: "Kétágyas szoba",
          price: "38.000 Ft / szoba / éj",
        },
        {
          name: "Háromágyas szoba / apartman",
          price: "48.000 Ft / szoba / éj",
        },
        {
          name: "Négyágyas apartman",
          price: "68.000 Ft / szoba / éj",
        },
        {
          name: "Extra fő (4. fő felett, apartman)",
          price: "12.000 Ft / fő / éj",
        },
      ],
    },
  },
  dress: {
    title: "Dress code",
    lead: "Elegáns.",
    body: "Kérjük, kerüld a pirosat és a fehéret. A szertartás a kertben, a tölgyfa alatt lesz — érdemes kényelmes cipőt választani a füves talajra.",
  },
  faq: {
    title: "Gyakori kérdések",
    lead: "A legfontosabb tudnivalók egy helyen.",
    items: [
      {
        q: "Hol lesz az esküvő?",
        a: "A tatai Hotel Gottwaldban (Fekete u. 1.). A szertartás a park öreg tölgyfája alatt, a vacsora a bálteremben.",
      },
      {
        q: "Mikor kell visszajelezni?",
        a: "Kérjük, töltsd ki a visszajelző űrlapot, amint tudod a válaszodat — a pontos határidőt a meghívón is jelezzük.",
      },
      {
        q: "Vihetek +1-et?",
        a: "Ha a meghívód ezt lehetővé teszi, jelöld az űrlapon. Bizonytalan esetben írj nekünk.",
      },
      {
        q: "Hol tudok parkolni?",
        a: "Parkolás a Hotel Gottwald területén megoldható.",
      },
      {
        q: "Hol ajánlott megszállni?",
        a: "A Hotel Gottwaldnál — szobatípusok és árak az Utazás & szállás szekcióban. A hotel wellnessét és büféreggelijét is tartalmazza az ár.",
      },
      {
        q: "Ha nem a hotelben alszom?",
        a: "Ha Tata környékén szállsz meg, helyi taxival segítünk az odavissza úton. Írj nekünk, és egyeztetünk.",
      },
      {
        q: "Mi a dress code?",
        a: "Elegáns. Kerüld a pirosat és a fehéret. Kerti szertartás miatt praktikus a kényelmes cipő.",
      },
      {
        q: "Ételallergia / speciális étrend?",
        a: "Jelöld a visszajelző űrlapon — a menü egyéni igényekhez igazítható.",
      },
      {
        q: "Kültéri szertartás — mi van, ha esik?",
        a: "A tölgyfa alatti szertartás a kertben zajlik; rossz idő esetén a hotellel egyeztetett beltéri megoldást követjük. Frissítjük, ha végleges.",
      },
    ],
  },
  contact: {
    title: "Kapcsolat",
    lead: "Írj nyugodtan bármelyik címre.",
    emailLabel: "E-mail",
    emails: ["patrik.hidvegi94@gmail.com", "bernadett9601@gmail.com"],
    note: "Berni vagy Patrik válaszol.",
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
    error: "Nem sikerült elküldeni. Próbáld újra, vagy írj e-mailben.",
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
    title: "Berni & Patrik — Wedding",
    description:
      "Berni and Patrik’s wedding — 29 May 2027, Hotel Gottwald, Tata.",
  },
  brand: {
    names: "Berni & Patrik",
    date: "29 May 2027",
    tagline: "One day, one place — with you.",
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
    lead: "Exact times will be updated soon.",
    items: [
      {
        time: "—",
        title: "Guest welcome",
        detail: "Drinks and bites before the ceremony.",
      },
      {
        time: "—",
        title: "Ceremony",
        detail: "Under the old oak in the hotel park.",
      },
      {
        time: "—",
        title: "Toast & photos",
        detail: "A sparkling toast after the ceremony.",
      },
      {
        time: "—",
        title: "Dinner & dancing",
        detail: "Celebration in the ballroom, with terrace access.",
      },
    ],
  },
  venues: {
    title: "Venues",
    lead: "Everything in one place: Hotel Gottwald, Tata — near Lake Öreg.",
    hotelNote: "4★ superior hotel · 2890 Tata, Fekete u. 1.",
    hotelLinkLabel: "Hotel website & photos",
    hotelUrl: HOTEL_SITE,
    galleryAlt: "Hotel Gottwald — vintage terrace in the park",
    photoCredit:
      "Photos: Hotel Gottwald (gottwald.hu) — from the hotel’s public materials.",
    ceremony: {
      label: "Ceremony",
      name: "Under the old oak",
      address:
        "Hotel Gottwald park — a decades-old oak for a nature-close ceremony.",
      mapLabel: "Open map",
      mapUrl: MAP_URL,
      detailLabel: "Venue details",
      detailUrl: HOTEL_WEDDING,
    },
    reception: {
      label: "Dinner",
      name: "Ballroom",
      address:
        "Hotel Gottwald private hall with terrace — 2890 Tata, Fekete u. 1.",
      mapLabel: "Open map",
      mapUrl: MAP_URL,
      detailLabel: "Hotel Gottwald",
      detailUrl: HOTEL_SITE,
    },
  },
  travel: {
    title: "Travel & stay",
    lead: "Park at the hotel, stay at Gottwald, local taxi if you’re nearby in Tata.",
    items: [
      {
        title: "Parking",
        body: "Parking is available on the Hotel Gottwald grounds.",
      },
      {
        title: "Taxi in Tata",
        body: "If you’re staying around Tata (not at the hotel), a local taxi can help with the trip — details later, or message us.",
      },
      {
        title: "Getting there",
        body: "Historic centre of Tata, by Lake Öreg. GPS: 47.639935, 18.312428.",
      },
    ],
    stay: {
      title: "Stay — Hotel Gottwald",
      lead: "Suggested room rates from the wedding offer (subject to change; confirm with us or the hotel when booking).",
      includes:
        "Rate includes: room, rich buffet breakfast, wellness access until 10:00.",
      taxNote:
        "Tourist tax (ages 18–70): 830 Ft / person / night — not included in the room rate.",
      bookLabel: "Book online at the hotel",
      bookUrl: HOTEL_BOOK,
      rooms: [
        {
          name: "Double room",
          price: "38,000 Ft / room / night",
        },
        {
          name: "Triple room / apartment",
          price: "48,000 Ft / room / night",
        },
        {
          name: "4-person apartment",
          price: "68,000 Ft / room / night",
        },
        {
          name: "Extra guest (beyond 4, apartment)",
          price: "12,000 Ft / person / night",
        },
      ],
    },
  },
  dress: {
    title: "Dress code",
    lead: "Elegant.",
    body: "Please avoid red and white. The ceremony is outdoors under the oak — comfortable shoes work better on grass.",
  },
  faq: {
    title: "FAQ",
    lead: "The essentials in one place.",
    items: [
      {
        q: "Where is the wedding?",
        a: "At Hotel Gottwald in Tata (Fekete u. 1.). Ceremony under the park’s old oak; dinner in the ballroom.",
      },
      {
        q: "When should I RSVP?",
        a: "Please complete the form as soon as you know — we’ll also note the deadline on the invitation.",
      },
      {
        q: "Can I bring a +1?",
        a: "If your invitation allows it, mark it on the form. Unsure? Message us.",
      },
      {
        q: "Where can I park?",
        a: "Parking is available on the Hotel Gottwald grounds.",
      },
      {
        q: "Where should I stay?",
        a: "At Hotel Gottwald — room types and rates are in Travel & stay. Rates include breakfast and wellness access.",
      },
      {
        q: "What if I’m not staying at the hotel?",
        a: "If you’re staying around Tata, a local taxi can help with the trip. Message us and we’ll coordinate.",
      },
      {
        q: "What’s the dress code?",
        a: "Elegant. Please avoid red and white. Comfortable shoes help for the garden ceremony.",
      },
      {
        q: "Food allergies / special diet?",
        a: "Note it on the RSVP form — the menu can be adjusted for individual needs.",
      },
      {
        q: "Outdoor ceremony — what if it rains?",
        a: "The oak ceremony is in the garden; in bad weather we’ll follow an indoor plan with the hotel. We’ll update when final.",
      },
    ],
  },
  contact: {
    title: "Contact",
    lead: "Write to either address anytime.",
    emailLabel: "Email",
    emails: ["patrik.hidvegi94@gmail.com", "bernadett9601@gmail.com"],
    note: "Berni or Patrik will reply.",
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
