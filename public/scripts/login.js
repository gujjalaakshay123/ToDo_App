document.addEventListener('DOMContentLoaded', function () {
    function handleFormSubmit(event) {
        event.preventDefault(); 

        let details = {
        username : document.getElementById('userName').value,
        password:  document.getElementById('passWord').value
        }

        console.log('Username:', details.username);
        console.log('Password:', details.password);
        console.log(details)
    }

    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleFormSubmit);
});