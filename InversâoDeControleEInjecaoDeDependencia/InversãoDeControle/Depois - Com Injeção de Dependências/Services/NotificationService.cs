public class NotificationService
{
    private IMessageService messageService;

    public NotificationService(IMessageService service)
    {
        messageService = service;
    }

    public void NotifyUser(string message)
    {
        messageService.SendMessage(message);
    }
}
