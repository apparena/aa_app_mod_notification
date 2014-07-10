<?php
/**
 * add css lib paths here to compile it later with a less compiler in init.php
 * path starts from root
 */
$css_import = array(
    '/modules/aa_app_mod_notification/css/jquery.pnotify.default.css' => 'file',
);

// some stuff that replaces after compiling key = search, value = replace
$css_path_replacements = array();

return array('import' => $css_import, 'replace' => $css_path_replacements);