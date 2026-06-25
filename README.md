# Eco-Clean Financiero PRO v7

Dashboard financiero para Eco-Clean: ventas diarias, meta diaria de $4,500 MXN, compras, gastos, ingresos extra, deudas, reportes y catálogos editables.

## Importante

Esta versión está preparada para Vercel sin tocar configuración avanzada.

- No usa `pnpm`.
- No trae `vercel.json`.
- No trae `.npmrc`.
- No trae `package-lock.json` para evitar lockfiles generados fuera de Vercel.
- Fija Node en `20.x` desde `package.json` para que Vercel no use Node 24 automáticamente.

## Subir a GitHub

Sube el contenido de esta carpeta a la raíz del repositorio. En GitHub deben verse directamente:

- `app`
- `components`
- `docs`
- `lib`
- `package.json`
- `next.config.mjs`

No debe quedar una carpeta dentro de otra.

## Vercel

Importa el repositorio y no cambies Build Settings. Solo agrega Environment Variables:

```env
APP_PASSWORD=EcoClean2026*
APP_SESSION_SECRET=eco-clean-juan-jose-sesion-segura-2026-cambiar
SUPABASE_URL=https://efyoehfgsrmunxekpkhe.supabase.co/rest/v1/
SUPABASE_SECRET_KEY=PEGA_AQUI_TU_SECRET_KEY_DE_SUPABASE
APP_STATE_ID=eco-clean
```

## Supabase

En Supabase abre SQL Editor, pega el contenido de:

```txt
docs/supabase-schema.sql
```

y ejecuta Run.

## Prueba final

1. Entra con la contraseña.
2. Registra una venta de prueba.
3. Abre la app desde otro navegador o celular.
4. Si la venta aparece, Supabase quedó conectado.
