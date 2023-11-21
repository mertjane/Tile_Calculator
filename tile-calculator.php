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

    // Enqueue custom script
    wp_enqueue_script('tile-calculator-script', plugin_dir_url(__FILE__) . 'tile-calculator.js', array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'enqueue_tile_calculator_scripts');

// Shortcode function
function tile_calculator_shortcode()
{
    ob_start();
    ?>

    <div>
        <input type="radio" name="radioButton" value="305x305x12" id="radioButton1">
        <label for="radioButton1">305x305x12 mm</label>
    </div>
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