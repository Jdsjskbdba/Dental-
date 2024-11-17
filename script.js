document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;

    if (name && email && service && date) {
        alert(`تم حجز موعدك بنجاح!\n\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالخدمة: ${service}\nالتاريخ: ${date}`);
    } else {
        alert("يرجى تعبئة جميع الحقول.");
    }
});