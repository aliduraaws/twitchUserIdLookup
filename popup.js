document.getElementById('lookup').addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    const result = document.getElementById('result');
  
    if (!username) return (result.textContent = "Enter a username.");
  
    const clientId = "YOUR CLIENT ID"; // Replace with your Twitch Client ID
    const token = "YOUR CLIENT SECRET"; // Use Implicit Grant or securely inject
  
    try {
      const res = await fetch(`https://api.twitch.tv/helix/users?login=${username}`, {
        headers: {
          'Client-ID': clientId,
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await res.json();
  
      if (data.data.length > 0) {
        result.textContent = `User ID: ${data.data[0].id}`;
      } else {
        result.textContent = "User not found.";
      }
    } catch (err) {
      console.error(err);
      result.textContent = "Error fetching user ID.";
    }
  });
  