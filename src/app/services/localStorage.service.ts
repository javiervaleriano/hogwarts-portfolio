import { Injectable } from "@angular/core";
import { SolicitudInterface } from "../interfaces/solicitud.interface";

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {
    // Método para registrar cada solicitud
    registrar(values: SolicitudInterface): void {
        // Evalúa si actualmente en el localStorage existe algún dato previo
        // Si existe alguno, se ejecuta el 'if', sino, se ejecuta el 'else'
        if (localStorage.getItem('solicitudes')) {
            let solicitudesLocales = JSON.parse(localStorage.getItem('solicitudes')!);
            solicitudesLocales.push(values);
            localStorage.setItem('solicitudes', JSON.stringify(solicitudesLocales));
        } else {
            localStorage.setItem('solicitudes', JSON.stringify([values]));
        }
    }

    // Método que retorna los datos del localStorage como un objeto
    darValores(): SolicitudInterface[] {
        return JSON.parse(localStorage.getItem('solicitudes')!);
    }
}