class Program
{
    static void Main()
    {
        NotificationService notificationService = new NotificationService();

        notificationService.NotifyUserByEmail("Seu pedido foi processado.");
        notificationService.NotifyUserBySms("Você tem uma nova mensagem importante.");

        Console.ReadKey();
    }
}
