class Car {
  id?: number;
  manufacturer: string;
  model: string;
  price: number;

  constructor(props: Car) { Object.assign(this, props) }
  
}

export default Car;