const SUPABASE_URL = "https://kevinitzeuvtobijvzga.supabase.co"
const SUPABASE_KEY= "sb_publishable_eesjjwwa6NgO3NH8VuXZ0g_JEpALxVa"


async function getReports() {
  // Construimos la URL completa del endpoint
  const url = `${SUPABASE_URL}/rest/v1/reports`;
 
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(
        `Error HTTP ${response.status}: ${response.statusText} — ${errorBody}`
      );
    }
 
    // Parseamos el JSON y lo retornamos como array de JavaScript
    const data = await response.json();
    return data;
  } catch (error) {
    // Re-lanzamos el error para que quien llame a getReports()
    // pueda decidir cómo manejarlo (mostrar mensaje, reintentar, etc.)
    throw new Error(`Fallo al obtener reportes: ${error.message}`);
  }
}
 
// Exportamos para que los tests y otros módulos puedan importar
module.exports = { getReports };
