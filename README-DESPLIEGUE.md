# Tarjeta Digital — Dra. Daismine Pérez
## Guía para publicar en Vercel (gratis, sin instalar nada en tu computadora)

Este proyecto es una tarjeta de presentación digital construida con Next.js.
Sigue estos pasos tal cual y en unos 10 minutos tendrás tu enlace permanente,
listo para compartir por WhatsApp con miniatura incluida.

---

## Lo que necesitas

- Una cuenta de **email** (Gmail sirve)
- Los archivos de esta carpeta (`tarjeta-dra-daismine`)

---

## PASO 1 — Crear cuenta en GitHub (si no tienes)

1. Entra a **https://github.com** y pulsa **Sign up**.
2. Regístrate con tu correo, crea una contraseña y elige un nombre de usuario.
3. Verifica tu email (te llegará un código).

## PASO 2 — Subir los archivos a GitHub

1. Ya con la sesión iniciada, entra a **https://github.com/new**
2. En **Repository name** escribe por ejemplo: `tarjeta-dra-daismine`
3. Deja las opciones por defecto (público) y pulsa **Create repository**.
4. En la pantalla que aparece, pulsa el enlace **"uploading an existing file"**.
5. Abre la carpeta `tarjeta-dra-daismine` en tu computadora y **arrastra TODO su contenido**
   (las carpetas `src`, `public` y todos los archivos sueltos) al área de subida de GitHub.
   - IMPORTANTE: arrastra el *contenido* (no la carpeta contenedora) para que `package.json`
     quede en la raíz del repositorio.
   - La subida puede tardar unos minutos. Espera a que procese todo.
6. Abajo pulsa el botón verde **Commit changes**.

## PASO 3 — Publicar en Vercel

1. Entra a **https://vercel.com** y pulsa **Sign Up** → elige **Continue with GitHub**
   (autoriza el acceso cuando lo pida).
2. En el panel, pulsa **Add New... → Project**.
3. En la lista verás el repositorio `tarjeta-dra-daismine` → pulsa **Import**.
4. En **Framework Preset** debe decir automáticamente **Next.js** (no toques nada más).
5. (Opcional) En **Project Name** puedes poner el nombre que quieras; será parte del enlace.
6. Pulsa **Deploy** y espera 1–3 minutos.
7. ¡Listo! Verás la pantalla de celebración con tu enlace, algo así como:
   `https://tarjeta-dra-daismine.vercel.app`

## PASO 4 — Probar la miniatura de WhatsApp

1. Copia tu enlace de Vercel.
2. Ábrelo en el navegador para confirmar que la tarjeta carga.
3. Envíale el enlace a un contacto (o a ti mismo/a) por WhatsApp:
   verás la **miniatura con la foto de la Dra., su nombre y los teléfonos**.

> Nota: WhatsApp guarda en caché la vista previa de cada enlace. Si algún día actualizas
> la miniatura y WhatsApp sigue mostrando la anterior, comparte el enlace agregando un
> `?v=2` al final (ejemplo: `https://tu-enlace.vercel.app/?v=2`) o espera unas horas.

---

## Cómo actualizar la tarjeta más adelante

1. Entra a tu repositorio en GitHub y abre el archivo que quieras cambiar:
   - **Textos, servicios y teléfonos**: `src/app/page.tsx` (los teléfonos están al inicio,
     en la constante `telefonos`).
   - **Título y descripción para Google/WhatsApp**: `src/app/layout.tsx`.
2. Pulsa el ícono de lápiz (✎) **Edit**, cambia el texto, y abajo pulsa **Commit changes**.
3. Vercel detecta el cambio y **publica la versión nueva automáticamente** en ~1 minuto.

## Dominio propio (opcional)

1. Compra un dominio (ej. `dradaismine.com`) en Namecheap, GoDaddy o Hostinger.
2. En Vercel: tu proyecto → **Settings → Domains → Add** → escribe tu dominio.
3. Vercel te mostrará los registros DNS para copiar en tu proveedor. Listo, HTTPS incluido.

---

## ¿Qué hay en cada archivo?

| Archivo / carpeta | Para qué sirve |
|---|---|
| `src/app/page.tsx` | **Toda la tarjeta**: foto, nombre, servicios animados, botones de contacto |
| `src/app/layout.tsx` | Título, descripción y **miniatura de WhatsApp** (Open Graph) |
| `src/app/globals.css` | Colores y animaciones CSS (marquee, destellos, brillos) |
| `public/foto-dra-daismine.png` | Foto de la doctora (reemplázala por otra con el mismo nombre si hace falta) |
| `public/og-tarjeta.jpg` | **Miniatura que muestra WhatsApp** al compartir el enlace (1200x630) |
| `public/contacto-dra-daismine-perez.vcf` | Tarjeta de contacto que descarga el botón "Guardar contacto" |
| `package.json` | Definición del proyecto y dependencias |
| `next.config.ts` | Configuración de Next.js |

## Ejecutar en tu propia computadora (opcional)

Si algún día quieres verla localmente: instala Node.js (nodejs.org), abre una terminal
en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

y abre `http://localhost:3000`.
