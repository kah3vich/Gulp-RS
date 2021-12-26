let rotateDeg = 360;
$('#active').on('click', () => {
    $('#gulp').css('transform', `translate(-50%, -50%) rotate(${rotateDeg}deg)`);
    rotateDeg += 360;
});
