import { Component } from '@angular/core';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';  // Importar componente standalone
import { AnimeDatatableComponent } from './anime-datatable/anime-datatable.component';  // Lo mismo para el otro componente

@Component({
  selector: 'app-root',
  standalone: true,  // Marcamos el componente principal como standalone
  imports: [BasicDatatableComponent, AnimeDatatableComponent],  // Importamos los componentes independientes
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Datatable_230028';
}
