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
    date: "Szombat, 2027. május 29.",
    tagline: "Tatán, május 29-én várunk. Egy nap, egy hely, veletek együtt.",
  },
  nav: {
    schedule: "Program",
    venues: "Helyszínek",
    host: "Ceremóniamester",
    dj: "DJ",
    travel: "Utazás",
    dress: "Dress code",
    faq: "GYIK",
    contact: "Kapcsolat",
    rsvp: "Visszajelzés",
  },
  hero: {
    cta: "Visszajelzés",
    scroll: "Görgess tovább",
    portraitAlt: "Berni és Patrik a virágok mellett",
  },
  gallery: {
    kicker: "Rólunk",
    photos: [
      { src: "/couple/sunset.jpg", alt: "Berni és Patrik naplementében" },
      { src: "/couple/bosphorus.jpg", alt: "Berni és Patrik a virágok mellett" },
      { src: "/couple/ring.jpg", alt: "Berni és Patrik, a gyűrű" },
      { src: "/couple/lights.jpg", alt: "Berni és Patrik az esti fények alatt" },
      { src: "/couple/lookout.jpg", alt: "Berni és Patrik a kilátónál" },
      { src: "/couple/lake.jpg", alt: "Berni és Patrik a tónál" },
    ],
  },
  schedule: {
    title: "A nap menete",
    lead: "Így telik a nap.",
    items: [
      {
        time: "16:00",
        title: "Vendégvárás",
        detail: "Egy ital, amíg mindenki megérkezik.",
      },
      {
        time: "17:00",
        title: "Szertartás",
        detail: "Az öreg tölgyfa alatt.",
      },
      {
        time: "18:00",
        title: "Koccintás és fotók",
        detail: "Pezsgő, és az első közös képek.",
      },
      {
        time: "19:00",
        title: "Első fogás és beszédek",
        detail: "Vacsora, és a szavak, amiket egymásnak szántok.",
      },
      {
        time: "19:30",
        title: "Második fogás",
        detail: "Folytatódik a vacsora.",
      },
      {
        time: "21:00",
        title: "Torta",
        detail: "A harmadik felvonás.",
      },
      {
        time: "00:00",
        title: "Menyasszonytánc",
        detail: "A menyasszony tánca.",
      },
      {
        time: "utána",
        title: "Buli, kifulladásig",
        detail: "A táncparkett addig marad, amíg ti.",
      },
    ],
  },
  venues: {
    title: "Helyszínek",
    lead: "Minden egy helyen: Hotel Gottwald, Tata — az Öreg-tó közelében.",
    hotelNote: "4★ superior szálloda · 2890 Tata, Fekete u. 1.",
    hotelLinkLabel: "Hotel weboldala & fotók",
    hotelUrl: HOTEL_SITE,
    galleryAlt: "Hotel Gottwald főbejárata",
    mapTitle: "Hotel Gottwald, Tata",
    address: "2890 Tata, Fekete utca 1.",
    photoCredit:
      "Fotók: Hotel Gottwald (gottwald.hu) — a hotel nyilvános anyagából.",
    ceremony: {
      label: "Szertartás",
      name: "Az öreg tölgyfa alatt",
      address:
        "A kertben mondjuk ki az igent. Nyitott ég, a tó fénye, egy csendesebb perc, mielőtt a terem átveszi az estét.",
      mapLabel: "Térkép megnyitása",
      mapUrl: MAP_URL,
      detailLabel: "Helyszín részletei",
      detailUrl: HOTEL_WEDDING,
    },
    reception: {
      label: "Vacsora + party",
      name: "Bálterem",
      address:
        "Itt terül a vacsora, itt hangzanak el a beszédek, és ide tér vissza a tánc. A bálterem viszi a partyt, a terasz pedig kiengedi a nyári estét.",
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
    avoid: "Pirosat és fehéret ne viseljetek.",
    photos: [
      { src: "/dress/lilac.jpg", alt: "Berni és Patrik elegáns estélyiben" },
      { src: "/dress/cream.jpg", alt: "Berni és Patrik elegáns ruhában a stégen" },
    ],
  },
  host: {
    kicker: "Ceremóniamester",
    title: "Popovics György",
    body: "Gyuri vezeti az estét. Nem rigmusokban beszél, és nem tolakszik a középpontba: összetartja a menetet, a vendégeket és a váratlan pillanatokat. Ha kérdésed van a programról, keresd meg nyugodtan — egész nap ott lesz.",
    photoAlt: "Popovics György, a ceremóniamester",
  },
  dj: {
    kicker: "DJ",
    title: "DJ Ratkay",
    body: "A party Rátkai Zsolté. Esküvői DJ, aki a retró slágerektől a mai tánczenéig olvassa a termet, és a buli közben is beépíti a kéréseket. Klubokban afro house-t, melodic house-t és technót játszik — nálunk a táncparkett a dolga.",
    photoAlt: "DJ Ratkay a pultnál",
    mixLabel: "Egy mix tőle",
    mixUrl: "https://soundcloud.com/ratkayofficial/ratkay-the-golden-age",
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
        q: "Más nevében is visszajelezhetek?",
        a: "Igen. Írd be, hányan jöttök, beléd számítva, és mindenki nevét.",
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
        a: "Elegáns. Pirosat és fehéret kérjük, ne viseljetek.",
      },
      {
        q: "Ételallergia / speciális étrend?",
        a: "Minden vendégnél külön rákérdezünk a visszajelző űrlapon — a menü egyéni igényekhez igazítható.",
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
    lead: "Írd meg, hányan jöttök, van-e ételallergia, és kértek-e szállást.",
    name: "Neved",
    email: "E-mail",
    partySize: "Hányan jöttök veled?",
    partySizeHint: "Beléd számítva. Ha nem tudtok jönni, írj 0-t.",
    guestLabel: "Vendég",
    guestName: "Név",
    allergy: "Van ételallergiája?",
    allergyYes: "Igen",
    allergyNo: "Nincs",
    allergyDetail: "Mire figyeljünk?",
    accommodation: "Szeretnétek szállást a hotelben?",
    accommodationYes: "Igen",
    accommodationNo: "Nem",
    close: "Bezárás",
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
    date: "Saturday, 29 May 2027",
    tagline: "We'll be waiting in Tata on 29 May. One day, one place — with you.",
  },
  nav: {
    schedule: "Schedule",
    venues: "Venues",
    host: "Host",
    dj: "DJ",
    travel: "Travel",
    dress: "Dress code",
    faq: "FAQ",
    contact: "Contact",
    rsvp: "Reply",
  },
  hero: {
    cta: "Reply",
    scroll: "Scroll",
    portraitAlt: "Berni and Patrik beside the white flowers",
  },
  gallery: {
    kicker: "Us",
    photos: [
      { src: "/couple/sunset.jpg", alt: "Berni and Patrik at sunset" },
      { src: "/couple/bosphorus.jpg", alt: "Berni and Patrik beside the flowers" },
      { src: "/couple/ring.jpg", alt: "Berni and Patrik, the ring" },
      { src: "/couple/lights.jpg", alt: "Berni and Patrik under the evening lights" },
      { src: "/couple/lookout.jpg", alt: "Berni and Patrik at the lookout" },
      { src: "/couple/lake.jpg", alt: "Berni and Patrik by the lake" },
    ],
  },
  schedule: {
    title: "The day",
    lead: "How the day unfolds.",
    items: [
      {
        time: "16:00",
        title: "Guest welcome",
        detail: "A drink while everyone arrives.",
      },
      {
        time: "17:00",
        title: "Ceremony",
        detail: "Under the old oak.",
      },
      {
        time: "18:00",
        title: "Toast and photos",
        detail: "Sparkling wine, and the first pictures together.",
      },
      {
        time: "19:00",
        title: "First course and speeches",
        detail: "Dinner, and the words meant for each other.",
      },
      {
        time: "19:30",
        title: "Second course",
        detail: "Dinner continues.",
      },
      {
        time: "21:00",
        title: "Cake",
        detail: "The third act.",
      },
      {
        time: "00:00",
        title: "Bride’s dance",
        detail: "The traditional menyasszonytánc.",
      },
      {
        time: "after",
        title: "Party, until we drop",
        detail: "The floor stays open as long as you do.",
      },
    ],
  },
  venues: {
    title: "Venues",
    lead: "Everything in one place: Hotel Gottwald, Tata — near Lake Öreg.",
    hotelNote: "4★ superior hotel · 2890 Tata, Fekete u. 1.",
    hotelLinkLabel: "Hotel website & photos",
    hotelUrl: HOTEL_SITE,
    galleryAlt: "Hotel Gottwald main entrance",
    mapTitle: "Hotel Gottwald, Tata",
    address: "2890 Tata, Fekete utca 1.",
    photoCredit:
      "Photos: Hotel Gottwald (gottwald.hu) — from the hotel’s public materials.",
    ceremony: {
      label: "Ceremony",
      name: "Under the old oak",
      address:
        "We say yes in the garden. Open sky, light off the lake, a quieter minute before the room takes the evening.",
      mapLabel: "Open map",
      mapUrl: MAP_URL,
      detailLabel: "Venue details",
      detailUrl: HOTEL_WEDDING,
    },
    reception: {
      label: "Dinner + party",
      name: "Ballroom",
      address:
        "Dinner is laid here, the speeches happen here, and the dancing comes back here. The ballroom carries the party; the terrace lets the summer night in.",
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
    avoid: "Do not wear red or white.",
    photos: [
      { src: "/dress/lilac.jpg", alt: "Berni and Patrik in elegant evening dress" },
      { src: "/dress/cream.jpg", alt: "Berni and Patrik dressed elegantly on the dock" },
    ],
  },
  host: {
    kicker: "Ceremony host",
    title: "György Popovics",
    body: "Gyuri leads the night. He doesn’t speak in rhymes, and he doesn’t take the centre: he keeps the running order, the guests, and the unexpected moments together. If you have a question about the programme, look for him — he’ll be there all day.",
    photoAlt: "György Popovics, the ceremony host",
  },
  dj: {
    kicker: "DJ",
    title: "DJ Ratkay",
    body: "The party belongs to Zsolt Rátkai. A wedding DJ who reads the room from retro hits to current dance music, and folds in requests as the night goes. In clubs he plays afro house, melodic house, and techno — here, the dance floor is his job.",
    photoAlt: "DJ Ratkay at the decks",
    mixLabel: "A mix of his",
    mixUrl: "https://soundcloud.com/ratkayofficial/ratkay-the-golden-age",
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
        q: "When should I reply?",
        a: "Please complete the form as soon as you know — we’ll also note the deadline on the invitation.",
      },
      {
        q: "Can I reply for other people?",
        a: "Yes. Enter how many of you are coming, including yourself, and each person’s name.",
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
        a: "Elegant. Please do not wear red or white.",
      },
      {
        q: "Food allergies / special diet?",
        a: "The reply form asks about each guest — the menu can be adjusted for individual needs.",
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
    title: "Your reply",
    lead: "Tell us who’s coming, any food allergies, and whether you’d like a room.",
    name: "Your name",
    email: "Email",
    partySize: "How many people are coming with you?",
    partySizeHint: "Include yourself. Enter 0 if you can’t come.",
    guestLabel: "Person",
    guestName: "Name",
    allergy: "Any food allergy?",
    allergyYes: "Yes",
    allergyNo: "No",
    allergyDetail: "What should we know?",
    accommodation: "Would you like a room at the hotel?",
    accommodationYes: "Yes, please",
    accommodationNo: "No, thank you",
    close: "Close",
    submit: "Send reply",
    submitting: "Sending…",
    success: "Thank you! We’ve received your reply.",
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
