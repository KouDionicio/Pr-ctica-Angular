import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { AnimeDatatableComponent } from './anime-datatable/anime-datatable.component';
import { JsonDatatableComponent } from './json-datatable/json-datatable.component';  
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
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
  activeTab: string = ''; // Establecer la pestaña activa como vacía al inicio

  // Método para cambiar la pestaña activa
  setActiveTab(tab: string): void {
    
    // Alternar la tabla solo si la pestaña ya está activa
    this.activeTab = this.activeTab === tab ? '' : tab;
  }

  // Método para verificar si una pestaña está activa
  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }
}
