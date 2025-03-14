import { Component, OnInit } from '@angular/core';
import { Config } from 'datatables.net';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-anime-datatable',
  imports: [DataTablesModule],
  templateUrl: './anime-datatable.component.html',
  styleUrls: ['./anime-datatable.component.css']
})
export class AnimeDatatableComponent implements OnInit {
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',  // Tipo de paginación
      pageLength: 5,  // Número de elementos por página
      lengthMenu: [ [10, 25, 50], [10, 25, 50] ],  // Opciones para la cantidad de registros por página
      searching: true,  // Habilitar la búsqueda
      ordering: true,  // Habilitar la ordenación
      order: [[1, 'asc']],  // Ordenar por la segunda columna (Anime Name) en orden ascendente
      info: true,  // Mostrar la información de la paginación  // Desactivar la responsividad (sin ajuste para pantallas pequeñas)
      language: {
        search: 'Buscar:',  // Etiqueta de búsqueda en español
        lengthMenu: 'Mostrar _MENU_ registros por página',  // Texto para la selección de registros por página
        paginate: {
          first: 'Primera',  // Texto para el primer botón de paginación
          last: 'Última',  // Texto para el último botón de paginación
          next: 'Siguiente',  // Texto para el siguiente botón de paginación
          previous: 'Anterior',  // Texto para el botón anterior de paginación
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',  // Información sobre la paginación
        infoEmpty: 'No hay registros disponibles',  // Mensaje cuando no hay registros
        infoFiltered: '(filtrado de _MAX_ registros)',  // Mensaje de filtrado
      },
    };
  }
}
