"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string(),
    car: zod_1.z.string(),
    quantity: zod_1.z.number(),
    totalPrice: zod_1.z.number()
});
exports.default = orderValidationSchema;
