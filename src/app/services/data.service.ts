// Interfaz para el modelado de datos recibidos:
import { PEPInterface } from './../interfaces/data.interface';

// Para poder usar globalmente el servicio varias veces:
import { Injectable } from "@angular/core";
// Para realizar peticiones HTTP:
import { HttpClient } from "@angular/common/http";
// Para representar los valores recibidos:
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class DataService {
    // Enlace de la API de la cual obtenemos los datos
    private apiURL: string = 'http://hp-api.herokuapp.com/api/characters';

    // Creación de la variable que hace referencia al módulo HttpClient para poder usar sus métodos de peticiones HTTP
    constructor(private http: HttpClient) { }

    // Obtiene los personajes de la casa especificada a través del elemento HTML 'select'
    getPersonajesDeCasa(casa: string): any {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/house/${casa}`);
    }

    // Obtiene todos y solamente los estudiantes de la API
    getEstudiantes(): Observable<PEPInterface[]> {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/students`);
    }

    // Obtiene todos y solamente los profesores de la API
    getProfesores(): Observable<PEPInterface[]> {
        return this.http.get<PEPInterface[]>(`${this.apiURL}/staff`);
    }
}