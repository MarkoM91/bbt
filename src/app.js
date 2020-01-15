const $ = require('jquery');
function dotClickFirst() {
  const $this = $(this);
  let $thisIndex = $this.index();

  $('.wrapper > .image').eq($thisIndex).addClass('activeFirst');

  //$('.image.activeFirst').next('.image').css('animation' , 'moveLeft 5s');
  $('.image.activeFirst').next('.image').css('display', 'none') ;
  $('.hiddenLeft').addClass('active');

}

function dotClickLast() {
  const $this = $(this);
  let $thisIndex = $this.index();

  $('.wrapper > .image').eq($thisIndex).addClass('activeLast');
  //$('.image.activeLast').prev('.image').css('animation' , 'moveRight 5s');
  $('.image.activeLast').prev('.image').css('display' , 'none');
  $('.hiddenRight').addClass('active');
}

function init() {
  $('.first').click(dotClickFirst);
  $('.last').click(dotClickLast);
}

$(document).ready(init);
