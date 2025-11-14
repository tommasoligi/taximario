function handleSubmit(event) {
    event.preventDefault();  // Evita il ricaricamento della pagina
    
    // Legge i valori compilati
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    ...
    
    // Mostra un alert di conferma
    alert(`Grazie ${name}!\n\nIl tuo messaggio è stato ricevuto...`);
    
    // Pulisce il form
    form.reset();
}
