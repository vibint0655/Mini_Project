function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fname").value,
        to_name:document.getElementById("toname").value,
        from_email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    };
    emailjs.send('service_vcy3g8u','template_p87uykn',tempParams ).then(function(res){
        window.alert("sended!");
        console.log("success",res.status);
    })
}