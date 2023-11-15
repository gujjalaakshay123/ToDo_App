document.addEventListener('DOMContentLoaded', function (){

    let  toDoForm = document.getElementById('homePageform')
    toDoForm?.addEventListener('submit', gettoDoDetails);

    function gettoDoDetails(event){
        event.preventDefault();
        let toDO = document.getElementById('todoItem').value;
        let item = document.createElement('div')
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        let checkboxLabel =document.createElement('label')
        checkboxLabel.appendChild(document.createTextNode(toDO))
        checkbox.appendChild(checkboxLabel)
        item.appendChild(checkbox)

        console.log(toDO)
    }
    console.log('home page js')
});
