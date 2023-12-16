document.addEventListener('DOMContentLoaded', function (){

    let  toDoForm = document.getElementById('homePageform')
    toDoForm?.addEventListener('submit', gettoDoDetails);

    function gettoDoDetails(event){
        event.preventDefault();
        let userData = JSON.parse(localStorage.getItem('user'))
        let toDO = {
            title: document.getElementById('todoItem').value,
            description:document.getElementById("description").value,
            UserID: userData.UserID
        }
        // let item = document.createElement('div')
        // let checkbox = document.createElement('input')
        // checkbox.setAttribute('type', 'checkbox')
        // let checkboxLabel =document.createElement('label')
        // checkboxLabel.appendChild(document.createTextNode(toDO))
        // checkbox.appendChild(checkboxLabel)
        // item.appendChild(checkbox)
        fetch('http://127.0.0.1:3000/todo/addTodoItem',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(toDO)
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

        console.log(toDO)
    }
    console.log('home page js')
});
