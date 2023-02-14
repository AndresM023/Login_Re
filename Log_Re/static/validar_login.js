const clave1 = document.getElementById('contraseña');


    toggleBtn.onclick = function (){
        if (clave1.type === 'password') {
            clave1.setAttribute('type', 'text');
            toggleBtn.classList.add('hide');
        }
        else {
            clave1.setAttribute('type', 'password');
            toggleBtn.classList.remove('hide');

        }
    };

  //
  // $(document).ready(function() {
  //     $("#formu").submit(function(e) {
  //       e.preventDefault();
  //       var correo_electronico = $("#correo").val();
  //       var clave = $("#contraseña").val();
  //     $.ajax({
  //       type: "POST",
  //       url: "{% url 'login' %}",
  //       data: {
  //         'correo_electronico': correo_electronico,
  //         'clave': clave,
  //         csrfmiddlewaretoken: '{{ csrf_token }}',
  //       },
  //       success: function(data){
  //         if (data === "OK"){
  //           alert("Las credenciales son correctas");
  //           window.location.href = "{% url 'claveolv' %}";
  //         }else{
  //           alert("Datos incorrectos");
  //         }
  //       }
  //     });
  //   });
  // });





//   formas.addEventListener('submit',e=>{
//         e.preventDefault();
//         validateInputs();
//     });
//
//
//
// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error')
//
//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// };
//
// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//
//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
//
// };
//
// const isValidEmail = emai => {
//     const re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(emai).toLowerCase());
// };
//
//
//
// const validateInputs = () => {
//         const emailValue = emai.value.trim();
//
//
//
//         if (!isValidEmail(emailValue)) {
//             setError(emai, 'El correo electrónico que ingresaste no está registrado.');
//         }
//         else {
//             setSuccess(emai)
//             document.querySelector("form").submit();
//         }
//         };
