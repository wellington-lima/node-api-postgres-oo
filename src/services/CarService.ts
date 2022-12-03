import Car from '../model/Car';
import conn from '../db';

class CarService {
  
  private client = conn();

  async getAllCars():Promise<Car[]> {
    const sql = 'SELECT * FROM cars';
  
    try {
      const { rows } = await this.client.query(sql, []);
      return rows;

    } catch (error) {
      throw new Error('Erro ao consultar carros');    
    }
  }
  
  async getOneCar(id: number): Promise<Car> {
    const sql = 'SELECT * FROM cars where id = $1';
  
    try {
      const { rows } = await this.client.query(sql, [id]);
      return rows[0];
  
    } catch (error) {
      throw new Error('Erro ao consultar carros');    
    }
  }
  
  async createNewCar({ manufacturer, model, price }: Car) {
    const sql = 'INSERT INTO cars (manufacturer, model, price) VALUES ($1, $2, $3) RETURNING id';
  
    try {
      const { rows } = await this.client.query(sql, [manufacturer, model, price]);
      return rows[0].id;
  
    } catch (error) {
      throw new Error('Erro ao cadastrar carro');    
    }
  }
  
  async updateCar({ id, manufacturer, model, price }: Car) {
    const sql = 'UPDATE cars SET manufacturer = $1, model = $2, price = $3 WHERE id = $4';
  
    try {
      await this.client.query(sql, [manufacturer, model, price, id]);
  
    } catch (error) {
      throw new Error('Erro ao atualizar carro');
    }
  }
  
  async deleteCar(id: number) {
    const sql = 'DELETE FROM cars WHERE id = $1';
  
    try {
      await this.client.query(sql, [id]);
  
    } catch (error) {
      throw new Error('Erro ao excluir carro');
    }
  }
}

export default new CarService();