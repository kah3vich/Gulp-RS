import { changeText, titles } from './import/components.js'

// $(() => {
let rotateDeg = 360
$('#active').on('click', () => {
	$('#gulp').css('transform', `translate(-50%, -50%) rotate(${rotateDeg}deg)`)
	rotateDeg += 360
})
console.log(titles)
console.log('changeText    ', changeText('man i help you'))

// })
