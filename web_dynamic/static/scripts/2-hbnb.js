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
});
