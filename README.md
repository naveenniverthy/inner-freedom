# Inner Freedom

Inner Freedom is a calm, mobile-friendly Next.js web app for people exploring Advaita Vedanta, self-knowledge, and living wisdom in daily life.

The app includes:

- A guided 10-question assessment
- Registration and login with Supabase Auth
- Saved assessment results per user
- A personal dashboard with stage, preparation areas, and next step
- A Daily Insight card that reads from the database
- Preferences for future daily or weekly email insight delivery

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Supabase Auth + Postgres

## Project structure

- `app/` routes and layout
- `components/` reusable UI and client components
- `lib/` assessment logic, stage content, Supabase helpers, dashboard helpers
- `supabase/schema.sql` database schema and policies
- `supabase/seed.sql` optional starter insights

## Local setup

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Copy the environment template:

```bash
cp .env.example .env.local
```

4. Add your Supabase values to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. Start the app:

```bash
npm run dev
```

6. Open `http://localhost:3000`.

## Supabase setup

1. Create a new Supabase project.
2. In the Supabase SQL Editor, run `supabase/schema.sql`.
3. Optionally run `supabase/seed.sql` to add starter daily insights.
4. In Supabase Auth:
   - Enable Email authentication.
   - Turn off email confirmation for fastest local testing, or leave it on if you want verification.
5. Copy the project URL and anon key into `.env.local`.

## Data flow

### Assessment flow

1. A visitor opens `/assessment`.
2. The assessment runs one question at a time.
3. When they finish, the app calculates:
   - total score
   - stage
   - preparation areas
4. The result is shown immediately in the “Your Path” dashboard.
5. The same result is stored temporarily in `localStorage`.
6. If the visitor registers or logs in, the pending result is saved to `assessment_results`.

### Dashboard flow

The protected `/dashboard` route loads:

- the latest saved assessment result
- the latest daily insight
- the user’s email insight preferences

### Daily insight flow

For now, the dashboard and `/daily-insight` route show the latest row from `daily_insights`.

Later, scheduled delivery can use:

- `daily_insights` as the source content
- `preferences` to determine whether a user wants email delivery and how often
- `user_daily_insights` to track what has been delivered and read

## Authentication

The app currently supports:

- Email/password registration
- Email/password login
- Logout
- Protected dashboard route

If a user is not logged in and visits `/dashboard`, middleware redirects them to `/login`.

## Database tables

### `profiles`

- `id`
- `email`
- `full_name`
- `created_at`

### `assessment_results`

- `id`
- `user_id`
- `total_score`
- `stage_key`
- `stage_title`
- `clarity_score`
- `freedom_score`
- `steadiness_score`
- `seeking_score`
- `created_at`

### `daily_insights`

- `id`
- `title`
- `body`
- `category`
- `created_at`

### `user_daily_insights`

- `id`
- `user_id`
- `insight_id`
- `delivered_at`
- `read_at`

### `preferences`

- `id`
- `user_id`
- `daily_insight_email_enabled`
- `daily_insight_frequency`
- `created_at`
- `updated_at`

## Admin-friendly insight management

The simplest admin workflow for now is the Supabase Table Editor:

1. Open the `daily_insights` table
2. Insert a new row with:
   - `title`
   - `body`
   - `category`
3. The newest insight automatically appears on the dashboard and the Daily Insight page

## Deployment later

When you are ready to deploy:

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the same environment variables in the Vercel project settings.
4. Point production to the same Supabase project or a new production project.

## Notes

- This workspace did not include Node.js during generation, so the code was structured carefully but not executed locally here.
- After installing Node and dependencies, run `npm install` and `npm run dev` to verify everything end to end.
