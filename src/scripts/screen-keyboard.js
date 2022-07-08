class CallOfKeyboard {
    constructor() {
        this.callOfKeyboard = document.getElementById('call-keyboard');
        this.screenKeyboard = document.getElementById('the-keyboard');

        this.callOfKeyboard.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.showKeyboard();
    }

    showKeyboard() {
        if (this.screenKeyboard.classList.value === 'task2__screen-keyboard hidden-screen-keyboard') {
            this.screenKeyboard.classList.remove('hidden-screen-keyboard');
            this.screenKeyboard.classList.add('screen-keyboard');
        } else if (this.screenKeyboard.classList.value === 'task2__screen-keyboard screen-keyboard') {
            this.screenKeyboard.classList.remove('screen-keyboard');
            this.screenKeyboard.classList.add('hidden-screen-keyboard');
        }


        if (this.callOfKeyboard.innerHTML.includes('Go print')) {
            this.callOfKeyboard.innerHTML = 'Hide keyboard'
        } else if (this.callOfKeyboard.innerHTML.includes('Hide keyboard')) {
            this.callOfKeyboard.innerHTML = 'Go print'
        }
        // console.log(this.screenKeyboard.classList.value);
    }
}

class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');

        this.screenKeyboard.addEventListener('keypress', this.onKeyPress.bind(this));
    }

    onKeyPress() {

    }

}