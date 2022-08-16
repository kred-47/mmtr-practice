const textAreaElement = document.getElementById('js-input');
const lengthData = document.getElementById("length");
const wordsData = document.getElementById('number_of_words');
const withoutSpacesData = document.getElementById('without_spaces');
const tableData = document.getElementById('table-percent');

class TextArea {
    constructor() {
        textAreaElement.addEventListener("keyup", this.onKeyUp);
    }

    onClick() {
    }

    onKeyUp() {
        lengthData.value = textAreaElement.value.length;
        wordsData.value = textAreaElement.value === '' ? 0 : textAreaElement.value.trim().split(' ').length;
        withoutSpacesData.value = textAreaElement.value.trim().split(' ').join('').length;

        while (tableData.firstChild && tableData.removeChild(tableData.firstChild));

        const tableDataObj = [...textAreaElement.value].reduce((a, e) => {
            a[e] = a[e] ? a[e] + 1 : 1;
            return a}, {});

        const arrForTable = Object.entries(tableDataObj);
        const arrWithHeaders = [['Символ', 'Процент'], ...arrForTable];

        fillTable(tableData, arrWithHeaders);

        function fillTable(table, arr) {
            for (let i = 0; i < arr.length; i++) {
                const tr = document.createElement('tr');

                for (let j = 0; j < arr[i].length; j++) {
                    const td =document.createElement('td');
                    td.innerHTML = arr[i][j];

                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
        }
    }
}

class Text {
    constructor() {

    }


}
