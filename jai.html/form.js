$(document).ready(function() {
    $("#form").on("submit", function(e) {
        e.preventDefault();
        addData()
    })


})


const addData = () => {
    const firstName = $("#fname").val()
    const lastName = $("#lname").val()
    const gender = $("input[type='radio'][name='gender']:checked").val();
    const age = $("#age").val();
    const number = $("#mNumber").val();
    const father = $("#fatherName").val();
    const mother = $("#motherName").val();
    const qualification = $("#quali").val();
    const address = $("#address").val();
    const state = $("#state").val();

    const language = $("input[type='checkbox'][name='language']:checked").val();

    const data = [firstName, lastName, gender, age, number, father, mother, qualification, address, state, language];



    const jdata = JSON.stringify(data);
    localStorage.setItem("userData", jdata);

    alert("form submitted successfully!")
}