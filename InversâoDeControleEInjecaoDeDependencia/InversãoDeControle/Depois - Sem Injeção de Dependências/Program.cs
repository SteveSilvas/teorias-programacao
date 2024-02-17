class Program
{
    static void Main()
    {
        EmailService emailService = new EmailService();
        SmsService smsService = new SmsService();

        NotificationService emailNotification = new NotificationService();
        NotificationService smsNotification = new NotificationService();

        emailNotification.NotifyUser(emailService, "Seu pedido foi processado.");
        smsNotification.NotifyUser(smsService, "Você tem uma nova mensagem importante.");

        Console.ReadKey();
    }
}