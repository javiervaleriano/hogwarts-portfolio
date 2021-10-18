// Modulos importados:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

// Componentes importados:
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TablaComponent } from './shared/components/tabla/tabla.component';
import { HomeComponent } from './paginas/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './paginas/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TablaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSortModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
