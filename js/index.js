    function createTable() {
        let table = document.createElement('table')
        let count = 1;

        for (let i = 0; i < 10; i++) {
            let row = table.insertRow(i);

            for (let j = 0; j < 10; j++) {
                let cell = row.insertCell(j);
                cell.textContent = count;
                count++;
            }
        }
       document.body.appendChild(table)
    }

    createTable()

