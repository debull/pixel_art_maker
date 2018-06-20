// Select color input
const selectedColor = $('#colorPicker');

// Select size input
const tableHeight = $('#inputHeight');
const tableWidth = $('#inputWidth');

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(evt){
    evt.preventDefault();

    $('#pixelCanvas').children().remove();
    makeGrid();
});

function makeGrid() {
    //alert('working');
    // Your code goes here!

    // Get table display area, column and row inputs values
    let pixelCanvas = $('#pixelCanvas');
    let getRow = tableHeight.val();
    let getCol = tableWidth.val();

    // Create table using input values from user
    for(let y = 0; y < getRow; y++){
        let createRow = $('<tr></tr>');
     
        for(let x = 0; x < getCol; x++){
            let createCol = $('<td></td');
            createRow.append(createCol);
        }   

        pixelCanvas.append(createRow);
    }

    // Add event delegation to each cell of the created table
    // to change to selected color on click.
    pixelCanvas.on('click', 'td', function(evt) {
        $(evt.target).css('background-color', selectedColor.val());
    });

}

// Set background-color
$('body').css('background-color', '#6fa8d2');
