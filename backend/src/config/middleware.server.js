import express from "express"
import  cors from "cors"
import morgan from "morgan"
import helmet from "helmet"


const middlewareServer = (app) => {

    app.use(cors())

    app.use(morgan("dev"))

    app.use(express.json())

    app.use(helmet())

}

export default middlewareServer