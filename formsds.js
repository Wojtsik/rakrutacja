const form = document.getElementById('formsds');
const webhookUrl = 'https://discord.com/api/webhooks/1115993396306268221/DU5LSctZnTv5KQPUnv19CpbnuucRa4mq7GWtS9dScWGFEsBZbVEGGtksA28CknRz1l5a';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Collect form data
  const formData = new FormData(form);

  // Create payload object
  const payload = {};
  formData.forEach((value, key) => {
    payload[key] = value;
  });

  // Send payload to Discord webhook
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (response.ok) {
        console.log('Form data sent successfully');
      } else {
        console.error('Error sending form data');
      }
    })
    .catch((error) => {
      console.error('Error sending form data', error);
    });
});
