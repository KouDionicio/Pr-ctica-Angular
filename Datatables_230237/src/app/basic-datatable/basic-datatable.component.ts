import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';  

@Component({
  selector: 'app-basic-datatable',
  standalone: true,  
  imports: [DataTablesModule],  
  templateUrl: './basic-datatable.component.html',
  styleUrls: ['./basic-datatable.component.css']
})
export class BasicDatatableComponent {
  
}
