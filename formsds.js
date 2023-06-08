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
        title: 'rekrutacja.tk',
        description: 'Przesłano informacje',
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

  const webhookUrl = 'https://discord.com/api/webhooks/1115993396306268221/DU5LSctZnTv5KQPUnv19CpbnuucRa4mq7GWtS9dScWGFEsBZbVEGGtksA28CknRz1l5a'; // Replace with your actual Discord webhook URL

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
          successMsg.textContent = 'WYŚLIJ'; // Clear success message after 2 seconds
        }, 2000);
      } else {
        console.error('Failed to send form data to Discord webhook');
      }
    })
    .catch(error => {
      console.error('An error occurred while sending form data to Discord webhook:', error);
    });
});
