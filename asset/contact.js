let navLinks = document.querySelector (".nav-link");
let menuLinks = document.querySelector("#menu-links");

menuLinks.addEventListener("click", function (){
  navLinks.classList.toggle("active")
});


let  bookMeeting = document.querySelector(".book-meeting");
console.log(bookMeeting)
bookMeeting.addEventListener("click", function(){
  alert("Opening meeting scheduler…")

  setTimeout(() => {
    alert("Here you can choose a date & time!");
  }, 1000);
}) 

let fullName = document.querySelector("#full-name");
let companyName = document.querySelector("#company-name");
let email = document.querySelector("#email");
let phone =  document.querySelector("#phone-number")
let text = document.querySelector("#text")

let form = document.querySelector(".Contact-form")
console.log(form)

function setError(input,message){
  const small = input.parentElement.querySelector("small");
  small.textContent = message;

  input.classList.add("error-border");
  input.classList.remove("valid-border");
}

function setSuccess(input){
  const small = input.parentElement.querySelector("small");
  small.textContent = "";
 
  input.classList.remove("error-border");
  input.classList.add("valid-border")
}

form.addEventListener("submit", function(e){
  let valid = true;
  // full name validation
  if (fullName.value.trim() === "") {
    setError(fullName,"Full name is required")
    valid = false;
  } else{
    setSuccess(fullName);
  }
  // company validation 
  if(companyName.value.trim() === ""){
    setError(companyName, "Company name is required");
    valid = false;
  } else{
    setSuccess(companyName);
  }
  // Email validation 
  if (email.value.trim() === ""){
    setError(email, "Enter a valid email address");
    valid = false
  } else{
    setSuccess(email);
  }
  const digitsOnly = phone.value.replace(/\D/g, "")
  if (digitsOnly.length < 10){
    setError(phone, "Phone number must be at least 10 digits ");
    valid = false;
  } else{
    setSuccess(phone);
  }
  if (!valid) e.preventDefault(); // stop form from actually submitting    
});
 
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-q');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('open');
            });

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });
});


