public class NotificationService
{
    public void NotifyUserByEmail(string message)
    {
        EmailService emailService = new EmailService();
        emailService.SendEmail(message);
    }

    public void NotifyUserBySms(string message)
    {
        SmsService smsService = new SmsService();
        smsService.SendSms(message);
    }
}
