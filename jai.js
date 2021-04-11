if (localStorage.getItem("users") == null) {
    let users = [];
    let js = JSON.stringify(users);
    localStorage.setItem("users", js);
}

if (localStorage.getItem("userProducts") == null) {
    let userProducts = [];
    let js = JSON.stringify(userProducts)
    localStorage.setItem("userProducts", js)
}




function addUser() {
    let userObj = {};
    let email = $("#email").val();
    let pass = $("#pass").val();
    let confirmPass = $("#confirmPass").val();

    userObj.email = email;
    userObj.pass = pass;
    let user = localStorage.getItem("users");
    let final = JSON.parse(user)


    let result = "";
    for (let i = 0; i < final.length; i++) {
        if (final[i].email == email) {
            result = true;
        } else {
            result = false;
        }

    }
    if (pass == confirmPass && result) {
        alert("user already exist")

    } else if (pass == confirmPass) {

        final.push(userObj);
        let again = JSON.stringify(final)

        localStorage.setItem("users", again);
        // $("#loginForm").show();
        alert("signup successful!")
            // $("#signUpForm").hide();
    } else {
        alert("password do Not match plz check")
    }
}





function checkUser() {
    let storageData = localStorage.getItem("users");
    let database = JSON.parse(storageData);
    let email1 = $("#email1").val();
    let pass = $("#pass1").val();

    const result = database.find(elem => elem.email == email1)

    // var result = "";
    // for (let i = 0; i < database.length; i++) {
    //     if (database[i].email == email && database[i].pass == pass) {
    //         result = true;
    //     } else {
    //         result = false;
    //     }

    // }

    if (result != undefined) {
        $("#userName").append(`<b> Welcome ${email1} </b>`);
        alert(`Welcome back ${email1}`)
        $("#loginForm").hide();
        $("#signUpForm").hide();
        $("#signUpLink").hide();
        $("#signInLink").hide();
        $("#reload").show();


        localStorage.setItem("isLoggedIn", email1)
    } else {
        alert("No such data")
    };



}

function addProduct() {
    userProduct = {};
    let storageData = localStorage.getItem("userProducts");
    let database = JSON.parse(storageData);
    let product1 = $("#product1").val();
    let product2 = $("#product2").val();
    let product3 = $("#product3").val();

    let productArr = [product1, product2, product3];
    userProduct.email = localStorage.getItem("isLoggedIn")
    userProduct.products = productArr;
    database.push(userProduct);

    let again = JSON.stringify(database);
    localStorage.setItem("userProducts", again)
    alert("product added successfully!");

}


function showProduct() {
    let storageData = localStorage.getItem("userProducts");
    let database = JSON.parse(storageData);
    console.log("clicked")
    let email1 = localStorage.getItem("isLoggedIn");
    const ind = database.findIndex(elem => elem.email == email1)

    $("#td1").append(`<b>  ${email1} </b>`);
    $("#td2").append(`<b>  ${database[ind].products[0]} </b>`);
    $("#td3").append(`<b>  ${database[ind].products[1]} </b>`);
    $("#td4").append(`<b>  ${database[ind].products[2]} </b>`);

}








// function updateUser(){

//     let storageData = localStorage.getItem("users");
//     let database = JSON.parse(storageData);
//     let email = $("#email1").val();
//     let pass = $("#pass1").val();

//     for(let i=0;i<database.length;i++){
//         if(database[i].email==email){
//             result = true;
//         }
//         else{
//             result = false;
//         }

//     }
//     if(result){



//     }
// }
// $("#signIn").click(function() {
//     $("#userName").append(`<b>aja ${email} </b>`);
//     console.log(email)
// })



$(document).ready(function() {

    $("#signUpForm").on("submit", function(e) {
        e.preventDefault();
        // alert("hi")
        addUser()
    });

    $("#loginForm").on("submit", function(e) {
        e.preventDefault();

        checkUser()
    });

    $("#productForm").on("submit", function(e) {
        e.preventDefault();
        // alert("hi")
        addProduct();
    });

    $("#reload").click(function() {
        location.reload();
    })


    $("#signUpLink").click(function() {
        $("formA").show('slow');
        //     console.log("clicked")

    });

    $("#signInLink").click(function() {
        $("#loginForm").show("slow");
        $("#formA").hide();
        $("#signInLink").hide();
    });

    $("#signIn").click(function() {
        $("#formC").show("slow");
    })

    $("#productShow").click(function() {
        showProduct()
        $("productData").show();

    })




})