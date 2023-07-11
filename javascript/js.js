function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode")
    

}



function toggleDarkMode() {
    const body = document.body;
    const modalContent = document.querySelector(".modal-content");
  
    body.classList.toggle("dark-mode");
    modalContent.style.color = body.classList.contains("dark-mode") ? "#000" : "#000";
  }






$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          
          $('.filter').show('1000');
      }
      else
      {

          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});




const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageTextarea = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  if (messageTextarea.value.trim() === '') {
    alert('Please enter your message.');
    messageTextarea.focus();
    return;
  }

  // Perform form submission or further processing here
  // ...
  // Reset form fields after successful submission
  nameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';
});


 