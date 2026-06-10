<?php
function my_theme_enqueue_scripts() {
    wp_enqueue_style('bootstrap-css', get_template_directory_uri() . '/node_modules/bootstrap/dist/css/bootstrap.min.css', array(), '5.3.0');
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/css/main.css', array('bootstrap-css'), '1.0.0');
    wp_enqueue_style('typography', get_template_directory_uri() . '/scss/typography.css', array(), '1.0.0');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', array(), '5.3.0', true);
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_scripts');
