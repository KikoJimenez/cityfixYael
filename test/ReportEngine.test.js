const { getReports } = require("../src/ReportEngine");

jest.setTimeout(10000);
 
// Agrupamos los 3 tests bajo un describe para mejor legibilidad
describe("getReports() — Conexión E2E con Supabase", () => {
 
  // Variable compartida entre tests para no hacer múltiples peticiones
  let reports;
 
  // beforeAll se ejecuta UNA SOLA VEZ antes de todos los tests del grupo.
  // Aquí hacemos la petición real y guardamos el resultado.
  beforeAll(async () => {
    reports = await getReports();
  });
 
  // ──────────────────────────────────────────────────────────
  // TEST 1: La conexión fue exitosa y devuelve un Array real
  // ──────────────────────────────────────────────────────────
  test("debe devolver un Array de JavaScript auténtico", () => {
    // Array.isArray() es la forma correcta de verificar arrays en JS
    // (typeof [] devuelve "object", lo cual es ambiguo)
    expect(Array.isArray(reports)).toBe(true);
  })});