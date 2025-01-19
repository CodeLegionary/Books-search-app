# Web-app README

## Descrizione
Questo progetto è una web app che interagisce con l'utente attraverso la manipolazione del DOM.
Il progetto sfrutta le API di Open Library per fornire una lista di libri, e la descrizione di un singolo libro su richiesta.

## Indice
1. ## Struttura
2. ## Strumenti di build
3. ## Indirizzo e Deployment
4. ## Lingue
5. ## Utilizzo

# I Struttura
Trattasi di una SPA (Single-Page-Application) che interagisce con un secondo sito attraverso fetch API. Il sito si basa sul classico documento index.html, che contiene la barra di ricerca. La creazione della lista e l'aggiornamento del contenuto del sito sono effettuati in codice JavaScript, racchiuso in una apposita cartella 'js', ove script.js è il file principale. Lo stile è affidato alla cartella 'css', che contiene un unico file.
nella main directory sono inoltre presenti vari files per configurazione, settaggio di variabili d'ambiente e altre impostazioni (e.g. netlify.toml per deployment).

N.B. Il file .env è già presente nel progetto, e dotenv, il modulo per caricare le variabili d'ambiente, è incluso nelle devDependencies del package.json.

# II Strumenti di build
Questo progetto utilizza Webpack e Webpack CLI per la gestione e il bundling dei file JavaScript e CSS. La configurazione di webpack è gestita nel file webpack.config.js, fondamentale per la crezione del bundle.js. Per installare il bundler occorre il comando:

- npm install --save-dev webpack webpack-cli

Tuttavia i pacchetti per il bundling sono già specificati nelle dipendenze del package.json, pertanto in alternativa si può eseguire 'npm install' e installare le relative versioni.

Per compilazione e esecuzione di questo progetto serviranno:

- npm run build
- npm run start


# III Indirizzo e Deployment
Il sito è disponibile al seguente link: [Books-search](https://books-search-papyrus.netlify.app/).
Il deployment sopramenzionato è stato realizzato tramite Netlify, con apposita customization del dominio.
Inoltre, il file process.env non è incluso nel .gitignore poichè non contiene dati sensibili, nè tantomeno ne conterrà in futuro; la sua unica funzione è quella di configurare e ottimizzare il sito in fase di deployment.

# IV Lingue
Il testo del sito è pensato principalmente per un pubblico italiano, ma offre l'opzione di selezionare la lingua inglese. L'italiano è la lingua predefinita, mentre l'inglese è integrato dinamicamente tramite il language selector e il file translation.js. Le descrizioni delle opere e i titoli dei libri rimangono fedeli al sito Open Library, e sono riportati anche in lingua originale (e.g. francese).

N.B. Il genere ricercato può essere inserito in più lingue. Inoltre, il language selector è 'intelligente': se è stata avviata una ricerca, cambiare la lingua avvierà automaticamente una nuova ricerca con il genere corrente.

# V Utilizzo
Le funzionalità sono quelle standard che simulano un motore di ricerca. La ricerca può essere avviata premendo l'apposito pulsante, o schiacciando il tasto 'Enter'.
Trovato il genere, si può recercare un libro specifico sfogliando la lista. La search bar contiene dei nomi esemplificativi, ma in caso di selezione di un genere non esistente il browser avviserà l'utente, invitandolo a cercare di nuovo!
Inoltre, una volta apparsa la lista dei libri, cliccando su un titolo è possibile visualizzare una descrizione dettagliata. Questo ci aiuterà a scegliere la lettura migliore!

P.S. Il sito ha uno styling minimale che rappresenta proprio una pergamena che si apre come per magia... al variare di un pezzo del contenuto, la pergamena si richiuderà all'istante ..per poi riaprirsi.
