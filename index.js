class CustomButton {
	constructor(id, padding, color) {
		this.id = id;
		this.padding = padding;
		this.color = color;
	}

	render() {
		const button = document.getElementById(this.id);
		button.style.padding = this.padding;
		button.style.backgroundColor = this.color;
		return button;
	}
}

module.exports = CustomButton;
