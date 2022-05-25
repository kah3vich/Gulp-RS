$(() => {
	let count = 1
	setInterval(() => {
		$('#rotateIcon').attr('href', `img/icons-${count}.png`)
		count++
		if (count === 24) {
			count = 1
		}
	}, 250)
})

let rotateDeg = 360
$('#active').on('click', () => {
	$('#gulp').css('transform', `translate(-50%, -50%) rotate(${rotateDeg}deg)`)
	rotateDeg += 360
})
