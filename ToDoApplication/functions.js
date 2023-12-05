//Získání dat z localStorage, pokud localStorage je prázdné, založí se prázdné pole
const getSavedNames = function(){
    const myTasks = localStorage.getItem("tasks")

    if(myTasks !== null){
        return JSON.parse(myTasks)
    } else {
        return []
    }
}

//Uložení dat do localStorage
const saveNames = function(oneTask){
    localStorage.setItem("tasks", JSON.stringify(oneTask))
}

//Vypsání textu a tlačítka pro interakci
const createHTMLstructure = function(oneTask){
    const newDiv = document.createElement("div")
    const newButton = document.createElement("button")
    const newSpan = document.createElement("span")
    const newButton2 = document.createElement("button")

    newSpan.textContent = oneTask.taskName
    newDiv.appendChild(newSpan)

    newButton.textContent = "×"
    newDiv.appendChild(newButton)

    newDiv.className = "text"

    newButton.addEventListener("click", function(event){
        removeNames(tasks, oneTask.id)
        saveNames(tasks)
        toListAgain()
    })

    return newDiv
}

//Funkce pro mazání uložených dat
const removeNames = function(oneTask, id){
    const index = oneTask.findIndex(function(taskName){
        return taskName.id === id
    })

    if(index > -1){
        oneTask.splice(index, 1)
    }
}

//Výpis uložených dat zpět
const toListAgain = function(){
    document.querySelector(".tasklist").innerHTML = ""

    const newData = getSavedNames()

    newData.forEach(function(oneTask){
        document.querySelector(".tasklist").appendChild(createHTMLstructure(oneTask))
    })
}