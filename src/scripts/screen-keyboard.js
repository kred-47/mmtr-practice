class ScreenKeyboard {
    constructor(props) {
        this.field = document.getElementById('js-field');
        this.screenKeyboardBlock = document.getElementById('js-keyboard-block');
        this.toggleKeyboardElement = document.getElementById('toggle-keyboard');
        this.textAreaElement = document.getElementById('js-input');
        this.language = window.navigator.language.split('-')[0];
        this.inputArea = document.querySelector(props?.inputSelector);

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
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '2',
                                            alt: {
                                                en: '@',
                                                ru: '"'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '3',
                                            alt: {
                                                en: '#',
                                                ru: '№'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '4',
                                            alt: {
                                                en: '$',
                                                ru: ';'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '5',
                                            alt: {
                                                en: '%',
                                                ru: '%'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '6',
                                            alt: {
                                                en: '^',
                                                ru: ':'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '7',
                                            alt: {
                                                en: '&',
                                                ru: '?'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '8',
                                            alt: {
                                                en: '*',
                                                ru: '*'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '9',
                                            alt: {
                                                en: '(',
                                                ru: '('
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '0',
                                            alt: {
                                                en: ')',
                                                ru: ')'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '-',
                                            alt: {
                                                en: '_',
                                                ru: '_'
                                            },
                                            isActive: false,
                                        },
                                        {
                                            isFunc: false,
                                            localeData: '=',
                                            alt: {
                                                en: '+',
                                                ru: '+'
                                            },
                                            isActive: false,
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
                                            icon: 'icon-win8',
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
                                            icon: 'icon-left-open',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Down',
                                            icon: 'icon-down-open',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Right',
                                            icon: 'icon-right-open',
                                        },
                                        {
                                            isFunc: true,
                                            localeData: 'Menu',
                                            type: 'button-menu',
                                            icon: 'icon-doc-text',
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
        this.iconKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
        this.dragAndDrop();
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

        this.toggleShiftAlt(button);

        if (button?.isFunc && pressedButtons.includes(button.content)) {
            this.buttons.forEach(item => {
                if (item.content === button.content) {
                    item.toggleActive();
                }
            });
        }

        this.actionButton(button);
    }

    actionButton(button) {
        const shiftActive = this.buttons.filter(item => 'Shift' === item.content && item.active);
        const content = !button.isFunc && button.isActive ? button.content.toUpperCase() : button.content;
        const altContent = !button.isFunc && button.isActive && button.alt ? button.alternative.toUpperCase() : button.alternative; // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

        if (!button.isFunc) {
            if (shiftActive && button.alt) {
                this.inputArea.setRangeText(altContent, this.inputArea.selectionStart,
                    this.inputArea.selectionEnd, 'end');
                this.inputArea.focus();

                return;

            }

            this.inputArea.setRangeText(content, this.inputArea.selectionStart,
                this.inputArea.selectionEnd, 'end');
            this.inputArea.focus();
        }

        if (button.content === 'Shift' || button.content === 'Caps') {
            this.buttons.forEach(item => {
                item.isActive === false ? item.isActive = true : item.isActive = false;
                item.renderContent()
            });
        }

        if (button.content === 'Backspace') {
            this.inputArea.setRangeText('', this.inputArea.selectionStart - 1,
                this.inputArea.selectionStart, 'end');
        }

        if (button.content === 'Del') {
            this.inputArea.setRangeText('', this.inputArea.selectionStart,
                this.inputArea.selectionStart + 1, 'end');
        }

    }

    toggleShiftAlt(button) {
        const btnShiftAlt = this.buttons.filter(item => ['Shift', 'Alt'].includes(item.content) && item.active);
        const dataShiftAlt = btnShiftAlt.map(item => item.localeData);
        const arrShiftAlt = [...new Set(dataShiftAlt)];

        if (arrShiftAlt.length === 2 && button.content === 'Shift') {
            this.changeLayout('Shift', 'Alt');
        }
    }

    createKeyboard() {
        this.screenKeyboardElement = document.createElement('div');
        this.screenKeyboardElement.classList.add('my-screen-keyboard', 'hidden-screen-keyboard');
        this.screenKeyboardElement.setAttribute('draggable', 'true');
        this.screenKeyboardElement.setAttribute('id', 'js-keyboard');

        const panel = document.createElement('div');

        panel.classList.add('my-screen-keyboard__panel');
        panel.innerHTML = 'Screen keyboard';

        this.screenKeyboardElement.append(panel);

        this.closeKeyboard = document.createElement('button');
        this.closeKeyboard.classList.add('my-screen-keyboard__close');
        this.closeKeyboard.innerHTML = 'close';

        panel.append(this.closeKeyboard);
        this.createIcon();

        return this.screenKeyboardElement;
    }

    // drag() {
    //     this.screenKeyboardElement.onmousedown = function (event) { // отследить нажатие
    //
    //         let shiftX = event.clientX - this.screenKeyboardElement.getBoundingClientRect().left;
    //         let shiftY = event.clientY - this.screenKeyboardElement.getBoundingClientRect().top;
    //
    //         // (2) подготовить к перемещению:
    //         // разместить поверх остального содержимого и в абсолютных координатах
    //         console.log(this.screenKeyboardElement);
    //         this.screenKeyboardElement.style.position = 'absolute';
    //         this.screenKeyboardElement.style.zIndex = '1000';
    //         // переместим в body, чтобы клавиатура была точно не внутри position:relative
    //         document.body.append(this.screenKeyboardElement);
    //         // и установим абсолютно спозиционированную клавиатуру под курсор
    //
    //         moveAt(event.pageX, event.pageY);
    //
    //         // передвинуть клавиатуру под координаты курсора
    //         // и сдвинуть на половину ширины/высоты для центрирования
    //         function moveAt(pageX, pageY) {
    //             this.screenKeyboardElement.style.left = pageX - shiftX + 'px';
    //             this.screenKeyboardElement.style.top = pageY - shiftY + 'px';
    //         }
    //
    //         function onMouseMove(event) {
    //             moveAt(event.pageX, event.pageY);
    //         }
    //
    //         // (3) перемещать по экрану
    //         document.addEventListener('mousemove', onMouseMove);
    //
    //         // (4) положить клавиатуру, удалить более ненужные обработчики событий
    //         this.screenKeyboardElement.onmouseup = function() {
    //             document.removeEventListener('mousemove', onMouseMove);
    //             this.screenKeyboardElement.onmouseup = null;
    //         };
    //     };
    // }

    // dragAndDrop() {
    //     const window = document.body;
    //     const keyboard = this.screenKeyboardElement;
    //
    //     const dragStart = function () {
    //         setTimeout(() => {
    //             this.classList.add('hidden-screen-keyboard');
    //         }, 0);
    //     };
    //     const dragEnd = function () {
    //         this.classList.remove('hidden-screen-keyboard');
    //     };
    //     const dragOver = function (event) {
    //         event.preventDefault();
    //     };
    //     const dragEnter = function () {
    //
    //     };
    //     const dragLeave = function () {
    //
    //     };
    //     const dragDrop = function () {
    //         this.append(keyboard);
    //     };
    //
    //     window.addEventListener('dragover', dragOver);
    //     window.addEventListener('dragenter', dragEnter);
    //     window.addEventListener('dragleave', dragLeave);
    //     window.addEventListener('drop', dragDrop);
    //
    //     keyboard.addEventListener('dragstart', dragStart);
    //     keyboard.addEventListener('dragend', dragEnd);
    //
    // }

    dragAndDrop() {
        const object = document.getElementById('js-keyboard');
        let initX = 0;
        let initY = 0;
        let firstX = 0;
        let firstY = 0;

        object.addEventListener('mousedown', function(e) {
            e.preventDefault();
            initX = this.offsetLeft;
            initY = this.offsetTop;
            firstX = e.pageX;
            firstY = e.pageY;

            this.addEventListener('mousemove', dragIt, false);

            window.addEventListener('mouseup', function() {
                object.removeEventListener('mousemove', dragIt, false);
            }, false);

        }, false);

        object.addEventListener('touchstart', function(e) {

            e.preventDefault();
            initX = this.offsetLeft;
            initY = this.offsetTop;
            const touch = e.touches;
            firstX = touch[0].pageX;
            firstY = touch[0].pageY;

            this.addEventListener('touchmove', swipeIt, false);

            window.addEventListener('touchend', function(e) {
                e.preventDefault();
                object.removeEventListener('touchmove', swipeIt, false);
            }, false);

        }, false);

        function dragIt(e) {
            this.style.left = initX+e.pageX-firstX + 'px';
            this.style.top = initY+e.pageY-firstY + 'px';
        }

        function swipeIt(e) {
            const contact = e.touches;
            this.style.left = initX+contact[0].pageX-firstX + 'px';
            this.style.top = initY+contact[0].pageY-firstY + 'px';
        }
    }

    changeLayout(first, second) {
        if (
            this.buttons.find(item => item.content === 'Win' && item.active) ||
            this.buttons.find(item => item.content === 'Ctrl' && item.active)
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

    createIcon() {
        this.iconKeyboard = document.createElement('div');
        this.iconKeyboard.classList.add('icon-keyboard');
        console.log(this.iconKeyboard)
        console.log(this.field)
        this.field.appendChild(this.iconKeyboard);
    }
}

class Button {
    constructor(props) {
        this.id = props?.id || generateId();
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

        if (!this.isActive) {
            altContent.classList.remove('alt-content--a')
            || altContent.classList.add('alt-content');
        }

        if (this.isActive) {
            altContent.classList.add('alt-content--a')
        }

        altContent.innerHTML = this?.alt[this.currentLanguage];

        return altContent;
    }

    get mainContent() {
        const mainContent = document.createElement('div');

        mainContent.innerHTML = this.content;

        if (this.alt && this.alt[this.currentLanguage] !== this.content) {
            if (!this.isActive) {
                mainContent.classList.remove('content--b')
                || mainContent.classList.add('content');
            }

            if (this.isActive) {
                mainContent.classList.add('content--b')
            }

            return mainContent;
        }

        if (!this.isFunc && this.isActive) {
            mainContent.innerHTML = this.content.toUpperCase();
        }

        mainContent.classList.add('one-content');

        return mainContent;
    }

    renderContent() {
        if (!this.icon) {
            const altContent = this.alt ? this.altContent : null;
            const mainContent = this.mainContent;
            const arrayContent = [];

            if (this.alt && this.alt[this.currentLanguage] !== this.content) {
                arrayContent.push(altContent, mainContent)
            } else {
                arrayContent.push(mainContent);
            }

            while (this.keyElement.firstChild) {
                this.keyElement.removeChild(this.keyElement.firstChild);
            }

            this.keyElement.append(...arrayContent);
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