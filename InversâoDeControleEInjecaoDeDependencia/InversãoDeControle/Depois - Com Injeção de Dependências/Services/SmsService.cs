public class SmsService : IMessageService
{
    public void SendMessage(string message)
    {
        Console.WriteLine("Enviando SMS: " + message);
    }
}