$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});

$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value &lt; 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});




//$('.quantity').on('click', '.btn', function(e) {
//e.preventDefault();
//var $this = $(this),
//$input = $this.closest('div').find('input');
//value = parseInt($input.val()),
//btn = $this.data('btn');

//if (btn === 'minus') {
//  value = value > 1 ? value -1 : 0;
//} else {
//value = value < 100 ? value + 1 : 100;
//}

//$input.val(value);
//});