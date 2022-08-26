export class Login {
    username:string;
    password:string;
    constructor(username:string,password:string){
        this.username=username;
        this.password=password;
    }
    saveData(data:Login){
        this.username=data.username;
        this.password=data.password;
        console.log(this.username);
        console.log(this.password);
    }
}
