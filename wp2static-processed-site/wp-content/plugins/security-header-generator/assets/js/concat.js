jQuery( document ).ready( function( $ ) {

    // get our WP Defaults Switch
    var _iwd = jQuery( '[data-depend-id="include_wordpress_defaults"]' );

    // we need the original values
    const _csp_styles = jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( ) || '';
    const _csp_scripts = jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( ) || '';
    const _csp_fonts = jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( ) || '';
    const _csp_images = jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( ) || '';
    const _csp_connect = jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( ) || '';
    const _csp_frames = jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( ) || '';

    // onload
    set_csp_default( _iwd.val( ) );

    // on switch change
    _iwd.change( function( ) {
        
        // switch the value
        set_csp_default( _iwd.val( ) );
        
    } );

    // set the defaults
    function set_csp_default( _iwd_val ) {

        // check it's value onload
        if( _iwd_val == '1' ) {

            // build our new values
            var _styles = _csp_styles + ' *.googleapis.com *.gstatic.com ';
            var _scripts = _csp_scripts + ' *.g.doubleclick.net *.google-analytics.com *.google.com *.googletagmanager.com *.gstatic.com ';
            var _fonts = _csp_fonts + ' *.gstatic.com *.bootstrapcdn.com ';
            var _images = _csp_images + ' *.googletagmanager.com *.w.org *.gravatar.com *.google.com *.google-analytics.com *.gstatic.com ';
            var _connect = _csp_connect + ' *.google-analytics.com *.wpengine.com yoast.com *.google.com *.g.doubleclick.net ';
            var _frames = _csp_frames + ' *.g.doubleclick.net *.google.com *.fls.doubleclick.net ';

            // set the field values with our defaults
            jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( _styles.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( _scripts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( _fonts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( _images.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( _connect.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( _frames.remDups( ) );

        } else {

            // clear defaults
            jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( _csp_styles.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( _csp_scripts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( _csp_fonts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( _csp_images.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( _csp_connect.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( _csp_frames.remDups( ) );

        }
    }

} );

// remove the duplciates
String.prototype.remDups = function( ) {
    const set = new Set( this.split( ' ') )
    return [...set].join( ' ' )
}
jQuery(document).ready(function(e){var a=jQuery('[data-depend-id="include_wordpress_defaults"]');const o=jQuery('[data-depend-id="generate_csp_custom_styles"]').val()||"",n=jQuery('[data-depend-id="generate_csp_custom_scripts"]').val()||"",r=jQuery('[data-depend-id="generate_csp_custom_fonts"]').val()||"",u=jQuery('[data-depend-id="generate_csp_custom_images"]').val()||"",p=jQuery('[data-depend-id="generate_csp_custom_connect"]').val()||"",m=jQuery('[data-depend-id="generate_csp_custom_frames"]').val()||"";function t(e){var a,t,c,s,d;"1"==e?(e=o+" *.googleapis.com *.gstatic.com ",a=n+" *.g.doubleclick.net *.google-analytics.com *.google.com *.googletagmanager.com *.gstatic.com ",t=r+" *.gstatic.com *.bootstrapcdn.com ",c=u+" *.googletagmanager.com *.w.org *.gravatar.com *.google.com *.google-analytics.com *.gstatic.com ",s=p+" *.google-analytics.com *.wpengine.com yoast.com *.google.com *.g.doubleclick.net ",d=m+" *.g.doubleclick.net *.google.com *.fls.doubleclick.net ",jQuery('[data-depend-id="generate_csp_custom_styles"]').val(e.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(a.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(t.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(c.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(s.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(d.remDups())):(jQuery('[data-depend-id="generate_csp_custom_styles"]').val(o.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(n.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(r.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(u.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(p.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(m.remDups()))}t(a.val()),a.change(function(){t(a.val())})}),String.prototype.remDups=function(){return[...new Set(this.split(" "))].join(" ")};
jQuery( document ).ready( function( $ ) {

    // get our WP Defaults Switch
    var _iwd = jQuery( '[data-depend-id="include_wordpress_defaults"]' );

    // we need the original values
    const _csp_styles = jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( ) || '';
    const _csp_scripts = jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( ) || '';
    const _csp_fonts = jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( ) || '';
    const _csp_images = jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( ) || '';
    const _csp_connect = jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( ) || '';
    const _csp_frames = jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( ) || '';

    // onload
    set_csp_default( _iwd.val( ) );

    // on switch change
    _iwd.change( function( ) {
        
        // switch the value
        set_csp_default( _iwd.val( ) );
        
    } );

    // set the defaults
    function set_csp_default( _iwd_val ) {

        // check it's value onload
        if( _iwd_val == '1' ) {

            // build our new values
            var _styles = _csp_styles + ' *.googleapis.com *.gstatic.com ';
            var _scripts = _csp_scripts + ' *.g.doubleclick.net *.google-analytics.com *.google.com *.googletagmanager.com *.gstatic.com ';
            var _fonts = _csp_fonts + ' *.gstatic.com *.bootstrapcdn.com ';
            var _images = _csp_images + ' *.googletagmanager.com *.w.org *.gravatar.com *.google.com *.google-analytics.com *.gstatic.com ';
            var _connect = _csp_connect + ' *.google-analytics.com *.wpengine.com yoast.com *.google.com *.g.doubleclick.net ';
            var _frames = _csp_frames + ' *.g.doubleclick.net *.google.com *.fls.doubleclick.net ';

            // set the field values with our defaults
            jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( _styles.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( _scripts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( _fonts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( _images.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( _connect.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( _frames.remDups( ) );

        } else {

            // clear defaults
            jQuery( '[data-depend-id="generate_csp_custom_styles"]' ).val( _csp_styles.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_scripts"]' ).val( _csp_scripts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_fonts"]' ).val( _csp_fonts.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_images"]' ).val( _csp_images.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_connect"]' ).val( _csp_connect.remDups( ) );
            jQuery( '[data-depend-id="generate_csp_custom_frames"]' ).val( _csp_frames.remDups( ) );

        }
    }

} );

// remove the duplciates
String.prototype.remDups = function( ) {
    const set = new Set( this.split( ' ') )
    return [...set].join( ' ' )
}
jQuery(document).ready(function(e){var a=jQuery('[data-depend-id="include_wordpress_defaults"]');const o=jQuery('[data-depend-id="generate_csp_custom_styles"]').val()||"",n=jQuery('[data-depend-id="generate_csp_custom_scripts"]').val()||"",r=jQuery('[data-depend-id="generate_csp_custom_fonts"]').val()||"",u=jQuery('[data-depend-id="generate_csp_custom_images"]').val()||"",p=jQuery('[data-depend-id="generate_csp_custom_connect"]').val()||"",m=jQuery('[data-depend-id="generate_csp_custom_frames"]').val()||"";function t(e){var a,t,c,s,d;"1"==e?(e=o+" *.googleapis.com *.gstatic.com ",a=n+" *.g.doubleclick.net *.google-analytics.com *.google.com *.googletagmanager.com *.gstatic.com ",t=r+" *.gstatic.com *.bootstrapcdn.com ",c=u+" *.googletagmanager.com *.w.org *.gravatar.com *.google.com *.google-analytics.com *.gstatic.com ",s=p+" *.google-analytics.com *.wpengine.com yoast.com *.google.com *.g.doubleclick.net ",d=m+" *.g.doubleclick.net *.google.com *.fls.doubleclick.net ",jQuery('[data-depend-id="generate_csp_custom_styles"]').val(e.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(a.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(t.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(c.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(s.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(d.remDups())):(jQuery('[data-depend-id="generate_csp_custom_styles"]').val(o.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(n.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(r.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(u.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(p.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(m.remDups()))}t(a.val()),a.change(function(){t(a.val())})}),String.prototype.remDups=function(){return[...new Set(this.split(" "))].join(" ")},jQuery(document).ready(function(e){var a=jQuery('[data-depend-id="include_wordpress_defaults"]');const o=jQuery('[data-depend-id="generate_csp_custom_styles"]').val()||"",n=jQuery('[data-depend-id="generate_csp_custom_scripts"]').val()||"",r=jQuery('[data-depend-id="generate_csp_custom_fonts"]').val()||"",u=jQuery('[data-depend-id="generate_csp_custom_images"]').val()||"",p=jQuery('[data-depend-id="generate_csp_custom_connect"]').val()||"",m=jQuery('[data-depend-id="generate_csp_custom_frames"]').val()||"";function t(e){var a,t,c,s,d;"1"==e?(e=o+" *.googleapis.com *.gstatic.com ",a=n+" *.g.doubleclick.net *.google-analytics.com *.google.com *.googletagmanager.com *.gstatic.com ",t=r+" *.gstatic.com *.bootstrapcdn.com ",c=u+" *.googletagmanager.com *.w.org *.gravatar.com *.google.com *.google-analytics.com *.gstatic.com ",s=p+" *.google-analytics.com *.wpengine.com yoast.com *.google.com *.g.doubleclick.net ",d=m+" *.g.doubleclick.net *.google.com *.fls.doubleclick.net ",jQuery('[data-depend-id="generate_csp_custom_styles"]').val(e.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(a.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(t.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(c.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(s.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(d.remDups())):(jQuery('[data-depend-id="generate_csp_custom_styles"]').val(o.remDups()),jQuery('[data-depend-id="generate_csp_custom_scripts"]').val(n.remDups()),jQuery('[data-depend-id="generate_csp_custom_fonts"]').val(r.remDups()),jQuery('[data-depend-id="generate_csp_custom_images"]').val(u.remDups()),jQuery('[data-depend-id="generate_csp_custom_connect"]').val(p.remDups()),jQuery('[data-depend-id="generate_csp_custom_frames"]').val(m.remDups()))}t(a.val()),a.change(function(){t(a.val())})}),String.prototype.remDups=function(){return[...new Set(this.split(" "))].join(" ")};