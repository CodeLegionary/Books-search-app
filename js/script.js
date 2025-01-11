let language = 'it';

document.getElementById('searchButton').addEventListener('click', searchBooks);
document.getElementById('searchBar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter')
        searchBooks();

});
document.getElementById('languageSelector').addEventListener('change', function() {
    language = this.value;
    loadTranslations(language);
});

function loadTranslations(language) {
    const data = translations[language];
    console.log(data); // Aggiungi questo per verificare il contenuto delle traduzioni
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.innerHTML = data[key];
    });

    let results = document.getElementById('results');
    if (results.innerHTML.includes('Se clicchi un libro apparirà la descrizione') || results.innerHTML.includes('Click on a book to see the description')) {
        searchBooks();
    } else if (results.innerHTML.includes('Nessun libro trovato') || results.innerHTML.includes('No books found')) {
        results.innerHTML = translations[language].noResults;
    }
}


function searchBooks() {
    const results = document.getElementById('results');
    let genere = document.getElementById('searchBar').value.trim();

if (!genere) {
    alert(translations[language].enterGenre);
    return;
}

    genere= genere.toLowerCase();

    results.innerHTML = translations[language].loading;
    fetch(`https://openlibrary.org/subjects/${genere}.json`)
    .then(response => response.json())
    .then(data => {
        if (!(data.works && data.works.length > 0)) {
            results.innerHTML = translations[language].noResults;
            return;
        }
        results.innerHTML = translations[language].resultsInfo;
        data.works.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.innerHTML = `<h2 onclick="getBookDescription('${book.key}')">${book.title}</h2><p>${book.authors.map(author => author.name).join(', ')}</p><br/>`;
            results.appendChild(bookElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function getBookDescription(key) {
    fetch(`https://openlibrary.org${key}.json`)
    .then(response => response.json())
    .then(data => {
        const description = data.description ?
        (typeof data.description === 'string' ? data.description : data.description.value)
        : translations[language].noDescription;
        alert('Description: ' + description);
    })
    .catch(error => {
        console.error('Errore:', error);
    });
}

loadTranslations('it');
