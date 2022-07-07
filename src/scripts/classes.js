class TextArea {
    constructor() {
        this.textAreaData = document.getElementById('text-area');
        this.numberOfSymbols = document.getElementById("length");
        this.numberOfWords = document.getElementById('number_of_words');
        this.withoutSpacesNumberOfSymbols = document.getElementById('without_spaces');
        this.tableOccurences = document.getElementById('table-percent');

        this.textAreaData.addEventListener( "keyup", this.onKeyUp.bind(this));
    }

    onKeyUp() {
        this.numberOfWords.value = this.textAreaData.value === '' ? 0 : this.textAreaData.value.trim().split(' ').length;
        this.numberOfSymbols.value = this.textAreaData.value.length;
        this.withoutSpacesNumberOfSymbols.value = this.textAreaData.value.trim().split(' ').join('').length;

        while (this.tableOccurences.firstChild) {
            this.tableOccurences.removeChild(this.tableOccurences.firstChild)
        }

        const tableDataObj = [...this.textAreaData.value].reduce((accumulator, element) => {
            accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
            return accumulator;
            }, {});

        const arrForTable = Object.entries(tableDataObj).map(element => {
            return [...element[0], element[1] = Math.round(element[1] / this.numberOfSymbols.value * 100) + '%'];
        });

        const arrWithHeaders = [['Символ', 'Процент'], ...arrForTable];
        console.log(arrWithHeaders)

        // this.fillTable(this.tableOccurences, arrWithHeaders);

        arrWithHeaders.forEach(key => {
            const tr = document.createElement('tr');

            key.forEach(keyValue => {
                const td = document.createElement('td');
                td.innerHTML = arrWithHeaders[keyValue]; //keyValue
                tr.appendChild(td);
            })
            this.tableOccurences.appendChild(tr);
        })

        console.log(arrWithHeaders);
    }

    // fillTable(table, arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         const tr = document.createElement('tr');
    //
    //         for (let j = 0; j < arr[i].length; j++) {
    //             const td = document.createElement('td');
    //
    //             td.innerHTML = arr[i][j];
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr);
    //     }
    // }

}

// export default TextArea;