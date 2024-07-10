$(document).ready(function () {
    new WOW({
        animateClass: 'animate__animated'
    }).init();
    $('.card__image').magnificPopup({
        type: 'image'
    });
    $('.single-item').slick();
    $(function () {
        $("#accordion").accordion();
    });
    let button = $('#button');
    let index = $('#index');
    let alertSuccess = $('#alert');
    button.click(function () {
        let name = $('#name');
        let surname = $('#surname');
        let phone = $('#phone');
        let country = $('#country');
        let address = $('#address');
        let formTea = $('#formTea');
        if (!name.val()) {
            alert('Заполните имя');
            return false;
        }
        if (!surname.val()) {
            alert('Заполните фамилию');
            return false;
        }
        if (!phone.val()) {
            alert('Заполните телефон');
            return false;
        }
        if (!country.val()) {
            alert('Заполните страну');
            return false;
        }
        if (!index.val()) {
            alert('Заполните индекс');
            return false;
        }
        if (index.val().length !== 6) {
            alert('Индекс должен состоять из 6 цифр');
            return false;
        }
        if (!address.val()) {
            alert('Заполните адрес');
            return false;
        }
        formTea.addClass("animate__bounceOut")
        formTea.trigger('reset');
        setTimeout(func, 500);
        function func() {
            alertSuccess.removeClass("d-none");
            alertSuccess.addClass("d-block");
        }

    });
    index.keydown(function (event) {
        let number = parseInt(event.key);
        if (isNaN(number)) {
            return false;
        }
    })
    $('body').on('input', 'input[type="number"][maxlength]', function(){
        if (this.value.length > this.maxLength){
            this.value = this.value.slice(0, this.maxLength);
        }
    });
});
