using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ANDChat.Hubs
{
    public class AndHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
