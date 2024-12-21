"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRoutes = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const router = express_1.default.Router();
router.post('/cars', car_controller_1.carControllers.createCar);
router.get('/cars', car_controller_1.carControllers.getAllCarsInfo);
router.get('/cars/:carId', car_controller_1.carControllers.getOneCarInfo);
router.put('/cars/:carId', car_controller_1.carControllers.updatedCarInfo);
router.delete('/cars/:carId', car_controller_1.carControllers.deleteCarInfo);
exports.carRoutes = router;
