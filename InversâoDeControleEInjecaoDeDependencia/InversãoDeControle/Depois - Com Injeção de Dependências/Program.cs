class Program
{
    static void Main()
    {
        IMessageService emailService = new EmailService();
        IMessageService smsService = new SmsService();

        NotificationService emailNotification = new NotificationService(emailService);
        NotificationService smsNotification = new NotificationService(smsService);

        emailNotification.NotifyUser("Seu pedido foi processado.");
        smsNotification.NotifyUser("Você tem uma nova mensagem importante.");

        Console.ReadKey();
    }
}
