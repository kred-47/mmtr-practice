class ScreenKeyboard {
    constructor() {
        this.myScreenKeyboard = document.getElementById('js-keyboard');
        this.toggleKeyboard = document.getElementById('toggle-keyboard');
        this.textAreaField = document.getElementById('text-area');
        this.userLanguage = window.navigator.language.split('-')[0];
        this.configKeyboard = [
            {
                id: 'keyB',
                isFunc: false,
                localeData: {en: 'b', ru: 'и'},
                type: 'base',
                active: false
            },
            {
                id: 'key7',
                isFunc: false,
                localeData: {en: '7', ru: '7'},
                type: 'base',
                active: false
            },
            {
                id: 'leftShift',
                isFunc: true,
                localeData: {en: 'Shift', ru: 'Shift'},
                type: 'l-shift',
                active: false
            },
            {
                id: 'leftAlt',
                isFunc: true,
                localeData: {en: 'Alt', ru: 'Alt'},
                type: 'base',
                active: false
            }]

        this.buttons = this.configKeyboard.map(element => new Button({
            ...element,
            onClick: this.onClick.bind(this),
            currentLanguage: this.userLanguage,
            myScreenKeyboard: this.myScreenKeyboard
        }));

        this.toggleKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    onClick(id) {
        const button = this.buttons.find(item => item.id === id);

        if (button?.functional) {
            switch (button.localeData[this.userLanguage]) {
                case 'Shift':
                case 'Alt': {
                    button.toggleActive();
                    break;
                }
                default:
                    console.log('undefined button');
            }

            this.onChangeLayoutKeyboard();
            return;
        }

        console.log(`${button.id} is not 'func'`);
    }

    onChangeLayoutKeyboard() {
        if (
            this.buttons.find(item => item.localeData[this.userLanguage] === 'Shift' && item.active) &&
            this.buttons.find(item => item.localeData[this.userLanguage] === 'Alt' && item.active)
        ) {

            this.changeLanguage();
            this.buttons.forEach(item => {
                item.changeLanguage(this.userLanguage);
                item.toggleActive();
            });
        }
    }

    changeLanguage() {
        if (this.userLanguage === 'ru') {
            this.userLanguage = 'en';
            return;
        }
        if (this.userLanguage === 'en') {
            this.userLanguage = 'ru';
        }
    }

    handleToggleKeyboard() {
        this.onShowKeyboard();
        this.onChangeToggleKeyboard();
    }

    onChangeToggleKeyboard() {
        if (this.toggleKeyboard.innerHTML.includes('Go print')) {
            this.toggleKeyboard.innerHTML = 'Hide keyboard';
            return;
        }
        if (this.toggleKeyboard.innerHTML.includes('Hide keyboard')) {
            this.toggleKeyboard.innerHTML = 'Go print';
        }
    }

    onShowKeyboard() {
        if (this.myScreenKeyboard.classList.value === 'my-screen-keyboard hidden-screen-keyboard') {
            this.myScreenKeyboard.classList.remove('hidden-screen-keyboard');
            return;
        }
        if (this.myScreenKeyboard.classList.value === 'my-screen-keyboard') {
            this.myScreenKeyboard.classList.add('hidden-screen-keyboard');
        }
    }
}

class Button {
    constructor(props) {
        this.myKeyboard = props?.myScreenKeyboard;
        this.onClick = props?.onClick;
        this.onToggle = props?.onToggle;
        this.id = props?.id;
        this.functional = props?.isFunc;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.active = props?.active;
        this.currentLanguage = props?.currentLanguage;
        this.createButton(props);
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {
            this.onClick(this.id)
        }
    }

    keyElement = document.createElement('div');

    changeLanguage(locale) {
        this.keyElement.innerHTML = this.localeData[locale];
        this.myKeyboard.replaceChild(this.keyElement, this.keyElement);
    }

    toggleActive() {
        if (this.localeData[this.currentLanguage] === 'Shift' || this.localeData[this.currentLanguage] === 'Alt') {
            this.active = !this.active
            console.log(`THIS ACTIVE IS ${this.active}`)
        }
        this.toggleColorBtn();
    }

    toggleColorBtn() {
        if (this.active) {
            this.keyElement.classList.add('_active')
            return;
        }
        this.keyElement.classList.remove('_active')
    }

    createButton() {
        this.keyElement.setAttribute('id', name);
        this.keyElement.classList.add(`${this.type}`);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
        this.myKeyboard.appendChild(this.keyElement);
    }
}
