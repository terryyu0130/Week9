(function () {

    $(document).ready(function () {
        // modal
        $('.modal__btn').on('click', function () {
            $('.modal').fadeToggle();
        });

        // checkOut
        //1
        $('.checkOut1 .btn--next').on('click', function (e) {
            e.preventDefault();
            $('.checkOut1').fadeOut(300);
            $('.checkOut2').fadeIn(600);
        });
        //2
        $('.checkOut2 .btn--next').on('click', function (e) {
            e.preventDefault();
            $('.checkOut2').fadeOut(300);
            $('.checkOut3').fadeIn(600);
        });
        $('.checkOut2 .btn--back').on('click', function (e) {
            e.preventDefault();
            $('.checkOut2').fadeOut(300);
            $('.checkOut1').fadeIn(600);
        });
        //3
        $('.checkOut3 .btn--next').on('click', function (e) {
            e.preventDefault();
            $('.checkOut3').fadeOut(300);
            $('.checkOut4').fadeIn(600);
        });
        $('.checkOut3 .btn--back').on('click', function (e) {
            e.preventDefault();
            $('.checkOut3').fadeOut(300);
            $('.checkOut2').fadeIn(600);
        });
    });

})();