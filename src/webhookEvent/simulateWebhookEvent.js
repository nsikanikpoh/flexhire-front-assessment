

async function simulateWebhookEvent(userId, profileId) {
  console.log('simulateWebhookEvent()');
  try{
      const response = await fetch('http://localhost:3000/flexhire-callback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event_name: 'update',
            timestamp: new Date().getTime(),
            records: [userId, profileId],
        })
      });      
      const json = await response.json();
      return json;
    }
    catch(err){
      throw new Error(err.message);
    }
  }
  
  export default simulateWebhookEvent;