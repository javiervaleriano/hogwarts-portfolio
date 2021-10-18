import { PEPInterface } from './../../../interfaces/data.interface';
import { Component, AfterViewInit, ViewChild, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: "app-tabla",
    templateUrl: "./tabla.component.html",
    styleUrls: ["./tabla.component.scss"],
    /* ViewEncapsulation me permite acceder a la clase
    /  '.mat-sort-header-container' como una clase global */
    encapsulation: ViewEncapsulation.None
})

export class TablaComponent implements AfterViewInit, OnChanges {
    // Obtiene el año actual
    anioActual: number = new Date().getFullYear();
    
    // Decorador Input para habilitar la recepción de valores desde el componente padre
    @Input() persona!: PEPInterface[];

    // Columnas que se muestran en las tablas de 'home'
    displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

    // Variable que las tablas usan de referencia para renderizar los datos
    dataSource = new MatTableDataSource<PEPInterface>(this.persona);

    // Habilita el ordenamiento de la tabla
    @ViewChild(MatSort) sort!: MatSort;

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
    }

    // Detecta cambios en los valores que recibe del componente padre
    ngOnChanges({ persona: { currentValue } }: any): void {
        // Actualiza el valor de dataSource (variable de referencia para las tablas) solamente si el valor actual no es undefined o null
        if (currentValue) {
            this.dataSource.data = currentValue as PEPInterface[];
        }
    }
}