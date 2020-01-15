const $ = require('jquery');
function dotClick() {
  const $this = $(this);
  let $thisIndex = $this.index();
console.log($thisIndex);
  $('.image.active').removeClass('active');

  $('.wrapper > .image').eq($thisIndex).addClass('active');
  $('.image.active').next('.image').css('animation' , 'moveLeft 5s');
}

function init() {
 $('.circle').click(dotClick);
}

$(document).ready(init);
