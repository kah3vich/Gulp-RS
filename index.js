'use strict';

module.exports = function buttonCustom(padding = '10px', color = 'red') {
	const button = document.getElementById('custom');
	button.style.padding = padding;
	button.style.backgroundColor = color;
};
