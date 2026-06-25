-- Eco-Clean Financiero PRO v6
-- Supabase > SQL Editor > New query > Run

create table if not exists public.eco_clean_state (
  id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.eco_clean_state enable row level security;

-- La app usa la Secret Key desde servidor en Vercel.
-- No necesitas crear políticas públicas.
