<?php
/*
Plugin Name: Tile Calculator
Description: Tile calculator WordPress.
Version: 1.0
Author: Mertcan
*/

// Enqueue scripts and styles
function enqueue_tile_calculator_scripts()
{
    // Enqueue jQuery if not already enqueued
    if (!wp_script_is('jquery', 'enqueued')) {
        wp_enqueue_script('jquery');
    }

    // Enqueue custom script with localization
    wp_enqueue_script('tile-calculator-script', plugin_dir_url(__FILE__) . 'tile-calculator.js', array('jquery'), '1.0', true);

    // Localize script to pass data to the script
    wp_localize_script('tile-calculator-script', 'wpc_vars', array(
        'sizemm' => esc_attr(get_option('wpc_variation_slug')), // Replace with the actual option name of the slug
    ));
}

add_action('wp_enqueue_scripts', 'enqueue_tile_calculator_scripts');

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

    <?php
    return ob_get_clean(); // End and clean the output buffer
}

add_shortcode('tile_calculator', 'tile_calculator_shortcode');
?>