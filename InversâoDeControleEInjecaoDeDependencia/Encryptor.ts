class Encryptor {
  encrypt(data: string): string {
    // Implementação da lógica de encriptação
    return `Encrypted: ${data}`;
  }
}

class DataService {
  private encryptor: Encryptor;

  constructor() {
    this.encryptor = new Encryptor(); // Dependência forte
  }

  saveData(data: string): void {
    const encryptedData = this.encryptor.encrypt(data);
    // Salvar os dados encriptados
  }
}

const dataService = new DataService();
dataService.saveData("Dados confidenciais");
