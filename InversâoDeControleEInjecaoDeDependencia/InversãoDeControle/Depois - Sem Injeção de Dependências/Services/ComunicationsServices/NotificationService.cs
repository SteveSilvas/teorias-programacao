public class NotificationService
{
    public void NotifyUser(IMessageService messageService, string message)
    {
        messageService.SendMessage(message);
    }
}


