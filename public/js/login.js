$(document).ready(function () {
    $("#submitbutton").on("click", function () {

        if (!$("#username").val()) {
            alert('Enter email');
            return false;
        }
        if (!$("#password").val()) {
            alert('Enter password');
            return false;
        }
        var data = {
            email: $("#username").val(),
            password: $("#password").val()
        }
        $.ajax({
            url: "/authenticate",
            type: "post",
            dataType: "json",
            data: data,
            success: function (res) {
                if (res.category === "Admin") {
                    location.replace("/dashboard");
                }
                else if(res.category === "Team Leader") {
                    location.replace("/table");
                } 
                else {
                    location.replace("/profile");
                }
            },
            error: function (err) {
                console.log("ERROR => ", err);
                location.reload();
            }
        });
    })

})

function validate() {

   

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