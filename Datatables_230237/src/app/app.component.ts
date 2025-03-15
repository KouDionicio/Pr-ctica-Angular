import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { AnimeDatatableComponent } from './anime-datatable/anime-datatable.component';
import { JsonDatatableComponent } from './json-datatable/json-datatable.component';  
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Importa CommonModule para habilitar ngIf
    BasicDatatableComponent,
    AnimeDatatableComponent,
    JsonDatatableComponent,
    AjaxDatatableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Datatable_230028';
  activeTab: string = 'basic'; 

  // Método para cambiar la pestaña activa
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Método para verificar si una pestaña está activa
  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }
}
