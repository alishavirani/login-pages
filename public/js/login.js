function validate() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log('email', email, 'password', password);
    
   if ( email == " " && password == "") {
        window.alert ("Please enter your username and password");
        return false;
    }
    else {
        
        $('#form_id').submit();
                // console.log('Inside click');
                // $.ajax({ url: '/users',
                //     type: 'POST',
                //     data: JSON.stringify({ 
                //         "email": email,
                //         "password": password}) ,
                //     contentType: 'application/json; charset=utf-8', 
                //     success: (data)=> {
                //         console.log("Here in success client side");
                //     }
                // }); 

                // $.post("/users",
                // {
                //   email: email,
                //   password: password
                // });
                
        
    }
    
}