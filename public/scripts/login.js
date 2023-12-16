document.addEventListener('DOMContentLoaded', function () {
    function handleFormSubmit(event) {
        event.preventDefault(); 

        let details = {
        username : document.getElementById('userName').value,
        password:  document.getElementById('passWord').value
        }

        // console.log('Username:', details.username);
        // console.log('Password:', details.password);
        // console.log(details)
        fetch('http://127.0.0.1:3000/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(details)
        })
        .then(data => data.json())
        .then(userData => {
            if (!userData.message){
                console.log(userData)
                localStorage.setItem("userData", JSON.stringify(userData))
                window.location.href='home.html'
            }
            // else{
            //     let errorMessage = document.querySelector("loginForm .error")
            //     errorMessage.innerText = userData.message;
            //     document.getElementById('userName').value = ''
            //     document.getElementById('passWord').value = ''
            //     console.log(userData)
            // }
        })
        .catch(error =>{
            console.log(error)
            let errorMessage = document.querySelector('#loginForm .error')
            document.getElementById('userName').value = ''
            document.getElementById('passWord').value = ''
        })
    }

    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleFormSubmit);
});