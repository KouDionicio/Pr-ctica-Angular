import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';  // Importar el módulo de DataTables

@Component({
  selector: 'app-basic-datatable',
  standalone: true,  // Marcamos el componente como standalone
  imports: [DataTablesModule],  // Importamos los módulos necesarios
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css']
})
export class BasicDatatableComponent {
  // No necesitamos ninguna lógica aquí, ya que DataTables se encargará de todo
}
