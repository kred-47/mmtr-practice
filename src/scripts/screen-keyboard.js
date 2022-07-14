
class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.toggleKeyboard = document.getElementById('toggle-keyboard');
        this.textAreaField = document.getElementById('text-area');
        this.userLanguage = window.navigator.language.split('-')[0];
        this.activeFuncButtons = [];
        this.configKeyboard = [
            // {
            //     name: 'keyB',
            //     isFunc: false,
            //     localeData: { en: 'b', ru: 'и' },
            //     type: 'base',
            //     content: 'b',
            //     active: false
            // },
            // {
            //     name: 'key7',
            //     isFunc: false,
            //     localeData: { en: '7', ru: '7'},
            //     type: 'base',
            //     content: '7',
            //     active: false
            // },
            {
                name: 'leftShift',
                isFunc: true,
                localeData: { en: 'Shift', ru: 'Shift'},
                type: 'l-shift',
                content: 'Shift',
                active: false
            },
            {
                name: 'leftAlt',
                isFunc: true,
                localeData: { en: 'Alt', ru: 'Alt'},
                type: 'base',
                content: 'Alt',
                active: false
            }]

        this.buttons = this.configKeyboard.map(element => new Button({
            ...element,
            onClick: this.onClick.bind(this),
            currentLanguage: this.userLanguage,
            activeFuncButtons: this.activeFuncButtons
        }))

        //console.log(this.buttons);
        // console.log(this.userLanguage);

        //console.log(this.toggleKeyboard)
        this.toggleKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    onClick(data) {
        if (data.isFunc) {
            switch (data.content) {
                case 'Shift': {
                    data.active = !data.active
                    console.log(`SHIFT, ${data.name}, ${data.active}`)
                    break;
                }
                case 'Alt': {
                    data.active = !data.active
                    console.log(`ALT, ${data.name}, ${data.active}`)
                    break;
                }

                default:
                    console.log('undefined button')
            }
            this.onToggleActive(data.content);
            this.onChangeLayoutKeyboard();
            this.onResetActivityOfButton();
        } else {
            console.log(`${data.content} is not 'func'`)
        }
    }

    onResetActivityOfButton() {
        console.log(`${this.activeFuncButtons} - active array`)
        if (!this.activeFuncButtons.includes('Alt') && !this.activeFuncButtons.includes('Shift')) {
            console.log(`RESET`)
            this.buttons.forEach(item => item.content === 'Shift' || item.content === 'Alt' ? item.active = false : item.active
            )
        }
    }

    onChangeLayoutKeyboard() {
        if (this.activeFuncButtons.includes('Shift') && this.activeFuncButtons.includes('Alt')) {
            // console.log('change')
            this.buttons.forEach(item => {
                item.changeLayout();
            })
        }
    }

    onToggleActive(content) {
        // console.log('content', content)
        const isIncludes = this.activeFuncButtons.includes(content);

        if (!isIncludes) {
            this.activeFuncButtons.push(content);
        } else {
            const filters = this.activeFuncButtons.filter(i => i !== content)
            this.activeFuncButtons = filters;
        }

        // console.log('activeFuncButtons', this.activeFuncButtons)
    }

    handleToggleKeyboard() {
        this.onShowKeyboard();
        this.onChangeToggleKeyboard();
    }

    onChangeToggleKeyboard() {
        if (this.toggleKeyboard.innerHTML.includes('Go print')) {
            this.toggleKeyboard.innerHTML = 'Hide keyboard';
        } else if (this.toggleKeyboard.innerHTML.includes('Hide keyboard')) {
            this.toggleKeyboard.innerHTML = 'Go print';
        }
    }

    onShowKeyboard() {
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
        this.onToggle = props?.onToggle;
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.name = props?.name;
        this.functional = props?.isFunc;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.lineKeyboard = document.getElementsByClassName('screen-keyboard__line')[0];
        this.content = props?.content;
        this.activity = props?.active;
        this.currentLanguage = props?.currentLanguage;
        this.changeLayout = this.onChangeLayout;
        this.arrayActiveFuncButtons = props?.activeFuncButtons;

        this.formLayout(props);
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {
            this.onClick({
                name: this.name,
                isFunc: this.functional,
                localeData: this.localeData,
                type: this.type,
                content: this.content,
                active: this.activity
            });
        }
        if (this.functional) {
            this.activity = !this.activity
        }
    }

    keyElement = document.createElement('div');

    onChangeLayout() {

        if (this.currentLanguage === 'ru') {
            this.currentLanguage = 'en';
        } else if (this.currentLanguage === 'en') {
            this.currentLanguage = 'ru';
        }
        // console.log('+++', this.currentLanguage)
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.lineKeyboard.replaceChild(this.keyElement, this.keyElement);
        console.log(`${this.arrayActiveFuncButtons} - active functional buttons in onChangeLanguage`);
        const filteredArray = this.arrayActiveFuncButtons.filter(item => item !== 'Alt' && item !== 'Shift');
        this.arrayActiveFuncButtons = filteredArray;
        console.log(`${this.arrayActiveFuncButtons} - active functional buttons in onChangeLanguage after filter`);

        // нужно делать у шифта и альта active: false
        // (this.arrayActiveFuncButtons.includes('Shift' && 'Alt')
    }

    formLayout() {
        // const keyElement = document.createElement('div');

        this.keyElement.setAttribute('id', name);
        this.keyElement.classList.add(this.type);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));

        // console.log(`${this.currentLanguage} - this.currentLanguage`)
            return this.lineKeyboard.appendChild(this.keyElement);
    }
}

