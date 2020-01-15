const $ = require('jquery');
function dotClickFirst() {
  const $this = $(this);
  let $thisIndex = $this.index();
  $('.image.activeFirst').removeClass('activeFirst');

  $('.wrapper > .image').eq($thisIndex).addClass('activeFirst');
  $('.image.activeFirst').next('.image').css('animation' , 'moveLeft 5s');
}

function dotClickLast() {
  const $this = $(this);
  let $thisIndex = $this.index();
  $('.image.activeFirst').removeClass('activeLast');

  $('.wrapper > .image').eq($thisIndex).addClass('activeLast');
  $('.image.activeLast').prev('.image').css('animation' , 'moveRight 5s');
}

function init() {
  $('.first').click(dotClickFirst);
  $('.last').click(dotClickLast);
}

$(document).ready(init);
