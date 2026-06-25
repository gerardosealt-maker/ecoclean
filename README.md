# Eco-Clean Financiero PRO v6

Dashboard financiero para **Eco-Clean**, basado en el Excel PRO:

- Ventas diarias.
- Meta diaria de **$4,500 MXN**.
- Meta mensual calculada por días objetivo.
- Compras de mercancía.
- Gastos operativos.
- Ingresos y gastos extra.
- Control de deudas.
- Resumen mensual y reporte anual.
- Categorías editables con color e ícono.
- Métodos de pago editables.
- Sin inventario, para mantenerlo enfocado en finanzas.

## Importante

Este proyecto está hecho para Vercel con configuración automática.
No cambies Install Command, Build Command, Output Directory ni Root Directory.

## Variables de entorno

```env
APP_PASSWORD=EcoClean2026*
APP_SESSION_SECRET=eco-clean-juan-jose-sesion-segura-2026-cambiar
SUPABASE_URL=https://efyoehfgsrmunxekpkhe.supabase.co/rest/v1/
SUPABASE_SECRET_KEY=tu_secret_key
APP_STATE_ID=eco-clean
```

## Supabase

Ejecuta `docs/supabase-schema.sql` en SQL Editor.

## Desarrollo local

```bash
npm install
npm run dev
```
