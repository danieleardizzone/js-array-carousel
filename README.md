# Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

## Creiamo il markup statico: costruiamo il container e inseriamo un’immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

- costruisci un container

- inserisci un'immagine

- centra l'immagine con il css


## Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

- Creo un array con all'interno le immagini

- Ciclo le informazioni
    - creo un template literal
        - inserisco l'immagine

<!-- - CICLO (i = 0; i < array.lenght; click => i++):
    - creo una variabile che rappresenta l'immagine selezionato dell'array 
    - dò all'immagine selezionata una classe 'active' -->

- Tutte le immagini avranno display: none

- L'immagine selezionata con classe 'active' avrà display: block

## Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

### Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

### Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.