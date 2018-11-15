//Variables
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');



//Event Listeners
eventListeners()
function eventListeners(){
    //App init
    document.addEventListener('DOMContentLoaded', appInit);

    //validate forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}



//Functions

//app initialization
function appInit(){
    //disable the send button onload
    sendBtn.disabled = true;  

}

//validate the fields
function validateField(){
    let errors;

    //validate length
    validateLength(this);

    //validate email
    if (this.type === 'email'){
        validateEmail(this);
    }
    
}
//validate length

function validateLength(field){
    if(field.value.length > 0 ){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

//validate email

function validateEmail(field){
    let emailText = field.value

    if (emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}