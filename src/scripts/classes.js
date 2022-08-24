const textAreaData = document.getElementById('text-area');
const lengthData = document.getElementById("length");
const wordsData = document.getElementById('number_of_words');
const withoutSpacesData = document.getElementById('without_spaces')
const tableData = document.getElementById('table-percent')

class TextArea {
    constructor() {
        textAreaData.addEventListener("keyup", this.onKeyUp);
    }

    onKeyUp() {
        lengthData.value = textAreaData.value.length;
        wordsData.value = textAreaData.value === '' ? 0 : textAreaData.value.trim().split(' ').length;
        withoutSpacesData.value = textAreaData.value.trim().split(' ').join('').length;

        while (tableData.firstChild && tableData.removeChild(tableData.firstChild));

        const tableDataObj = [...textAreaData.value].reduce((a, e) => {
            a[e] = a[e] ? a[e] + 1 : 1;
            return a}, {});

        const arrForTable = Object.entries(tableDataObj);
        const array = arrForTable.map(el => {
            const p = [...el[0], el[1] = Math.round(el[1] / lengthData.value * 100) + '%'];
        })
        const arrWithHeaders = [['Символ', 'Процент'], ...arrForTable]

        fillTable(tableData, arrWithHeaders)

        function fillTable(table, arr) {
            for (let i = 0; i < arr.length; i++) {
                const tr = document.createElement('tr');

                for (let j = 0; j < arr[i].length; j++) {
                    const td =document.createElement('td');
                    td.innerHTML = arr[i][j];

                    tr.appendChild(td)
                }
                table.appendChild(tr)
            }
        }
    }
}
