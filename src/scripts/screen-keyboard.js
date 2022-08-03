class ScreenKeyboard {
    constructor() {
        this.screenKeyboardBlock = document.getElementById('js-keyboard-block');
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.textAreaElement = document.getElementById('text-area');
        this.language = window.navigator.language.split('-')[0];

        this.buttons = [];
        this.configKeyboard = {
            lines: [ // the whole keyboard - line
                {
                    columns: [ // columns that can have only lines
                        {
                            style: {
                                width: '80%',
                                justifyContent: 'end'
                            },
                            lines: [ // lines that can have buttons or columns
                                {
                                    style: {
                                        justifyContent: 'start'
                                    },
                                    buttons: [ // buttons that can be only in line
                                        {
                                            isFunc: true,
                                            localeData: 'Esc',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '`', ru: 'ё'},
                                            alt: {
                                                en: '~',
                                                ru: 'ё'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '1',
                                            alt: {
                                                en: '!',
                                                ru: '!'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '2',
                                            alt: {
                                                en: '@',
                                                ru: '"'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '3',
                                            alt: {
                                                en: '#',
                                                ru: '№'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '4',
                                            alt: {
                                                en: '$',
                                                ru: ';'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '5',
                                            alt: {
                                                en: '%',
                                                ru: '%'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '6',
                                            alt: {
                                                en: '^',
                                                ru: ':'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '7',
                                            alt: {
                                                en: '&',
                                                ru: '?'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '8',
                                            alt: {
                                                en: '*',
                                                ru: '*'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '9',
                                            alt: {
                                                en: '(',
                                                ru: '('
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '0',
                                            alt: {
                                                en: ')',
                                                ru: ')'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '-',
                                            alt: {
                                                en: '_',
                                                ru: '_'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '=',
                                            alt: {
                                                en: '+',
                                                ru: '+'
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Backspace',
                                            type: 'backspace',
                                            icon: 'icon-cancel-alt'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'start'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Tab',
                                            type: 'tab',
                                            icon: 'icon-exchange'
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'q', ru: 'й'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'w', ru: 'ц'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'e', ru: 'у'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'r', ru: 'к'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 't', ru: 'е'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'y', ru: 'н'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'u', ru: 'г'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'i', ru: 'ш'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'o', ru: 'щ'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'p', ru: 'з'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '[', ru: 'х'},
                                            alt: {
                                                en: '{',
                                                ru: 'х'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ']', ru: 'ъ'},
                                            alt: {
                                                en: '}',
                                                ru: 'ъ'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '\\',
                                            alt: {
                                                en: '|',
                                                ru: '/'
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Del',
                                            type: 'del'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'start'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Caps',
                                            type: 'caps',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'a', ru: 'ф'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 's', ru: 'ы'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'd', ru: 'в'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'f', ru: 'а'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'g', ru: 'п'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'h', ru: 'р'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'j', ru: 'о'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'k', ru: 'л'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'l', ru: 'д'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ';', ru: 'ж'},
                                            alt: {
                                                en: ':',
                                                ru: 'ж'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: "'", ru: 'э'},
                                            alt: {
                                                en: '"',
                                                ru: 'э'
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Enter',
                                            type: 'enter',
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'start'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Shift',
                                            type: 'l-shift',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'z', ru: 'я'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'x', ru: 'ч'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'c', ru: 'с'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'v', ru: 'м'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'b', ru: 'и'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'n', ru: 'т'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'm', ru: 'ь'},
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ',', ru: 'б'},
                                            alt: {
                                                en: '<',
                                                ru: 'б'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '.', ru: 'ю'},
                                            alt: {
                                                en: '>',
                                                ru: 'ю'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '/', ru: '.'},
                                            alt: {
                                                en: '?',
                                                ru: ','
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Up',
                                            icon: 'icon-up-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Shift',
                                            type: 'r-shift',
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'start'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Fn',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Ctrl',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Win',
                                            type: 'button-win',
                                            icon: 'icon-win8'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Alt',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: ' ',
                                            type: 'space',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Alt',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Ctrl',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Left',
                                            icon: 'icon-left-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Down',
                                            icon: 'icon-down-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Right',
                                            icon: 'icon-right-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Menu',
                                            type: 'button-menu',
                                            icon: 'icon-doc-text'
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            style: {
                                width: '20%',
                                justifyContent: 'end'
                            },
                            lines: [
                                {
                                    style: {
                                        justifyContent: 'end'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Home',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'PgUp',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Nav', ru: 'Перейти'},
                                            type: 'right-keys'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'end'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'End',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'PgDn',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Mv Up', ru: 'Вверх'},
                                            type: 'right-keys'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'end'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'Insert',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Pause',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Mv Dn', ru: 'Вниз'},
                                            type: 'right-keys'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'end'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: 'PrtScn',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'ScrLck',
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Dock', ru: 'Закрепить'},
                                            type: 'right-keys'
                                        },
                                    ]
                                },
                                {
                                    style: {
                                        justifyContent: 'end'
                                    },
                                    buttons: [
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Options', ru: 'Параметры'},
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Help', ru: 'Справка'},
                                            type: 'right-keys'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Fade', ru: 'Исчезание'},
                                            type: 'right-keys'
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        this.init();
    }

    init() {
        const element = this.createKeyboard();

        this.screenKeyboardBlock?.appendChild(element);

        this.render();

        this.toggleKeyboardElement.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.closeKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    render() {
        if (this.configKeyboard.lines) {
            const result = this.configKeyboard.lines.map(item => this.renderLine(item));

            this.screenKeyboardElement.append(...result);
            this.screenKeyboardBlock.append(this.screenKeyboardElement);

            return;
        }
        console.log('"lines" not found')
    }

    renderLine(config) {
        const lineElement = document.createElement('div');

        lineElement.classList.add('my-screen-keyboard__line');

        if (Array.isArray(config.buttons)) {
            config.buttons.forEach(item => {
                lineElement.appendChild(this.renderButton(item));
            });
        }

        if (Array.isArray(config.columns)) {
            config.columns.forEach(item => {
                lineElement.appendChild(this.renderColumn(item));
            });
        }

        return lineElement;
    }

    renderColumn(config) {
        const columnElement = document.createElement('div');

        columnElement.classList.add('my-screen-keyboard__column');
        columnElement.style.width = config.style?.width;

        if (Array.isArray(config.lines)) {
            config.lines.forEach(item => {
                columnElement.appendChild(this.renderLine(item));
            });
        }

        return columnElement;
    }

    renderButton(config) {
        const button = new Button({
            ...config,
            onClick: this.onClick.bind(this),
            currentLanguage: this.language,
        });

        this.buttons.push(button);

        return button.render();
    }

    onClick(id) {
        if (!id) {
            return;
        }

        const button = this.buttons.find(item => item.id === id);
        const pressedButtons = ['Shift', 'Alt', 'Caps', 'Fn', 'Ctrl', 'Win'];
        const shiftAlt = this.buttons.filter(item => ['Shift', 'Alt'].includes(item.content) && item.active);

        if (button?.isFunc && pressedButtons.includes(button.content)) {
            this.buttons.forEach(item => {
                if (item.content === button.content) {
                    item.toggleActive();
                }
            });

            if (shiftAlt.length === 4 && button.content === 'Shift') {
                this.changeLayout('Shift', 'Alt');
            }
        }
    }

    createKeyboard() {
        this.screenKeyboardElement = document.createElement('div');
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

    changeLayout(first, second) {
        this.changeLanguage();

        this.buttons.forEach(item => {
            if (second === item.content) {
                item.toggleActive();
            }
            item.changeLanguage(this.language);
            item.renderContent();
            item.reduceLongWord();
        });

    }

    changeLanguage() {
        const russian = 'ru';
        const english = 'en';

        if (this.language === russian) {
            this.language = english;

            return;
        }

        if (this.language === english) {
            this.language = russian;
        }
    }

    handleToggleKeyboard() {
        this.onShowKeyboard();
        this.onToggleKeyboard();
    }

    onToggleKeyboard() {
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
        this.id = props?.id || generateId();
        this.isFunc = Boolean(props?.isFunc);
        this.localeData = props?.localeData;
        this.type = props?.type || 'base';
        this.active = Boolean(props?.active);
        this.onClick = props?.onClick;
        this.onToggle = props?.onToggle;
        this.currentLanguage = props?.currentLanguage;
        this.icon = props?.icon;
        this.alt = props?.alt;

        this.createButton(props);
    }

    get content() {
        if (typeof this.localeData === "object") {
            return this.localeData[this.currentLanguage];
        }

        return this.localeData;
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {

            this.onClick(this.id);
        }
    }

    changeLanguage(locale) {
        this.currentLanguage = locale;
    }

    toggleActive() {
        this.active = !this.active;

        this.keyElement.classList.toggle('_active');
    }

    /*
    'isFunc': if key have 'true' => the 'letter-button' class is added to the button

    'localeData': key have a text, that is displayed on the button

    'type': key defines class, that set the shape of the button

    'active': key allows you to set button 'pressed' state

    'icon': if the button have this key, the text in the button is not written. The button have only an icon

    'alt': alternative button's content, for holding "shift"
     */

    get altContent() {
        if (!this.alt) {
            return;
        }

        const altContent = document.createElement('div');

        altContent.classList.add('alt-content');
        altContent.innerHTML = this?.alt[this.currentLanguage];

        return altContent;
    }

    get mainContent() {
        const mainContent = document.createElement('div');

        mainContent.innerHTML = this.content;

        if (this.alt && this.alt[this.currentLanguage] !== this.content) {
            mainContent.classList.add('content');

            return mainContent;
        }

        mainContent.classList.add('one-content');

        return mainContent;
    }

    renderContent() {

        if (!this.icon) {
            const altContent = this.alt ? this.altContent : null;
            const mainContent = this.mainContent;
            const array = [];

            if (this.alt && this.alt[this.currentLanguage] !== this.content) {
                array.push(altContent, mainContent)
            } else {
                array.push(mainContent);
            }

            while (this.keyElement.firstChild) {
                this.keyElement.removeChild(this.keyElement.firstChild);
            }

            this.keyElement.append(...array);
        }
    }

    reduceLongWord() {
        if (this.isFunc) {
            if (this.keyElement.innerText.length > 6) {
                this.keyElement.classList.add('letter-button--s');

                return;
            }

            this.keyElement.classList.remove('letter-button--s');
            this.keyElement.classList.add('letter-button');
        }
    }

    createButton() {
        this.keyElement = document.createElement('div');
        this.keyElement.setAttribute('id', this.id);
        this.keyElement.classList.add('my-screen-keyboard__key', `${this.type}`);

        this.renderContent();
        this.reduceLongWord();

        if (this.icon) {
            this.keyElement.classList.add(`${this.icon}`);
        }

        this.keyElement.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        return this.keyElement;
    }
}
