function Login() {
    var userEmail = $("#email_field").val();
    var userPass = $("#password_field").val();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(error => {
        // Handle Errors here
        var errorMessage = error.message;
        $("#loginAlert").text("Error: " + errorMessage);
    });
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = "Administracija.html";
        }
    });
    console.log("works");
    //Brisanje vrijednosti iz ispuna za prijavu
    $("#email_field").val('');
    $("#password_field").val('');
}

function Logout() {
    firebase.auth().signOut();
    window.location.href = "Login.html";
}

$('#ZaboravljenaLozinka').click(function(){
  var auth = firebase.auth();
  var email = $('#email_field').val();
  if (email != '') {
    auth.sendPasswordResetEmail(email).then(function(){
      window.alert('E-mail za povrat lozinke je poslan na vaš e-mail');
    })
    .catch(function(error){
      var errorMessage = error.message;

      window.alert('Poruka: '+errorMessage);
    });
  }else{
    window.alert('Molimo unesite prvo e-mail.');
  }

});