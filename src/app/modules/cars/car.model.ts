import { model, Schema } from "mongoose";
import { Car } from "./car.interface";


const CarSchema = new Schema<Car>({
    brand:{type: String, required:[true, 'brand-Name is requred']},
    model: {
        type:String,
        required:[true, 'Model name is requred'],
    },
    year: { type:Number, required:[true, 'year is requred'] },
    price: {type:Number, required:[true, 'Give a price']}, 
    category:{
        type:String,
        enum:{
            values:["Sedan" , "SUV" , "Truck" , "Coupe" ,"Convertible"],
            message:'{VALUE} is not supported'
        }
    }, 
    description:{type:String},
    quantity: { type:Number, required:[true, 'Give product quantity'] },
    inStock:{ type: Boolean, required:[true, 'Stock is empty'] },
    isDeleted: {type:Boolean, default:false}
    
},
{
    timestamps:true
}

)

CarSchema.pre('find',function(next){
    this.find({isDeleted:{$ne:true}})
    next()
})

CarSchema.pre('findOne',function(next){
    this.find({isDeleted:{$ne:true}})
    next()
})


export const CarModel = model<Car>('Car', CarSchema)


