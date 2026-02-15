# Next.js 14 Job Portal

A modern job portal application built with Next.js 14 featuring Clerk authentication, Prisma ORM with PostgreSQL, rich text job descriptions, and responsive design.

## Live Demo

<!-- **Live Website:** [https://nextjs-14-job-portal.vercel.app](https://nextjs-14-job-portal.vercel.app) -->

**GitHub Repository:** [https://github.com/shourovys/nextjs-14-job-portal](https://github.com/shourovys/nextjs-14-job-portal)

---

## Key Features

- **User Authentication** - Secure authentication with Clerk (Google, GitHub, email)
- **Job Posting & Management** - Create, edit, and manage job listings
- **Rich Text Job Descriptions** - WYSIWYG editor using React Draft for job postings
- **Markdown Support** - Render job descriptions with Markdown
- **Image Upload** - Upload company logos and job images with Vercel Blob
- **Responsive Design** - Fully responsive UI using Tailwind CSS
- **Form Validation** - Robust form handling with React Hook Form and Zod
- **Database ORM** - Type-safe database queries with Prisma
- **Job Categories** - Browse jobs by category and location
- **Search & Filter** - Search jobs by title, company, location
- **Apply to Jobs** - Application submission functionality

---

## Technologies Used

### Frontend

- **Next.js 14** - App Router for modern React server components
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication solution
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **React Draft WYSIWYG** - Rich text editor
- **React Markdown** - Markdown renderer
- **Lucide React** - Icon library
- **date-fns** - Date formatting

### Database

- **PostgreSQL** - Relational database
- **Prisma ORM** - Database ORM for type-safe queries

### Storage

- **Vercel Blob** - File storage for images

---

## Prerequisites

- Node.js 18.x or higher
- PostgreSQL database (local or hosted)
- Clerk account for authentication
- Vercel Blob storage (optional for image uploads)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/shourovys/nextjs-14-job-portal.git
cd nextjs-14-job-portal
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/jobportal

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Vercel Blob (optional)
BLOB_READ_WRITE_TOKEN=your-vercel-blob-token
```

### 4. Setup Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Seed database with sample data
npm run seed
```

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## Project Structure

```
nextjs-14-job-portal/
├── prisma/
│   └── schema.prisma        # Prisma schema
├── public/                   # Static assets
├── scripts/
│   └── seed.js             # Database seeding script
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── api/           # API routes
│   │   ├── jobs/          # Job pages
│   │   └── page.tsx      # Home page
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── jobs/        # Job-specific components
│   ├── lib/              # Utility functions
│   │   └── prisma.ts   # Prisma client
│   └── types/            # TypeScript types
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Available Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start development server       |
| `npm run build` | Build for production           |
| `npm run start` | Start production server        |
| `npm run lint`  | Run ESLint                     |
| `npm run seed`  | Seed database with sample data |

---

## License

MIT License

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
