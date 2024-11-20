const input = document.getElementById("input")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
const tableBody = document.querySelector("table tbody")

let itemCount = 0
let selectedRow = null 

addButton.addEventListener("click", () => {
    const text = input.value.trim()
    if (text) {
        itemCount++

        
        const newRow = document.createElement("tr");

        
        const numberCell = document.createElement("td");
        numberCell.textContent = itemCount

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = text

        
        newRow.appendChild(numberCell)
        newRow.appendChild(descriptionCell)

        
        tableBody.appendChild(newRow)

        
        input.value = ""

        newRow.addEventListener("click", () => {
        
            if (selectedRow) {
                selectedRow.classList.remove("seleccionado");
            }

        
            newRow.classList.add("seleccionado")
            selectedRow = newRow
        })
    } else {
        alert("Por favor, escribe algo antes de agregar.");
    }
})
