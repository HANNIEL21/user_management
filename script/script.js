$(document).ready(function () {
    $('#myTable').DataTable();
});

let state = $.getJSON("./script/state.json", function (data) {
    return data
}).then((data) => {
    let state = data[0];
    console.log(state);
})



// state.foreach(function (item) {
//     $("#state").append(`<option value='${item.key}'>${item.key}</option>`);
// })



$("#form").submit(function (e) {
    e.preventDefault();

    let fn = $("#firstName");
    let mn = $("#middleName");
    let ln = $("#lastName");
    let dob = $("#dob");
    let gender = $("#male");
    let phone = $("#phone");

    if (fn !== "" && mn !== "" && ln !== "" && dob !== "" && phone !== "") {
        let row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">1</th>
            <td>${fn.val()}</td>
            <td>${mn.val()}</td>
            <td>${ln.val()}</td>
            <td>${dob.val()}</td>
            <td>${gender}</td>
            <td>${country}</td>
            <td>${state}</td>
            <td>${lga}</td>
            <td>${phone.val()}</td>
        `
        $("#tbody").append(row);
        alert("user added")
    } else {
        alert("Please fill all the fields");
    }


});


$("#users").html();