import jwt from "jsonwebtoken"
import supabase from "../../config/supabase.js"




const verificarToken = async (req,res,next) => {

    try {

        const authCabezera = req.headers.authorization

        if (!authCabezera || !authCabezera.startsWith("Bearer ")) {

            return res.status(401).json({
                
                message: "no hay token"

            })

        }

        const token = authCabezera.split(" ")[1]

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET,
            {
                algorithms: ["HS256"],
                issuer: "ruta-limpia",
                audience: "upb"
            }
        )

        const {data:usuario,error} = await supabase
        .from("usuarios")
        .select("id,email,nombre,rol")
        .eq("id", payload.sub)
        .maybeSingle()

        if (error) {

            console.error("error consultando usuario en la db",error.message)

            return res.status(503).json({
                message: "no fue posible verificar el usuario ingresado"
            })
        }

        if (!usuario) {
            return res.status(401).json({
                message:"el usuario ya no existe"
            })
        }

        req.user = usuario

        next()

    } catch (error) {

        if (
            error.name === "TokenExpiredError" ||
            error.name === "JsonWebTokenError" ||
            error.name === "NotBeforeError"
        ) {
            return res.status(401).json({
                message: "Token inválido o expirado."
            });
        }

        console.error("Error en autenticación:", error);

        return res.status(500).json({
            message: "Error interno del servidor."
        });
    }

        
}

export default verificarToken










