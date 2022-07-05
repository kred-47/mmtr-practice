const textAreaData = document.getElementById('text');
const lengthData = document.getElementById("length");
const wordsData = document.getElementById('number_of_words');
const withoutSpacesData = document.getElementById('without_spaces')
const tableData = document.getElementById('table')

class TextArea {
    constructor() {
        textAreaData.addEventListener("keyup", this.onKeyUp);
    }

    onKeyUp() {
        console.log(textAreaData.value)
        lengthData.value = textAreaData.value.length;
        wordsData.value = textAreaData.value.trim().split(' ').length;
        withoutSpacesData.value = textAreaData.value.trim().split(' ').join('').length;
        tableData.value = [...textAreaData.value].reduce((a, e) => {
            a[e] = a[e] ? a[e] + 1 : 1;
            return a }, {});
    }
}
