import { Schema } from "mongoose";
import { Car } from "./car.interface";


const CarSchema = new Schema<Car>({
    brand:{type: String, required:true}
})


