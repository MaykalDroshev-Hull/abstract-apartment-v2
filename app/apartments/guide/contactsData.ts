// Synced from contacts.txt — regenerate with: node scripts/emit-contacts.mjs (after saving contacts.txt)

export type GuideContactEntry = {
  id: string;
  label: string;
  telHrefs: string[];
  mapsUrl: string | null;
};

export const guideContactsData: GuideContactEntry[] = [
  { id: 'c1', label: '🆘 European emergency number', telHrefs: ['112'], mapsUrl: null },
  { id: 'c2', label: '🛥️ Coast Guard', telHrefs: ['108'], mapsUrl: null },
  {
    id: 'c3',
    label: '👮 Police Station Eleftheroupoli',
    telHrefs: ['+30 2592023100'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Police+Station+Eleftheroupoli',
  },
  { id: 'c4', label: '🚑 Emergency Medical Center', telHrefs: ['166'], mapsUrl: null },
  { id: 'c5', label: '🚒 Fire department', telHrefs: ['199'], mapsUrl: null },
  {
    id: 'c6',
    label: '☎️ Police',
    telHrefs: ['100'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Police+Paralia+Ofriniou',
  },
  {
    id: 'c7',
    label: '⚕️ Health Centre Eleftheroupoli',
    telHrefs: ['+30 2592022222'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Health+Centre+Eleftheroupoli',
  },
  {
    id: 'c8',
    label: '🚌 Bus Station Eleftheroupoli',
    telHrefs: ['+30 2592023222'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bus+Station+Eleftheroupoli',
  },
  {
    id: 'c9',
    label: '🚌 Bus Station Kavala',
    telHrefs: ['+30 2510223355'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bus+Station+Kavala',
  },
  {
    id: 'c10',
    label: '🚢 Kavala Port',
    telHrefs: ['+30 2513505430'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kavala+Port',
  },
  {
    id: 'c11',
    label: '✈️ Kavala Airport "Megas Alexandros"',
    telHrefs: ['+30 2591053271'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kavala+Airport+Megas+Alexandros',
  },
  {
    id: 'c12',
    label: '✈️ Thessaloniki Airport',
    telHrefs: ['+30 2310 985000'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Thessaloniki+Airport',
  },
  {
    id: 'c13',
    label: 'ℹ️ Touristic Info Kavala',
    telHrefs: ['+30 2510227409'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Touristic+Info+Kavala',
  },
  {
    id: 'c14',
    label: '🏥 Kavala Hospital',
    telHrefs: ['+30 2513501100'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kavala+Hospital',
  },
  {
    id: 'c15',
    label: '🚒 Fire Station',
    telHrefs: ['+30 2592023400'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fire+Station',
  },
  {
    id: 'c16',
    label: '👮 Police Station Orfani',
    telHrefs: ['+30 2592041111'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Police+Station+Orfani',
  },
  { id: 'c17', label: '☣️ Greek Poison Center', telHrefs: ['+30 2107793777'], mapsUrl: null },
  {
    id: 'c18',
    label: '⚕️ Pharmacy',
    telHrefs: ['+30 6932684141'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Pharmacy+%CE%A0%CE%B1%CF%81%CE%B1%CE%BB%CE%AF%CE%B1+%CE%9F%CF%86%CF%81%CF%85%CE%BD%CE%AF%CE%BF%CF%85',
  },
  {
    id: 'c19',
    label: '📮 Post Office Moustheni',
    telHrefs: ['+30 2592093202'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Post+Office+Moustheni',
  },
  {
    id: 'c20',
    label: '🩺 Pediatrician',
    telHrefs: ['+30 2594031870'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=https%3A%2F%2Fmaps.app.goo.gl%2FFQGUMfabXtC5hZtWA',
  },
  {
    id: 'c21',
    label: '❤️‍🩹 Polyclinic P. Ofriniou',
    telHrefs: ['+30 2594031030'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%A0%CE%BF%CE%BB%CF%85%CE%B4%CF%8D%CE%BD%CE%B1%CE%BC%CE%BF+%CE%A0%CE%B5%CF%81%CE%B9%CF%86%CE%B5%CF%81%CE%B5%CE%B9%CE%B1%CE%BA%CF%8C+%CE%99%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%CE%A0%CE%B1%CF%81%CE%B1%CE%BB%CE%AF%CE%B1%CF%82+%CE%9F%CF%86%CF%81%CF%85%CE%BD%CE%AF%CE%BF%CF%85',
  },
  {
    id: 'c22',
    label: '🐕 Veterinarian',
    telHrefs: ['+30 6973043164'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%9A%CF%84%CE%B7%CE%BD%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF+%CE%9C%CF%80%CE%AC%CF%84%CE%B6%CE%B9%CE%BF%CF%82+%CE%9A%CF%89%CE%BD.+%CE%9C%CE%AC%CE%BD%CE%B8%CE%BF%CF%82',
  },
  {
    id: 'c23',
    label: '🩺 Nikolaos Kioses - General Practitioner/ Family Physician',
    telHrefs: ['+30 2594031322'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%9D%CE%99%CE%9A%CE%9F%CE%9B%CE%91%CE%9F%CE%A3+%CE%9A%CE%99%CE%9F%CE%A3%CE%95%CE%A3+-+%CE%93%CE%95%CE%9D%CE%99%CE%9A%CE%9F%CE%A3+%CE%9F%CE%99%CE%9A%CE%9F%CE%93%CE%95%CE%9D%CE%95%CE%99%CE%91%CE%9A%CE%9F%CE%A3+%CE%99%CE%91%CE%A4%CE%A1%CE%9F%CE%A3',
  },
  {
    id: 'c24',
    label: '🍽️ Meze Meze',
    telHrefs: ['+306932647324'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Meze+Meze',
  },
  {
    id: 'c25',
    label: '🍽️ Broz Steak & Burger House',
    telHrefs: ['+30 25940 31932'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Broz+Steak+%26amp%3B+Burger+House',
  },
  {
    id: 'c26',
    label: '🍽️ Kasta (Hotel and Restaurant)',
    telHrefs: ['+30 25940 31392', '+30 693 672 7919'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kasta+%28Hotel+%26amp%3B+Restaurant%29',
  },
  {
    id: 'c27',
    label: '🍽️ Maison Cafe',
    telHrefs: ['+30 25940 31338'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maison+Cafe',
  },
  {
    id: 'c28',
    label: '🍽️ ALAS – Greek Home Food',
    telHrefs: ['+30 25944 01010'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ALAS+%E2%80%93+Greek+Home+Food',
  },
  {
    id: 'c29',
    label: '🍽️ Politia',
    telHrefs: ['+302594031118'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Politia',
  },
  {
    id: 'c30',
    label: '🍽️ Fish Taverna Atlantida',
    telHrefs: ['+30 6995116360'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Fish+Taverna+Atlantida',
  },
  {
    id: 'c31',
    label: '🍽️ La Costa Bar',
    telHrefs: ['+30 25940 31055'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=La+Costa+Bar+%CE%A0%CE%B1%CF%81%CE%B1%CE%BB%CE%AF%CE%B1+%CE%9F%CF%86%CF%81%CF%85%CE%BD%CE%AF%CE%BF%CF%85+640+08',
  },
  {
    id: 'c32',
    label: '🍽️ Costa del Mar',
    telHrefs: ['+359 877643372'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Costa+del+Mar',
  },
  {
    id: 'c33',
    label: '🍽️ PARADISO Prime',
    telHrefs: ['+30 2594031305'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=PARADISO+Prime',
  },
  {
    id: 'c34',
    label: '🍽️ Frozzy Waffle House',
    telHrefs: ['+30 2594031638'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Frozzy+Waffle+House',
  },
  {
    id: 'c35',
    label: '🍽️ Kyriakos Taverna',
    telHrefs: ['+30 699 511 7397'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kyriakos+Taverna+%CE%9A%CE%A5%CE%A1%CE%99%CE%91%CE%9A%CE%9F%CE%A3',
  },
  {
    id: 'c36',
    label: '🍽️ Meze Meze',
    telHrefs: ['+30 693 264 7324'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Meze+Meze+Paralia+Ofriniou',
  },
  {
    id: 'c37',
    label: '🍽️ Peri Gyros',
    telHrefs: ['+30 25940 31444'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Peri+Gyros',
  },
  {
    id: 'c38',
    label: '🍽️ Nostimoulis',
    telHrefs: ['+302594770709'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%9D%CE%BF%CF%83%CF%84%CE%B9%CE%BC%CE%BF%CF%8D%CE%BB%CE%B7%CF%82+NOSTIMOULIS',
  },
  {
    id: 'c39',
    label: '🍽️ Aitrion',
    telHrefs: ['+302594031297'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Aitrion',
  },
  {
    id: 'c40',
    label: '🍽️ Orea Ellas',
    telHrefs: ['+30 6983517471'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Orea+Ellas',
  },
  {
    id: 'c41',
    label: '🍽️ Pitari Taverna',
    telHrefs: ['+302594031623'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pitari+Taverna',
  },
  {
    id: 'c42',
    label: '🍽️ Dolcetto',
    telHrefs: ['+30 2594031601'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Dolcetto',
  },
  {
    id: 'c43',
    label: '🍽️ Salt and Sugar',
    telHrefs: ['+302594031014'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Salt+and+Sugar',
  },
  {
    id: 'c44',
    label: '🍽️ Masa Buka',
    telHrefs: ['+306988612613'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Masa+Buka',
  },
  {
    id: 'c45',
    label: '🍽️ Enjoy Coffee and Brunch',
    telHrefs: ['+302594031794'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Enjoy+Coffee+%26amp%3B+Brunch',
  },
  {
    id: 'c46',
    label: '🍽️ Kathodon',
    telHrefs: ['+302594031022'],
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kathodon',
  },
  {
    id: 'c47',
    label: '🍽️ Pizza and Pasta "Sicilia"',
    telHrefs: ['+30 25940 31440'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Pizza+%26amp%3B+Pasta+%26quot%3BSicilia%26quot%3B',
  },
  {
    id: 'c48',
    label: '🥪 Gatidis Fresh',
    telHrefs: ['+302594031035'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Gatidis+Fresh+Unnamed+Road%2C+Paralia+Ofriniou+640+08',
  },
  {
    id: 'c49',
    label: '🥬 Fruits and Vegetables',
    telHrefs: ['+30 25940 31578'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%B1%CF%80%26%23039%3B+%CF%8C%CE%BB%CE%B1+%CE%AD%CF%87%CE%B5%CE%B9+%CE%BF+%CE%9C%CF%80%CE%B1%CE%BE%CE%AD%CF%82',
  },
  {
    id: 'c50',
    label: '🐟 Billy Fish Market',
    telHrefs: ['+302594031217'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%99%CF%87%CE%B8%CF%85%CE%BF%CF%80%CF%89%CE%BB%CE%B5%CE%AF%CE%BF+%CE%9C%CF%80%CE%AF%CE%BB%CE%B7%CF%82+Billys+Fish+market',
  },
  {
    id: 'c51',
    label: '⛽ Building materials and gas station',
    telHrefs: ['+30 2594031231'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Theriakis+%CE%98%CE%B5%CF%81%CE%B9%CE%B1%CE%BA%CE%AE%CF%82+%CE%9F%CE%B9%CE%BA%CE%BF%CE%B4%CE%BF%CE%BC%CE%B9%CE%BA%CE%AC+%CE%95%CF%81%CE%B3%CE%B1%CE%BB%CE%B5%CE%AF%CE%B1+%CE%BA%CE%B1%CE%B9+%CE%A5%CE%BB%CE%B9%CE%BA%CE%AC',
  },
  {
    id: 'c52',
    label: '💦 Δ.Ε.Υ.Α.',
    telHrefs: ['+30 2592021024', '+30 2592350002'],
    mapsUrl: null,
  },
  {
    id: 'c53',
    label: '🪟 Glazier and Advert Alexi',
    telHrefs: ['+30 2594031873'],
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=%CE%A4%CE%B6%CE%B1%CE%BC%CE%B9%CE%B1+-+%CE%95%CF%80%CE%B9%CE%B3%CF%81%CE%B1%CF%86%CE%B5%CF%82+%CE%91%CE%BB%CE%B5%CE%BE%CE%B9%CE%BF%CF%85',
  },
];
