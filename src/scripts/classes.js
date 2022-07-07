class TextArea {
    constructor() {
        this.textAreaField = document.getElementById('text-area');
        this.numberOfSymbols = document.getElementById('length');
        this.numberOfWords = document.getElementById('number_of_words');
        this.withoutSpacesNumberOfSymbols = document.getElementById('without_spaces');
        this.tableOccurences = document.getElementById('table-percent');

        this.statisticFunction();
        this.textAreaField.addEventListener( 'keyup', this.onKeyUp.bind(this));
    }

    onKeyUp() {
        this.statisticFunction();
    }

    calcNumberOfWords() {
        this.numberOfWords.value = this.textAreaField.value.split(' ').filter(element => !!element).length;
    }

    calcNumberOfSymbols() {
        this.numberOfSymbols.value = this.textAreaField.value.length;
    }

    calcSymbolsWithoutSpaces() {
        this.withoutSpacesNumberOfSymbols.value = this.textAreaField.value.trim().split(' ').join('').length;
    }

    createToTableOccurences() {
        while (this.tableOccurences.firstChild) {
            this.tableOccurences.removeChild(this.tableOccurences.firstChild);
        }

        const tableDataObj = [...this.textAreaField.value].reduce((accumulator, element) => {
            accumulator[element] = accumulator[element] ? accumulator[element] + 1 : 1;
            return accumulator;
        }, {});
        const arrForTable = Object.entries(tableDataObj).map(element => {
            return [...element[0], element[1] = Math.round(element[1] / this.numberOfSymbols.value * 100) + '%'];
        });
        const arrWithHeaders = [['Символ', 'Процент'], ...arrForTable];

        arrWithHeaders.forEach(key => {
            const tr = document.createElement('tr');

            key.forEach(keyValue => {
                const td = document.createElement('td');
                td.innerHTML = keyValue; // keyValue
                tr.appendChild(td);
            })
            this.tableOccurences.appendChild(tr);
        })
    }

    statisticFunction() {
        this.calcNumberOfWords();
        this.calcNumberOfSymbols();
        this.calcSymbolsWithoutSpaces();
        this.createToTableOccurences();
    }
}

// export default TextArea;