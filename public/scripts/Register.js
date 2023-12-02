document.addEventListener('DOMContentLoaded', function (){

    let registerForm = document.getElementById('registerForm')
    registerForm?.addEventListener('submit', getregistrationDetails);

    function getregistrationDetails(event){
        event.preventDefault();
        let details = {
            firstName : document.getElementById('firstName').value,
            lastName:document.getElementById('lastName').value,
            email:document.getElementById('Email').value,
            password:document.getElementById('passWord').value,
            confirmPassword:document.getElementById('confirmPassword').value
        }
        console.log(details.lastName)
        console.log(details)
    }
})