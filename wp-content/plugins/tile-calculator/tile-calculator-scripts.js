/*

$('#squareMeterInput').on('input', function () {
    $('#tilePieceInput').val(''); // Reset tile piece input when square meter input changes
    $('#decimalWarning').text(''); // Clear decimal warning
    calculate();
});

$('#tilePieceInput').on('input', function () {
    var isDecimal = $('#tilePieceInput').val().includes('.');
    if (isDecimal) {
        $('#decimalWarning').text('Decimal values are not allowed for quantity.');
    } else {
        $('#decimalWarning').text('');
    }
    $('#squareMeterInput').val(''); // Reset square meter input when tile piece input changes
    calculate();
});


$('#tilePieceInput').on('change', function () {
    calculate();
});

$('#tileSize, #squareMeterInput').on('change input', function () {
    calculate();
});

function calculate() {
    if ($('#disableSquareMeter').prop('checked')) {
        $('#result').text('Square meter input is disabled.');
        return;
    }
    var selectedSize = $('#tileSize').val();
    var squareMeterInput = parseFloat($('#squareMeterInput').val());
    var tilePieceInput = parseInt($('#tilePieceInput').val());

    var dimensions = selectedSize.split('x');
    var tileArea = dimensions[0] * dimensions[1] / 1000000; // Convert to square meters

    // Clear result message
    $('#result').text('');

    if (!isNaN(squareMeterInput)) {
        // Calculate the number of tiles based on square meters
        var tilesRequired = Math.ceil(squareMeterInput / tileArea);
        $('#tilePieceInput').val(tilesRequired);
    } else if (!isNaN(tilePieceInput)) {
        // Calculate square meters based on the number of tiles
        var squareMeters = tilePieceInput * tileArea;
        $('#squareMeterInput').val(squareMeters.toFixed(2));
    } else {
        $('#result').text('Please enter a valid number.');
    }
}

function toggleSquareMeterInput() {
    var disableSquareMeter = $('#disableSquareMeter').prop('checked');
    $('#squareMeterInput').prop('disabled', disableSquareMeter);
}

function swapInputs() {
    // Toggle between swapping values and swapping places
    var squareMeterValue = $('#squareMeterInput').val();
    var tilePieceValue = $('#tilePieceInput').val();

    if (squareMeterValue || tilePieceValue) {
        // Swap values
        $('#squareMeterInput').val(tilePieceValue);
        $('#tilePieceInput').val(squareMeterValue);
    } else {
        // Swap places
        var $squareMeterInput = $('#squareMeterInput');
        var $tilePieceInput = $('#tilePieceInput');
        var $button = $('button');

        $squareMeterInput.after($tilePieceInput);
        $tilePieceInput.after($button);
    }
}

*/

jQuery(document).ready(function ($) {
    $('#squareMeterInput').on('input', function () {
        $('#tilePieceInput').val(''); // Reset tile piece input when square meter input changes
        $('#decimalWarning').text(''); // Clear decimal warning
        calculate();
    });

    $('#tilePieceInput').on('input', function () {
        var isDecimal = $('#tilePieceInput').val().includes('.');
        if (isDecimal) {
            $('#decimalWarning').text('Decimal values are not allowed for quantity.');
        } else {
            $('#decimalWarning').text('');
        }
        $('#squareMeterInput').val(''); // Reset square meter input when tile piece input changes
        calculate();
    });

    $('#tilePieceInput').on('change', function () {
        calculate();
    });

    $('#tileSize, #squareMeterInput').on('change input', function () {
        calculate();
    });

    function calculate() {
        if ($('#disableSquareMeter').prop('checked')) {
            $('#result').text('Square meter input is disabled.');
            return;
        }
        var selectedSize = $('#tileSize').val();
        var squareMeterInput = parseFloat($('#squareMeterInput').val());
        var tilePieceInput = parseInt($('#tilePieceInput').val());

        var dimensions = selectedSize.split('x');
        var tileArea = dimensions[0] * dimensions[1] / 1000000; // Convert to square meters

        // Clear result message
        $('#result').text('');

        if (!isNaN(squareMeterInput)) {
            // Calculate the number of tiles based on square meters
            var tilesRequired = Math.ceil(squareMeterInput / tileArea);
            $('#tilePieceInput').val(tilesRequired);
        } else if (!isNaN(tilePieceInput)) {
            // Calculate square meters based on the number of tiles
            var squareMeters = tilePieceInput * tileArea;
            $('#squareMeterInput').val(squareMeters.toFixed(2));
        } else {
            $('#result').text('Please enter a valid number.');
        }
    }

    function toggleSquareMeterInput() {
        var disableSquareMeter = $('#disableSquareMeter').prop('checked');
        $('#squareMeterInput').prop('disabled', disableSquareMeter);
    }

    function swapInputs() {
        // Toggle between swapping values and swapping places
        var squareMeterValue = $('#squareMeterInput').val();
        var tilePieceValue = $('#tilePieceInput').val();

        if (squareMeterValue || tilePieceValue) {
            // Swap values
            $('#squareMeterInput').val(tilePieceValue);
            $('#tilePieceInput').val(squareMeterValue);
        } else {
            // Swap places
            var $squareMeterInput = $('#squareMeterInput');
            var $tilePieceInput = $('#tilePieceInput');
            var $button = $('button');

            $squareMeterInput.after($tilePieceInput);
            $tilePieceInput.after($button);
        }
    }
});






