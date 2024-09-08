<?php
function getPDOConnection() {
    $host = 'localhost';
    $db = 'lp_official';
    $user = 'root';
    $pass = '';

    return new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
}
function my_search_student(string $email) : array {
    $results = [];
    try {
        $pdo = getPDOConnection();
        $stmt = $pdo->prepare('SELECT email, fullname, gender, grade_id, birthdate FROM student WHERE email = :email');
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        error_log('Database error: ' . $e->getMessage());
    }
    return $results;
}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = $_GET['email'] ?? '';
    $results = my_search_student($email);
    header('Content-Type: application/json');
    echo json_encode($results);
}