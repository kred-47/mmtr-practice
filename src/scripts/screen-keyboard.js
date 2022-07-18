
class ScreenKeyboard {
    constructor() {
        this.screenKeyboard = document.getElementById('the-keyboard');
        this.toggleKeyboard = document.getElementById('toggle-keyboard');
        this.textAreaField = document.getElementById('text-area');
        this.userLanguage = window.navigator.language.split('-')[0];
        //this.activeFuncButtons = [];
        this.configKeyboard = [
            {
                name: 'keyB',
                isFunc: false,
                localeData: { en: 'b', ru: 'и' },
                type: 'base',
                //content: 'b',
                active: false
            },
            // {
            //     name: 'key7',
            //     isFunc: false,
            //     localeData: { en: '7', ru: '7'},
            //     type: 'base',
            //     // content: '7',
            //     active: false
            // },
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
            //activeFuncButtons: this.activeFuncButtons,
        }))

        //console.log(this.buttons);
        // console.log(this.userLanguage);

        //console.log(this.toggleKeyboard)
        this.toggleKeyboard.addEventListener('click', this.handleToggleKeyboard.bind(this));
    }

    onClick(data) {
        if (data.isFunc) {
            console.group('onClick')
            switch (data.localeData[this.userLanguage]) {
                case 'Shift': {
                    // data.active = !data.active
                    const button = this.buttons.find(item => item.localeData[this.userLanguage] === data.localeData[this.userLanguage]);
                    button.setActive();
                    console.log(button)
                    break;
                }
                case 'Alt': {
                    // data.active = !data.active
                    const button = this.buttons.find(item => item.localeData[this.userLanguage] === data.localeData[this.userLanguage]);
                    button.setActive();
                    console.log(button)
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

    // filterActiveButtons() {
    //     console.group('filterActiveButtons')
    //     // фильтрация массива от шифт и альт
    //     console.log(`${this.activeFuncButtons} - active array in onChangeLanguage`);
    //     const filteredArray = this.activeFuncButtons.filter(item => !['Shift', 'Alt'].includes(item)); //   // item !== 'Alt' && item !== 'Shift'
    //     this.activeFuncButtons = filteredArray;
    //     console.log(`${this.activeFuncButtons} - active array in onChangeLanguage after filter`);
    //     //консоль показывает, что массив отфильтрован от шифт и альт
    //     console.groupEnd()
    // }

    // onResetActivityOfButton() {
    //     console.group('onResetActivityOfButton')
    //     // переключение на active: false у шифта и альта при смене языка
    //     console.log(`${this.activeFuncButtons} - active array`)
    //     // а эта консоль показывает, что массив содержит шифт и альт. ???
    //     if (!this.activeFuncButtons.includes('Alt') && !this.activeFuncButtons.includes('Shift')) {
    //         console.log(`RESET`)
    //         this.buttons.forEach(item => ['Shift', 'Alt'].includes(item.content) ? item.active = false : item.active = true
    //         )
    //     }
    //     console.groupEnd()
    // }

    onChangeLayoutKeyboard() {
        console.group('onChangeLayoutKeyboard')
        // если в массиве активных кнопок есть шифт и альт
        if (this.buttons.find(item => item.localeData[this.userLanguage] === 'Shift') && this.buttons.find(item => item.localeData[this.userLanguage] === 'Alt' && this.configKeyboard.active === true)) {
            this.changeLanguage();
            // здесь в переборе выполняется наш changeLanguage
            this.buttons.forEach(item => {
                item.changeKeyLanguage(this.userLanguage);
            })
            // тогда фильтруем массив активных от шифт и альт
            // this.filterActiveButtons();
            // и переводим их active в false
            // this.onResetActivityOfButton();
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
        // console.log('+++', this.userLanguage)
        console.groupEnd()
    }

    // onToggleActive(content) {
    //     console.group('onToggleActive')
    //     // ф-я, которая устанавливает при клике active: true
    //     const isIncludes = this.activeFuncButtons.includes(content);
    //     console.log(isIncludes, this.activeFuncButtons)
    //     if (isIncludes === false) {
    //         this.activeFuncButtons.push(content);
    //     } else {
    //         const filters = this.activeFuncButtons.filter(i => i !== content)
    //         this.activeFuncButtons = filters;
    //     }
    //     console.log(this.activeFuncButtons)
    //     console.groupEnd()
    //     // console.log('activeFuncButtons', this.activeFuncButtons)
    // }

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
        this.name = props?.name;
        this.functional = props?.isFunc;
        this.localeData = props?.localeData;
        this.type = props?.type;
        this.lineKeyboard = document.getElementsByClassName('screen-keyboard__line')[0];
        // this.content = props?.content;
        this.activity = props?.active;
        this.currentLanguage = props?.currentLanguage;
        this.activeFuncButtons = props?.activeFuncButtons || [];

        this.formLayout(props);
    }

    handleClick = () => {
        console.group('handleClick')
        if (typeof this.onClick === 'function') {

            this.onClick({
                name: this.name,
                isFunc: this.functional,
                localeData: this.localeData,
                type: this.type,
                // content: this.content,
                active: this.activity
            });
        }

        console.groupEnd()
    }

    keyElement = document.createElement('div');

    changeKeyLanguage(locale) {
        console.group('changeKeyLanguage')
        this.keyElement.innerHTML = this.localeData[locale];
        this.lineKeyboard.replaceChild(this.keyElement, this.keyElement);
        console.groupEnd()
    }

    setActive() {
        console.group('setActive')
        if (this.localeData[this.currentLanguage] === 'Shift' || this.localeData[this.currentLanguage] === 'Alt') {
            this.activity = !this.activity
            console.log(`THIS ACTIVE IS ${this.activity}`)
        }
        console.groupEnd()
    }

    formLayout() {
        console.group('formLayout')
        // const keyElement = document.createElement('div');
        this.keyElement.setAttribute('id', name);
        this.keyElement.classList.add(this.type);
        this.keyElement.innerHTML = this.localeData[this.currentLanguage];
        this.keyElement.addEventListener('click', this.handleClick.bind(this));
        console.groupEnd()
        // console.log(`${this.currentLanguage} - this.currentLanguage`)
        return this.lineKeyboard.appendChild(this.keyElement);
    }
}
