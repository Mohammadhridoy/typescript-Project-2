"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const carValidationSchema = zod_1.z.object({
    brand: zod_1.z.string().max(20),
    model: zod_1.z.string().max(20),
    year: zod_1.z.number(),
    price: zod_1.z.number(),
    category: zod_1.z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"]),
    description: zod_1.z.string(),
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean(),
    isDeleted: zod_1.z.boolean()
});
exports.default = carValidationSchema;
