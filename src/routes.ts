import express from 'express';
import CarController from './controllers/CarController';

const router = express.Router();

router.get('/cars', CarController.getAllCars);
router.get('/cars/:id', CarController.getOneCar);
router.post('/cars/', CarController.createNewCar);
router.put('/cars/:id', CarController.updateCar);
router.delete('/cars/:id', CarController.deleteCar);

export default router;