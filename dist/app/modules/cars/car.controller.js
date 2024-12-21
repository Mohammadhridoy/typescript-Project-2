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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carControllers = void 0;
const car_validation_1 = __importDefault(require("./car.validation"));
const car_service_1 = require("./car.service");
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardata = req.body;
        const zodParseData = car_validation_1.default.parse(cardata);
        const result = yield car_service_1.carServices.createCarIntoDB(zodParseData);
        res.status(200).json({
            message: "Car created successfully",
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'something went wrong',
            error: err,
        });
    }
});
const getAllCarsInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield car_service_1.carServices.getAllCarsInfoFromDB();
        res.status(200).json({
            message: 'Cars retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
const getOneCarInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.getOneCarInfoFromDB(carId);
        res.status(200).json({
            message: 'Car retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong!'
        });
    }
});
const updatedCarInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateData = req.body;
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.updatedCarInfoInDB(carId, updateData);
        res.status(200).json({
            message: 'Car updated successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong!'
        });
    }
});
const deleteCarInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carId = req.params.carId;
        const result = yield car_service_1.carServices.deleteCarinfoFromDB(carId);
        res.status(200).json({
            message: 'Car deleted successfully',
            success: true,
            data: {},
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong!'
        });
    }
});
exports.carControllers = {
    createCar,
    getAllCarsInfo,
    getOneCarInfo,
    updatedCarInfo,
    deleteCarInfo
};
