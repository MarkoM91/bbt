const $ = require('jquery');
function dotClick() {
  const $this = $(this);
  let $thisIndex = $this.index();
console.log($thisIndex);
  $('.image.active').removeClass('active');

  $('.wrapper > .image').eq($thisIndex).addClass('active');
}

function init() {
 $('.circle').click(dotClick);
}

$(document).ready(init);
