import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { orderService } from "./order.service";




const createOrder = async (req: Request, res: Response) =>{
    try{
        const orderData = req.body 
        const zodValidationData = orderValidationSchema.parse(orderData)
        const result = await orderService.createOrderIntoDB(zodValidationData)

        
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

const getOrderRevenue = async (req: Request, res: Response) =>{
    try{
        const result = await orderService.getOrderRevenueFromDB()

        res.status(200).json({
            message:"Car created successfully",
            success:true,
            data: {
                totalRevenue: result
            } 
        })

    }catch(err:any){

    }
}



export const orderControllers ={
    createOrder,
    getOrderRevenue
}