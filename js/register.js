function validateForm() {
    var username = document.getElementById("username").value;
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var vpassword = document.getElementById("vpassword").value;
    var acceptTerms = document.getElementById("accept-terms").checked;
  
    // Verifica si los campos obligatorios no están en blanco
    if (username === "" || correo === "" || password === "" || vpassword === "") {
      alert("Por favor, complete todos los campos obligatorios.");
      return false; // Evita que el formulario se envíe
    }
  
    // Verifica si las contraseñas coinciden
    if (password !== vpassword) {
      alert("Las contraseñas no coinciden. Vuelve a intentar.");
      return false; // Evita que el formulario se envíe
    }
  
    // Verifica si el checkbox de aceptación de términos está marcado
    if (!acceptTerms) {
      alert("Debes aceptar los Términos y Condiciones.");
      return false; // Evita que el formulario se envíe
    }
  
    // Si todas las validaciones pasan, el formulario se envía
    return true;
  }
  