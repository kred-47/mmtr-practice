class ScreenKeyboard {
    constructor() {
        this.screenKeyboardBlock = document.getElementById('js-keyboard-block');
        console.log(this.screenKeyboardBlock)
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.textAreaElement = document.getElementById('text-area');
        this.language = window.navigator.language.split('-')[0];

        this.configKeyboard = [
            {
                isFunc: true,
                localeData: {en: 'Esc', ru: 'Esc'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '`', ru: 'ё'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '1', ru: '1'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '2', ru: '2'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '3', ru: '3'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '4', ru: '4'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '5', ru: '5'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '6', ru: '6'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '7', ru: '7'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '8', ru: '8'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '9', ru: '9'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '0', ru: '0'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '-', ru: '-'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '=', ru: '='},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Backspace', ru: 'Backspace'},
                type: 'backspace',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Home', ru: 'Home'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'PgUp', ru: 'PgUp'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Nav', ru: 'Перейти'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Tab', ru: 'Tab'},
                type: 'tab',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'q', ru: 'й'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'w', ru: 'ц'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'e', ru: 'у'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'r', ru: 'к'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 't', ru: 'е'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'y', ru: 'н'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'u', ru: 'г'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'i', ru: 'ш'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'o', ru: 'щ'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'p', ru: 'з'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '[', ru: 'х'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: ']', ru: 'ъ'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: '\\', ru: '\\'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Del', ru: 'Del'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'End', ru: 'End'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'PdDn', ru: 'PgDn'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Mv Up', ru: 'Вверх'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Caps', ru: 'Caps'},
                type: 'caps',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'a', ru: 'ф'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 's', ru: 'ы'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'd', ru: 'в'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'f', ru: 'а'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'g', ru: 'п'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'h', ru: 'р'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'j', ru: 'о'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'k', ru: 'л'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: 'l', ru: 'д'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: ';', ru: 'ж'},
                type: 'base',
                active: false
            },
            {
                isFunc: false,
                localeData: {en: "'", ru: 'э'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Enter', ru: 'Enter'},
                type: 'enter',
                active: false
            },


            {
                isFunc: false,
                localeData: {en: 'b', ru: 'и'},
                type: 'base',
                active: false
            },
            {
                isFunc: true,
                localeData: {en: 'Shift', ru: 'Shift'},
                type: 'l-shift',
                active: false
            },
            {
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
        this.init();
        this.toggleKeyboardElement.addEventListener('click', this.handleToggleKeyboard.bind(this));

    }

    init() {
        const element = this.createKeyboard()
        console.log(`${element} BLOCK`)

        this.screenKeyboardBlock?.appendChild(element)

        this.buttons.forEach(item => {
            const element = item.render();
            console.log(`${element} ELEMENT`)

            this.screenKeyboardElement?.appendChild(element);
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

    createKeyboard() {
        this.screenKeyboardElement = document.createElement('div');
        this.screenKeyboardElement.setAttribute('id', 'js-keyboard');
        this.screenKeyboardElement.classList.add('my-screen-keyboard', 'hidden-screen-keyboard');
        console.log(this.screenKeyboardElement)
        return this.screenKeyboardElement;
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
        this.id = generateId();
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
        this.keyElement.classList.add('key', `${this.type}`);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        return this.keyElement;
    }
}
