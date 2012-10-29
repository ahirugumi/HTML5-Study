<?php
$my_file = file_get_contents("xhr2.txt");
header("Access-Control-Allow-Origin: *");
print $my_file;
?>
