class ScreenKeyboard {
    constructor() {
        this.screenKeyboardElement = document.getElementById('js-keyboard');
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.textAreaElement = document.getElementById('text-area');
        this.language = window.navigator.language.split('-')[0];

        this.configKeyboard = [
            {
                id: generateId(),
                isFunc: false,
                localeData: {en: 'b', ru: 'и'},
                type: 'base',
                active: false
            },
            {
                id: generateId(),
                isFunc: false,
                localeData: {en: '7', ru: '7'},
                type: 'base',
                active: false
            },
            {
                id: generateId(),
                isFunc: true,
                localeData: {en: 'Shift', ru: 'Shift'},
                type: 'l-shift',
                active: false
            },
            {
                id: generateId(),
                isFunc: true,
                localeData: {en: 'Alt', ru: 'Alt'},
                type: 'base',
                active: false
            }]

        this.buttons = this.configKeyboard.map(element => new Button({
            ...element,
            onClick: this.onClick.bind(this),
            currentLanguage: this.language,
        }));
        this.toggleKeyboardElement.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.init()
    }

    init() {
        this.buttons.forEach(item => {
            const element = item.render();

            this.screenKeyboardElement.appendChild(element);
        })
    }

    onClick(id) {
        const button = this.buttons.find(item => item.id === id);

        if (button?.isFunc) {
            switch (button.localeData[this.language]) {
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

        console.log(`${button.localeData[this.language]} is not 'func'`);
    }

    onChangeLayoutKeyboard() {
        if (
            this.buttons.find(item => item.localeData[this.language] === 'Shift' && item.active) &&
            this.buttons.find(item => item.localeData[this.language] === 'Alt' && item.active)
        ) {

            this.changeLanguage();
            this.buttons.forEach(item => {
                if (['Shift', 'Alt'].includes(item.localeData[this.language])) {
                    item.toggleActive();
                }
                item.changeLanguage(this.language);

                const element = item.render();

                this.screenKeyboardElement.replaceChild(element, element);
            });
        }
    }

    changeLanguage() {
        if (this.language === 'ru') {
            this.language = 'en';
            return;
        }
        if (this.language === 'en') {
            this.language = 'ru';
        }
    }

    handleToggleKeyboard() {
        this.onShowKeyboard();
        this.onChangeToggleKeyboard();
    }

    onChangeToggleKeyboard() {
        if (this.toggleKeyboardElement.innerHTML.includes('Go print')) {
            this.toggleKeyboardElement.innerHTML = 'Hide keyboard';
            return;
        }
        if (this.toggleKeyboardElement.innerHTML.includes('Hide keyboard')) {
            this.toggleKeyboardElement.innerHTML = 'Go print';
        }
    }

    onShowKeyboard() {
        if (this.screenKeyboardElement.classList.value === 'my-screen-keyboard hidden-screen-keyboard') {
            this.screenKeyboardElement.classList.remove('hidden-screen-keyboard');
            return;
        }
        if (this.screenKeyboardElement.classList.value === 'my-screen-keyboard') {
            this.screenKeyboardElement.classList.add('hidden-screen-keyboard');
        }
    }
}

class Button {
    constructor(props) {
        this.id = props?.id;
        this.isFunc = props?.isFunc;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.active = props?.active;
        this.onClick = props?.onClick;
        this.onToggle = props?.onToggle;
        this.currentLanguage = props?.currentLanguage;

        this.createButton(props);
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {
            this.onClick(this.id);
        }
    }

    changeLanguage(locale) {
        this.keyElement.innerHTML = this.localeData[locale];
    }

    toggleActive() {
        this.active = !this.active
        console.log(`THIS ACTIVE IS ${this.active}`)

        if (this.active) {
            this.keyElement.classList.add('_active')
            console.log(this.keyElement)
            return;
        }
        this.keyElement.classList.remove('_active')
    }

    createButton() {
        this.keyElement = document.createElement('div');
        this.keyElement.setAttribute('id', this.id);
        this.keyElement.classList.add(`${this.type}`);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        return this.keyElement;
    }
}
