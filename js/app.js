
const input = document.getElementById("input")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")
const tableBody = document.querySelector("#table tbody") // esta es una forma de acceder a la tabla 

let itemCount = 0 
let selectedRow = null 

addButton.addEventListener("click", () => {
    const text = input.value.trim()
    if (text) {
        itemCount++

        
        const newRow = document.createElement("tr");

        
        const numberCell = document.createElement("td");
        numberCell.textContent = itemCount;

        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = text;

        
        newRow.appendChild(numberCell)
        newRow.appendChild(descriptionCell)

        
        tableBody.appendChild(newRow)

        
        input.value = ""

        
        newRow.addEventListener("click", () => {
            
            if (selectedRow) {
                selectedRow.classList.remove("selected");
            }

        
            newRow.classList.add("selected")
            selectedRow = newRow
        })
    } else {
        alert("Por favor, escribe algo antes de agregar.");
    }
})


deleteButton.addEventListener("click", () => {
    if (selectedRow) {
        
        tableBody.removeChild(selectedRow)
        selectedRow = null


        itemCount = 0;
        Array.from(tableBody.children).forEach((row) => { // segun MDN El método estático crea una nueva instancia
            itemCount++;
            row.children[0].textContent = itemCount
        })
    } else {
        alert("Por favor, selecciona una fila para eliminar.")
    }
})

