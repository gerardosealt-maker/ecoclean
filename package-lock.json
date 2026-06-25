# Guía rápida para publicar Eco-Clean Financiero PRO v6

## Paso 1 — Supabase

1. Entra a Supabase.
2. Abre el proyecto de Eco-Clean.
3. Ve a **SQL Editor**.
4. Da clic en **New query**.
5. Copia todo el contenido de `docs/supabase-schema.sql`.
6. Pégalo y da clic en **Run**.

## Paso 2 — GitHub

Sube la carpeta completa al repositorio.
En la raíz del repositorio debes ver directamente:

- `package.json`
- `package-lock.json`
- `app`
- `components`
- `lib`
- `docs`
- `next.config.mjs`

No subas archivos `.env` reales.

## Paso 3 — Vercel

Crea un proyecto nuevo desde GitHub.

No cambies nada de Build Settings:

- Install Command: default
- Build Command: default
- Output Directory: default
- Root Directory: default

Solo agrega estas variables de entorno:

```env
APP_PASSWORD=EcoClean2026*
APP_SESSION_SECRET=eco-clean-juan-jose-sesion-segura-2026-cambiar
SUPABASE_URL=https://efyoehfgsrmunxekpkhe.supabase.co/rest/v1/
SUPABASE_SECRET_KEY=PEGA_AQUI_LA_SECRET_KEY_DE_SUPABASE
APP_STATE_ID=eco-clean
```

Después presiona **Deploy**.

## Prueba final

1. Abre la URL de Vercel.
2. Entra con la contraseña de `APP_PASSWORD`.
3. Registra una venta de prueba.
4. Abre la app desde el celular.
5. Si aparece la venta, Supabase quedó sincronizando.
