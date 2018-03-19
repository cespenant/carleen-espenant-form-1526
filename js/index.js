
// getting references;
const main = document.getElementById("main");
const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const message = document.getElementById("message");



const collectedData = {
    fullName: null,
    email: null,
    message: null,
};

const errors = {
    fn: null,
    em: null,
    msg: null,
};


const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // email reg-exp

function validateForm() {

    event.preventDefault()
    
    // validate full name
    
    if (fullName.value !== "") {
            collectedData.fullName = fullName.value;
            delete errors.fn;
    } else {
        errors.fn = "Full name is missing";
    }

    // validate email
    if (email.value !== "") {
        if (pattern.test(email.value)) {
            // add that value to collectedData.email
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
        }  
    } else {
        errors.em = "Email is missing";
    }
    
    
    // validate message
    
    if (message.value !== "") {
            collectedData.message = message.value;
            delete errors.msg;
    } else {
        errors.msg = "Message is missing";
    }
    
    
    // provide feedback or error-report
    if (Object.keys(errors).length === 0) {
        console.log('COLLECTED DATA', collectedData);
        form.reset();
        //clear text fields
    } else {
        console.log('ERRORS', errors);
    }
    
}



