import { Injectable } from '@angular/core';
import { Empleado } from './models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados:Empleado[];

  constructor() { 
    this.empleados=[];
  }
 
  getAll():Promise<Empleado[]>{
    return new Promise<Empleado[]>((resolve,reject)=>{
      resolve(this.empleados);
    });
  }
  
  insert(empleado:Empleado){
    return new Promise((resolve,reject)=>{
      resolve(this.empleados.push(empleado));
      console.log(this.empleados);
    });
  }

}
