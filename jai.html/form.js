$(document).ready(function() {
    $("#form").on("submit", function(e) {
        e.preventDefault();
        addData()
    })


})


const addData = () => {

    alert("form submitted successfully!")
}