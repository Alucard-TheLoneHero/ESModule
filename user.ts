export class User {

    name1:string;    

    constructor(name1:string){
        this.name1 = name1;
    }
}

export function show(User:User) {
    console.log(`The name is ${User.name1}`);    
}




