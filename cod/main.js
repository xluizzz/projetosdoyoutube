const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");

const errorMessage = document.querySelector(".msg"); 

const items = document.querySelector('.items'); 

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const nameValue = nameInput.value; 
    const emailValue = emailInput.value;

    //caso os campos não tenham sido preenchidos
    if (nameValue === '' || emailValue === '') { 
        errorMessage.textContent = "Please fill out the fields!";
        //adicionando a classe do css para o estilo 
        errorMessage.classList = "error"; 
    
        setTimeout(() => { 
            errorMessage.textContent = ""; 
            errorMessage.classList = ""; 
        }, 3000); 
        return;
    }

    const li = document.createElement("li"); 
    li.classList ="item"; 
    li.innerHTML = `Nome: ${nameValue}<br /> Email: ${emailValue}`; 

    items.appendChild(li); 

    nameInput.value = ''; 
    emailInput.value = ''; 

}) ; 



