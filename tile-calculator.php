// Shortcode function
function tile_calculator_shortcode()
{
    ob_start();
    ?>
    <div style="display: flex;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="align-self: center;font-weight: 600;" for="squareMeterInput">m²</label>
            <input class="value" type="number" id="squareMeterInput" placeholder="m²">
        </div>
        <button><i class="fa">&#xf362;</i></button>
        <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="align-self: center;font-weight: 600;" for="tilePieceInput">Quantity</label>
            <input class="value" type="number" id="tilePieceInput" placeholder="Quantity">
        </div>
    </div>

    <script>
        // Event handler for WPC Variations Radio Buttons selected on click
        jQuery(document).on('woovr_selected_on_click', function (e, selected, variations, variations_form) {
            updateCalculation();
        });

        // Event handler for WPC Variations Radio Buttons selected
        jQuery(document).on('woovr_selected', function (e, selected, variations, variations_form) {
            updateCalculation();
        });

        // Function to update the calculation based on inputs
        function updateCalculation() {
            var wpc_vars = <?php echo json_encode(array('sizemm' => html_entity_decode(esc_attr(get_option('wpc_variation_slug'))))); ?>;
            var squareMeterValue = parseFloat(jQuery('#squareMeterInput').val());
            var tileSize = parseFloat(jQuery('input[name="' + wpc_vars.sizemm + '"]:checked').val());

            if (!isNaN(squareMeterValue) && squareMeterValue > 0 && !isNaN(tileSize) && tileSize > 0) {
                var tileQuantity = roundToInteger(squareMeterValue / ((tileSize / 1000) * (tileSize / 1000))); // Convert size to meters
                jQuery('#tilePieceInput').val(tileQuantity);
            } else {
                jQuery('#tilePieceInput').val('');
            }
        }
    </script>

    <?php
    return ob_get_clean(); // End and clean the output buffer
}