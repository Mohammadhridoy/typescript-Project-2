import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { carRoutes } from "./app/modules/cars/car.route"
const app: Application = express()


// parsers 
app.use(express.json())
app.use(cors())


// application routes 
app.use('/api/cars',carRoutes )


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app