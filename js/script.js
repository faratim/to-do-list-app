function newItem() {
    //1. Add a New Item to the List
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
    }

    //2. Cross Out Item on Double Click
    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //3(i). Add 'X' Delete Button to Item
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    //3(ii). Adding .delete Class to 'X'ed Items
    crossOutButton.on('click', function deleteListItem() {
        li.addClass('delete');
    });

    // 4. Enable Drag and Drop Re-Ordering of Items
    $('#list').sortable();
}
