import { Request, Response } from "express";
import carValidationSchema from "./car.validation";
import { carServices } from "./car.service";


const createCar = async (req: Request, res: Response) =>{
    try{
        const cardata = req.body;
        const zodParseData = carValidationSchema.parse(cardata)
        const result = await carServices.createCarIntoDB(zodParseData)

        res.status(200).json({
            message:"Car created successfully",
            success:true,
            data: result,
        })

    }catch(err:any){
        res.status(500).json({
            success: false, 
            message: err.message || 'something went wrong',
            error: err, 
        })

    }
}


const getAllCarsInfo = async (req:Request , res:Response ) =>{
    try{
        const result = await carServices.getAllCarsInfoFromDB()
        res.status(200).json({
            message:'Cars retrieved successfully',
            success:true,
            data: result,
        })

    }catch(err:any){
        res.status(500).json({
            success:false, 
            message: err.message|| 'Something went wrong',
            error: err, 
        })

    }
}

const getOneCarInfo = async(req: Request, res: Response) =>{
    try{
        const carId  = req.params.carId
        const result = await carServices.getOneCarInfoFromDB(carId)
        
        res.status(200).json({
                message:'Car retrieved successfully',
                success:true,
                data: result,
        })
    }catch(err:any){
        res.status(500).json({
            success:false,
            message: err.message || 'Something went wrong!'
        })
    }
}

const updatedCarInfo = async(req: Request, res:Response) =>{
    try{
        
        const  updateData = req.body
        const carId  = req.params.carId
        const result = await carServices.updatedCarInfoInDB(carId,  updateData )
        
        res.status(200).json({
                message:'Car updated successfully',
                success:true,
                data: result,
        })

    }catch(err:any){
        res.status(500).json({
            success:false,
            message: err.message || 'Something went wrong!'
        })
    }

}






export const carControllers = {
    createCar,
    getAllCarsInfo,
    getOneCarInfo,
    updatedCarInfo
}