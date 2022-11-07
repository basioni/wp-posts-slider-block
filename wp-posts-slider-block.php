<?php
/**
 * Plugin Name: WP Posts slider
 * Description WP posts Slider block
 */

 if(! defined('ABSPATH')) exit; // Exit if accessed directly 

 class BasioPostsSlider {
    function __construct(){
        add_action('enqueue_block_editor_assets', array($this, 'wp_posts_slider_register'));
    }

    function wp_posts_slider_register()
    {
       wp_enqueue_script('wp-block-posts-slider',plugin_dir_url(__FILE__).'build/index.js', array('wp-blocks', 'wp-i18n','wp-editor', 'wp-element'));
    }
 }

 $basioPostsSlider = new BasioPostsSlider();
 
?>