
module.exports.TextArea = class TextArea {
    constructor() {
        this.textAreaData = document.getElementById('text-area');
        this.lengthData = document.getElementById("length");
        this.wordsData = document.getElementById('number_of_words');
        this.withoutSpacesData = document.getElementById('without_spaces');
        this.tableOccurences = document.getElementById('table-percent');

        this.textAreaData.addEventListener("keyup", this.onKeyUp);
    }

    onKeyUp() {
        this.lengthData.value = this.textAreaData.value.length;
        this.wordsData.value = this.textAreaData.value === '' ? 0 : this.textAreaData.value.trim().split(' ').length;
        this.withoutSpacesData.value = this.textAreaData.value.trim().split(' ').join('').length;

        while (this.tableOccurences.firstChild) {
            this.tableOccurences.removeChild(this.tableOccurences.firstChild)
        }

        const tableDataObj = [...this.textAreaData.value].reduce((accumulator, element) => {
            accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
            return accumulator;
            }, {});

        const arrForTable = Object.entries(tableDataObj);
        const arrayWithPercents = arrForTable.map(element => {
            const percent = [...element[0], element[1] = Math.round(element[1] / this.lengthData.value * 100) + '%'];
            console.log(percent);
            return percent;
        })
        console.log(arrayWithPercents);

        const arrWithHeaders = [['Символ', 'Процент'], ...arrayWithPercents];
        console.log(arrWithHeaders)

        this.fillTable(this.tableOccurences, arrWithHeaders);

    }

    fillTable(table, arr) {
        for (let i = 0; i < arr.length; i++) {
            const tr = document.createElement('tr');

            for (let j = 0; j < arr[i].length; j++) {
                const td = document.createElement('td');
                td.innerHTML = arr[i][j];

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
}

export default TextArea;