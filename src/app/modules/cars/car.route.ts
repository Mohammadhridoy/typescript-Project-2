import express from 'express'
import { carControllers } from './car.controller';


const router = express.Router()

router.post('/create-car', carControllers.createCar )
router.get('/', carControllers.getAllCarsInfo)
router.get('/:carId', carControllers.getOneCarInfo )

export const carRoutes = router; 