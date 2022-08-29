class ScreenKeyboard {
    constructor(props) {
        this.buttons = [];

        this.screenKeyboardBlock = document.getElementById('js-keyboard-block');
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.language = window.navigator.language.split('-')[0];
        this.currentInput = document.querySelector(props?.inputSelector);
        this.blockInput = document.querySelector(props?.blockSelector);

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
                                            key: 'Escape',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '`', ru: 'ё'},
                                            alt: {
                                                en: '~',
                                                ru: 'ё'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '1',
                                            alt: {
                                                en: '!',
                                                ru: '!'
                                            },
                                            isActive: false,
                                            fnValue: 'F1',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '2',
                                            alt: {
                                                en: '@',
                                                ru: '"'
                                            },
                                            isActive: false,
                                            fnValue: 'F2',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '3',
                                            alt: {
                                                en: '#',
                                                ru: '№'
                                            },
                                            isActive: false,
                                            fnValue: 'F3',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '4',
                                            alt: {
                                                en: '$',
                                                ru: ';'
                                            },
                                            isActive: false,
                                            fnValue: 'F4',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '5',
                                            alt: {
                                                en: '%',
                                                ru: '%'
                                            },
                                            isActive: false,
                                            fnValue: 'F5',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '6',
                                            alt: {
                                                en: '^',
                                                ru: ':'
                                            },
                                            isActive: false,
                                            fnValue: 'F6',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '7',
                                            alt: {
                                                en: '&',
                                                ru: '?'
                                            },
                                            isActive: false,
                                            fnValue: 'F5',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '8',
                                            alt: {
                                                en: '*',
                                                ru: '*'
                                            },
                                            isActive: false,
                                            fnValue: 'F8',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '9',
                                            alt: {
                                                en: '(',
                                                ru: '('
                                            },
                                            isActive: false,
                                            fnValue: 'F9',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '0',
                                            alt: {
                                                en: ')',
                                                ru: ')'
                                            },
                                            isActive: false,
                                            fnValue: 'F10',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '-',
                                            alt: {
                                                en: '_',
                                                ru: '_'
                                            },
                                            isActive: false,
                                            fnValue: 'F11',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '=',
                                            alt: {
                                                en: '+',
                                                ru: '+'
                                            },
                                            isActive: false,
                                            fnValue: 'F12',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Backspace',
                                            type: 'backspace',
                                            icon: 'icon-cancel-alt',
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
                                            icon: 'icon-exchange',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'q', ru: 'й'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'w', ru: 'ц'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'e', ru: 'у'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'r', ru: 'к'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 't', ru: 'е'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'y', ru: 'н'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'u', ru: 'г'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'i', ru: 'ш'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'o', ru: 'щ'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'p', ru: 'з'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '[', ru: 'х'},
                                            alt: {
                                                en: '{',
                                                ru: 'х'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ']', ru: 'ъ'},
                                            alt: {
                                                en: '}',
                                                ru: 'ъ'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '\\',
                                            alt: {
                                                en: '|',
                                                ru: '/'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Del',
                                            type: 'del',
                                            key: 'Delete'
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
                                            key: 'CapsLock',
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'a', ru: 'ф'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 's', ru: 'ы'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'd', ru: 'в'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'f', ru: 'а'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'g', ru: 'п'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'h', ru: 'р'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'j', ru: 'о'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'k', ru: 'л'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'l', ru: 'д'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ';', ru: 'ж'},
                                            alt: {
                                                en: ':',
                                                ru: 'ж'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: "'", ru: 'э'},
                                            alt: {
                                                en: '"',
                                                ru: 'э'
                                            },
                                            isActive: false,
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
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'x', ru: 'ч'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'c', ru: 'с'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'v', ru: 'м'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'b', ru: 'и'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'n', ru: 'т'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: 'm', ru: 'ь'},
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: ',', ru: 'б'},
                                            alt: {
                                                en: '<',
                                                ru: 'б'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '.', ru: 'ю'},
                                            alt: {
                                                en: '>',
                                                ru: 'ю'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: {en: '/', ru: '.'},
                                            alt: {
                                                en: '?',
                                                ru: ','
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Up',
                                            icon: 'icon-up-open',
                                            key: 'ArrowUp',
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
                                            key: 'Control',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Win',
                                            type: 'button-win',
                                            icon: 'icon-win8',
                                            key: 'Meta',
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
                                            key: 'Control',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Left',
                                            icon: 'icon-left-open',
                                            key: 'ArrowLeft',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Down',
                                            icon: 'icon-down-open',
                                            key: 'ArrowDown',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Right',
                                            icon: 'icon-right-open',
                                            key: 'ArrowRight',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Menu',
                                            type: 'button-menu',
                                            icon: 'icon-doc-text',
                                            key: 'ArrowRight',
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
                                            type: 'right-keys',
                                            key: 'PageUp',
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
                                            type: 'right-keys',
                                            key: 'PageDown',
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
                                            type: 'right-keys',
                                            key: 'PrintScreen',
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
        this.iconKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));

        this.dragAndDrop();
        this.responsiveKey();
    }

    render() {
        if (this.configKeyboard.lines) {
            const result = this.configKeyboard.lines.map(item => this.renderLine(item));

            this.screenKeyboardElement.append(...result);
            this.screenKeyboardBlock.append(this.screenKeyboardElement);

            return;
        }
        console.log('"lines" not found');
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

        this.toggleShiftAlt(button);

        if (button?.isFunc && pressedButtons.includes(button.content)) {
            this.buttons.forEach(item => {
                if (item.content === button.content) {
                    item.toggleActive();
                }
            });
        }

        this.actionButton(button);
        this.hotkeys(button);
    }

    actionButton(button) {
        const shift = 'Shift';
        const caps = 'Caps';
        const backspace = 'Backspace';
        const del = 'Del';

        const shiftActive = this.buttons.filter(item => shift === item.content && item.active);
        const content = !button.isFunc && button.isActive ? button.content.toUpperCase() : button.content;
        const altContent = !button.isFunc && button.isActive && button.alt ? button.alternative.toUpperCase() : button.alternative;

        if (!button.isFunc) {
            if (shiftActive.length > 0 && button.alt) {
                this.currentInput.setRangeText(altContent, this.currentInput.selectionStart,
                    this.currentInput.selectionEnd, 'end');
                this.currentInput.focus();

                return;
            }

            this.currentInput.setRangeText(content, this.currentInput.selectionStart,
                this.currentInput.selectionEnd, 'end');
            this.currentInput.focus();
        }

        if (button.content === shift || button.content === caps) {
            this.buttons.forEach(item => {
                item.isActive === false ? item.isActive = true : item.isActive = false;
                item.renderContent();
            });
        }

        if (button.content === backspace) {
            if (this.currentInput.selectionStart === this.currentInput.selectionEnd) {
                return this.currentInput.setRangeText('', this.currentInput.selectionStart - 1,
                    this.currentInput.selectionStart, 'end');
            }

            this.currentInput.setRangeText(
                '', this.currentInput.selectionStart, this.currentInput.selectionEnd, 'end'
            );

        }

        if (button.content === del) {
            if (this.currentInput.selectionStart === this.currentInput.selectionEnd) {
                return this.currentInput.setRangeText('', this.currentInput.selectionStart,
                    this.currentInput.selectionStart + 1, 'end');
            }

            this.currentInput.setRangeText(
                '', this.currentInput.selectionStart, this.currentInput.selectionEnd, 'end'
            );
        }
    }

    hotkeys(button) {
        const ctrl = 'Ctrl';
        const shift = 'Shift';
        const caps = 'Caps';
        const fn = 'Fn';
        const alt = 'Alt';
        const tab = 'Tab';
        console.log('HOTKEYS', button.content)

        if (button.content === fn && button.active) {
            this.buttons.forEach(item => {
                if (item.fnValue) {
                    item.toggleFn();
                }
            })
        }
        console.log(button.content);
    }

    toggleShiftAlt(button) {
        const shift = 'Shift';
        const alt = 'Alt';

        const btnShiftAlt = this.buttons.filter(item => [shift, alt].includes(item.content) && item.active);
        const dataShiftAlt = btnShiftAlt.map(item => item.localeData);
        const arrShiftAlt = [...new Set(dataShiftAlt)];

        if (arrShiftAlt.length === 2 && button.content === shift) {
            this.changeLayout(shift, alt);
        }
    }

    createKeyboard() {
        this.screenKeyboardElement = document.createElement('div');
        this.screenKeyboardElement.classList.add('my-screen-keyboard', 'hidden-screen-keyboard');
        this.screenKeyboardElement.setAttribute('draggable', 'true');
        this.screenKeyboardElement.setAttribute('id', generateId('keyboard'));

        const panel = document.createElement('div');

        panel.classList.add('my-screen-keyboard__panel');
        panel.innerHTML = 'Screen keyboard';

        this.screenKeyboardElement.append(panel);

        this.closeKeyboard = document.createElement('button');
        this.closeKeyboard.classList.add('my-screen-keyboard__close');
        this.closeKeyboard.innerHTML = 'close';

        panel.append(this.closeKeyboard);

        this.createIcon(this.blockInput);

        return this.screenKeyboardElement;
    }

    dragAndDrop() {
        const keyboard = document.getElementById(this.screenKeyboardElement.id);

        let initX;
        let initY;
        let firstX;
        let firstY;

        keyboard.addEventListener('mousedown', function(event) {
            event.preventDefault();

            initX = this.offsetLeft;
            initY = this.offsetTop;
            firstX = event.pageX;
            firstY = event.pageY;

            this.addEventListener('mousemove', dragIt, false);

            window.addEventListener('mouseup', function() {
                keyboard.removeEventListener('mousemove', dragIt, false);
            }, false);
        }, false);

        function dragIt(event) {
            this.style.left = initX+event.pageX-firstX + 'px';
            this.style.top = initY+event.pageY-firstY + 'px';
        }
    }

    responsiveKey() {
        const arr = this.buttons;

        window.addEventListener('keydown',  ((event) => {
            arr.forEach(item => {
                if (item.key?.toLowerCase() === event.key.toLowerCase()
                    || item.content.toLowerCase() === event.key.toLowerCase()) {
                    item.onActive();
                }
            })

            if ('shift' === event.key.toLowerCase() && event.altKey === true
                || 'alt' === event.key.toLowerCase() && event.shiftKey === true) {
                this.changeLanguage();
                this.buttons.forEach(item => {
                    item.changeLanguage(this.language);
                    item.renderContent();
                    item.reduceLongWord();
                });
            }

            // if (button.content.toLowerCase() === event.key.toLowerCase()) {
            //     button.toggleActive();
            // }
        }))

        window.addEventListener('keyup', function (event) {
            arr.forEach(item => {
                if (item.key?.toLowerCase() === event.key.toLowerCase()
                    || item.content.toLowerCase() === event.key.toLowerCase()) {
                    item.offActive();
                }
            })
        })
    }

    changeLayout(first, second) {
        const winKey = 'Win';
        const ctrlKey= 'Ctrl';

        if (
            this.buttons.find(item => item.content === winKey && item.active) ||
            this.buttons.find(item => item.content === ctrlKey && item.active)
        ) {
            return;
        }

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
        if (this.language === Languages.RU) {
            this.language = Languages.EN;

            return;
        }

        if (this.language === Languages.EN) {
            this.language = Languages.RU;
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

    createIcon(parent) {
        this.iconKeyboard = document.createElement('div');
        this.iconKeyboard.classList.add('icon-keyboard');

        parent.appendChild(this.iconKeyboard);
    }
}

class Button {
    constructor(props) {
        this.id = props?.id || generateId('button');
        this.isFunc = Boolean(props?.isFunc);
        this.isActive = Boolean(props?.isActive);
        this.localeData = props?.localeData;
        this.type = props?.type || 'base';
        this.active = Boolean(props?.active);
        this.onClick = props?.onClick;
        this.onToggle = props?.onToggle;
        this.currentLanguage = props?.currentLanguage;
        this.icon = props?.icon;
        this.alt = props?.alt;
        this.key = props?.key;
        this.fnValue = props?.fnValue;

        this.createButton(props);
    }

    get content() {
        if (typeof this.localeData === "object") {
            return this.localeData[this.currentLanguage];
        }

        return this.localeData;
    }

    get alternative() {
        if (this.alt) {
            return this.alt[this.currentLanguage];
        }
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

        if (this.active) {
            this.onActive()

            return;
        }

        this.offActive();
        // this.keyElement.classList.toggle('_active');
    }

    onActive() {
        this.keyElement.classList.add('_active');
    }

    offActive() {
        this.keyElement.classList.remove('_active')
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

        if (!this.isActive) {
            altContent.classList.remove('alt-content--main') || altContent.classList.add('alt-content');
        }

        if (this.isActive) {
            altContent.classList.add('alt-content--main');
        }

        altContent.innerHTML = this?.alt[this.currentLanguage];

        return altContent;
    }

    get mainContent() {
        const mainContent = document.createElement('div');

        mainContent.innerHTML = this.content;

        if (this.alt && this.alt[this.currentLanguage] !== this.content) {
            if (!this.isActive) {
                mainContent.classList.remove('content--alt') || mainContent.classList.add('content');
            }

            if (this.isActive) {
                mainContent.classList.add('content--alt');
            }

            return mainContent;
        }

        if (!this.isFunc && this.isActive) {
            mainContent.innerHTML = this.content.toUpperCase();
        }

        mainContent.classList.add('one-content');

        return mainContent;
    }

    get fnContent() {
        const fnContent = document.createElement('div');

        fnContent.innerHTML = this?.fnValue;

        fnContent.classList.add('fn-content');

        return fnContent;
    }

    renderContent() {
        if (!this.icon) {
            const altContent = this.alt ? this.altContent : null;
            const mainContent = this.mainContent;
            const arrayContent = [];

            if (this.alt && this.alt[this.currentLanguage] !== this.content) {
                arrayContent.push(altContent, mainContent);
            } else {
                arrayContent.push(mainContent);
            }

            while (this.keyElement.firstChild) {
                this.keyElement.removeChild(this.keyElement.firstChild);
            }

            this.keyElement.append(...arrayContent);
        }
    }

    toggleFn() {
        const content = this.fnContent;
        const array = [];

        array.push(content);

        while (this.keyElement.firstChild) {
            this.keyElement.removeChild(this.keyElement.firstChild);
        }

        if (this.fnValue) {
            console.log('LLL')
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