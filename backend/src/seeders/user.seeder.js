import "dotenv/config"
import bcrypt from "bcryptjs"
import supabase from "../config/supabase.js"


const usuariosIniciales = async () =>{

    const usuarios = [{

        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
        nombre: process.env.ADMIN_NOMBRE,
        rol: "admin"
    },
    {
        email: process.env.OPERARIA_EMAIL,
        password: process.env-OPERARIA_PASSWORD,
        nombre: process.env.OPERARIA_NOMBRE,
        rol: "operaria"
        
    }
]

    try {

        for (const user of usuarios){

            if (!user.email || !user.password || !user.nombre){
                throw new Error(
                    `faltan datos para la semilla de user ${user.rol}`
                )
            }

            const {data: userExistente , error: error} = await supabase

                .from("usuarios")
                .select("id,email")
                .eq("email",user.email)
                .maybeSingle()

            if (error) {
                throw error
            }

            if (userExistente) {

                console.log("el usuario ya existe")

                continue
            }

            const passwordHash = await bcrypt.hash(user.password,12)

            const {error: errorIn } = await supabase
            .from("usuarios")
            .insert({

                email: user.email,
                password: passwordHash,
                nombre: user.nombre,
                rol: user.rol

            })

            if (errorIn) {

                throw errorIn
            }

            console.log(`usuario creado ${user.email}`)

        }

        console.log("semillas de usuarios insertadas con exito")

        
    } catch (error) {


        console.error("Error en sembrar semillas de usuarios:",error.message)

        process.exitCode = 1
        
    }














}

usuariosIniciales()