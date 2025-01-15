import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { carRoutes } from "./app/modules/cars/car.route"
import { orderRouter } from "./app/modules/orders/order.route"
const app: Application = express()


// parsers 
app.use(express.json())
app.use(cors())


// application routes 
app.use('/api',carRoutes )
app.use('/api',orderRouter  )

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


app.use('*',(req:Request, res:Response)=>{
  res.status(404).json({
    status:false,
    message:"Route is not found!"
  })
} )

export default app