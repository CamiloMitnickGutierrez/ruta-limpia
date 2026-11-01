import authService from "./auth.service.js"

const login = async (req,res) => {

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
            usuario: data.datosUsuario,
            token: data.token
        })
        
    } catch (error) {

        console.error("Error en login:", error)

        if (error.message === "CREDENCIALES_INVALIDAS") {
            return res.status(401).json({
            message: "Correo o contraseña incorrectos"
        });
        }

        if (error.message === "ERROR_DATABASE") {
            return res.status(503).json({
                message: "No fue posible consultar la base de datos"
            });
        }

        return res.status(500).json({
            message: "Error interno del servidor"
        })
    
    }
}

export default {login}

        
    





