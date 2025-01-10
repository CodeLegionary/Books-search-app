document.getElementById('searchButton').addEventListener('click', searchBooks);
document.getElementById('searchBar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter')
        searchBooks();

});

function searchBooks() {
    const results = document.getElementById('results');
    const genere = document.getElementById('searchBar').value.trim();

if (!genere) {
    alert('Per favore, inserisci un genere.');
    return;
}

    results.innerHTML = 'caricamento...&#x23F3;';
    fetch(`https://openlibrary.org/subjects/${genere}.json`)
    .then(response => response.json())
    .then(data => {
        if (!(data.works && data.works.length > 0)) {
            results.innerHTML = '<p>Nessun libro trovato &#x1f622;</p><br/><p>Prova con un altro genere!</p><br/>';
            return;
        }
        results.innerHTML = '<p>Se clicchi un libro apparirà la descrizione &#x1f50d; ...</p><br/><p> ..ricorda di selezionare la giusta categoria!</p><br/>';
        data.works.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `<h2 onclick="getBookDescription('${book.key}')">${book.title}</h2><p>${book.authors.map(author => author.name).join(', ')}</p><br/>`;
            results.appendChild(bookElement);
        });
    })
    .catch(error => {
        console.error('Errore:', error);
    });
}

function getBookDescription(key) {
    fetch(`https://openlibrary.org${key}.json`)
    .then(response => response.json())
    .then(data => {
        const description = data.description ?
        (typeof data.description === 'string' ? data.description : data.description.value)
        : 'Descrizione non disponibile';
        alert('Description: ' + description);
    })
    .catch(error => {
        console.error('Errore:', error);
    });
}
