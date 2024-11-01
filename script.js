function addTask(){
    const taskInput = document.getElementById("taskInput")
    const taskText = taskInput.value.trim();
    const taskList = document.getElementById("taskList")

    if(taskText == ""){
        alert("Enter some task")
        return
    }
    

    // Create new list Item 

    const li = document.createElement("li")
    li.textContent = taskText;

    // Create delete button 
    const deletebtn = document.createElement("button")
    deletebtn.classList.add("deletebtm")
    deletebtn.textContent = "Remove"
    deletebtn.addEventListener("click",()=>{
        taskList.removeChild(li)

        

    })

    // Append the child 
    li.appendChild(deletebtn)
    taskList.appendChild(li)
    taskInput.value = ""; // Clear input field





}