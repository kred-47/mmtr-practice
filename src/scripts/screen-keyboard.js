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
                            justifyContent: 'end',
                            width: '83%',
                            lines: [ // lines that can have buttons or columns
                                {
                                    justifyContent: 'start',
                                    buttons: [ // buttons that can be only in line
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
                                            active: false,
                                            alt: {
                                                en: '~',
                                                ru: 'ё'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '1', ru: '1'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '!',
                                                ru: '!'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '2', ru: '2'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '@',
                                                ru: '"'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '3', ru: '3'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '#',
                                                ru: '№'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '4', ru: '4'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '$',
                                                ru: ';'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '5', ru: '5'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '%',
                                                ru: '%'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '6', ru: '6'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '^',
                                                ru: ':'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '7', ru: '7'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '&',
                                                ru: '?'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '8', ru: '8'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '*',
                                                ru: '*'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '9', ru: '9'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '(',
                                                ru: '('
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '0', ru: '0'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: ')',
                                                ru: ')'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '-', ru: '-'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '_',
                                                ru: '_'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '=', ru: '='},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '+',
                                                ru: '+'
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Backspace', ru: 'Backspace'},
                                            type: 'backspace',
                                            active: false,
                                            icon: 'icon-cancel-alt'
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
                                            active: false,
                                            icon: 'icon-exchange'
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
                                            active: false,
                                            alt: {
                                                en: '{',
                                                ru: 'х'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ']', ru: 'ъ'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '}',
                                                ru: 'ъ'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '\\', ru: '\\'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '|',
                                                ru: '/'
                                            }
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
                                            active: false,
                                            alt: {
                                                en: ':',
                                                ru: 'ж'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: "'", ru: 'э'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '"',
                                                ru: 'э'
                                            }
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
                                            active: false,
                                            alt: {
                                                en: '<',
                                                ru: 'б'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '.', ru: 'ю'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '>',
                                                ru: 'ю'
                                            }
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '/', ru: '.'},
                                            type: 'base',
                                            active: false,
                                            alt: {
                                                en: '?',
                                                ru: ','
                                            }
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Up', ru: 'Up'},
                                            type: 'base',
                                            active: false,
                                            icon: 'icon-up-open'
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
                                            active: false,
                                            icon: 'icon-win8'
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
                                            active: false,
                                            icon: 'icon-left-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Down', ru: 'Down'},
                                            type: 'base',
                                            active: false,
                                            icon: 'icon-down-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Right', ru: 'Right'},
                                            type: 'base',
                                            active: false,
                                            icon: 'icon-right-open'
                                        },
                                        {
                                            isFunc: true,
                                            localeData: {en: 'Menu', ru: 'Menu'},
                                            type: 'button-menu',
                                            active: false,
                                            icon: 'icon-doc-text'
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
        };

        this.init();
        this.render();

        this.toggleKeyboardElement.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.closeKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    init() {
        const element = this.createKeyboard();

        this.screenKeyboardBlock?.appendChild(element);
    }

    render() {
        const result = this.configKeyboard.lines.map(item => this.renderLine(item));

        this.screenKeyboardElement.append(...result);
        this.screenKeyboardBlock.append(this.screenKeyboardElement);
    }

    renderLine(config) {
        const lineElement = document.createElement('div');

        lineElement.classList.add('my-screen-keyboard__line');
        lineElement.style.justifyContent = config.justifyContent;

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
        columnElement.style.width = config.width;
        columnElement.style.justifyContent = config.justifyContent;

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
        const button = this.buttons.find(item => item.id === id);

        if (button?.isFunc) {
            // switch (button.contentButton) {
            //     case 'Shift': {
            //         this.buttons.filter(item => item.contentButton === 'Shift').forEach(item => item.toggleActive());
            //         break;
            //     }
            //     case 'Alt': {
            //         this.buttons.filter(item => item.contentButton === 'Alt').forEach(item => item.toggleActive());
            //         break;
            //     }
            //     case 'Caps': {
            //         this.buttons.filter(item => item.contentButton === 'Caps').forEach(item => item.toggleActive());
            //         break;
            //     }
            //     case 'Fn': {
            //         this.buttons.filter(item => item.contentButton === 'Fn').forEach(item => item.toggleActive());
            //         break;
            //     }
            //     case 'Ctrl': {
            //         this.buttons.filter(item => item.contentButton === 'Ctrl').forEach(item => item.toggleActive());
            //         break;
            //     }
            //     case 'Win': {
            //         this.buttons.filter(item => item.contentButton === 'Win').forEach(item => item.toggleActive());
            //         break;
            //     }
            //
            //     default:
            //         console.log('undefined button');
            // }

            this.buttons.filter(item => item.content === button.content).forEach(item => item.toggleActive());

            this.onChangeLayoutKeyboard();

            return;
        }
        console.log(`${button.content} is not 'func'`);
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
            this.buttons.find(item => item.content === 'Shift' && item.active) &&
            this.buttons.find(item => item.content === 'Alt' && item.active)
        ) {
            this.changeLanguage();
            this.buttons.forEach(item => {
                if (['Shift', 'Alt'].includes(item.content)) {
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
        this.icon = props?.icon;
        this.alt = props?.alt;

        this.createButton(props);
        if (this.icon === 'icon-win8') {
            console.log(props)
        }
    }

    get content() {
        return this.localeData[this.currentLanguage];
    }

    handleClick = () => {
        console.log('HANDLE 1')
        if (typeof this.onClick === 'function') {
            console.log('HANDLE 2')
            this.onClick(this.id);
        }
    }

    changeLanguage(locale) {
        // if (!this.icon) {
        //     this.keyElement.innerHTML = this.localeData[locale];
        // }

        // if (!this.icon) {
        //     const altContent = this.alt ? this.altContent : null;
        //     const mainContent = this.mainContent;
        //     const array = [];
        //
        //     this.alt && this.alt[this.currentLanguage] !== this.content
        //         ? array.push(altContent, mainContent)
        //         : array.push(mainContent);
        //
        //     this.keyElement.append(...array);
        // }
    }

    toggleActive() {
        this.active = !this.active;

        if (this.active) {
            this.keyElement.classList.add('_active');

            return;
        }

        this.keyElement.classList.remove('_active');
    }

    /*
    'isFunc': if key have 'true' => the 'letter-button' class is added to the button

    'localeData': key have a text, that is displayed on the button

    'type': key defines class, that set the shape of the button

    'active': key allows you to set button 'pressed' state

    'icon': if the button have this key, the text in the button is not written. The button have only an icon
     */

    get altContent() {
        const altContent = document.createElement('div');
        altContent.classList.add('alt-content');
        altContent.innerHTML = this?.alt[this.currentLanguage];

        if (this.alt) {
            return altContent;
        }
    }

    get mainContent() {
        const mainContent = document.createElement('div');
        mainContent.innerHTML = this.content;
        if (this.alt && this.alt[this.currentLanguage] !== this.content) {
            mainContent.classList.add('content');

            return mainContent;
        }

        mainContent.classList.add('one-content')

        return mainContent;
    }

    createButton() {
        this.keyElement = document.createElement('div');
        this.keyElement.setAttribute('id', this.id);

        this.keyElement.classList.add('my-screen-keyboard__key', `${this.type}`);

        if (!this.icon) {
            const altContent = this.alt ? this.altContent : null;
            const mainContent = this.mainContent;
            const array = [];

            this.alt && this.alt[this.currentLanguage] !== this.content
                ? array.push(altContent, mainContent)
                : array.push(mainContent);

            this.keyElement.append(...array);
        }

        if (this.isFunc) {
            this.keyElement.innerText.length > 6
                ? this.keyElement.classList.add('letter-button--small')  // додумать добавление класса к длинным словам в кнопке
                : this.keyElement.classList.add('letter-button');
        }

        if (this.icon) {
            this.keyElement.classList.add(`${this.icon}`)
        }

        this.keyElement.addEventListener('click', this.handleClick.bind(this));
    }

    render() {
        return this.keyElement;
    }
}
