import { Car } from "./car.interface"
import { CarModel } from "./car.model"





const createCarIntoDB = async (cardata: Car ) =>{
    const result = await CarModel.create(cardata)
    return result; 
}

const getAllCarsInfoFromDB = async () =>{
    const result = await CarModel.find()
    return result; 
}

const getOneCarInfoFromDB = async (id:string) =>{
    const result = await CarModel.findOne({_id:id})
  

    return result;
}



export const carServices = {
    createCarIntoDB,
    getAllCarsInfoFromDB,
    getOneCarInfoFromDB
} 