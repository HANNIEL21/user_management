$(document).ready(function () {
    $('#myTable').DataTable();
});

let state = $.getJSON("./script/state.json", function (data) {
    return data
}).then((res) => {
    let data = Object.keys(res[0]);
    let option = data.map((item) => {
        return `<option value="${item}">${item}</option>`
    }).join('');
    $("#state").append(option);


    $("#state").change(function (e) {
        e.preventDefault();

        let data = Object.values(res[0][$(this).val()]);

        let options = data.map((items) => {
            return `<option value="${items}">${items}</option>`
        })
        $("#lga").html("");
        $("#lga").append(options);
    });
})





$("#form").submit(function (e) {
    e.preventDefault();

    let fn = $("#firstName");
    let mn = $("#middleName");
    let ln = $("#lastName");
    let dob = $("#dob");
    let gender = $("#male") || $("#female");
    let phone = $("#phone");
    let country = $("#country");
    let state = $("#state");
    let lga = $("#lga");

    if (fn.value !== "" && mn.value !== "" && ln.value !== "" && dob.value !== "" && country.value !== "" && state.value !== "" && lga.value !== "" && phone.value !== "") {
        let row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">1</th>
            <td>${fn.val()}</td>
            <td>${mn.val()}</td>
            <td>${ln.val()}</td>
            <td>${dob.val()}</td>
            <td>${gender.val()}</td>
            <td>${country.val()}</td>
            <td>${state.val()}</td>
            <td>${lga.val()}</td>
            <td>${phone.val()}</td>
        `
        $("#tbody").append(row);
        alert("user added")

        document.getElementById("form").reset();
    } else {
        alert("Please fill all the fields");
        
    }

});

$("#users").html($("#tbody").childElementCount);

