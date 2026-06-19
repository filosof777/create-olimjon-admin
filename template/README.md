# Olimjon Admin Panel

O'zbekiston Ekspertiza tashkiloti uchun mo'ljallangan zamonaviy admin panel tizimi. Ushbu loyiha arizalar, yo'nalishlar, xodimlar va tizim sozlamalarini boshqarish uchun to'liq funksional admin interfeysi taqdim etadi.

## 📋 Mundarija

- [Texnologik Stek](#-texnologik-stek)
- [Asosiy Imkoniyatlar](#-asosiy-imkoniyatlar)
- [O'rnatish](#-ornatish)
- [Ishga Tushirish](#-ishga-tushirish)
- [Proyekt Strukturasi](#-proyekt-strukturasi)
- [Modullar](#-modullar)
- [Environment Konfiguratsiyasi](#-environment-konfiguratsiyasi)
- [Autentifikatsiya](#-autentifikatsiya)
- [Ko'p Tillilik](#-kop-tillilik)
- [Ishlab Chiqish](#-ishlab-chiqish)
- [Build & Deploy](#-build--deploy)

## 🚀 Texnologik Stek

### Core Technologies
- **React 18.3** - UI kutubxonasi
- **TypeScript 5.6** - Type-safe development
- **Vite 6.0** - Build tool va dev server
- **React Router v7** - Client-side routing

### UI & Styling
- **Ant Design 5.23** - UI komponentlar kutubxonasi
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Solar Icons** - Icon library

### State Management
- **Zustand 5.0** - Global state management
- **React Query 4.29** - Server state management
- **LocalStorage** - Persistent state

### Form & Validation
- **Formik 2.2** - Form management
- **Yup 1.1** - Schema validation

### Data Fetching & API
- **Axios 1.7** - HTTP client
- **JWT Bearer Token** - Authentication

### Qo'shimcha Kutubxonalar
- **i18next** - Internationalization (i18n)
- **CKEditor 5** - Rich text editor
- **React PDF** - PDF viewer
- **ApexCharts** - Charts va diagrammalar
- **DND Kit** - Drag & drop functionality
- **Day.js** - Date manipulation
- **Lodash** - Utility functions
- **qs** - Query string parsing

## ✨ Asosiy Imkoniyatlar

### 🔐 Autentifikatsiya va Avtorizatsiya
- JWT Bearer token autentifikatsiya
- Role-based access control (RBAC)
- Permission-based routing
- Auto logout on 401 response
- Secure token storage

### 👥 Foydalanuvchi Boshqaruvi
- **Xodimlar (Employees)** - tizim xodimlari
- **Foydalanuvchilar (Users)** - tashqi foydalanuvchilar
- Rol va ruxsatlar tizimi
- Profile management

### 📝 Arizalar (Applications)
- Ariza yaratish va ko'rish
- Board va Table view
- Status tracking
- Filtrlash va qidiruv
- PDF ko'rish

### 🎯 Yo'nalishlar (Directions)
- Yo'nalishlar CRUD
- Filiallar boshqaruvi
- Nested routing

### 📊 Dashboard
- Statistika va hisobotlar
- Charts va grafik ko'rinishlar
- Real-time ma'lumotlar

### ⚙️ Sozlamalar (22+ modul)
- Mamlakatlar (Countries)
- Hududlar (Regions)
- TNVED kodlar
- Banklar
- O'lchov birliklari
- Lavozimlar
- Boshqarmalar/Bo'limlar
- Sertifikatlar
- Filiallar
- Yuk turlari
- Sahifalar (CMS)
- OKED kodlar
- Kalendar
- Qadoqlash turlari
- Bosqichlar
- Rollar
- Ruxsatlar
- Ekspertiza turlari
- Bitimlar
- Tarjimalar

### 🌍 Ko'p Tillilik
- O'zbek tili (lotin)
- Ўзбек тили (kirill)
- Русский язык
- English

### 📱 Responsive Dizayn
- Mobile-friendly
- Tablet-optimized
- Desktop-focused
- Breakpoint indicator (development)

## 💻 O'rnatish

### Talablar
```bash
Node.js: v18.0.0 yoki yuqori
npm: v9.0.0 yoki yuqori
```

### Loyihani Klonlash
```bash
git clone <repository-url>
cd olimjon-admin
```

### Dependencies O'rnatish
```bash
npm install
```

## 🏃 Ishga Tushirish

### Development Server
```bash
npm run dev
```
Server `http://localhost:5173` da ishga tushadi (yoki `http://0.0.0.0:5173`)

### Production Build
```bash
npm run build
```

### Build Preview
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📁 Proyekt Strukturasi

```
olimjon-admin/
├── public/                      # Static fayllar
├── src/
│   ├── assets/                  # Rasmlar, iconlar, stillar
│   │   ├── icon/               # Icon komponentlar
│   │   └── images/             # Rasm fayllar
│   │
│   ├── components/             # Reusable UI komponentlar
│   │   ├── layout/            # Layout komponentlar (Header, Sidebar, Content)
│   │   ├── fields/            # Form field komponentlar (15+ turlar)
│   │   ├── table/             # Table komponenti
│   │   ├── modal/             # Modal komponenti
│   │   ├── pagination/        # Pagination komponenti
│   │   ├── button/            # Button komponenti
│   │   ├── tabs/              # Tabs komponenti
│   │   ├── panel/             # Panel komponenti
│   │   ├── empty/             # Empty state komponenti
│   │   ├── pdf-viewer/        # PDF viewer komponenti
│   │   ├── notification/      # Notification komponenti
│   │   └── clipboard/         # Clipboard komponenti
│   │
│   ├── pages/                  # Page komponentlar
│   │   ├── login/             # Login sahifasi
│   │   ├── dashboard/         # Dashboard sahifasi
│   │   ├── applications/      # Arizalar moduli
│   │   ├── directions/        # Yo'nalishlar moduli
│   │   ├── employees/         # Xodimlar moduli
│   │   ├── users/             # Foydalanuvchilar moduli
│   │   ├── settings/          # Sozlamalar moduli (22+ sub-modul)
│   │   └── not-found/         # 404 sahifasi
│   │
│   ├── routes/                 # Routing konfiguratsiyasi
│   │   ├── index.tsx          # Asosiy router
│   │   └── settings.tsx       # Settings routes
│   │
│   ├── services/               # Xizmatlar va utility funksiyalar
│   │   ├── api/               # Axios instance
│   │   ├── store/             # Zustand store
│   │   ├── storage/           # LocalStorage wrapper
│   │   ├── i18n/              # i18next konfiguratsiya
│   │   ├── queryBuilder/      # Query builder
│   │   ├── helpers/           # Helper funksiyalar
│   │   ├── utils/             # Utility funksiyalar
│   │   ├── types/             # TypeScript types
│   │   └── ws/                # WebSocket (agar kerak bo'lsa)
│   │
│   ├── providers/              # Context providers
│   │   ├── api/               # API provider
│   │   ├── antd/              # Ant Design config provider
│   │   ├── i18n/              # i18n provider
│   │   └── react-query/       # React Query provider
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useGet.tsx         # GET request hook
│   │   ├── usePost.tsx        # POST/PUT/DELETE request hook
│   │   ├── useAccess.tsx      # Permission check hook
│   │   ├── useOutsideClick.tsx # Outside click detector
│   │   ├── useScroll.tsx      # Scroll hook
│   │   └── useInView.tsx      # Intersection observer hook
│   │
│   ├── modules/                # Feature modules
│   │   ├── form.tsx           # Form module
│   │   ├── get.tsx            # Get module
│   │   └── scroll.tsx         # Scroll module
│   │
│   ├── App.tsx                 # Root komponent
│   ├── main.tsx               # Entry point
│   └── vite-env.d.ts          # Vite type definitions
│
├── config.ts                   # Global konfiguratsiya
├── .env                        # Environment variables
├── vite.config.ts             # Vite konfiguratsiya
├── tsconfig.json              # TypeScript konfiguratsiya
├── tsconfig.app.json          # App-specific TS config
├── tsconfig.node.json         # Node-specific TS config
├── eslint.config.js           # ESLint konfiguratsiya
├── package.json               # Dependencies
└── README.md                  # Ushbu fayl
```

## 🧩 Modullar

### Pages Modullari

#### 1. Dashboard
**Path:** `/`
**Permissions:** `statistics.list`
- Asosiy statistika sahifasi
- Charts va ko'rsatkichlar
- Tizim umumiy ko'rinishi

#### 2. Applications (Arizalar)
**Path:** `/applications`
**Permissions:** `applications.list`, `applications.view`
- Arizalar ro'yxati (Board/Table view)
- Ariza ko'rish
- Status filter
- Search va pagination

#### 3. Directions (Yo'nalishlar)
**Path:** `/directions`
**Permissions:** `directions.list`, `directions.create`, `directions.update`, `directions.delete`
- Yo'nalishlar CRUD
- Filiallar boshqaruvi
- Nested form pages

#### 4. Employees (Xodimlar)
**Path:** `/employees`
**Permissions:** `employees.list`, `employees.create`, `employees.update`, `employees.delete`
- Tizim xodimlari
- Xodim qo'shish/tahrirlash
- Lavozim va bo'limlar tayinlash

#### 5. Users (Foydalanuvchilar)
**Path:** `/users`
**Permissions:** `users.list`, `users.create`, `users.update`, `users.delete`
- Tashqi foydalanuvchilar
- User CRUD operatsiyalari
- Rol tayinlash

#### 6. Settings (Sozlamalar)
**Path:** `/settings`
**Permissions:** har bir modul uchun alohida

**22+ Settings Moduli:**
1. Countries - Mamlakatlar
2. Regions - Hududlar
3. TNVEDs - TNVED kodlar
4. Banks - Banklar
5. Units - O'lchov birliklari
6. Positions - Lavozimlar
7. Departments - Boshqarmalar/Bo'limlar
8. Origin Certificates - Sertifikatlar
9. Branches - Filiallar
10. Cargo Types - Yuk turlari
11. Pages - CMS sahifalar
12. OKEDs - OKED kodlar
13. Calendar - Kalendar
14. Packaging Types - Qadoqlash turlari
15. Steps - Bosqichlar
16. Roles - Rollar
17. Permissions - Ruxsatlar
18. Certificate Origin Act Goals - Ekspertiza maqsadlari
19. Certificate Origin Act Types - Ekspertiza mezonlari
20. Origin Agreements - Bitimlar
21. Translations - Tarjimalar

### Field Komponentlar

`src/components/fields/` da mavjud:
- Input
- Textarea
- Password
- Select
- AsyncSelect
- InputAsyncSelect
- TreeAsyncSelect
- Datepicker
- Rangepicker
- InputMask
- InputPrice
- Checkbox
- Switch
- Upload
- UploadImg
- CKEditor
- InputSearchable
- LoginInput

## 🔧 Environment Konfiguratsiyasi

### .env Fayl
```bash
NODE_PATH=src
GENERATE_SOURCEMAP=false
CI=false
REACT_APP_ENV="master"
VITE_API_ROOT='http://api.expertiza.lc/api/v1/admin'
SKIP_PREFLIGHT_CHECK=true
```

### config.ts
```typescript
const config = {
  DEFAULT_LANGUAGE: 'uz',
  API_ROOT: import.meta.env.VITE_API_ROOT,
  API_LANGUAGES: [
    { id: 1, name: "O'zbek", shortName: "o'zb", code: 'uz', icon: uzIcon },
    { id: 2, name: 'Ўзбек', shortName: 'ўзб', code: 'oz', icon: uzIcon },
    { id: 3, name: 'Русский', shortName: 'рус', code: 'ru', icon: ruIcon },
    { id: 4, name: 'English', shortName: 'eng', code: 'en', icon: enIcon }
  ],
  API_KEYS: [
    "localhost",
    "96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE...",
    // ... boshqa API keys
  ]
}

export default config;
```

## 🔐 Autentifikatsiya

### Login Flow
1. Foydalanuvchi `/login` sahifasiga kiradi
2. Email/username va parol kiritadi
3. Token qaytariladi va `localStorage`ga saqlanadi
4. User ma'lumotlari yuklanadi (permissions bilan)
5. Asosiy sahifaga redirect bo'ladi

### Token Management
```typescript
// Token storage
storage.set('token', token)

// Axios interceptor
api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${storage.get('token')}`
  return config
})

// Auto logout on 401
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      storage.remove('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
```

### Permission Check
```typescript
// useAccess hook
const hasAccess = useAccess(['users.create', 'users.update'])

// Route filtering
const filteredRoutes = helpers.filterRoutesByPermissions(
  routes,
  userPermissions
)
```

## 🌍 Ko'p Tillilik

### Tillar
- **uz** - O'zbek (lotin)
- **oz** - Ўзбек (kirill)
- **ru** - Русский
- **en** - English

### Til O'zgartirish
```typescript
const { setLanguage } = useStore()
setLanguage('ru') // tilni o'zgartiradi
```

## 🛠 Ishlab Chiqish

### Custom Hook Yaratish
```typescript
// src/hooks/useCustomHook.tsx
export const useCustomHook = () => {
  // hook logic
  return {
    data: someData,
    isLoading: false
  }
}
```

### Yangi Page Qo'shish
1. `src/pages/` da yangi papka yaratish
2. `index.tsx` va `form.tsx` fayllarini yaratish
3. `src/routes/index.tsx` ga route qo'shish
4. Permission konfiguratsiyasi



## 📦 Build & Deploy

### Production Build
```bash
npm run build
```
Build natijasi `dist/` papkada hosil bo'ladi.

### Build Options
- TypeScript type checking: `tsc -b`
- Vite build optimization
- Code splitting
- Asset optimization
- Source map generation (optional)

### Deployment
1. Environment variables sozlash (.env)
2. API_ROOT to'g'ri URL ga o'zgartirish
3. `npm run build` buyrug'ini bajarish
4. `dist/` papkani serverga upload qilish
5. Nginx/Apache konfiguratsiyasi (SPA routing uchun)

### Nginx Config Example
```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /path/to/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## 🐛 Debug Mode

Development rejimida responsive breakpoint indicator ko'rinadi (ekran o'ng yuqori burchagida):
- default, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

**Eslatma:** Production build'da ushbu indikatorni o'chirish tavsiya etiladi (App.tsx, 21-33 qatorlar).

## 📝 Code Style

- **ESLint** - kod sifatini tekshirish
- **TypeScript** - type safety
- **Functional Components** - React hooks
- **Named exports** - komponentlar uchun

### ESLint Run
```bash
npm run lint
```

## 🤝 Contributing

1. Fork repository
2. Feature branch yaratish (`git checkout -b feature/amazing-feature`)
3. O'zgarishlarni commit qilish (`git commit -m 'Add amazing feature'`)
4. Branch'ni push qilish (`git push origin feature/amazing-feature`)
5. Pull Request ochish

## 📄 License

Ushbu proyekt O'zbekiston Ekspertiza tashkiloti uchun maxsus ishlab chiqilgan.

## 👥 Support

Muammolar yoki savollar uchun:
- Issue ochish: [Repository Issues](#)
- Email: support@expertiza.uz
- Telegram: @expertiza_support

---

**Versiya:** 0.0.0
**So'nggi yangilanish:** 2025
**Status:** ✅ Active Development
