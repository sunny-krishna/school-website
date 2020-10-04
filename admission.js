
          // Example starter JavaScript for disabling form submissions if there are invalid fields
          (function() {
            'use strict';
            window.addEventListener('load', function() {
              // Fetch all the forms we want to apply custom Bootstrap validation styles to
              var forms = document.getElementsByClassName('needs-validation');
              // Loop over them and prevent submission
              var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  form.classList.add('was-validated');
                }, false);
              });
            }, false);
          })();
/*-----------------------------------Submit button---------------------------------------------------*/
const button=document.querySelector('.btn');
const form=document.querySelector('.needs-validation')
button.addEventListener('click',function()
{
  if(form.checkValidity()===true)
  {
  alert('you have registered successfully');
  
  }
  else
  {
    alert('Please Enter all details');
  }
});