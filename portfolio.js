document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    fetch('http://localhost:3000/recevoir-donnees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(data => {
      alert("Formulaire soumis avec succès!");
      console.log(data);
    })
    .catch(error => {
      alert("Une erreur s'est produite!");
      console.error('Erreur:', error);
    });
  });
  