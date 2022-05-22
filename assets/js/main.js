//. Smooth Scrolling

$('.page-scroll').on('click', function(e) {

    const tujuan = $(this).attr('href');
    const elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 80
    }, 1000);

    e.preventDefault();
   });

//. Form ke Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbxugr8PJSOZ0tGYkYmtgGKydtz0r8t95JJSO5dzT6QAUf2X6ODKvbANw3t9zErUgT5bHQ/exec'
const form = document.forms['gudangku-contact-form']
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector('.btn-loading');
const successAlert = document.querySelector('.success-alert');
const errorAlert = document.querySelector('.error-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        successAlert.classList.toggle('d-none')
        form.reset()
        console.log('Success!', response)
    })
    .catch(error => {
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        errorAlert.classList.toggle('d-none')
        form.reset()
        console.error('Error!', error.message)
    })
})

//. Close Alert

const successAlertX = document.querySelector('.success-alert-x');
const errorAlertX = document.querySelector('.error-alert-x');

successAlertX.addEventListener('click', function(){
    successAlert.classList.toggle('d-none');
})

errorAlertX.addEventListener('click', function(){
    errorAlert.classList.toggle('d-none');
})