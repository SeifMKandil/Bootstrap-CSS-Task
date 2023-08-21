document.addEventListener("DOMContentLoaded", function () {
    const csvFile = "Task4Test.csv"; 

    let p = new Promise((resolve, reject) => {
        async function fetch_data() {
            try {
                const response = await fetch(csvFile);
                const data = await response.text();

                const lines = data.split("\n");
                const tableBody = document.querySelector("#csvTable tbody");

                for (let i = 0; i < lines.length; i++) {
                    const cells = lines[i].split(",");
                    const row = document.createElement("tr");

                    for (let j = 0; j < cells.length; j++) {
                        const cell = document.createElement(i === 0 ? "th" : "td");
                        cell.textContent = cells[j];
                        row.appendChild(cell);
                    }

                    tableBody.appendChild(row);
                }

                resolve("CSV data fetched and table populated successfully!");
            } catch (error) {
                reject("Error reading CSV file: " + error.message);
            }
        }

        fetch_data(); // Call the fetch_data function within the Promise constructor
    });

    p.then(result => {
        console.log(result);
    }).catch(error => {
        console.error(error);
    });
});
