import { defaultProject1 } from ".";
import { defaultProject } from "./classProject";
import { createForm, hideForm } from "./form";
import { createToDo } from "./userFn";



export function handleAddToDo(){

    
    const addToDoButton=document.querySelector("#createToDoButton");
    addToDoButton.addEventListener("click",()=>{
        createForm();
        const title=document.querySelector("#title");
        const description=document.querySelector("#description");
        const dueDate=document.querySelector("#dueDate");
        const priority=document.querySelector("#priority");
        const formSubmitButton=document.querySelector("#formSubmitButton");
        formSubmitButton.addEventListener("click",()=>{
            const todo=createToDo(title.value,description.value,dueDate.value,priority.value);
            defaultProject1.add(todo);
            console.log(defaultProject1);
            hideForm();
        })
    })
}
