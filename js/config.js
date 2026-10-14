/* Configuración de cuentas en la nube (opcional).
 *
 * Si lo dejas vacío, las cuentas y el progreso se guardan en este navegador.
 * Puedes pasar el progreso a otro dispositivo con Exportar e Importar en «Mi perfil».
 *
 * Para usar la misma cuenta en el móvil y en el ordenador:
 *   1. Crea un proyecto gratuito en https://supabase.com
 *   2. En SQL Editor, ejecuta el fichero supabase/schema.sql de este repositorio.
 *   3. En Project Settings > API, copia la "Project URL" y la clave "anon public" y pégalas aquí.
 *   4. (Opcional) En Authentication > Providers > Email, desactiva "Confirm email"
 *      para entrar sin tener que confirmar el correo.
 *
 * La clave "anon" es pública por diseño: la seguridad la ponen las reglas (RLS) de schema.sql.
 */
window.CARNET_CONFIG = {
  supabaseUrl: "",
  supabaseKey: ""
};
