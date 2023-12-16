document.addEventListener('DOMContentLoaded', function (){

    let registerForm = document.getElementById('registerForm')
    registerForm?.addEventListener('submit', getregistrationDetails);

    function getregistrationDetails(event){
        event.preventDefault();
        let details = {
            firstName : document.getElementById('firstName').value,
            lastName:document.getElementById('lastName').value,
            userName: document.getElementById('userName').value,
            email:document.getElementById('Email').value,
            password:document.getElementById('passWord').value,
            confirmPassword:document.getElementById('confirmPassword').value
        }
        console.log(details.lastName)
        console.log(details)
        fetch('http://127.0.0.1:3000/users/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(details)
        })
        .then(data=>data.json())
        .then(userData=>{
            if(!userData.message){
                console.log(userData)
                window.location.href='login.html'
            }
        })
        .catch(error=>{
            console.log(error)
            let errorMessage = document.querySelector('#registerForm .error')
            document.getElementById('userName').value = ''
            document.getElementById('passWord').value = ''
        })
    }
})