public class EmailService : IMessageService
{
    public void SendMessage(string message)
    {
        Console.WriteLine("Enviando email: " + message);
    }
}