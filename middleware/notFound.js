// Definisce una funzione middleware per gestire le richieste non trovate (404)
function notFound(req, res, next) {
    // Imposta lo stato della risposta HTTP a 404 (Not Found)
    res.status(404);

    // L'invio di una risposta JSON con un messaggio di errore
    res.json({
        error: "Not Found", 
        message: "Pagina non trovata" 
    });
}

// Esporta la funzione middleware in modo che possa essere utilizzata in altri file
module.exports = notFound;