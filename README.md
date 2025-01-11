# Counter README

## Descrizione
Questo progetto è una web app che interagisce con l'utente attraverso la manipolazione del DOM.
Il progetto sfrutta le API di Open Library per fornire una lista di libri, e la descrizione di un singolo libro su richiesta.

## Indice
1. ## Struttura
2. ## Indirizzo e Deployment
3. ## Lingue
4. ## Utilizzo

# I Struttura
Trattasi di una SPA (Single-Page-Application) che interagisce con un secondo sito attraverso fetch API. Il sito si basa sul classico documento index.html, che contiene la barra di ricerca. La creazione della lista e l'aggiornamento del contenuto del sito sono effettuati in codice JavaScript, racchiuso in una apposita cartella 'js'. Lo stile è affidato alla cartella 'css', che contiene un unico file.

# II Indirizzo e Deployment
Il sito è disponibile al seguente link: [Books-search](https://books-search-papyrus.netlify.app/).
Il deployment sopramenzionato è stato realizzato tramite Netlify, con apposita customization del dominio. Un'ulteriore versione
è disponibile su [Pages](https://codelegionary.github.io/Books-search-app/).

# III Lingue
Il testo del sito è pensato principalmente per un pubblico italiano, ma offre l'opzione di selezionare la lingua inglese. L'italiano è la lingua predefinita, mentre l'inglese è integrato dinamicamente tramite il language selector e il file translation.js. Le descrizioni delle opere e i titoli dei libri rimangono fedeli al sito Open Library, e sono riportati anche in lingua originale (e.g. francese).

N.B. Il genere ricercato può essere inserito in più lingue. Inoltre, il language selector è 'intelligente': se è stata avviata una ricerca, cambiare la lingua avvierà automaticamente una nuova ricerca con il genere corrente.

# IV Utilizzo
Le funzionalità sono quelle standard che simulano un motore di ricerca. La ricerca può essere avviata premendo l'apposito pulsante, o schiacciando il tasto 'Enter'.
Trovato il genere, si può accedere alla ricerca di un libro specifico sfogliando la lista. La search bar contiene dei nomi esemplificativi, ma in caso di selezione di un genere non esistente il browser avviserà l'utente, invitandolo a cercare di nuovo!
Inoltre una volta apparsa la lista dei libri, cliccando su un titolo è possibile avere una panoramica che ci aiuterà a decidere la lettura migliore!

P.S. Il sito ha uno styling minimale che rappresenta proprio una pergamena che si apre come per magia... al variare di un pezzo del contenuto, la pergamena si richiuderà all'istante ..per poi riaprirsi.
