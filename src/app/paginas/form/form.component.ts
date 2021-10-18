import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from "src/app/services/localStorage.service";
import { MatTableDataSource } from "@angular/material/table";
import { SolicitudInterface } from '../../interfaces/solicitud.interface';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    /* Columnas a mostrar en la tabla de solicitudes
    /  (considera la cantidad de elementos en la matriz) */
    displayedColumns = ['nombre', 'apellido', 'correo', 'casa'];

    // Variable que recibe la matriz de solicitudes que se almacenan en el localStorage
    solicitudes!: SolicitudInterface[];
    // Variable que usa la tabla como referencia de datos
    dataSource = new MatTableDataSource<SolicitudInterface>(this.solicitudes);

    // Matriz de referencia para las opciones de 'mat-select' en el formulario
    casas: string[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

    // Variable que recibe los valores de entrada del formulario
    solicitudForm!: any;

    // Declaración de variables para usar las propiedades de las importaciones
    constructor(private fb: FormBuilder,
    private lStorageSvc: LocalStorageService) { }

    ngOnInit(): void {
        // Estableces los valores del formulario a cadenas vacías al inicio
        this.solicitudForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(1)]],
            apellido: ['', [Validators.required, Validators.minLength(1)]],
            correo: ['', [Validators.required, Validators.email]],
            casa: ['', Validators.required]
        });

        // Obtiene los datos del localStorage para renderizarlos en la tabla
        this.solicitudes = this.lStorageSvc.darValores() as SolicitudInterface[];
        this.dataSource.data = this.lStorageSvc.darValores() as SolicitudInterface[];
    }

    // Ejecución cuando se envía una nueva solicitud
    onSubmit(): void {
        this.lStorageSvc.registrar(this.solicitudForm.value);
        this.solicitudes = this.lStorageSvc.darValores() as SolicitudInterface[];
        this.dataSource.data = this.lStorageSvc.darValores() as SolicitudInterface[];
        this.resetForm();
    }

    // Reinicio de valores de las entradas del formulario
    resetForm(): void {
        this.solicitudForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(1)]],
            apellido: ['', [Validators.required, Validators.minLength(1)]],
            correo: ['', [Validators.required, Validators.email]],
            casa: ['', Validators.required]
        });
    }
}