<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Content-Type: application/json;");
    
    include_once 'class/page.php';
    $items = new Page();
    $stmt = $items->getPageToken();

    echo $stmt;

?>