# Panel del webinar · Midstorage Holding

Avance en vivo de los registros al webinar de Midstorage Holding (3 dic 2026,
7:30 PM). Lo que está en la raíz se publica en GitHub Pages.

Es la unión de los paneles de One Storage y ARKAI: la plantilla de ARKAI
(Kommo vía n8n, vista Reporte, presupuesto, formulario WEBINAR, objetivos
editables) más la pestaña **Difusiones** de One Storage / The Palms.

La página es un solo archivo estático. Cada 60 segundos pide los datos a un
endpoint de n8n (`ZEBRA | MIDSTORAGE | Panel webinar · datos`), que consulta
en ese momento:

- **Registros**: Kommo (midstorage.kommo.com), cada lead que entró a la etapa
  **Webinar** del embudo **LINER** desde el 4 nov 2026. Sigue contando aunque
  después cambie de etapa.
- **Formulario WEBINAR**: `"Midstorage"."02_entrada_leads_midstorage"` con
  Estrategia = Webinar desde el 4 nov (campaña "MS Holding | Leads | Webinar
  3 dic"). Se mide aparte y no suma al objetivo de registros.
- **Difusiones**: envíos = leads con el campo *Difusión* lleno en Kommo;
  respuestas = cambios del campo *Botón*. Una respuesta con "registr" cuenta
  como positiva.
- **Inversión**: Meta Ads, cuenta 1354087145561940, campañas con "WEBINAR" en
  el nombre desde el 4 nov (n8n la guarda 15 minutos).
- **Asesores**: `"Midstorage"."09_glosario_asesores_midstorage"`. Gerardo
  Acosta (16060143) todavía no está en el glosario; n8n y `grupos.js` lo
  nombran mientras tanto.

Nada se copia ni se guarda aquí.

## Regenerar

    cd src && node build-web.js

Luego `git add -A && git commit && git push`. Solo hace falta si cambias el
diseño o `src/grupos.js` (objetivo, fechas, asesores, metas, presupuesto).
