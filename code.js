$(document).ready(function() {
    $("#myLink").click(function() {
        openMenu(event, "menuName");
    });
});

function openMenu(evt, menuName) {
    $(document).ready(function() {
        var i, x, tablinks;
        x = $(".menu");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = $(".tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
        }
        $("#" + menuName).css("display", "block");
        $(evt.currentTarget.firstElementChild).addClass("w3-dark-grey");
    });
}

$(document).ready(function() {
    $("#myBtn").click(function() {
        var ellipsis = $("#ellipsis");
        var moreText = $("#more");
        var evenmore = $("evenmore");
        var btnText = $("#myBtn");

        if (ellipsis.is(":hidden")) {
            ellipsis.show();
            btnText.html("Read more...");
            moreText.hide();
            evenmore.hide();
        } else {
            ellipsis.hide();
            btnText.html("Read less.");
            moreText.show();
            evenmore.show();
        }
    });
});

$(document).ready(function() {
    $('#submit-btn').click(function() {
        $('input').addClass('highlight');
    });
});

$(document).ready(function() {
    $.ajax({
        url: 'file.json',
        dataType: 'json',
        success: function(data) {
            // Extract the dates and prices from the JSON data
            var dates = [];
            var prices = [];
            for (var i = 0; i < data.length; i++) {
                dates.push(data[i].date);
                prices.push(data[i].price);
            }

            // Create a line chart
            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Bitcoin Price',
                        data: prices,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        },
        error: function(xhr, textStatus, errorThrown) {
            console.log('Error: ' + errorThrown);
        }
    });
});
