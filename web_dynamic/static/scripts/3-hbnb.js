$(document).ready(function () {
  const check = $('.popover INPUT');
  const data_web = check.data().id;
  const data_dict = {};

  $('input[type="checkbox"]').click(function () {
    if ($(this).is(':checked')) {
      data_dict[$(this).data().id] = $(this).data().name;
      console.log(data_dict);
    } else if ($(this).is(':not(:checked)')) {
      delete data_dict[($(this).data().id)];
      console.log(data_dict);
    }
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: (data) => {
      for (let i = 0; i < data.length; i++) {
        const place = data[i];
        $('.places ').append('<article>' +
              '<div class="title">'+
                '<h2>' + place.name + '</h2>' +
                '<div class="price_by_night">' + '$' + place.price_by_night + '</div>' +
              '</div>'+

              '<div class="information">' +
                '<div class="max_guest">' +
                  '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' + '<br />' +
                      place.max_guest +
                '</div>' +

                '<div class="number_rooms">' +
                  '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>' + '<br />' +
                    place.number_rooms +
                '</div>' +

                '<div class="number_bathrooms">' +
                  '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' + '<br />' +
                    place.number_bathrooms +
                '</div>' +

              '</div>' +

              '<div class="user">' +
                '<strong>' + 'Owner:' + '' +  '</strong>' +
              '</div>' +

              '<div class="description">' +
              '<p>' + place.description + '</p>' +
              '</div>' +
              '</article>');
      }
    }
  });
});
