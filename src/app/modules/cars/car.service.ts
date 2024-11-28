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

const updatedCarInfoInDB = async(id:string,  updateData:Car) =>{
    const result = await CarModel.updateOne(
        {_id: id}, 
        {
            $set: {
                brand: updateData.brand, 
                model:  updateData.model, 
                year: updateData.year, 
                price: updateData.price, 
                category:  updateData.category, 
                description:  updateData.description, 
                quantity: updateData.quantity, 
                inStock:  updateData.inStock, 


            }
        }
    )
    return result;
}



export const carServices = {
    createCarIntoDB,
    getAllCarsInfoFromDB,
    getOneCarInfoFromDB,
    updatedCarInfoInDB
} 