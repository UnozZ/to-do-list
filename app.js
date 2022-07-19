let bottone = document.getElementById('aggiungi'); // Prendi il bottone
let daFareContainer = document.getElementById('daFareContainer'); // Prendi il container dove andremo ad aggiungere le faccende
let inputField = document.getElementById('inputField'); // Prendi l'input dal quale prenderai la faccenda che ha scritto l'utente

// Quando l'utente sta scrivendo, puo' direttamente premere il tasto "Enter" per aggiungere una faccenda
inputField.addEventListener('keypress', function (event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        bottone.click();
    }
})

// Quando viene premuto "Enter" il bottone nascosto viene premuto e cosi' 
// scatta la funzione di aggiungere una faccenda alla lista delle faccende
bottone.addEventListener('click', function(){
    // Crea un elemento "Faccenda" e mostralo
    var faccenda = document.createElement('p'); // 'p' sta per l'elemento html
    faccenda.classList.add('faccende'); // aggiunge la faccenda appena creata all'interno del div "faccende" 
    faccenda.innerText = inputField.value;  // mette il testo inserito dall'utente nell'input all'interno dell'elemento appena creato
    
    daFareContainer.appendChild(faccenda);  // mette il div "faccende" all'interno del div "daFareContainer"
    inputField.value = "";  // reset dell'input
    

    // Cancella la faccenda se cliccata (simulando l'aver compiuto la faccenda)
    faccenda.addEventListener('click', function(){  // se cliccata una volta, viene una linea sopra 
        faccenda.style.textDecoration = "line-through";
    })
    faccenda.addEventListener('dblclick', function(){ // se cliccata due volte, viene eliminata dalla lista
        daFareContainer.removeChild(faccenda);
    })
})