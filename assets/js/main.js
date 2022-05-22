//. Smooth Scrolling

$('.page-scroll').on('click', function(e) {

    const tujuan = $(this).attr('href');
    const elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 80
    }, 1000);

    e.preventDefault();
   });