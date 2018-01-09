function validate() {
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(!email) {
        alert('Enter email');
        return false;
    }
    if(!password) {
        alert('Enter password');
        return false;
    }

    $("#form_id").submit(); 
    // var formArray = $("#form_id").serializeArray(); 

    // formArray.forEach( function(obj) {
    //     console.log("Object => ", obj);
    //     if(obj.name === "email") {
    //         return obj.value;
    //     }
    //     return false;   
    // });
}

    // alert(formArray);

    // var length = formArray.length;
    // alert(length);
    // if(length<2) {
    //     alert('Enter your credentials');
    //     return;
    // }

    

    // formArray.forEach(function (arrayElem) {
    //     if(arrayElem === null) {
    //         alert("Please enter your credentials");
    //         return;
    //     }
        
    // })
    //var email = formArray[0].value;
    //alert(email);

     
    // console.log(formArray);
    // return email;
//     console.log('email', email, 'password', password);
    
//    if ( email == " " && password == "") {
//         window.alert ("Please enter your username and password");
//         return false;
//     }
//     else {
        
//         $('#form_id').submit();
                         
        
//     }
    
//}