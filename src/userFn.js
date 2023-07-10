import { toDo } from "./classToDo";
import { userProject, defaultProject } from "./classProject";

export function createToDo(title,description,dueDate,priority){
    const todo = new toDo(title,description,dueDate,priority);
    return todo;
}

export function createProject(name){
    
    const project = (name==undefined) ? new defaultProject() : new userProject(name);

    return project;

}

export function addToProject(project,...todo){
    project.add(todo);
}

export function setToDoComplete(project,todo){
    project.remove(todo)
}

export function changePriority(todo,newPriority){
    todo.priority=newPriority;
}

export function viewProject(project){
    return project.array[0][0];
}