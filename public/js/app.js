"use strict";

$(function () {
  var count = 1;
  var rotateLogoTab = setInterval(function () {
    $('#rotateIcon').attr('href', "img/icons-".concat(count, ".png"));
    count++;

    if (count === 25) {
      count = 1;
    }
  }, 250);
});
var rotateDeg = 360;
$('#active').on('click', function () {
  $('#gulp').css('transform', "translate(-50%, -50%) rotate(".concat(rotateDeg, "deg)"));
  rotateDeg += 360;
});
;