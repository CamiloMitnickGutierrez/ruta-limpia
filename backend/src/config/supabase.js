// invoco a dontev dependencia para configurar variables de entorno del proyecto
import "dotenv/config"

import {createClient} from "@supabase/supabase-js"



const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
    throw new Error("No se encontraron las credenciales de Supabase");
}

const supabase = createClient(supabaseUrl, supabaseKey , {

    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})

export default supabase