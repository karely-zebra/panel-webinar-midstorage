/**
 * Configuración del panel del webinar de Midstorage Holding (3 dic 2026). La
 * plantilla `panel-fuente.html` no sabe de qué grupo se trata: todo vive aquí.
 *
 * Es la unión de los paneles anteriores:
 *   - ARKAI: datos en vivo de Kommo vía n8n, Reporte, presupuesto, formulario
 *     WEBINAR y objetivos editables.
 *   - One Storage / The Palms: pestaña de Difusiones (envíos y respuestas) y
 *     traducción del ID de Kommo del asesor a su nombre.
 *
 * No hay Google Sheets: el workflow de n8n "ZEBRA | MIDSTORAGE | Panel webinar
 * · datos" consulta Kommo (midstorage.kommo.com) en cada lectura y devuelve los
 * leads que entraron a la etapa Webinar del embudo LINER desde el 4 nov, con su
 * asesor del glosario "Midstorage"."09_glosario_asesores_midstorage". El panel
 * lo pide cada minuto.
 */

const GRUPOS = [
  {
    id: "midstorage",
    salida: ".",
    titulo: "Webinar Midstorage Holding",
    marca: "MS",
    subtitulo: "3 dic 2026 · 7:30 PM",
    archivo: "Kommo · etapa Webinar (LINER)",
    hora: "7:30 PM",
    api: "https://n8n-n8n.9qd6cz.easypanel.host/webhook/midstorage-webinar?k=fac8b0df9fb3da5f475f2ef7",
    fuenteNombre: "Kommo · etapa Webinar",
    etiquetaRegistros: "Registros al webinar",
    // Leads de 02_entrada_leads_midstorage con Estrategia = Webinar desde el 4 nov.
    etiquetaFormulario: "Leads del formulario WEBINAR",
    claveLocal: "webinar-midstorage-objetivos",
    // Vista "Reporte": el machote del reporte de métricas de webinars (pauta de Meta incluida).
    reporte: true,
    // Desde cuándo suma la pauta de Meta y las difusiones (lo mismo que en n8n).
    pautaDesde: "4 nov",
    // Presupuesto de pauta aprobado para el webinar, en MXN.
    presupuesto: 170000,
    // Respaldo para nombrar asesores aunque falten en el glosario.
    asesoresPorId: {
      12260927: "Ana Hernández",
      13326296: "Ricardo Maza",
      14579251: "Edwin Euceda",
      14787567: "Alejandra May",
      15481887: "Arlette Zuñiga",
      15738151: "Fernando Alcaraz",
      15948819: "Rafael Turullols",
      16060143: "Gerardo Acosta", // todavía no está en el glosario de Postgres
    },
    // Fechas en dd/mm/aaaa. Las metas van por nombre del asesor.
    // Equipo = reparto de Holding (el mismo de One Storage) más Gerardo Acosta,
    // que ya recibe leads de la campaña. Objetivo y metas son provisionales:
    // se ajustan desde el panel (Objetivos).
    evento: {
      anio: "2026",
      objetivo: 160,
      fechaInicio: "04/11/2026",
      fechaWebinar: "03/12/2026",
      asesores: [
        { id: "14787567", nombre: "Alejandra May" },
        { id: "12260927", nombre: "Ana Hernández" },
        { id: "15481887", nombre: "Arlette Zuñiga" },
        { id: "14579251", nombre: "Edwin Euceda" },
        { id: "15738151", nombre: "Fernando Alcaraz" },
        { id: "16060143", nombre: "Gerardo Acosta" },
        { id: "15948819", nombre: "Rafael Turullols" },
        { id: "13326296", nombre: "Ricardo Maza" },
      ],
      metas: {
        "Alejandra May": 20,
        "Ana Hernández": 20,
        "Arlette Zuñiga": 20,
        "Edwin Euceda": 20,
        "Fernando Alcaraz": 20,
        "Gerardo Acosta": 20,
        "Rafael Turullols": 20,
        "Ricardo Maza": 20,
      },
    },
    hojas: [
      { nombre: "General", rol: "general" },
      { nombre: "Registros", rol: "registros" },
      { nombre: "Formulario WEBINAR", rol: "formulario" },
      { nombre: "Difusiones", rol: "difusiones" },
    ],
  },
];

module.exports = { GRUPOS };
