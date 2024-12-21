"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const car_model_1 = require("../cars/car.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.create(orderData);
    const carId = result.car;
    yield car_model_1.CarModel.updateOne({ _id: carId, quantity: { $gte: orderData.quantity } }, {
        $inc: { quantity: -result.quantity },
    });
    return result;
});
const getOrderRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderModel.aggregate([
        {
            $project: {
                totalPrice: { $multiply: ["$totalPrice", "$quantity"] }
            }
        },
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: "$totalPrice" }
            }
        }
    ]);
    return result.length > 0 ? result[0].totalRevenue : 0;
});
exports.orderService = {
    createOrderIntoDB,
    getOrderRevenueFromDB
};
