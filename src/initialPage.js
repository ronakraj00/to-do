import { initHeader } from "./header";
import { appendToBody, create } from "./generalFn";
export function populateInitialPage(){
    initHeader()
    projectSection()
}

function projectSection(){

    const projectSection=create("main");
    const projectTitle=create("div");
    const projectContent=create("div");
    projectSection.append(projectTitle,projectContent);
    appendToBody(projectSection);

}

