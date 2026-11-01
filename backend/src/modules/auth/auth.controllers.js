import authService from "./auth.service.js"

const login = async (res,req) => {

    try {

        const {email,password} = req.body

        if (
            typeof email !== "string" ||
            typeof password !== "string"||
            !email.trim() ||
            !password

        ){
            return res.status(400).json({

                message: "El correo y la contraseña son obligatorias"
            })

        }

        const data = await authService.login(email,password)

        return res.status(200).json({

            message: "inicio de sesion exitoso",
            usuario: data.usuario,
            token: data.token
        })
        
    } catch (error) {


        if (error.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                message: "Correo o contraseña incorrectos."
            });
        }

        if (error.message === "DATABASE_ERROR") {
            return res.status(503).json({
                message: "No fue posible consultar la base de datos."
            });
        }

        console.error("Error en login:", error);

        return res.status(500).json({
            message: "Error interno del servidor."
        });
    }
}

export default login

        
    







