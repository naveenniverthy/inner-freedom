create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  created_at timestamptz not null default now()
);

create table if not exists public.preferences (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  daily_insight_email_enabled boolean not null default false,
  daily_insight_frequency text not null default 'daily' check (daily_insight_frequency in ('daily', 'weekly')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.assessment_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  total_score integer not null check (total_score between 10 and 40),
  stage_key text not null,
  stage_title text not null,
  clarity_score integer not null check (clarity_score between 0 and 100),
  freedom_score integer not null check (freedom_score between 0 and 100),
  steadiness_score integer not null check (steadiness_score between 0 and 100),
  seeking_score integer not null check (seeking_score between 0 and 100),
  created_at timestamptz not null default now()
);

create table if not exists public.daily_insights (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  category text,
  created_at timestamptz not null default now()
);

create table if not exists public.user_daily_insights (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  insight_id uuid not null references public.daily_insights(id) on delete cascade,
  delivered_at timestamptz not null default now(),
  read_at timestamptz
);

create index if not exists assessment_results_user_created_at_idx
  on public.assessment_results(user_id, created_at desc);

create index if not exists daily_insights_created_at_idx
  on public.daily_insights(created_at desc);

create index if not exists user_daily_insights_user_id_idx
  on public.user_daily_insights(user_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists preferences_set_updated_at on public.preferences;
create trigger preferences_set_updated_at
before update on public.preferences
for each row
execute procedure public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.preferences enable row level security;
alter table public.assessment_results enable row level security;
alter table public.daily_insights enable row level security;
alter table public.user_daily_insights enable row level security;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
on public.profiles for select
using (auth.uid() = id);

drop policy if exists "Users can upsert own profile" on public.profiles;
create policy "Users can upsert own profile"
on public.profiles for insert
with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id);

drop policy if exists "Users can view own preferences" on public.preferences;
create policy "Users can view own preferences"
on public.preferences for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own preferences" on public.preferences;
create policy "Users can insert own preferences"
on public.preferences for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own preferences" on public.preferences;
create policy "Users can update own preferences"
on public.preferences for update
using (auth.uid() = user_id);

drop policy if exists "Users can view own assessment results" on public.assessment_results;
create policy "Users can view own assessment results"
on public.assessment_results for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own assessment results" on public.assessment_results;
create policy "Users can insert own assessment results"
on public.assessment_results for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can view own user_daily_insights" on public.user_daily_insights;
create policy "Users can view own user_daily_insights"
on public.user_daily_insights for select
using (auth.uid() = user_id);

drop policy if exists "Users can update own user_daily_insights" on public.user_daily_insights;
create policy "Users can update own user_daily_insights"
on public.user_daily_insights for update
using (auth.uid() = user_id);

drop policy if exists "Daily insights are publicly readable" on public.daily_insights;
create policy "Daily insights are publicly readable"
on public.daily_insights for select
using (true);
