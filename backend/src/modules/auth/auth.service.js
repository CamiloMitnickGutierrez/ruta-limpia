import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import supabase from "../../config/supabase.js"






const registroUsuario = async ({email, nombre, password}) => {

    const passwordHash = await bcrypt.hash(password, 12)

    const {data,error} = await supabase
    .from("usuarios")
    .insert([{
        email: email.trim().toLowerCase(),
        nombre: nombre.trim(),
        password_hash: passwordHash,
        rol: "operaria"
    }])

    if (error) throw new Error(error.message)

    return data;

}

const login = async (email, password) => {

    const { data: usuario, error } = await supabase
        .from("usuarios")
        .select("id, email, password_hash, nombre, rol")
        .eq("email", email.trim().toLowerCase())
        .maybeSingle()

    if (error) {

        console.error("Error en Supabase:", error.message)

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

        throw new Error("CREDENCIALES_INVALIDAS")
    }

    const token = jwt.sign(
        {
            rol: usuario.rol
        },
        process.env.JWT_SECRET,
        {
            subject: String(usuario.id),
            expiresIn: process.env.JWT_EXPIRES_IN || "8h",
            algorithm: "HS256",
            issuer: "ruta-limpia",
            audience: "upb"
        }
    )

  
    return {
        datosUsuario: {
            id: usuario.id,
            email: usuario.email,
            nombre: usuario.nombre,
            rol: usuario.rol
        },
        token
    }

}

export default {login,registroUsuario}