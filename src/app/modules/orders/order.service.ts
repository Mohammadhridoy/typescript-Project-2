
import { CarModel } from "../cars/car.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrderIntoDB = async(orderData: Order) =>{
    const result = await OrderModel.create(orderData)


    const carId = result.car



     await CarModel.updateOne(
        {_id:carId,  quantity:{$gte:orderData.quantity}},
        {
            $inc:{quantity: -result.quantity},
        }
    )
    
    return result;
}


const getOrderRevenueFromDB = async() =>{

    const result = await OrderModel.aggregate([
        {
            $project:{
                totalPrice: {$multiply:["$totalPrice", "$quantity"]}
            }
        },
        {
            $group:{
                _id:null,
                totalRevenue:{$sum: "$totalPrice"}
            }
        }
    ])
    return result.length>0? result[0].totalRevenue :0; 

    
}



export const orderService = {
    createOrderIntoDB,
    getOrderRevenueFromDB
}