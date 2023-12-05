const tasks = getSavedNames()

let myForm = document.querySelector("#my-form")
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    tasks.push({
        id: uuidv4(),
        taskName: event.target.elements.taskName.value
    })
    
    //Podmínka, aby se neukládala a nevypisovala prázdná hodnota
    if(event.target.elements.taskName.value === ""){
        tasks.pop()
    } else {
        document.querySelector(".tasklist").innerHTML = ""    
        tasks.forEach(function(oneTask){
            document.querySelector(".tasklist").appendChild(createHTMLstructure(oneTask))
        })
    }

    saveNames(tasks)

    event.target.elements.taskName.value = ""

})

//Načtení uložených dat z localStorage při načtení stránky
const tasksPresent = getSavedNames()

if(tasksPresent !== null){
    tasksPresent.forEach(function(oneTask){
        document.querySelector(".tasklist").appendChild(createHTMLstructure(oneTask))
    })
}

