class CustomButton {
	constructor(padding, color) {
		this.padding = padding;
		this.color = color;
	}

	render() {
		const button = document.createElement('button');
		button.style.padding = this.padding;
		button.style.backgroundColor = this.color;
		return button;
	}
}

module.exports = CustomButton
