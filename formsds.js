// app.js

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nick = document.querySelector('#nick').value;
  const poziom = document.querySelector('#poziom').value;
  const moc = document.querySelector('#moc').value;
  const exp = document.querySelector('#exp').value;
  const dsc = document.querySelector('#dsc').value;
  const war = document.querySelector('#war').value;
  const powod = document.querySelector('#message').value;

  const formData = {
    embeds: [
      {
        title: 'Form Data',
        description: 'Submitted form data:',
        fields: [
          {
            name: 'Nick',
            value: nick,
            inline: true
          },
          {
            name: 'Poziom',
            value: poziom,
            inline: true
          },
          {
            name: 'Ilość mocy',
            value: moc,
            inline: true
          },
          {
            name: 'Doświadczenie',
            value: exp,
            inline: true
          },
          {
            name: 'Discord',
            value: dsc,
            inline: true
          },
          {
            name: 'Czy mieliśmy wojnę',
            value: war,
            inline: true
          },
          {
            name: 'Dodatkowe Informacje',
            value: powod,
            inline: false
          }
        ]
      }
    ]
  };

  const webhookUrl = 'YOUR_DISCORD_WEBHOOK_URL'; // Replace with your actual Discord webhook URL

  // Send the form data to Discord webhook
  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        const successMsg = document.querySelector('#success-msg');
        successMsg.textContent = 'Wysłano!';
        setTimeout(function() {
          successMsg.textContent = ''; // Clear success message after 2 seconds
        }, 2000);
      } else {
        console.error('Failed to send form data to Discord webhook');
      }
    })
    .catch(error => {
      console.error('An error occurred while sending form data to Discord webhook:', error);
    });
});
