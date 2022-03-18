$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (response) {
        response.forEach(user => {
            let tr = `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
            </tr>`
            $('#user-table tbody').append(tr);
        })
    }
});

$('#search').keyup(function () {
    let value = $(this).val().toLowerCase();
    $('#user-table tbody tr').filter(function () {

        let name = $(this).find('td:eq(0)')
        $(this).toggle(name.text().toLowerCase().indexOf(value) > -1)
        let count = $('#user-table tbody tr:visible').length;
        $('#count').text(count);
       
        // $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});


$('#mail').keyup(function () {
    let value = $(this).val().toLowerCase();
    $('#user-table tbody tr').filter(function () {

        let name = $(this).find('td:eq(1)')
        $(this).toggle(name.text().toLowerCase().indexOf(value) > -1)
        let count = $('#user-table tbody tr:visible').length;
        $('#count').text(count);

    });
});




