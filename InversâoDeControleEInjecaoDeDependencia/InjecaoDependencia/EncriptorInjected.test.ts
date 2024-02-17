import { DataServiceInjected, StrongEncryptorInjected, WeakEncryptorInjected } from './EncriptorInjected';

describe('DataServiceInjected', () => {
  it('deve salvar dados com criptografia forte', () => {
    const strongEncryptor = new StrongEncryptorInjected();
    const strongDataService = new DataServiceInjected(strongEncryptor);

    const data = 'Dados confidenciais';

    const saveResult = strongDataService.saveData(data);

    // Aqui, você pode adicionar as asserções para verificar se os dados foram salvos com êxito.
    // Por exemplo, você pode verificar se o resultado é o que você espera.
    expect(saveResult).toBe(`Strong Encrypted: ${data}`);
  });

  it('deve salvar dados com criptografia fraca', () => {
    const weakEncryptor = new WeakEncryptorInjected();
    const weakDataService = new DataServiceInjected(weakEncryptor);

    const data = 'Dados confidenciais';

    const saveResult = weakDataService.saveData(data);

    // Adicione as asserções para verificar se os dados foram salvos com êxito com a criptografia fraca.
    expect(saveResult).toBe(`Weak Encrypted: ${data}`);
  });
});
