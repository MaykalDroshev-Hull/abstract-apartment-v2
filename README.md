# Abstract Apartment - Booking & Information Website

A modern, multilingual booking website for Abstract Apartment in Paralia Ofriniou, Greece. Built with Next.js 16, featuring a complete reservation system, multi-language support (English, Bulgarian, Greek), and an admin dashboard for managing bookings.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Email**: Nodemailer (Gmail)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Authentication**: Cookie-based sessions with bcrypt

## 📋 Prerequisites

- Node.js 20+ 
- npm, yarn, pnpm, or bun
- Supabase account and project
- Gmail account with App Password (for email notifications)

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd abstract-apartment-v2
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Email Configuration (Gmail)
NEXT_PUBLIC_EMAIL=your-email@gmail.com
NEXT_PUBLIC_EMAIL_PASS=your_gmail_app_password
```

**Note**: For Gmail, you need to generate an App Password:
1. Go to your Google Account settings
2. Security → 2-Step Verification → App passwords
3. Generate a new app password for "Mail"
4. Use this password (not your regular Gmail password)

### 4. Set up the database

Run the SQL schema in your Supabase SQL Editor. The schema is provided in `Schema.sql` (for reference only - table order may need adjustment).

**Important**: The `Booking` table should NOT have a UNIQUE constraint on `CheckInDT` alone. If you need to prevent duplicate bookings for the same apartment and date, use a composite unique constraint on `(CheckInDT, apartmentid)`.

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
abstract-apartment-v2/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── bookings/          # Booking CRUD operations
│   │   └── send-booking-email/ # Email notifications
│   ├── components/            # Shared React components
│   │   ├── Header.tsx         # Main navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx           # Homepage hero section
│   │   └── ...
│   ├── lib/
│   │   └── translations/      # Multi-language support
│   │       ├── index.tsx      # Translation provider
│   │       ├── types.ts       # TypeScript types
│   │       ├── en.ts          # English translations
│   │       ├── bg.ts          # Bulgarian translations
│   │       └── el.ts          # Greek translations
│   ├── about/                 # About page
│   ├── admin/                 # Admin dashboard
│   ├── contact/               # Contact page
│   ├── details/               # Villa details page
│   ├── faq/                   # FAQ page
│   ├── floor-plan/            # Floor plans page
│   ├── gallery/               # Photo gallery
│   ├── getting-here/          # Directions page
│   ├── guide/                 # Local guide
│   ├── rates/                 # Rates & availability
│   ├── reserve/               # Booking flow
│   ├── reviews/               # Guest reviews
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── public/                    # Static assets
│   └── Images/                # Image files
├── Schema.sql                 # Database schema (reference)
└── package.json
```

## 🗄️ Database Structure

### Tables

#### `Booking`
Stores reservation information.

| Column | Type | Description |
|--------|------|-------------|
| `BookingID` | bigint (PK) | Auto-incrementing primary key |
| `CheckInDT` | date | Check-in date (NOT NULL) |
| `CheckOutDT` | date | Check-out date |
| `CustomerID` | bigint (FK) | Reference to Customer table |
| `apartmentid` | bigint (FK) | Reference to apartment table (1=Apartment, 2=Studio) |
| `FullPrice` | double precision | Total booking price |
| `PaidPrice` | double precision | Amount paid |
| `Comments` | text | Additional notes/comments |

**Important**: `CheckInDT` should NOT have a UNIQUE constraint. Use composite unique on `(CheckInDT, apartmentid)` if needed.

#### `Customer`
Stores customer information.

| Column | Type | Description |
|--------|------|-------------|
| `CustomerID` | bigint (PK) | Auto-incrementing primary key |
| `FirstName` | text | Customer first name (NOT NULL) |
| `LastName` | text | Customer last name |
| `Telephone` | text | Phone number |

#### `apartment`
Stores apartment/studio types.

| Column | Type | Description |
|--------|------|-------------|
| `apartmentid` | bigint (PK) | Primary key (1=Apartment, 2=Studio) |
| `name` | text | Apartment name (NOT NULL) |
| `slug` | text | URL slug (UNIQUE) |

#### `admin_users`
Stores admin user accounts.

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Primary key |
| `username` | varchar | Username (UNIQUE, NOT NULL) |
| `password_hash` | varchar | Bcrypt hashed password (NOT NULL) |
| `is_active` | boolean | Account status (default: true) |
| `created_at` | timestamp | Account creation time |
| `updated_at` | timestamp | Last update time |

#### `heartbeat`
Used for monitoring/cron jobs.

## 🌐 Translations System

The app supports three languages:
- **English** (`en`) - Default
- **Bulgarian** (`bg`)
- **Greek** (`el`)

### How it works

1. **Translation Files**: Located in `app/lib/translations/`
   - `en.ts` - English translations
   - `bg.ts` - Bulgarian translations
   - `el.ts` - Greek translations
   - `types.ts` - TypeScript interface definitions

2. **Language Provider**: Uses React Context (`LanguageProvider`) to manage:
   - Current language state
   - Language persistence in localStorage
   - Cookie-based server-side language detection

3. **Usage**:
   ```tsx
   import { useTranslations } from '@/app/lib/translations';
   
   function MyComponent() {
     const t = useTranslations();
     return <h1>{t.home.title}</h1>;
   }
   ```

4. **Adding New Translations**:
   - Add the key to `types.ts` interface
   - Add translations in all three language files (`en.ts`, `bg.ts`, `el.ts`)

5. **Language Persistence**:
   - Stored in `localStorage` (client-side)
   - Stored in cookies (for server-side detection)
   - Defaults to English if not set

## ✨ Key Features

### Booking System
- **Multi-step reservation flow**: Villa selection → Dates & Guests → Details → Review
- **Minimum 3-night stay** enforcement
- **Seasonal pricing** with automatic calculation
- **Promotion**: 1 free night for every 7 nights booked
- **Availability checking** for "both" bookings
- **Email notifications** sent to property owner on booking

### Admin Dashboard
- **View all bookings** with filtering
- **Create, edit, delete bookings**
- **View customer information**
- **Protected routes** with authentication

### Multi-language Support
- **3 languages**: English, Bulgarian, Greek
- **Persistent language selection**
- **Server-side rendering** compatible
- **Language switcher** in header

### Responsive Design
- **Mobile-first** approach
- **Touch-friendly** navigation
- **Optimized images** with Next.js Image
- **Smooth animations** with Framer Motion

## 🚢 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import project in Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables**:
   In Vercel project settings, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_EMAIL_PASS`

4. **Deploy**:
   - Vercel will automatically build and deploy
   - Future pushes to main branch will auto-deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **Render**
- **AWS Amplify**
- **Self-hosted** (Node.js server)

## 📝 Usage Guide

### For Developers

#### Running Locally
```bash
npm run dev
```

#### Building for Production
```bash
npm run build
npm start
```

#### Linting
```bash
npm run lint
```

### For Administrators

#### Accessing Admin Dashboard
1. Navigate to `/admin`
2. Login with your admin credentials
3. Manage bookings, view customers, edit reservations

#### Creating Admin Users
Admin users must be created directly in the database:

```sql
INSERT INTO admin_users (username, password_hash, is_active)
VALUES ('admin', '$2a$10$hashed_password_here', true);
```

Use bcrypt to hash passwords (Node.js):
```javascript
const bcrypt = require('bcryptjs');
const hash = await bcrypt.hash('your-password', 10);
```

### Booking Flow

1. **User selects villa type** (Apartment, Studio, or Both)
2. **Selects dates** (minimum 3 nights)
3. **Enters guest count**
4. **Fills in contact details** (name, email, phone, optional notes)
5. **Reviews booking summary**
6. **Submits reservation**
7. **Receives confirmation** (email sent to property owner)

## 🔧 Configuration

### Email Settings
- **Service**: Gmail (configurable in `app/api/send-booking-email/route.ts`)
- **From**: Uses `NEXT_PUBLIC_EMAIL`
- **To**: Sends to `NEXT_PUBLIC_EMAIL` (property owner)
- **Format**: HTML and plain text

### Pricing
- Configured in `app/reserve/utils/pricing.ts`
- Seasonal rates defined in translation files (`rates.units.apartment.seasons`, `rates.units.studio.seasons`)
- Fallback pricing map in `app/reserve/utils/pricing-map.ts`

### Images
- Store images in `public/Images/`
- Use Next.js `Image` component for optimization
- Supported formats: JPG, PNG, WebP

## 🐛 Troubleshooting

### Booking fails with "duplicate key" error
- **Solution**: Remove UNIQUE constraint on `CheckInDT` in the Booking table
- The same check-in date should be allowed for different apartments

### Email not sending
- Check `NEXT_PUBLIC_EMAIL` and `NEXT_PUBLIC_EMAIL_PASS` are set
- Verify Gmail App Password is correct
- Check server logs for email errors

### Translations not working
- Clear browser localStorage: `localStorage.removeItem('language')`
- Check translation files have matching keys
- Verify `LanguageProvider` wraps the app in `layout.tsx`

## 📄 License

Private project - All rights reserved

## 👥 Support

For issues or questions, contact the development team.

---

**Built with ❤️ for Abstract Apartment**
