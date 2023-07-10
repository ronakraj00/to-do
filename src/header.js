import { appendToBody, create } from "./generalFn";
export function initHeader(){

    const header=create("header");
    const logo=create("div");
    const menu=create("div");
    const dark=create("div");

    appendToBody(header);
    header.append(menu,logo,dark);

    logo.textContent="TODO APP";
    menu.textContent="menu";
    dark.textContent="dark";

}