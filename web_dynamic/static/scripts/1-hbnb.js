$(document).ready(function(){
  const check = $('.popover INPUT');
  const h4Text = $('.amenities h4');
  let data_dict = {};
  let names = [];

    $('input[type="checkbox"]').click(function(){
        h4Text.text('');
        if($(this).is(":checked")){
            data_dict[$(this).data().id] = $(this).data().name;

        } else if($(this).is(":not(:checked)")){
             delete data_dict[($(this).data().id)];
        }
        names = [];
        for (let dataKey in  data_dict) {
            names.push(data_dict[dataKey]);
        }
        h4Text.text(names.join(', '));
    });
});