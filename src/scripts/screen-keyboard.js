
class ScreenKeyboard {
    constructor() {
        this.myScreenKeyboard = document.getElementById('js-keyboard');
        this.toggleKeyboard = document.getElementById('toggle-keyboard');
        this.textAreaField = document.getElementById('text-area');
        this.userLanguage = window.navigator.language.split('-')[0];
        this.configKeyboard = [
            {
                name: 'keyB',
                isFunc: false,
                localeData: { en: 'b', ru: 'и' },
                type: 'base',
                //content: 'b',
                active: false
            },
            {
                name: 'key7',
                isFunc: false,
                localeData: { en: '7', ru: '7'},
                type: 'base',
                // content: '7',
                active: false
            },
            {
                name: 'leftShift',
                isFunc: true,
                localeData: { en: 'Shift', ru: 'Shift'},
                type: 'l-shift',
                // content: 'Shift',
                active: false
            },
            {
                name: 'leftAlt',
                isFunc: true,
                localeData: { en: 'Alt', ru: 'Alt'},
                type: 'base',
                // content: 'Alt',
                active: false
            }]

        this.buttons = this.configKeyboard.map(element => new Button({
            ...element,
            onClick: this.onClick.bind(this),
            currentLanguage: this.userLanguage,
        }))
        this.toggleKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    onClick(data) {
        if (data.isFunc) {

            const button = this.buttons.find(item => item.localeData[this.userLanguage] === data.localeData[this.userLanguage]);

            console.group('onClick')
            switch (data.localeData[this.userLanguage]) {
                case 'Shift': {
                    button.toggleActive();
                    break;
                }
                case 'Alt': {
                    // data.active = !data.active
                    button.toggleActive();
                    break;
                }

                default:
                    console.log('undefined button')
            }
            // this.onToggleActive(data.localeData[this.userLanguage]);
            this.onChangeLayoutKeyboard();
            console.groupEnd()
        } else {
            console.log(`${data.name} is not 'func'`)
        }
    }

    lineElement = document.createElement('div');

    onChangeLayoutKeyboard() {
        console.group('onChangeLayoutKeyboard')
        // если в массиве активных кнопок есть шифт и альт
        if (this.buttons.find(item => item.localeData[this.userLanguage] === 'Shift') && this.buttons.find(item => item.localeData[this.userLanguage] === 'Alt' && this.configKeyboard.active === true)) {
            this.changeLanguage();
            // здесь в переборе выполняется наш changeLanguage
            this.buttons.forEach(item => {
                item.changeKeyLanguage(this.userLanguage);
            })
        }
        console.groupEnd()
    }

    changeLanguage() {
        console.group('changeLanguage')
        if (this.userLanguage === 'ru') {
            this.userLanguage = 'en';
        } else if (this.userLanguage === 'en') {
            this.userLanguage = 'ru';
        }
        console.groupEnd()
    }

    handleToggleKeyboard() {
        console.group('handleToggle')
        this.onShowKeyboard();
        this.onChangeToggleKeyboard();
        console.groupEnd()
    }

    onChangeToggleKeyboard() {
        if (this.toggleKeyboard.innerHTML.includes('Go print')) {
            this.toggleKeyboard.innerHTML = 'Hide keyboard';
        } else if (this.toggleKeyboard.innerHTML.includes('Hide keyboard')) {
            this.toggleKeyboard.innerHTML = 'Go print';
        }
    }

    onShowKeyboard() {
        if (this.myScreenKeyboard.classList.value === 'my-screen-keyboard hidden-screen-keyboard') {
            this.myScreenKeyboard.classList.remove('hidden-screen-keyboard');
            this.myScreenKeyboard.classList.add('my-screen-keyboard');
        } else if (this.myScreenKeyboard.classList.value === 'my-screen-keyboard screen-keyboard') {
            this.myScreenKeyboard.classList.remove('my-screen-keyboard');
            this.myScreenKeyboard.classList.add('hidden-screen-keyboard');
        }
    }
}

class Button {
    constructor(props) {
        this.onClick = props?.onClick;
        this.onToggle = props?.onToggle;
        this.name = props?.name;
        this.functional = props?.isFunc;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.myKeyboard = document.getElementById('js-keyboard')
        this.active = props?.active;
        this.currentLanguage = props?.currentLanguage;
        this.createButton(props);
    }

    handleClick = () => {
        console.group('handleClick')
        if (typeof this.onClick === 'function') {
            this.onClick({
                name: this.name,
                isFunc: this.functional,
                localeData: this.localeData,
                type: this.type,
                active: this.active
            });
        }
        console.groupEnd()
    }

    keyElement = document.createElement('div');

    changeKeyLanguage(locale) {
        console.group('changeKeyLanguage')
        this.keyElement.innerHTML = this.localeData[locale];
        this.myKeyboard.replaceChild(this.keyElement, this.keyElement);
        console.groupEnd()
    }

    toggleActive() {
        console.group('setActive')
        if (this.localeData[this.currentLanguage] === 'Shift' || this.localeData[this.currentLanguage] === 'Alt') {
            this.active = !this.active
            console.log(`THIS ACTIVE IS ${this.active}`)
        }
        if (this.active === true) {
            this.keyElement.classList.add('_active')
        } else {
            this.keyElement.classList.remove('_active')
        }
        console.groupEnd()
    }

    createButton() {

        this.keyElement.setAttribute('id', name);
        this.keyElement.classList.add(`${this.type}`);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
        this.myKeyboard.appendChild(this.keyElement);

        console.groupEnd()
    }
}
