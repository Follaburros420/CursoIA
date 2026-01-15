/**
 * Script para migrar códigos legacy de VALID_CODES a Supabase
 * 
 * Este script migra los códigos de acceso existentes a la tabla customers
 * como usuarios con plan vitalicio.
 * 
 * Uso:
 *   node scripts/migrate-valid-codes.js
 * 
 * Requiere variables de entorno:
 *   SUPABASE_URL - URL de tu proyecto Supabase
 *   SUPABASE_SERVICE_ROLE_KEY - Service role key (para insertar sin RLS)
 */

import { createClient } from '@supabase/supabase-js';

// Las variables de entorno se cargan automáticamente desde process.env
// Asegúrate de tenerlas configuradas en tu entorno o archivo .env

// Códigos legacy a migrar (de Login.vue)
const LEGACY_CODES = [
  '038373', '206304', '484643', '141155', '424433', '768857', '664379', 
  '251143', '955567', '252931', '359932', '434187', '719782', '836543', 
  '598785', '271272', '986701', '332139', '243541', '757132', '338524', 
  '128497', '839336', '714834', '398533', '094928', '276912', '036133', 
  '712549', '373308', '698108', '875968', '254933', '086583', '595314'
];

async function migrateCodes() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('❌ Error: Faltan variables de entorno');
    console.error('   Requiere: SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY');
    console.error('   O: VITE_SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }

  // Crear cliente con service_role para bypass RLS
  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  console.log('🚀 Iniciando migración de códigos legacy...\n');
  console.log(`📊 Total de códigos a migrar: ${LEGACY_CODES.length}\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const code of LEGACY_CODES) {
    try {
      // Verificar si el código ya existe
      const { data: existing } = await supabase
        .from('customers')
        .select('id, access_code')
        .eq('access_code', code)
        .single();

      if (existing) {
        console.log(`⏭️  Código ${code} ya existe en la base de datos, omitiendo...`);
        skipCount++;
        continue;
      }

      // Insertar nuevo registro
      const { data, error } = await supabase
        .from('customers')
        .insert({
          email: `legacy-${code}@migrated.local`, // Email temporal para códigos legacy
          access_code: code,
          plan_type: 'vitalicio',
          subscription_status: 'activa',
          currency: 'COP',
          // No incluimos phone, wompi_transaction_id, etc. porque son códigos legacy
        })
        .select()
        .single();

      if (error) {
        console.error(`❌ Error migrando código ${code}:`, error.message);
        errorCount++;
      } else {
        console.log(`✅ Código ${code} migrado exitosamente`);
        successCount++;
      }
    } catch (err) {
      console.error(`❌ Error inesperado con código ${code}:`, err.message);
      errorCount++;
    }
  }

  console.log('\n📊 Resumen de migración:');
  console.log(`   ✅ Exitosos: ${successCount}`);
  console.log(`   ⏭️  Omitidos (ya existían): ${skipCount}`);
  console.log(`   ❌ Errores: ${errorCount}`);
  console.log(`   📦 Total procesados: ${LEGACY_CODES.length}\n`);

  if (errorCount === 0) {
    console.log('🎉 ¡Migración completada exitosamente!');
    console.log('\n💡 Próximos pasos:');
    console.log('   1. Verificar que todos los códigos funcionen correctamente');
    console.log('   2. Una vez confirmado, eliminar LEGACY_VALID_CODES de Login.vue');
    console.log('   3. Actualizar los emails de los usuarios legacy si tienes esa información\n');
  } else {
    console.log('⚠️  Migración completada con errores. Revisa los logs arriba.\n');
    process.exit(1);
  }
}

// Ejecutar migración
migrateCodes().catch((error) => {
  console.error('❌ Error fatal durante la migración:', error);
  process.exit(1);
});
