export class Student
{

     id : number;
     name : string;
     addr : string;

     constructor(id?: number,name?:string,addr? : string){
         this.id = id;
         this.name = name;
         this.addr = addr;
     }
    

     getId(){
         return this.id;
     }
     getName(){
         return this.name;
     }
     getAddr(){
         return this.addr;
     }

    

}