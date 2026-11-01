import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import supabase from "../../config/supabase.js"

const login = async (email,password) => {

    const {data:usuario , error } = await supabase
    .from("usuarios")
    .select("id,email,password_hash,nombre,rol")
    .eq("email",email.trim().toLowerCase())
    .maybeSingle()

    if (error) {

        console.error("error en supabase:", error.message)

        throw new Error("ERROR_DATABASE")
    }

    if (!usuario) {

        throw new Error("CREDENCIALES_INVALIDAS")
    }

    const passwordValida = await bcrypt.compare(

        password,
        usuario.password_hash
    )

    if (!passwordValida) {

        throw new Error("PASSWORD_INVALID")
    }

    const token = jwt.sign(

        {
            rol: usuario.rol
        },
        process.env.JWT_SECRET,
        {
            subject: String(usuario.id),
            expiresIn: process.env.JWT_SECRET || "8h",
            algorithm: "HS256",
            issuer: "ruta-limpia",
            audience: "upb"
        }
    )

    const {id,email,nombre,rol} = datosUsuario

    return {
        datosUsuario: {id,email,nombre,rol},
        token
    }


}

export default login