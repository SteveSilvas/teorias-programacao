class Car {
  startEngine() {
    console.log('Car engine started.');
  }
}

class Driver {
  driveCar(car: Car) {
    car.startEngine();
    console.log('Driver is driving the car.');
  }
}

const car = new Car();
const driver = new Driver();

driver.driveCar(car);
