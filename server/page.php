<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    // include_once 'config/database.php';
    include_once 'class/page.php';



    $items = new Page();

   $stmt = $items->getPageToken();
    

    echo $stmt;

?>