const buttonToggle = document.getElementsByClassName('accordion-button');
const accordionContent = document.getElementsByClassName('accordion-content');

buttonToggle[0].onclick = () => {
	const element = accordionContent[0].classList;
	if (element.contains('open')) {
		return element.remove('open');
	}

	return element.add('open');
};
