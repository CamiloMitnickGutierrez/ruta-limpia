

const authorizeRoles = (...rolesPermitidos) => {

    return (req,res,next) => {

        if (!req.user){
            return res.status(401).json({
                message: "Debes iniciar sesion primero"
            })
        }

        if (!rolesPermitidos.includes(req.user.rol)){
            return res.status(403).json({
                message: "No tienes permiso para acceder a esta ruta"
            })
        }

        next()
    }

}

export default authorizeRoles