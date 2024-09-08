document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-search-student');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            mySearchStudent(form);
        });
    } else {
        console.error('Form not found');
    }
});

function mySearchStudent(form) {
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    console.log('Params:', params);

    fetch('request.php?' + params, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        displayResults(data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
}

function displayResults(data) {
    const tbody = document.getElementById('student-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    if (data.length > 0) {
        data.forEach(student => {
            const row = tbody.insertRow();
            row.insertCell(0).textContent = student.email;
            row.insertCell(1).textContent = student.fullname;
            row.insertCell(2).textContent = student.gender;
            row.insertCell(3).textContent = student.grade_id;
            row.insertCell(4).textContent = student.birthdate;
        });
    } else {
        tbody.innerHTML = '<tr><td colspan="5">No student found</td></tr>';
    }
}