
class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.callOfKeyboard = document.getElementById('call-keyboard');
        this.textAreaField = document.getElementById('text-area');
        this.userLanguage = window.navigator.language;
        this.activeFuncButtons = [];

        configKeyboard.forEach(element => {
            new Button({
                ...element,
                onClick: this.onClick.bind(this),
                currentLanguage: this.userLanguage,
                onToggle: this.toggleActive.bind(this)
            })
        })

        this.callOfKeyboard.addEventListener('click', this.showOrHideKeyboard.bind(this));
    }

    onClick(data) {
        console.log(`data.content - ${data.content}`);
        if (data.func) {
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
            this.toggleActive(data.content);
        } else {
            console.log(`${data.content} is not 'func'`)
        }
    }

    changeLayoutKeyboard() {
        if (this.activeFuncButtons.includes('Shift') && this.activeFuncButtons.includes('Alt')) {

        }
    }

    toggleActive(content) {
        console.log('content', content)

        const isIncludes = this.activeFuncButtons.includes(content);

        if (!isIncludes) {
            this.activeFuncButtons.push(content);
        } else {
            const filters = this.activeFuncButtons.filter(i => i !== content)
            this.activeFuncButtons = filters;
        }

        console.log('activeFuncButtons', this.activeFuncButtons)
    }

    showOrHideKeyboard() {
        this.showKeyboard();
        this.changeCallButton();
    }

    changeCallButton() {
        if (this.callOfKeyboard.innerHTML.includes('Go print')) {
            this.callOfKeyboard.innerHTML = 'Hide keyboard'
        } else if (this.callOfKeyboard.innerHTML.includes('Hide keyboard')) {
            this.callOfKeyboard.innerHTML = 'Go print'
        }
    }

    showKeyboard() {
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
        this.functional = props?.func;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.lineKeyboard = document.getElementsByClassName('screen-keyboard__line')[0];
        this.content = props?.content;
        this.activity = props?.active;
        this.currentLanguage = props?.currentLanguage;

        this.formLayout(props);
    }

    handleClick = () => {
        if (typeof this.onClick === 'function') {
            this.onClick({
                name: this.name,
                func: this.functional,
                localeData: this.localeData,
                type: this.type,
                content: this.content,
                active: this.activity
            });
        }
        if (this.functional) {
            this.activity = !this.activity
        }
    };

    changeLanguage() {
        if (this.currentLanguage === 'ru-RU') {
            this.currentLanguage = 'en-US';
        } else if (this.currentLanguage === 'en-US') {
            this.currentLanguage = 'ru-RU';
        }
    }

    formLayout() {
        const keyElement = document.createElement('div');

        keyElement.setAttribute('id', name);
        keyElement.classList.add(this.type);
        keyElement.innerHTML = this.localeData[this.currentLanguage];
        keyElement.addEventListener('click', this.handleClick.bind(this));

        console.log(`${this.currentLanguage} - this.currentLanguage`)
        return this.lineKeyboard.appendChild(keyElement);
    }
}

const configKeyboard = [
    {
        name: 'keyB',
        func: false,
        localeData: { 'en-US': 'b', 'ru-RU': 'и' },
        type: 'base',
        content: 'b',
        active: false
    },
    {
        name: 'key7',
        func: false,
        localeData: { 'en-US': '7', 'ru-RU': '7'},
        type: 'base',
        content: '7',
        active: false
    },
    {
        name: 'leftShift',
        func: true,
        localeData: { 'en-US': 'Shift', 'ru-RU': 'Shift'},
        type: 'l-shift',
        content: 'Shift',
        active: false
    },
    {
        name: 'leftAlt',
        func: true,
        localeData: { 'en-US': 'Alt', 'ru-RU': 'Alt'},
        type: 'base',
        content: 'Alt',
        active: false
    }]