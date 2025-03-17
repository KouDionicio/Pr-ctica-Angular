import { Component, Input } from '@angular/core';
import { DataTablesModule } from 'angular-datatables'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajax-datatable',
  standalone: true,
  imports: [DataTablesModule, CommonModule],
  templateUrl: './ajax-datatable.component.html',
  styleUrl: './ajax-datatable.component.css'
})
export class AjaxDatatableComponent {
 
}
