import express from "express"
import middlewareServer from "./config/middleware.server.js"
import authRoutes from "./modules/auth/auth.routes.js"

const app = express()

middlewareServer(app)



app.get("/",(res,req) => {
    res.send("api lista")
})

app.use("/api/auth",authRoutes)

app.use((req,res)=>{
    res.status(401).json({
        message: "ruta no encontrada"
    })
})


export default app