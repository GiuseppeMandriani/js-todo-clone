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
    })














    // End Doc Ready
})




/**************************
 * 
 * UTILITIES / FUNCTIONS
 * 
 **************************/