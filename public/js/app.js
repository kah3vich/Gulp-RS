"use strict";

var rotateDeg = 360;
$('#active').on('click', function () {
  $('#gulp').css('transform', "translate(-50%, -50%) rotate(".concat(rotateDeg, "deg)"));
  rotateDeg += 360;
});
;