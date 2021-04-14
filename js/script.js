// console.log('JS Ok');
// console.log('JQ', $);

/*******
 * TODO APP
 */

$(document).ready(function () {

    // Sorgente dati esterna

    var toDoItem = [{
            text: 'Prendere il pane',
            completed: false, // Cose da fare
        },
        {
            text: 'Andare dal dentista',
            completed: true, // Cose fatte
        },
        {
            text: 'Chiamare idraulico',
            completed: false,
        },
        {
            text: 'Portare il cane fuori',
            completed: true,
        },

    ];

    // Refs

    var list = $('.list-item');

    var newInput = $('.app-todo');

    var template = $('#template li'); // Riferimento al template

    // Fase 1 Leggere dati sorgente esterna e popolare la lista html

    for (var i = 0; i < toDoItem.length; i++) {
        console.log(toDoItem[i]);
        var toDo = toDoItem[i];

        // Template
        var item = template.clone(); // Creo Clone


        // FASE 5 valuto seconda chiave oggetti e applico classe 

        if (toDo.completed) { //True, riferito alla chiave dell'oggetto
            item.find('.text').addClass('completed');
        }


        item.children('.text').text(toDo.text); // Aggiungo solo la chiave text

        // Aggiunta alla lista in HTML
        list.append(item);
    }

    // Fase 2 Inserimento nuovo input
    newInput.keyup(function (e) {
        console.log(e.which);
        if (e.which === 13) {
            var text = newInput.val().trim();

            if (text !== '') {
                // console.log(text);

                // Template
                var item = template.clone() // Creo clone

                item.children('.text').text(text);

                // Aggiungo alla lista html in prima posizione
                list.prepend(item);

                // Reset Input
                newInput.val('');
            } else {
                alert('Inserire qualcosa')
            }
        }
    });


    // Fase 3 Rimozione Item dalla lista in HTML

    // METODO A (NON FUNZIONALE)  --> perchè non viene applicato ai nuovi input inseriti

    // list.find('li i').click(function () {
    //     $(this).parent('li').remove(); // Rimuove nodo dal DOM
    // });


    // METODO B CORRETTO

    /*******
     * Elemento da monitorare e utilizzo di " on ( 3 parametri( tipo di evento, quali elementi, function)):"
     * 
     * - body elemento da monitorare
     * - tipo click
     * - su quali
     *  */

    $('body').on('click', '.list-item li i', function () {
        $(this).parent('li').remove(); // Rimuove nodo dal DOM
    });


    // Fase 4 Segnare elementi lista se completata o no con un click

    $('body').on('click', '.list-item .text', function () {
        $(this).toggleClass('completed');
    });

    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/