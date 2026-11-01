import "dotenv/config"
import app from "./app.js"



const PORT = process.env.PORT || 3070

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET debe tener al menos 32 caracteres.");
}

app.listen(PORT,() => {
    console.log(`API VIVA EN PUERTO -> ${PORT}`)
})
