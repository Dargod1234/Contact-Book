$('ul.tabs li a:first').addClass('active');
$('.container article').hide();
$('.container article:first').show();

$('ul.tabs li a').click(function(){
    $('ul.tabs li a').removeClass('active');
    $(this).addClass('active');
    $('.container article').hide();

    var activeTab = $(this).attr('href');
    $(activeTab).show();
    return false;
});

const nombre = document.querySelector('.Nombre')
const numero = document.querySelector('.Numero')
const direccion = document.querySelector('.Direccion')
const addcontacto = document.querySelector('.add-contacto')

const listadoTareas = document.querySelector('.listado-tareas')

const db = window.localStorage

addcontacto.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db,contacto)
}

cargarContactos(db, listadoTareas)