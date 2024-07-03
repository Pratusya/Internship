function SendMail(event) {
    event.preventDefault(); // Prevent form submission

    var params = {
        from_name: document.getElementById("fullName").value,
        fullName: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        phone_number: document.getElementById("phone_number").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_xbrcolb", "template_mhkd8km", params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send email. Please try again.");
        });

    return false; // Prevent form submission
}