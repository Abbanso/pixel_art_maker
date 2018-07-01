// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    console.log("makeGrid is running");

    var gH, gW, canvas, rows, cell;

    gH = $("#inputHeight").val();
    gW = $("#inputWeight").val();
    canvas = $("#pixelCanvas");

    //Removes pre existing canvas children
    canvas.children().remove();

    //Draws the table row
    for(y = 0; y < gH; y++){
        canvas.append("<tr></tr>");
    }

    rows = $("tr");

    for(x = 0; x < gW; x++){
        rows.append("<td></td>");
    }

    cell = canvas.find("td");

    //fills the cell with selected color
    cell.click(function(){
        console.log("colorPicker is running");
        var color;
        color = $("#colorPicker").val();
        $(this).attr("bgcolor", color);
    });

}

    //Submit entry selected by the user
    var submitQuery;
    submitQuery = $('input[type="submit"]');

    submitQuery.click(function (event) {
        event.preventDefault();
        makeGrid();
    });