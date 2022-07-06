
class TextArea {
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

        while (this.tableOccurences.firstChild && this.tableOccurences.removeChild(this.tableOccurences.firstChild));

        const tableDataObj = [...this.textAreaData.value].reduce((a, e) => {
            a[e] = a[e] ? a[e] + 1 : 1;
            return a}, {});

        const arrForTable = Object.entries(tableDataObj);
        const arrayWithPercents = arrForTable.map(el => {
            const p = [...el[0], el[1] = Math.round(el[1] / this.lengthData.value * 100) + '%'];
            console.log(p);
            return p;
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

// export default TextArea;