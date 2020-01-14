const $ = require('jquery');
function dotClick() {
  const $this = $(this);
  let $thisIndex = $this.index();

  $('img.active').removeClass('active');

  $('img').eq($thisIndex).addClass('active');
}


function init() {
 $('.circle').click(dotClick);
}

$(document).ready(init);
