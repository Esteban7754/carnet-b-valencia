-- Tabla de progreso para Carnet B Valencia (Supabase / PostgreSQL).
-- Cada usuario tiene una fila con todo su progreso en formato JSON.
-- Ejecuta este script una vez en el SQL Editor de tu proyecto de Supabase.

create table if not exists public.progreso (
  user_id     uuid primary key references auth.users (id) on delete cascade,
  datos       jsonb not null default '{}'::jsonb,
  actualizado timestamptz not null default now()
);

alter table public.progreso enable row level security;

-- Cada persona solo puede leer y escribir su propia fila.
drop policy if exists "leer mi progreso" on public.progreso;
create policy "leer mi progreso" on public.progreso
  for select using (auth.uid() = user_id);

drop policy if exists "crear mi progreso" on public.progreso;
create policy "crear mi progreso" on public.progreso
  for insert with check (auth.uid() = user_id);

drop policy if exists "actualizar mi progreso" on public.progreso;
create policy "actualizar mi progreso" on public.progreso
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "borrar mi progreso" on public.progreso;
create policy "borrar mi progreso" on public.progreso
  for delete using (auth.uid() = user_id);
