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
    nick: nick,
    poziom: poziom,
    moc: moc,
    exp: exp,
    dsc: dsc,
    war: war,
    powod: powod
  };

  const webhookUrl = 'https://discord.com/api/webhooks/1115993396306268221/DU5LSctZnTv5KQPUnv19CpbnuucRa4mq7GWtS9dScWGFEsBZbVEGGtksA28CknRz1l5a'; 

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
        console.error('Nie udało się wysłać informacji');
      }
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas wysyłania wiadomości :', error);
    });
});
