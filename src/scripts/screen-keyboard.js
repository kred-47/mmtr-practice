
class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.callOfKeyboard = document.getElementById('call-keyboard');
        this.textAreaField = document.getElementById('text-area');
        configKeyboard.forEach(element => {
            new Button({
                ...element,
                onClick: this.onClick.bind(this)
            })
        })

        this.callOfKeyboard.addEventListener('click', this.showOrHideKeyboard.bind(this));
        this.screenKeyboard.addEventListener('click', this.onClick.bind(this));
    }

    onClick(data) {
        switch (data.type) {
            case 'l-shift':
            case 'r-shift': {
                console.log('SHIFT', data.name);
                break;
            }
            default:
                console.log('undefined button')
        }
    }

    showOrHideKeyboard() {
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

class Button {
    constructor(props) {
        this.onClick = props?.onClick;
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.name = props?.name;
        this.functional = props?.func;
        this.language = props?.lang;
        this.type = props?.type;
        this.lineKeyboard = document.getElementsByClassName('screen-keyboard__line')[0];
        this.content = props?.content;

        this.formLayout(props);
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {
            this.onClick({
                name: this.name,
                func: this.functional,
                lang: this.language,
                type: this.type,
                content: this.content
            });
        } else {
            console.log('onClick IS NOT A FUNCTION');
        }
    };


    formLayout() {
        const keyElement = document.createElement('div');
        keyElement.setAttribute('id', name);
        keyElement.classList.add(this.type);

        keyElement.addEventListener('click', this.handleClick.bind(this));

        return this.lineKeyboard.appendChild(keyElement);
    }
}

const configKeyboard = [
    {
        name: 'keyB',
        func: false,
        lang: { en: 'b', ru: 'и' },
        type: 'base',
        content: 'b'
    },
    {
        name: 'key7',
        func: false,
        lang: { en: '7', ru: '7'},
        type: 'base',
        content: '7'
    },
    {
        name: 'leftShift',
        func: true,
        lang: { en: 'Shift', ru: 'Shift'},
        type: 'l-shift',
        content: 'Shift'
    }]