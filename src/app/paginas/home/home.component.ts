import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { PEPInterface } from "src/app/interfaces/data.interface";
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    secciones: string[] = ['Personajes', 'Estudiantes', 'Profesores'];
    
    personajes!: PEPInterface[];
    estudiantes!: PEPInterface[];
    profesores!: PEPInterface[];

    constructor(private dataSvc: DataService) { }

    ngOnInit(): void {
        this.dataSvc.getPersonajesDeCasa('gryffindor')
        .pipe(
            tap((personajes: PEPInterface[]) => this.personajes = personajes)
        ).subscribe();

        this.mostrarEstudiantes();
        this.mostrarProfesores();
    }

    mostrarPersonajes(event: any): void {
        let valorSelect = event.currentTarget.value;

        this.dataSvc.getPersonajesDeCasa(valorSelect)
        .pipe(
            tap((personajes: PEPInterface[]) => this.personajes = personajes)
        ).subscribe();
    }

    mostrarEstudiantes(): void {
        this.dataSvc.getEstudiantes()
        .pipe(
            tap((estudiantes: PEPInterface[]) => this.estudiantes = estudiantes)
        ).subscribe();
    }

    mostrarProfesores(): void {
        this.dataSvc.getProfesores()
        .pipe(
            tap((profesores: PEPInterface[]) => this.profesores = profesores)
        ).subscribe();
    }
}