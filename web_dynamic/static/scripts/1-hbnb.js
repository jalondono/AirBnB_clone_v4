$(document).ready(function(){
  const check = $('.popover INPUT');
  const data_web = check.data().id;
  let data_dict = {};

    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            data_dict[$(this).data().id] = $(this).data().name;
            console.log(data_dict);
        }
        else if($(this).is(":not(:checked)")){
             delete data_dict[($(this).data().id)];
             console.log(data_dict);
        }
    });
});