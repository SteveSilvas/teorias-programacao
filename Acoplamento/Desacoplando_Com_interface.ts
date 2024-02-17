interface IVehicle {
    startEngine(): void;
}

class Carro implements IVehicle {
    startEngine() {
        console.log('Motor ligado.');
    }
}

class Motorista {
    dirigeVeiculo(vehicle: IVehicle) {
        vehicle.startEngine();
        console.log('Driver is driving the vehicle.');
    }
}

const carro = new Carro();
const motorista = new Motorista();

motorista.dirigeVeiculo(car);
