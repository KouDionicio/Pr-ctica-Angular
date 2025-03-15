import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';  // Importar DataTablesModule

declare var $: any;  // Asegúrate de declarar jQuery

@Component({
  selector: 'app-basic-datatable',
  standalone: true,
  imports: [DataTablesModule],  // Asegúrate de que el módulo de DataTables esté importado
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css']
})
export class BasicDatatableComponent implements AfterViewInit, OnDestroy {

  private dataTable: any;

  ngAfterViewInit(): void {
    // Inicializar DataTables solo si no está ya inicializado
    this.initializeDataTable();
  }

  ngOnDestroy(): void {
    // Destruir la instancia de DataTable cuando el componente se destruye
    if (this.dataTable) {
      this.dataTable.destroy();
      this.dataTable = null;
    }
  }

  // Método para inicializar DataTable
  private initializeDataTable() {
    // Verificar si DataTable ya está inicializado para evitar re-inicialización
    if (!$.fn.dataTable.isDataTable('#basicTable')) {
      this.dataTable = $('#basicTable').DataTable({
        paging: true,
        searching: true,
        info: false,
        // Configura otras opciones de DataTables si es necesario
      });
    }
  }
}
