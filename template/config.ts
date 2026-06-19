import ruIcon from './src/assets/icon/ru-icon.svg'
import uzIcon from './src/assets/icon/uz-icon.svg'
import enIcon from './src/assets/icon/eng-icon.svg'


const API_LANGUAGES = [
  {
    id: 1,
    name: "O'zbek",
    shortName: "o'zb",
    code: 'uz',
    icon: uzIcon
  },
  {
    id: 2,
    name: 'Ўзбек',
    shortName: 'ўзб',
    code: 'oz',
    icon: uzIcon
  },
  {
    id: 3,
    name: 'Русский',
    shortName: 'рус',
    code: 'ru',
    icon: ruIcon
  },
  {
    id: 4,
    name: 'English',
    shortName: 'eng',
    code: 'en',
    icon: enIcon
  },
];


const config = {
  DEFAULT_LANGUAGE: 'uz',
  API_ROOT: import.meta.env.VITE_API_ROOT,
  API_LANGUAGES: API_LANGUAGES,
  // E-IMZO apikey pairs: ["domain1", "key1", "domain2", "key2", ...]
  // The localhost/127.0.0.1 keys below are the standard public E-IMZO development keys.
  // Add your own production domain + key pairs (obtained from E-IMZO) here.
  API_KEYS: [
    "localhost",
    "96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B",
    "127.0.0.1",
    "A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F",
    // "your-domain.uz", "YOUR_E_IMZO_API_KEY"
  ]
};

export default config;
