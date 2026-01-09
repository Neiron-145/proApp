import { Capacitor } from "@capacitor/core";
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";
import { Cotizacion } from "@/models/Cotizacion";


let sqlite: SQLiteConnection | null = null;
let db: SQLiteDBConnection | null = null;
const memoria: Cotizacion[] = [];


export const initDB = async () => {
  // 🌐 WEB → usar memoria
  if (Capacitor.getPlatform() === "web") {
    console.warn("SQLite deshabilitado en WEB");
    return;
  }

  sqlite = new SQLiteConnection(CapacitorSQLite);

  db = await sqlite.createConnection(
    "cotizaciones.db",
    false, // encrypted
    "no-encryption", // mode
    1, // version
    false // readonly ✅
  );

  await db.open();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS cotizaciones (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cliente TEXT,
      proyecto TEXT,
      area REAL,
      precio_m2 REAL,
      total REAL,
      fecha TEXT
    );
  `);
};

export const crearCotizacion = async (
  data: Omit<Cotizacion, "id" | "fecha">
) => {
  const nueva: Cotizacion = {
    id: Date.now(),
    ...data,
    fecha: new Date().toISOString(),
  };

  // 🌐 WEB
  if (!db) {
    memoria.unshift(nueva);
    return;
  }

  await db.run(
    `INSERT INTO cotizaciones
     (cliente, proyecto, area, precio_m2, total, fecha)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      nueva.cliente,
      nueva.proyecto,
      nueva.area,
      nueva.precio_m2,
      nueva.total,
      nueva.fecha,
    ]
  );
};

export const obtenerCotizaciones = async (): Promise<Cotizacion[]> => {
  // 🌐 WEB
  if (!db) {
    return memoria;
  }

  const res = await db.query(`SELECT * FROM cotizaciones ORDER BY id DESC`);
  return (res.values as Cotizacion[]) ?? [];
};
