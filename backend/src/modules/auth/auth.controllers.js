import authService from "./auth.service.js"
import {validarLogin, validarRegistro} from "../../utils/validaciones.js"




const registroUsuario = async (req,res) => {

    try {
        
        const {email,nombre,password} = req.body

        const errorValidacion = validarRegistro({email, nombre, password})

        if (errorValidacion) {
            return res.status(400).json({
                message: errorValidacion
            })
        }

        await authService.registroUsuario({email, nombre, password})

        return res.status(201).json({

            message: "Se creó el usuario con éxito"
        })


    } catch (error) {

        console.error("Error en registro:", error)

        return res.status(500).json({
            message: "No fue posible crear el usuario"
        })
    }



}

const login = async (req,res) => {

    try {

        const {email,password} = req.body

        const errorValidacion = validarLogin({email, password})

        if (errorValidacion) {
            return res.status(400).json({
                message: errorValidacion
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

export default {login,registroUsuario}

        
    




