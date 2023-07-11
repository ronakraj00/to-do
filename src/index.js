import { createToDo,createProject,addToProject, setToDoComplete, changePriority, viewProject } from "./userFn";
import "./style.css";
import { populateInitialPage } from "./initialPage";
const todo1=createToDo("todo1","new","43","2");
const todo2=createToDo("todo2","new","43","1");
const project1=createProject("project1");

addToProject(project1,todo1,todo2)
console.log(project1)

export const defaultProject1=createProject();


console.log("defaultProject",defaultProject1)


setToDoComplete(project1,todo1)

changePriority(todo2,5);

console.log(viewProject(project1));

populateInitialPage()