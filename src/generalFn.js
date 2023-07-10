export function create(value){
    return document.createElement(value);
}

export function appendToBody(value){
    const body=document.querySelector("body");
    body.append(value);
}


