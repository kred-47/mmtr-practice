class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');

        this.screenKeyboard.addEventListener('keypress', this.onKeyPress.bind(this));
    }

    onKeyPress() {

    }

}