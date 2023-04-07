'use strict';

function buttonCustom(padding = '10px', color = 'red') {
	const button = document.getElementById('custom');
	button.style.padding = padding;
	button.style.backgroundColor = color;
}

module.exports = buttonCustom;
