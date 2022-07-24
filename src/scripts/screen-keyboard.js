class ScreenKeyboard {
    constructor() {
        this.screenKeyboardBlock = document.getElementById('js-keyboard-block');
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.textAreaElement = document.getElementById('text-area');
        this.language = window.navigator.language.split('-')[0];

        this.configKeyboard = {
            lines: [ // вся клавиатура - линия
                {
                    columns: [ // разделена на колонки, в которых могут быть линии
                        {
                            justifyContent: 'end',
                            width: '83%',
                            lines: [ // в линиях могут быть кнопки или новые колонки
                                {
                                    justifyContent: 'start',
                                    buttons: [ // кнопки могут быть только в линии
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
                                    ]
                                },
                                {
                                    justifyContent: 'start',
                                    buttons: [
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
                                    ]
                                },
                                {
                                    justifyContent: 'start',
                                    buttons: [
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
                                    ]
                                },
                                {
                                    justifyContent: 'start',
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Shift', ru: 'Shift'},
                                            type: 'l-shift',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'z', ru: 'я'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'x', ru: 'ч'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'c', ru: 'с'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'v', ru: 'м'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'b', ru: 'и'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'n', ru: 'т'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'm', ru: 'ь'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ',', ru: 'б'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '.', ru: 'ю'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '/', ru: '.'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Up', ru: 'Up'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Shift', ru: 'Shift'},
                                            type: 'r-shift',
                                            active: false
                                        },
                                    ]
                                },
                                {
                                    justifyContent: 'start',
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Fn', ru: 'Fn'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Ctrl', ru: 'Ctrl'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Win', ru: 'Win'},
                                            type: 'button-win',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Alt', ru: 'Alt'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ' ', ru: ' '},
                                            type: 'space',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Alt', ru: 'Alt'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Ctrl', ru: 'Ctrl'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Left', ru: 'Left'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Down', ru: 'Down'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Right', ru: 'Right'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Menu', ru: 'Menu'},
                                            type: 'base',
                                            active: false
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            justifyContent: 'end',
                            width: '17%',
                            lines: [
                                {
                                    justifyContent: 'end',
                                    buttons: [
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
                                    ]
                                },
                                {
                                    justifyContent: 'end',
                                    buttons: [
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
                                    ]
                                },
                                {
                                    justifyContent: 'end',
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Insert', ru: 'Insert'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Pause', ru: 'Pause'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Mv Dn', ru: 'Вниз'},
                                            type: 'base',
                                            active: false
                                        },
                                    ]
                                },
                                {
                                    justifyContent: 'end',
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'PrtScn', ru: 'PrtScn'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'ScrLck', ru: 'ScrLck'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Dock', ru: 'Закрепить'},
                                            type: 'base',
                                            active: false
                                        },
                                    ]
                                },
                                {
                                    justifyContent: 'end',
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Options', ru: 'Параметры'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Help', ru: 'Справка'},
                                            type: 'base',
                                            active: false
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Fade', ru: 'Исчезание'},
                                            type: 'base',
                                            active: false
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        this.buttons = [];

        this.init()
        this.toggleKeyboardElement.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.closeKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.render();

    }

    init() {
        const element = this.createKeyboard();

        this.screenKeyboardBlock?.appendChild(element);
    }

    render() {
        // console.log('RENDER');

        const result = this.configKeyboard.lines.map(item => this.renderLine(item));

        this.screenKeyboardElement.append(...result);
        this.screenKeyboardBlock.append(this.screenKeyboardElement);
    }

    renderLine(config) {
        // console.log('LINE');

        const lineElement = document.createElement('div');

        lineElement.classList.add('my-screen-keyboard__line-element');
        lineElement.style.justifyContent = config.justifyContent;

        if (Array.isArray(config.buttons)) {
            // console.log('config buttons');

            const buttons = config.buttons.map(item => {
                return this.renderButton(item);
            });

            // buttons.forEach(item => {
            //     lineElement.appendChild(item);
            // })
            lineElement.append(...buttons);
        }

        if (Array.isArray(config.columns)) {
            // console.log('config columns');

            const columns = config.columns.map(item => {
                return this.renderColumn(item);
            });

            // columns.forEach(item => {
            //     console.log('1', lineElement, item);
            //
            //     lineElement.appendChild(item);
            // })
            lineElement.append(...columns);
        }

        return lineElement;
    }

    renderColumn(config) {
        // console.log('COLUMN');

        const columnElement = document.createElement('div');

        columnElement.classList.add('my-screen-keyboard__column-element');
        columnElement.style.width = config.width;
        columnElement.style.justifyContent = config.justifyContent;

        if (Array.isArray(config.lines)) {
            // console.log('config lines');

            const lines = config.lines.map(item => {
                return this.renderLine(item);
            });

            // lines.forEach(item => {
            //
            //     console.log('2', columnElement, item);
            //
            //     columnElement.appendChild(item);
            // })
            columnElement.append(...lines);
        }
        return columnElement;
    }

    renderButton(config) {
        // console.log('BUTTON');

        const button = new Button({
            ...config,
            onClick: this.onClick.bind(this),
            currentLanguage: this.language,
        });
        // console.log('button is', button)

        this.buttons.push(button);
        // console.log('this.buttons are', this.buttons)

        return button.render();
    }

    onClick(id) {
        const button = this.buttons.find(item => item.id === id);

        if (button?.isFunc) {
            switch (button.localeData[this.language]) {
                case 'Shift': {
                    this.buttons.filter(item => item.localeData[this.language] === 'Shift').forEach(item => item.toggleActive());
                    break;
                }
                case 'Alt': {
                    this.buttons.filter(item => item.localeData[this.language] === 'Alt').forEach(item => item.toggleActive());
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

        const panel = document.createElement('div');
        panel.classList.add('my-screen-keyboard__panel');
        panel.innerHTML = 'Screen keyboard';
        this.screenKeyboardElement.append(panel);

        this.closeKeyboard = document.createElement('button');
        this.closeKeyboard.classList.add('my-screen-keyboard__close');
        this.closeKeyboard.innerHTML = 'close';
        panel.append(this.closeKeyboard);

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
        this.active = !this.active;
        console.log(`THIS ACTIVE IS ${this.active}`);

        if (this.active) {
            this.keyElement.classList.add('_active');
            // console.log(this.keyElement)
            return;
        }
        this.keyElement.classList.remove('_active');
    }

    createButton() {
        this.keyElement = document.createElement('div');
        this.keyElement.setAttribute('id', this.id);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.classList.add('my-screen-keyboard__key', `${this.type}`, `${(this.isFunc ? 'letter-button' : null)}` );
        // if (this.keyElement.innerHTML.length >= 1) {
        //     this.keyElement.classList.add('letter-button');
        // }
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        return this.keyElement;
    }
}
