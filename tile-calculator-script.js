(function ($) {
    $(document).ready(function () {

        // Function to round a number to the nearest integer
        function roundToInteger(number) {
            return Math.round(number);
        }

        // Event handler for square meter input change
        $('#squareMeterInput').on('input', function () {
            var squareMeterValue = parseFloat($(this).val());
            var tileSize = parseFloat($('input[name="sizemm"]:checked').val());

            if (!isNaN(squareMeterValue) && squareMeterValue > 0 && !isNaN(tileSize) && tileSize > 0) {
                var tileQuantity = roundToInteger(squareMeterValue / ((tileSize / 1000) * (tileSize / 1000))); // Convert size to meters
                $('#tilePieceInput').val(tileQuantity);
            } else {
                $('#tilePieceInput').val('');
            }
        });

        // Event handler for tile piece input change
        $('#tilePieceInput').on('keydown', function (e) {
            // Prevent entering decimals
            if (e.key === '.' || e.key === ',') {
                e.preventDefault();
            }
        });

        // Event handler for tile piece input change
        $('#tilePieceInput').on('input', function () {
            var tileQuantity = parseInt($(this).val());
            var tileSize = parseFloat($('input[name="sizemm"]:checked').val());

            if (!isNaN(tileQuantity) && tileQuantity > 0 && !isNaN(tileSize) && tileSize > 0) {
                var squareMeterValue = tileQuantity * ((tileSize / 1000) * (tileSize / 1000)); // Convert size to meters
                $('#squareMeterInput').val(squareMeterValue.toFixed(3));
            } else {
                $('#squareMeterInput').val('');
            }
        });

    });
})(jQuery);
