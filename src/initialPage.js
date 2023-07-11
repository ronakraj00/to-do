import { initHeader } from "./header";
import { appendToBody, create } from "./generalFn";
import { handleAddToDo } from "./domStuff";
import { viewProject } from "./userFn";
import { defaultProject1 } from "./index.js";
export function populateInitialPage(){
    initHeader();
    projectSection();
    handleAddToDo();
}

function projectSection(){

    const projectSection=create("main");
    const projectTitle=create("div");
    const projectContent=create("div");
    const createToDoButton=create("button");
    const formSection=create("section")

    projectTitle.id="projectTitle";
    projectContent.id="projectContent";
    formSection.id="formSection"
    createToDoButton.id="createToDoButton";
    createToDoButton.textContent="+";
    projectSection.append(createToDoButton,projectTitle,projectContent,formSection);
    appendToBody(projectSection);

    projectContent.textContent=`${viewProject(defaultProject1)}`;
}


