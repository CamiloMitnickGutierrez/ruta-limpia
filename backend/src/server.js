import "dotenv/config"
import app from "./app.js"



const PORT = process.env.PORT || 3070

app.listen(PORT,() => {
    console.log(`API VIVA EN PUERTO -> ${PORT}`)
})
