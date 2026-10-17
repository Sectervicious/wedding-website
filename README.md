# Wedding website (Anna & Márton)

Bilingual (Hungarian + English) Next.js wedding site with schedule, venues, travel, dress code, FAQ, contact, and RSVP/survey. Built for **free hosting on Vercel Hobby**.

Placeholder names/date/venues — edit copy in `src/lib/i18n/dictionaries.ts`.

## Local development

```bash
npm install
cp .env.example .env.local   # optional until you wire RSVP
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/hu`. English: `/en`.

```bash
npm run build
npm start
```

## Deploy on Vercel (Hobby / free)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables (see below) in **Project → Settings → Environment Variables**.
5. Deploy. Custom domain is optional and free on Hobby.

No paid plan is required for this stack.

## RSVP storage (free paths)

The form posts to `POST /api/rsvp`. Without env vars, the UI shows a friendly “not configured yet” message — the site still builds and deploys.

Configure **one** of the following.

### Option A — Formspree (simplest)

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the form id from the endpoint `https://formspree.io/f/xxxxxx`.
3. Set:

```bash
FORMSPREE_FORM_ID=xxxxxx
```

Submissions appear in the Formspree inbox (and optional email notifications).

### Option B — Supabase (free tier)

1. Create a project at [supabase.com](https://supabase.com).
2. Run this SQL in the SQL editor:

```sql
create table if not exists public.rsvps (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  attending text not null check (attending in ('yes', 'no')),
  plus_one boolean not null default false,
  plus_one_name text,
  diet text,
  message text,
  locale text
);

-- Service role inserts from the API route; tighten RLS for your threat model later.
alter table public.rsvps enable row level security;
```

3. Set:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
# optional:
SUPABASE_RSVP_TABLE=rsvps
```

`SUPABASE_SERVICE_ROLE_KEY` is **server-only** — never prefix it with `NEXT_PUBLIC_`.

### Priority

If `FORMSPREE_FORM_ID` is set, Formspree is used. Otherwise Supabase is used when both Supabase vars are present.

### RSVP fields

- Name, email  
- Attendance (yes / no)  
- +1 (yes / no) and optional +1 name  
- Diet / allergies  
- Optional message  
- Locale (`hu` / `en`)

## Environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `FORMSPREE_FORM_ID` | One path | Formspree form id |
| `NEXT_PUBLIC_SUPABASE_URL` | Alt path | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Alt path | Server insert key |
| `SUPABASE_RSVP_TABLE` | No | Table name (default `rsvps`) |

See `.env.example`.

## Project structure

```
src/app/[locale]/     # /hu and /en pages
src/app/api/rsvp/     # RSVP API
src/components/       # Sections + form
src/lib/i18n/         # Dictionaries
src/lib/rsvp.ts       # Formspree / Supabase adapters
```

## Customizing

- Copy / names / dates: `src/lib/i18n/dictionaries.ts`
- Visual system: `src/app/globals.css` (CSS variables)
- Map links: `venues.*.mapUrl` in the dictionaries
