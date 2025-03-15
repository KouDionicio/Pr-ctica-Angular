import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-json-datatable',
  imports: [DataTablesModule],
  templateUrl: './json-datatable.component.html',
  styleUrls: ['./json-datatable.component.css']
})
export class JsonDatatableComponent {
  jsonData: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Extraemos los datos de la tabla HTML después de que la vista esté cargada.
    const tableRows = document.querySelectorAll('#mangaTable tbody tr');

    // Recorremos todas las filas y extraemos los datos de las celdas.
    tableRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const mangaData = {
        id: cells[0].textContent?.trim(),
        name: cells[1].textContent?.trim(),
        chapters: cells[2].textContent?.trim(),
        volumes: cells[3].textContent?.trim(),
        author: cells[4].textContent?.trim(),
        creationDate: cells[5].textContent?.trim(),
        endDate: cells[6].textContent?.trim(),
        adaptedToAnime: cells[7].textContent?.trim(),
        type: cells[8].textContent?.trim()
      };
      this.jsonData.push(mangaData);
    });

    // Verificamos los datos JSON extraídos
    console.log('Datos extraídos en formato JSON:', this.jsonData);
  }
}
