document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // .trim() quita espacios extra (por si acaso copia y pega mal)
    const usuario = document.getElementById('userInput').value.trim(); 
    const pass = document.getElementById('passInput').value.trim();

    // Las opciones que definimos
    const usuariosValidos = ['Mariana', 'Mono'];
    const contrasenasValidas = ['Caleb', 'Patón'];

    // Validación inteligente (Ignora mayúsculas/minúsculas al comparar)
    // Buscamos si el usuario ingresado (en minúscula) está en nuestra lista (en minúscula)
    const esUsuarioValido = usuariosValidos.some(u => u.toLowerCase() === usuario.toLowerCase());
    const esPassValido = contrasenasValidas.some(p => p.toLowerCase() === pass.toLowerCase());

    if (esUsuarioValido && esPassValido) {
        
        // Mensaje personalizado según el usuario
        let mensajePersonalizado;
        if (usuario.toLowerCase() === 'mono') {
            mensajePersonalizado = 'Hola mi Mariana preciosa... ¡Tengo algo importante que decirte! ❤️🐒';
        } else {
            mensajePersonalizado = 'Hola Mariana... ¡Prepárate para una sorpresa especial! 🥰✨';
        }

        Swal.fire({
            icon: 'success',
            title: '¡Acceso Correcto! ❤️',
            text: mensajePersonalizado,
            showConfirmButton: false,
            timer: 3000, 
            timerProgressBar: true,
            background: '#fff0f3', // Fondo rosita suave para la alerta
        }).then(() => {
            // Te manda al index.html que está en la misma carpeta raíz
            window.location.href = "index.html"; 
        });
    } else {
        // Alerta de error más bonita
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Usuario o contraseña incorrectos. Inténtalo de nuevo, mi amor.',
            confirmButtonColor: '#ff4d6d',
            background: '#fff0f3'
        });
    }
});