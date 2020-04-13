// const password1 = document.getElementById('password').value;
// const password2 = document.getElementById('password2').value;

// password2.addEventListener('input', checkPassword);
function checkUsername() {
  var username = $("username").val();
  if (username != "") {
    $("#username").removeClass('bg-incorrect').addClass('bg-correct').css("border", "1px solid green");
  }
  else {
    ("#password2").removeClass('bg-correct').addClass('bg-incorrect').css("border", "1px solid red");
  }
}

function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password2").val();

    if (password != confirmPassword){
      $("#divCheckPasswordMatch").html("Passwords do not match!").css("color","red");
      $("#password2").removeClass('bg-correct').addClass('bg-incorrect').css("border", "1px solid red");
    }
    else{
      $("#divCheckPasswordMatch").html("Passwords match.").css("color","green");
      $("#password").removeClass('bg-incorrect').addClass('bg-correct').css("border", "1px solid green");
      $("#password2").removeClass('bg-incorrect').addClass('bg-correct').css("border", "1px solid green");
    }
}

function checkEmail() {
  var email = $("#email").val();
  var pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;

  if (pattern.test(email)) {

    $("#email").removeClass('bg-incorrect').addClass('bg-correct').css("border", "1px solid green");
  }
  else {
    $("#email").removeClass('bg-correct').addClass('bg-incorrect').css("border", "1px solid red");
  }
}

$(document).ready(function () {


document.closest('form').find("input[type=text], textarea").val("");




  $("#username").keyup(checkUsername);
  $("#password, #password2").keyup(checkPasswordMatch);
  $("#email").keyup(checkEmail);
});
