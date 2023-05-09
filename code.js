$(document).ready(function() {
    $("#myBtn").click(function() {
        var dots = $("#dots");
        var moreText = $("#more");
        var btnText = $("#myBtn");

        if (dots.is(":hidden")) {
            dots.show();
            btnText.html("Read more...");
            moreText.hide();
        } else {
            dots.hide();
            btnText.html("Read less.");
            moreText.show();
        }
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

$(document).ready(function() {
    $("#myLink").click(function() {
        openMenu(event, "menuName");
    });
});



function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = $(".menu");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = $(".tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
    }
    $("#" + menuName).css("display", "block");
    $(evt.currentTarget.firstElementChild).addClass("w3-dark-grey");
  }

  $("#myLink").trigger("click");

  $(document).ready(function() {
    $('input').click(function() {
      $(this).addClass('highlight');
    });
    $('input').blur(function() {
      $(this).removeClass('highlight');
    });
  });
