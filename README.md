# Zeuz Calistenia — Web de producción

La página principal `index.html` utiliza la versión 3 oscura con fotos, seleccionada para producción. La versión 1 preparada se conserva en `index-v1.html`. Las referencias originales se conservan en `index1.html`, `index2.html` (antigua principal) e `index3.html`; no se incluyen en el paquete de producción.

## Compilar y revisar

```sh
npm ci
npm run build
npm run preview
```

La salida publicable es **dist/**. Los estilos Tailwind y los iconos Lucide se sirven localmente. Google Fonts sigue siendo un recurso externo. Las fotos JPEG originales se conservan en assets y la publicación utiliza copias WebP optimizadas.

## Contacto

- WhatsApp: +54 9 341 372-6000, configurado en `site-config.js`.
- Instagram: https://www.instagram.com/zeuzcalistenia.arg/
- Dirección: San Juan 1254, Concordia, Entre Ríos, Argentina.
- No hay descuentos ni cupón promocional.

Los formularios y el carrito preparan mensajes de WhatsApp. El visitante debe enviarlos y el gimnasio confirma la inscripción o pedido; la web no guarda consultas ni procesa pagos.

## Pendientes antes de publicar

Planes y horarios confirmados por el gimnasio. Clase suelta: $6.000, descontable del total al inscribirse; 2 días: $36.000; 3 días: $50.000; 4 días: $53.000; pase libre: $58.000. Sin clase gratuita. Lunes, miércoles y viernes de 7:30 a 22:00; martes y jueves de 13:00 a 21:00; sábados de 10:00 a 12:00. Los precios de los productos de tienda siguen pendientes de confirmar. Revisar que historia, testimonios y descripción del entrenador del diseño original correspondan al gimnasio.

El workflow existente de GitHub Pages ahora instala dependencias, compila y publica únicamente `dist/`. La publicación activa está en https://zeuz-calistenia.nanynomo7.workers.dev/. Se desplegó mediante la API de Cloudflare en el Worker `zeuz-calistenia`. `npm run build:worker` genera `.build/worker.mjs`, que incorpora únicamente los archivos utilizados por la versión 3. Este despliegue utiliza solicitudes de Workers; no es un despliegue de Workers Static Assets. Los límites y el plan de la cuenta Cloudflare aplican. El workflow de GitHub Pages se conserva como alternativa y no es el alojamiento de esta publicación.
