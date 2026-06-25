# Eco-Clean Financiero PRO v9

Versión preparada para Vercel usando Yarn en lugar de npm, para evitar el error `npm error Exit handler never called`.

## Qué contiene

- Dashboard financiero para Eco-Clean.
- Meta diaria base: $4,500 MXN.
- Meta mensual base: $117,000 MXN.
- Captura de ventas, compras, gastos, ingresos extra y pagos de deuda.
- Deudas, reportes, categorías, etiquetas y métodos de pago editables.
- Supabase como almacenamiento en nube.

## Cómo subirlo

1. Crea un repo nuevo en GitHub.
2. Sube el contenido de esta carpeta a la raíz del repo.
3. En Vercel importa el repo.
4. No cambies Build Settings.
5. Solo agrega las variables de entorno.

## Variables de entorno en Vercel

APP_PASSWORD=EcoClean2026*
APP_SESSION_SECRET=eco-clean-juan-jose-sesion-segura-2026-cambiar
SUPABASE_URL=https://efyoehfgsrmunxekpkhe.supabase.co/rest/v1/
SUPABASE_SECRET_KEY=TU_SECRET_KEY_DE_SUPABASE
APP_STATE_ID=eco-clean

## Supabase

En Supabase, abre SQL Editor, pega el contenido de `docs/supabase-schema.sql` y ejecuta Run.

## Importante

No subas tu Secret Key a GitHub. Solo va en Vercel como Environment Variable.
