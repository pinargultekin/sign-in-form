
$(document).ready(function () {

    $("#input-text").click(function () {
        $("#email").attr("placeholder", "Invalid email input");
    });


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validate() {

        const result = document.getElementById("result");
        const emailVal = $("#email").val();


        if (validateEmail(emailVal)) {

            $("#signup-form").hide();
            result.innerHTML = ` <div class="success" id="success">
            <div class="icon-col">
                <span class="icon success-icon"></span>
            </div>
            <div class="success-text">
                <h5 id="success-subtext">Yay! Thank you</h5>
                <h6 id="success-subtext2">We've sent a confirmation link to your inbox.</h6>
            </div>
           
        </div>`

        } else {

            result.innerHTML = ` <div class="warning" id="warning">
            <div class="icon-col">
                <span class="icon warning-icon"></span>
            </div>
            <div class="warning-text">
            <h5>Please use a valid email</h5>
            <h6>Like: person@inbox.com</h6>
            </div>
           
        </div>`
            $("#signup").css("height", "16.3rem");
            $("#input-text").css("border", "1px solid #4c2982");
            $("#email").attr("placeholder", "Invalid email input");
        }
        return false;
    }

    $("#submit-btn").on("click", validate);

})
