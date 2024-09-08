document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-add-student');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            myRegisterStudent(form);
        });
    } else {
        console.error('Form not found');
    }
});

function myRegisterStudent(form) {
    const formData = new FormData(form);
    console.log('Form Data:', Array.from(formData.entries()));

    fetch('request.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        console.log('Response:', text);
        if (text.trim() === 'Student registered successfully') {
            alert('Student registered successfully!');
            form.reset();
        } else {
            alert('Failed to register student');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
}
