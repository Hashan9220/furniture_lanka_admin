$(window).on('laod', function () {
    console.log("Loaded");
})


$('#btn').on('click', function () {
    let name = $('#name').val();
    let qty = $('#qty').val();
    let price = $('#price').val();
    let description = $('#dis').val();
    let image = $('#img').val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/FurnitureLanka/api/v1/bed/add",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify(
            {
                "name": name,
                "qty": qty,
                "price": price,
                "description": description,
                "image": image
            }
        ),

    })

});

function myFunction() {
    alert("Added Success");
}

$('#button').click (function ()  {

    let name = $("#name").val();
    let Password = $("#pass").val();

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/FurnitureLanka/api/v1/login",
        contentType: 'application/json',
        async: true,
        data: JSON.stringify({
            name: name,
            password: Password

        }),

    })
})
