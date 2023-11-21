(function ($) {
    $(document).ready(function () {

        // Function to round a number to the nearest integer
        function roundToInteger(number) {
            return Math.round(number);
        }

        // Event handler for square meter input change
        $('#squareMeterInput').on('input', function () {
            updateCalculation();
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
            updateCalculation();
        });

        // Event handler for WPC Variations Radio Buttons selected on click
        $(document).on('woovr_selected_on_click', function (e, selected, variations, variations_form) {
            updateCalculation();
        });

        // Event handler for WPC Variations Radio Buttons selected
        $(document).on('woovr_selected', function (e, selected, variations, variations_form) {
            updateCalculation();
        });

        // Function to update the calculation based on inputs
        function updateCalculation() {
            var squareMeterValue = parseFloat($('#squareMeterInput').val());
            var tileSize = parseFloat($('input[name="' + wpc_vars.sizemm + '"]:checked').val());

            if (!isNaN(squareMeterValue) && squareMeterValue > 0 && !isNaN(tileSize) && tileSize > 0) {
                var tileQuantity = roundToInteger(squareMeterValue / ((tileSize / 1000) * (tileSize / 1000))); // Convert size to meters
                $('#tilePieceInput').val(tileQuantity);
            } else {
                $('#tilePieceInput').val('');
            }
        }
    });
})(jQuery);