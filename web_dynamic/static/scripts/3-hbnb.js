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
        $('.places ').append('<article><h2>' + place.name +
            '</h2><div class="price_by_night"><p>$' + place.price_by_night +
            '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest +
            '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms +
            '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms +
            '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
      }
    }
  });
});
