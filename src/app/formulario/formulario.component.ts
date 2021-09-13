import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formularioEmpleado:FormGroup;

  constructor(private empleadoService:EmpleadosService) {
    this.formularioEmpleado=new FormGroup({
      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern(/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/)
      ]),
      edad:new FormControl('',[
        Validators.required,
        Validators.min(18)
      ]),
      departamento:new FormControl(''),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      imagen:new FormControl('',[
        Validators.required
      ])
    });
   }

  ngOnInit(): void {
  }

  async onSubmit(){
    await this.empleadoService.insert(this.formularioEmpleado.value);
  }
}
