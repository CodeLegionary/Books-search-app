import"../css/style.css";import"../img/book.svg";import{translations}from"./translation.js";import{basePath}from"../config.js";const styleLink=document.createElement("link");styleLink.rel="stylesheet",styleLink.href=`${basePath}css/style.css`,document.head.appendChild(styleLink);const bundleScript=document.createElement("script");bundleScript.src=`${basePath}js/bundle.js`,document.body.appendChild(bundleScript);const SITO=process.env.API_BASE_URL;let language="it";function loadTranslations(e){const n=translations[e];console.log(n),document.querySelectorAll("[data-translate]").forEach((e=>{const t=e.getAttribute("data-translate");e.innerHTML=n[t]}));let t=document.getElementById("results");t.innerHTML.includes("Se clicchi un libro apparirà la descrizione")||t.innerHTML.includes("Click on a book to see the description")?searchBooks():(t.innerHTML.includes("Nessun libro trovato")||t.innerHTML.includes("No books found"))&&(t.innerHTML=translations[e].noResults)}function searchBooks(){const e=document.getElementById("results");let n=document.getElementById("searchBar").value.trim();n?(n=n.toLowerCase(),e.innerHTML=translations[language].loading,fetch(`${SITO}/subjects/${n}.json`).then((e=>e.json())).then((n=>{n.works&&n.works.length>0?(e.innerHTML=translations[language].resultsInfo,n.works.forEach((n=>{const t=document.createElement("div");t.innerHTML=`<h2 onclick="getBookDescription('${n.key}')">${n.title}</h2><p>${n.authors.map((e=>e.name)).join(", ")}</p><br/>`,e.appendChild(t)}))):e.innerHTML=translations[language].noResults})).catch((e=>{console.error("Error:",e)}))):alert(translations[language].enterGenre)}function getBookDescription(e){fetch(`${SITO}${e}.json`).then((e=>e.json())).then((e=>{const n=e.description?"string"==typeof e.description?e.description:e.description.value:translations[language].noDescription;alert("Description: "+n)})).catch((e=>{console.error("Errore:",e)}))}document.getElementById("searchButton").addEventListener("click",searchBooks),document.getElementById("searchBar").addEventListener("keydown",(function(e){"Enter"===e.key&&searchBooks()})),document.getElementById("languageSelector").addEventListener("change",(function(){language=this.value,loadTranslations(language)})),document.addEventListener("DOMContentLoaded",(function(){createFavicon("FAVICON_URL")})),window.getBookDescription=getBookDescription,loadTranslations("it");