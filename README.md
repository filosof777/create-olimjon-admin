# create-olimjon-admin

> React + TypeScript + Vite asosidagi zamonaviy **admin panel starter**. Bitta buyruq bilan to'liq tayyor loyiha yarating.

[![npm version](https://img.shields.io/npm/v/create-olimjon-admin.svg)](https://www.npmjs.com/package/create-olimjon-admin)
[![npm downloads](https://img.shields.io/npm/dm/create-olimjon-admin.svg)](https://www.npmjs.com/package/create-olimjon-admin)
[![license](https://img.shields.io/npm/l/create-olimjon-admin.svg)](./LICENSE)

---

## 📋 Mundarija

- [Bu nima?](#-bu-nima)
- [Tezkor boshlash](#-tezkor-boshlash)
- [Talablar](#-talablar)
- [CLI imkoniyatlari](#-cli-imkoniyatlari)
- [Texnologik stek](#-texnologik-stek)
- [Loyiha strukturasi](#-loyiha-strukturasi)
- [Skriptlar](#-skriptlar)
- [Environment (.env) sozlash](#-environment-env-sozlash)
- [Sahifa generatori](#-sahifa-generatori)
- [Build va Deploy](#-build-va-deploy)
- [Tez-tez beriladigan savollar](#-tez-tez-beriladigan-savollar-faq)
- [Litsenziya](#-litsenziya)

---

## 🎯 Bu nima?

`create-olimjon-admin` — bu **scaffolding (loyiha yaratuvchi) CLI**. U xuddi `create-vite` yoki `create-react-app` kabi ishlaydi: bitta buyruq bilan to'liq sozlangan, ishlashga tayyor admin panel loyihasini yaratib beradi.

Yaratilgan loyiha quyidagilarni o'z ichiga oladi:

- ✅ Tayyor **autentifikatsiya** (JWT) va role-based access (RBAC)
- ✅ Tayyor **layout** — sidebar, header, til almashtirish
- ✅ Qayta ishlatiladigan **komponentlar** (Table, Form fields, Modal, Pagination, PDF viewer...)
- ✅ **Ko'p tillilik** (i18next)
- ✅ **API qatlami** (Axios + React Query + query builder)
- ✅ **State management** (Zustand)
- ✅ Sahifa **generatori** skripti (CRUD sahifani bir necha soniyada yaratish)

---

## 🚀 Tezkor boshlash

Ixtiyoriy paket menejeri bilan:

```bash
# npm
npm create olimjon-admin@latest my-app

# yarn
yarn create olimjon-admin my-app

# pnpm
pnpm create olimjon-admin my-app

# bun
bun create olimjon-admin my-app
```

So'ng:

```bash
cd my-app
npm install
# .env faylini oching va VITE_API_ROOT ni o'z backendingizga moslang
npm run dev
```

Loyiha `http://localhost:5173` da ochiladi. 🎉

> **Loyiha nomini ko'rsatmasangiz**, CLI sizdan interaktiv so'raydi:
> ```bash
> npm create olimjon-admin@latest
> # → Project name: (olimjon-admin-app)
> ```

---

## 📦 Talablar

| Dastur   | Minimal versiya |
|----------|-----------------|
| Node.js  | **18+** (LTS tavsiya etiladi: 20 yoki 22) |
| npm      | 9+ (yoki yarn / pnpm / bun) |

Node versiyasini tekshirish:

```bash
node -v
```

---

## ⚙️ CLI imkoniyatlari

CLI siz uchun avtomatik bajaradigan ishlar:

| Imkoniyat | Tavsif |
|-----------|--------|
| 📁 Loyiha nomi | `package.json` ichidagi `name` avtomatik to'ldiriladi |
| 🔒 Xavfsiz nom | Nom npm qoidalariga moslashtiriladi (kichik harf, `-` bilan) |
| 🧩 `.gitignore` | To'g'ri tiklanadi (npm uni o'chirib yuboradi, CLI qayta tiklaydi) |
| 🌱 `.env` | `.env.example` dan avtomatik nusxa olinadi |
| 📦 Paket menejeri | Qaysi menejer bilan chaqirsangiz (`npm`/`yarn`/`pnpm`/`bun`), oxirgi ko'rsatmalar shunga moslashadi |
| ⚠️ Himoya | Papka bo'sh bo'lmasa, ustiga yozishdan oldin tasdiq so'raydi |

CLI'ning **runtime bog'liqliklari yo'q** — tez va yengil ishlaydi.

---

## 🛠 Texnologik stek

### Core
- **React 18.3** — UI kutubxonasi
- **TypeScript 5.6** — type-safe development
- **Vite 6.0** — build tool va dev server
- **React Router v7** — routing

### UI & Styling
- **Ant Design 5.23** — UI komponentlar
- **Tailwind CSS 4.0** — utility-first CSS
- **Solar Icons** — ikonkalar

### State & Data
- **Zustand 5.0** — global state
- **React Query (TanStack) 4.29** — server state
- **Axios 1.7** — HTTP client

### Form & Validation
- **Formik 2.2** + **Yup 1.1**

### Qo'shimcha
- **i18next** — ko'p tillilik
- **CKEditor 5** — matn muharriri
- **React PDF** — PDF ko'ruvchi
- **ApexCharts** — diagrammalar
- **DND Kit** — drag & drop
- **Day.js**, **Lodash**, **qs**

---

## 📂 Loyiha strukturasi

```
my-app/
├── public/                 # statik fayllar
├── src/
│   ├── assets/             # rasm, ikonka, shrift
│   ├── components/         # qayta ishlatiladigan UI komponentlar
│   │   ├── button/
│   │   ├── table/
│   │   ├── modal/
│   │   ├── fields/         # form input'lar (input, select, datepicker, ckeditor...)
│   │   ├── layout/         # sidebar, header, content, language
│   │   ├── pagination/
│   │   ├── pdf-viewer/
│   │   └── ...
│   ├── hooks/              # custom React hook'lar (useHooks, useAccess...)
│   ├── modules/            # umumiy modullar (get, post...)
│   ├── pages/              # sahifalar (login, users, not-found...)
│   ├── providers/          # context provider'lar (api, react-query, antd, i18n)
│   ├── routes/             # route konfiguratsiyasi
│   ├── services/           # API, storage, store, i18n, utils, helpers, ws
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── config.ts               # ilova konfiguratsiyasi
├── generate-page.js        # CRUD sahifa generatori
├── .env.example            # environment namunasi
├── index.html
├── vite.config.ts
└── package.json
```

---

## 📜 Skriptlar

Yaratilgan loyiha ichida:

| Buyruq | Vazifasi |
|--------|----------|
| `npm run dev` | Dev serverni ishga tushiradi (`--host=0.0.0.0`, tarmoqdan ham ochiladi) |
| `npm run build` | Production uchun build qiladi (`dist/`) |
| `npm run build:check` | TypeScript tekshiruvi + build |
| `npm run lint` | ESLint bilan kodni tekshiradi |
| `npm run preview` | Build qilingan loyihani lokal ko'rib chiqadi |

---

## 🔐 Environment (.env) sozlash

CLI `.env.example` dan `.env` ni avtomatik yaratadi. Uni oching va o'zingizga moslang:

```env
NODE_PATH=src
GENERATE_SOURCEMAP=false
CI=false
SKIP_PREFLIGHT_CHECK=true

# Ilova muhiti: "develop" | "master"
REACT_APP_ENV="develop"

# Backend API manzili — ENG MUHIM sozlama
VITE_API_ROOT='http://localhost:8000/api/v1'

# Ixtiyoriy: Yandex Maps API kaliti
VITE_YANDEX_MAPS_API_KEY=''
```

> ⚠️ **`VITE_API_ROOT`** — bu sizning backend manzilingiz. Ilova ishlashi uchun uni to'g'ri kiriting.

---

## ⚡ Sahifa generatori

Loyiha ichida **CRUD sahifani avtomatik yaratuvchi** skript bor. Yangi bo'lim qo'shish uchun qo'lda fayl yozish shart emas:

```bash
node generate-page.js
```

Skript sizdan URL, sahifa sarlavhasi va modul nomini so'raydi, so'ng tayyor `index.tsx` (ro'yxat + jadval) va `form.tsx` (qo'shish/tahrirlash modali) fayllarini yaratib beradi.

---

## 🏗 Build va Deploy

```bash
npm run build
```

Natija `dist/` papkasiga tushadi — uni istalgan statik hostingga (Nginx, Vercel, Netlify, GitHub Pages) joylash mumkin.

**Nginx namuna konfiguratsiyasi (SPA uchun):**

```nginx
server {
    listen 80;
    root /var/www/my-app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## ❓ Tez-tez beriladigan savollar (FAQ)

**S: `npm create olimjon-admin` ishlamadi, "command not found" chiqdi.**
J: npm 7+ kerak (`npm -v` bilan tekshiring). Eski npm'da `npx create-olimjon-admin my-app` ni sinab ko'ring.

**S: Loyiha nomini keyin o'zgartira olamanmi?**
J: Ha — `package.json` ichidagi `name` ni va `index.html` dagi `<title>` ni qo'lda o'zgartiring.

**S: Dev server ochilmadi, oq ekran.**
J: `.env` ichidagi `VITE_API_ROOT` to'g'ri backendga ishora qilayotganini tekshiring.

**S: Boshqa paket menejeri ishlatsam bo'ladimi?**
J: Ha — npm, yarn, pnpm va bun qo'llab-quvvatlanadi.

---

## 📄 Litsenziya

[MIT](./LICENSE) © olimjonkamalov

---

<p align="center">
  <sub>⭐ Foydali bo'lsa, GitHub'da yulduzcha qo'yib qo'ying!</sub>
</p>
