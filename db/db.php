<?php
$servername = "localhost";
$username = "baroncohen";
$password = "3KyWAYAQB2tS8LFS";
$dbname = "baroncohen";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$score = $_POST['score'];
$seconds = $_POST['seconds'];

$sql = "INSERT INTO rec (score, seconds)
VALUES ('$score', '$seconds')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>