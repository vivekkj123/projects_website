$(document).ready(function () {

    $('#signup').validate({
        rules: {
            fname: {
                required: true,
            minlength: 5,
            },
            sname: {
                required: true,
                minlength: 5,
            },
            email:{
                required: true,
                email: true,
            },
            pword:{
                required: true,
                password: true,
    
            }
        }
    });

});
