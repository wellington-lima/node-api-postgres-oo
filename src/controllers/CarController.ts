import { Request, Response } from 'express';
import CarService from '../services/CarService';

class CarController {

  async getAllCars(request: Request, response: Response) {
    const cars = await CarService.getAllCars();
    response.json(cars);
  }
  
  async getOneCar(request: Request, response: Response) {
    const { id } = request.params;
    const car = await CarService.getOneCar(+id);
    response.json(car);
  }
  
  async createNewCar(request: Request, response: Response) {
    const { manufacturer, model, price } = request.body;
    const car_id = await CarService.createNewCar({ manufacturer, model, price });
    const car = await CarService.getOneCar(car_id);
    response.json(car);
  };
  
  async updateCar(request: Request,response: Response) {
    const id = +request.params.id;
    const { manufacturer, model, price } = request.body;
    await CarService.updateCar({ id, manufacturer, model, price });
    const car = await CarService.getOneCar(id);
    response.json(car);
  };
  
  async deleteCar(request: Request, response: Response) {
    const id = +request.params.id;
    await CarService.deleteCar(id);
    response.json({ response: 'Carro excluído corretamente'});
  }
}

export default new CarController();