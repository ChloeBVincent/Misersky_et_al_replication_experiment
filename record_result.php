<?php
// get the data from the POST message
$post_data = json_decode(file_get_contents('php://input'), true);
$data = $post_data['filedata'];
$name = $post_data['filename'];
// generate a unique ID for the file, e.g., session-6feu833950202
//$file = uniqid("session2-");
// the directory "data" must be writable by the server
$filename = "/home/www/xpdata/{$name}.csv";
// write the file to disk
file_put_contents($filename, $data);
?>