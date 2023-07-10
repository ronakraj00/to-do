class project{

    constructor(name){
        if(this instanceof defaultProject){
            this.name="default"
        }
        else{
            this.name=name;
        }
        
    }
    array=[];
    
    add(...todo){
        this.array.push(todo);
    }

    remove(todo){
        this.array[0][0].splice(this.array[0][0].indexOf(todo),1);
    }
}

export class defaultProject extends project{}

export class userProject extends project{}