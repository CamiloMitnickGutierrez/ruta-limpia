import express from "express"
import middlewareServer from "./config/middleware.server.js"


const app = express()

middlewareServer(app)



app.get("/",(res,req) => {
    res.send("api lista")
})


export default app