"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'email is required'] },
    car: { type: String, required: [true, 'car is required'] },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: [true, 'please give a totalPrice'] }
}, {
    timestamps: true
});
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
