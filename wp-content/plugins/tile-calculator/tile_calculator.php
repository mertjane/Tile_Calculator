<?php
/*
Plugin Name: Tile Calculator
Description: Tile calculator for your WordPress site.
Version: 1.0
Author: Your Name
*/

function enqueue_tile_calculator_scripts() {
    wp_enqueue_script('jquery');
    wp_enqueue_script('tile-calculator-script', plugin_dir_url(__FILE__) . 'tile-calculator-script.js', array('jquery'), '1.0', true);
}

add_action('wp_enqueue_scripts', 'enqueue_tile_calculator_scripts');

function tile_calculator_shortcode() {
    ob_start(); ?>
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tile Calculator</title>
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script src="https://kit.fontawesome.com/a5f92d7a0b.js" crossorigin="anonymous"></script>
  <style>
    * {
      font-family: Arial, Helvetica, sans-serif;
    }

    label {
      color: #292828de;
    }

    .menu {
      border: 1px solid #ddd;
      outline: none;
      width: 200px;
      height: 40px;
      border-radius: 2px;
    }

    .value {
      border: 1px solid #ddd;
      outline: none;
      width: 120px;
      height: 40px;
      border-radius: 2px;
      padding-left: 20px;
    }

    .result {
      border: 1px solid #ddd;
      outline: none;
      width: 120px;
      height: 40px;
      border-radius: 2px;
      padding-left: 20px;
    }

    button {
      height: 40px;
      width: 40px;
    }

    #squareMeterInput[disabled] {
      background-color: #f0f0f0;
      color: #888;
    }

    #result {
      color: red;
      font-size: 12px;
    }

    .warning {
      color: red;
      font-size: 12px;

    }
  </style>
</head>

<body>

  <label for="tileSize">Select Tile Size:</label>
  <select class="menu" id="tileSize">
    <option value="152x76">152mm x 76mm</option>
    <option value="305x305">305mm x 305mm</option>
    <option value="400x100">400mm x 100mm</option>
    <option value="400x200">400mm x 200mm</option>
    <option value="400x400">400mm x 400mm</option>
    <option value="600x400">600mm x 400mm</option>
    <option value="600x600">600mm x 600mm</option>
  </select>

  <br>
  <br>

  <input type="checkbox" id="disableSquareMeter" onchange="toggleSquareMeterInput()">
  <label for="disableSquareMeter">Free Sample</label>

  <br>
  <br>

  <input class="value" type="number" id="squareMeterInput" placeholder="m²">
  <button onclick="swapInputs()"><i class="fa">
      &#xf362;
    </i></button>
  <input class="value" type="number" id="tilePieceInput" placeholder="piece">
  <p class="warning" id="decimalWarning"></p>
  <br>
  <p id="result"></p>
</body>

</html>
    <?php
    return ob_get_clean();
}
add_shortcode('tile_calculator', 'tile_calculator_shortcode');