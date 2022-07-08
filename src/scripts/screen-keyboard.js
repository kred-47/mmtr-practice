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
        new Button([
            {
                name: 'keyB',
                func: false,
                lang: { en: 'b', ru: 'и' },
                width: 'normal'
            },
            {
                name: 'key7',
                func: false,
                lang: { en: '7', ru: '7'},
                width: 'normal'
            },
            {
                name: 'keyShift',
                func: true,
                lang: { en: 'Shift', ru: 'Shift'},
                width: 'extra-wide'
            }]
        );

        this.screenKeyboard.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {

    }

}

class Button {
    constructor(props) {
        this.name = props.map(element => element.name);
        this.functional = props.map(element => element.func);
        this.language = props.map(element => element.lang);
        this.width = props.map(element => element.width);

        console.log(this);
    }


}