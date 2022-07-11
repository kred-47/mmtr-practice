class CallOfKeyboard {
    constructor() {
        this.callOfKeyboard = document.getElementById('call-keyboard');
        this.screenKeyboard = document.getElementById('the-keyboard');

        this.callOfKeyboard.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.showKeyboard();
        this.changeCallButton();
    }

    changeCallButton() {
        if (this.callOfKeyboard.innerHTML.includes('Go print')) {
            this.callOfKeyboard.innerHTML = 'Hide keyboard'
        } else if (this.callOfKeyboard.innerHTML.includes('Hide keyboard')) {
            this.callOfKeyboard.innerHTML = 'Go print'
        }
    }

    showKeyboard() {
        if (this.screenKeyboard.classList.value === 'task2__screen-keyboard hidden-screen-keyboard') {
            this.screenKeyboard.classList.remove('hidden-screen-keyboard');
            this.screenKeyboard.classList.add('screen-keyboard');
        } else if (this.screenKeyboard.classList.value === 'task2__screen-keyboard screen-keyboard') {
            this.screenKeyboard.classList.remove('screen-keyboard');
            this.screenKeyboard.classList.add('hidden-screen-keyboard');
        }
    }
}

class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.textAreaField = document.getElementById('text-area');
        configKeyboard.forEach(element => {
            new Button(element)
        })

        this.screenKeyboard.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {

    }
}

class Button {
    constructor(props) {
        this.name = props?.name;
        this.functional = props?.func;
        this.language = props?.lang;
        this.wide = props?.wide;
        this.lineKeyboard = document.getElementsByClassName('screen-keyboard__line')[0];
        console.log(this.lineKeyboard);

        this.formLayout(props);
    }

    formLayout() {
        const keyElement = document.createElement('div');
        keyElement.setAttribute('id', name);
        keyElement.setAttribute('type', 'div');

    }

}

const configKeyboard = [
    {
        name: 'keyB',
        func: false,
        lang: { en: 'b', ru: 'и' },
        wide: 'normal'
    },
    {
        name: 'key7',
        func: false,
        lang: { en: '7', ru: '7'},
        wide: 'normal'
    },
    {
        name: 'leftShift',
        func: true,
        lang: { en: 'Shift', ru: 'Shift'},
        wide: 'extra-wide'
    }]