export class Empleado{

    nombre:string;
    apellidos:string;
    edad:number;
    email:string;
    departamento:string;
    password:string;
    imagen:string;

    constructor(nombre:string,apellidos:string,edad:number,email:string,departamento:string,password:string,imagen:string){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.email=email;
        this.departamento=departamento;
        this.password=password;
        this.imagen=imagen;
    }

}