import '../css/style.css';
import '../img/book.svg';
import { translations } from './translation.js';

/////////////////////
//import { basePath } from '../config.js';

// Utilizzo di basePath per i percorsi delle risorse
//const styleLink = document.createElement('link');
//styleLink.rel = 'stylesheet';
//styleLink.href = dist/css/style.css;
//document.head.appendChild(styleLink);

/*const translationScript = document.createElement('script');
translationScript.src = `${basePath}js/translation.js`;
document.body.appendChild(translationScript);

const mainScript = document.createElement('script');
mainScript.type = 'module';
mainScript.src = `${basePath}js/script.js`;
document.body.appendChild(mainScript);*/

//const bundleScript = document.createElement('script');
//bundleScript.src = `${basePath}js/bundle.js`;
//document.body.appendChild(bundleScript);
//////////////////////

const SITO = process.env.API_BASE_URL;

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
document.addEventListener('DOMContentLoaded', function() {
    createFavicon('FAVICON_URL');
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
    fetch(`${SITO}/subjects/${genere}.json`)
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
    fetch(`${SITO}${key}.json`)
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

window.getBookDescription = getBookDescription;

loadTranslations('it');