<?php
function getPDOConnection() {
    $host = 'localhost';
    $db = 'lp_official';
    $user = 'root';
    $pass = '';

    return new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
}
function my_insert_student(string $email, string $fullname, string $gender, string $grade_id, DateTime $birthdate) : bool {
    try {
        $pdo = getPDOConnection();
        $stmt = $pdo->prepare('INSERT INTO student (email, fullname, gender, grade_id, birthdate) VALUES (:email, :fullname, :gender, :grade_id, :birthdate)');
        
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':fullname', $fullname);
        $stmt->bindParam(':gender', $gender);
        $stmt->bindParam(':grade_id', $grade_id);
        $formattedBirthdate = $birthdate->format('Y-m-d');
        $stmt->bindParam(':birthdate', $formattedBirthdate);
        
        if ($stmt->execute()) {
            return true;
        } else {
            $errorInfo = $stmt->errorInfo();
            error_log('SQL Error: ' . $errorInfo[2]);
            return false;
        }
    } catch (PDOException $e) {
        error_log('Database error: ' . $e->getMessage());
        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['student-mail'] ?? '';
    $fullname = $_POST['student-fullname'] ?? '';
    $gender = $_POST['student-gender'] ?? '';
    $grade_id = $_POST['student-grade'] ?? '';
    $birthdate = $_POST['student-birthdate'] ?? '';
    
    $birthdateObj = DateTime::createFromFormat('Y-m-d', $birthdate);

    if ($birthdateObj === false) {
        echo 'Invalid date format';
        exit;
    }

    if (my_insert_student($email, $fullname, $gender, $grade_id, $birthdateObj)) {
        echo 'Student registered successfully';
    } else {
        echo 'Failed to register student';
    }
}
