$(document).ready(function () {
    $(".header__menu__icon").click(function () {
        $(this).toggleClass("active");
        $(".header__menu__main").toggleClass("active");
    });
});