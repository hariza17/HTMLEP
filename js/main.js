$(document).ready(function () {

    //Controla el menu lateral
    $menuLeft = $('.pushmenu-left');
    $nav_list = $('#nav_list');
    $nav_list.click(function () {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toright');
        $menuLeft.toggleClass('pushmenu-open');
    });

    //Controla la cantidad
    $("#spinner").spinner('changing', function (e, newVal, oldVal) {
        console.log(newVal);
    });

    //Oculta y muestra el carrito
    $btn_carrito = $('.btn-carrito');
    $('.mostrar-carrito').hide();
    $btn_carrito.click(function () {
        $('.cont-carrito').fadeToggle();
    });

    //Agregar productos al carrito

    //MODAL FUNCIONES
    $box=$('.box');
    $btn_cierre=$('.btn-cierre');
    $btn_cierre.click(function () {
        $('.ep-modal').show();
        $('.box').fadeIn();

    });
    $box.click(function () {
        $('.ep-modal').fadeOut();
        $('.box').fadeOut();
    });

});
