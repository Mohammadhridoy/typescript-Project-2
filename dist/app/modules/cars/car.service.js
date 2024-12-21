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
exports.carServices = void 0;
const car_model_1 = require("./car.model");
const createCarIntoDB = (cardata) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.create(cardata);
    return result;
});
const getAllCarsInfoFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.find();
    return result;
});
const getOneCarInfoFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.findOne({ _id: id });
    return result;
});
const updatedCarInfoInDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.updateOne({ _id: id }, {
        $set: {
            brand: updateData.brand,
            model: updateData.model,
            year: updateData.year,
            price: updateData.price,
            category: updateData.category,
            description: updateData.description,
            quantity: updateData.quantity,
            inStock: updateData.inStock,
        }
    });
    return result;
});
const deleteCarinfoFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.CarModel.updateOne({ _id: id }, { isDeleted: true });
    return result;
});
exports.carServices = {
    createCarIntoDB,
    getAllCarsInfoFromDB,
    getOneCarInfoFromDB,
    updatedCarInfoInDB,
    deleteCarinfoFromDB
};
