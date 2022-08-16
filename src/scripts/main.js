document.addEventListener('DOMContentLoaded', () => {
    new TextArea();
    new Text();
    new ScreenKeyboard({
        inputSelector: '#js-input',
        blockSelector: '#textarea-block'
    });
    new ScreenKeyboard({
        inputSelector: '#js-small-input',
        blockSelector: '#input-block'
    });
});