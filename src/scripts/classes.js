const textAreaData = document.getElementById('text');
const lengthData = document.getElementById("length");
const wordsData = document.getElementById('number_of_words');
const withoutSpacesData = document.getElementById('without_spaces')

class TextArea {
    constructor() {
        textAreaData.addEventListener("keypress", this.onKeyPress);
    }

    onKeyPress() {
        lengthData.value = textAreaData.value.length;
        wordsData.value = textAreaData.value.split(' ').length;
        withoutSpacesData.value = textAreaData.value.split(' ').join('').length;
    }


}
