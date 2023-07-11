import { appendToBody, create } from "./generalFn";

export function createForm(){

    const formSection=document.querySelector("#formSection");
    const form=create("form");
    const titleLabel=create("label");
    const descriptionLabel=create("label");
    const dueDateLabel=create("label");
    const priorityLabel=create("label");
    const submitButton=create("button");

    const titleInput=create("input");
    const descriptionInput=create("input")
    const dueDateInput=create("input");
    const priorityInput=create("input");

    titleInput.id="title";
    descriptionInput.id="description";
    dueDateInput.id="dueDate";
    priorityInput.id="priority";

    titleLabel.textContent="Title"
    descriptionLabel.textContent="description"
    dueDateLabel.textContent="dueDate"
    priorityLabel.textContent="priority"
    submitButton.textContent="submit"
    submitButton.id="formSubmitButton";

    form.setAttribute("onsubmit","event.preventDefault()")

    form.append(titleLabel,titleInput,descriptionLabel,descriptionInput,dueDateLabel,dueDateInput,priorityLabel,priorityInput,submitButton);

    formSection.append(form);
    
}

export function hideForm(){
    const formSection=document.querySelector("#formSection");
    formSection.textContent="";
}