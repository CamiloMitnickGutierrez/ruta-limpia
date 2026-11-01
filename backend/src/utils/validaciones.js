const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validarLogin = ({email, password} = {}) => {
    if (
        typeof email !== "string" ||
        typeof password !== "string" ||
        !email.trim() ||
        !password
    ) {
        return "El correo y la contraseña son obligatorios"
    }

    if (!correoValido.test(email.trim())) {
        return "El correo no tiene un formato válido"
    }

    return null
}

const validarRegistro = ({email, nombre, password} = {}) => {
    const errorLogin = validarLogin({email, password})

    if (errorLogin) {
        return errorLogin
    }

    if (typeof nombre !== "string" || !nombre.trim()) {
        return "El nombre es obligatorio"
    }

    return null
}

export {validarLogin, validarRegistro}
