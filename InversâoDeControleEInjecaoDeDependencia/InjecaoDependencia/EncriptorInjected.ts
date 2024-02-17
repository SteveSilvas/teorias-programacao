// encriptorInjected.ts

export interface IEncryptorInjected {
    encrypt(data: string): string;
  }
  
  export class StrongEncryptorInjected implements IEncryptorInjected {
    encrypt(data: string): string {
      // Implementação da lógica de encriptação forte
      return `Strong Encrypted: ${data}`;
    }
  }
  
  export class WeakEncryptorInjected implements IEncryptorInjected {
    encrypt(data: string): string {
      // Implementação da lógica de encriptação fraca
      return `Weak Encrypted: ${data}`;
    }
  }
  
  export class DataServiceInjected {
    private encryptor: IEncryptorInjected;
  
    constructor(encryptor: IEncryptorInjected) {
      this.encryptor = encryptor; // Injeção de dependências
    }
  
    saveData(data: string): string {
      const encryptedData = this.encryptor.encrypt(data);
      // Salvar os dados encriptados
  
      return encryptedData; // Retorne os dados encriptados
    }
  }
  