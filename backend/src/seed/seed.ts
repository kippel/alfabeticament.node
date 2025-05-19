import { db } from '../db/db'; // importa la instancia de Drizzle
import { users } from '../db/schema'; // importa tus tablas
import { eq } from 'drizzle-orm';

async function seed() {
  // Limpia datos si es necesario
  //await db.delete(users).where(eq(users.email, 'test@example.com'));

  // Inserta datos de ejemplo
  
  await db.insert(users).values([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ]);
  



  console.log('🌱 Seed ejecutado correctamente');
}

seed()
  .catch((err) => {
    console.error('❌ Error ejecutando seed:', err);
    process.exit(1);
  })
  .finally(() => {
    console.log('ddd')
    process.exit(0);
  });