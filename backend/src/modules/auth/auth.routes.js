
import { Router } from "express"
import authController from "./auth.controllers.js"
import verificarToken from "./auth.middleware.js"

const router = Router()

router.post("/login",authController.login)

router.get("/me", verificarToken, (req, res) => {

    return res.status(200).json({
        message: "Usuario autenticado.",
        usuario: req.user
    });

});

export default router