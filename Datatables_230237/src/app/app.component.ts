import { Component, ViewChild, AfterViewInit } from '@angular/core';
//import { ApiService } from './api.service';
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';  
import { AnimeDatatableComponent } from './anime-datatable/anime-datatable.component';  
import { JsonDatatableComponent } from './json-datatable/json-datatable.component';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DataTablesModule,
    FormsModule,
    CommonModule,
    AjaxDatatableComponent,
    BasicDatatableComponent,
    AnimeDatatableComponent,
    JsonDatatableComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Datatable_230028';
  activeTab: string = '';
  isFormVisible: boolean = false;
  formData = { nombre: '', email: '', telefono: '' };
  @ViewChild(AjaxDatatableComponent) ajaxDatatable!: AjaxDatatableComponent;


  //constructor(private apiService: ApiService) { }

  ngAfterViewInit(): void {
    // Aquí se puede acceder a ajaxDatatable, ya que ViewChild estará inicializado
    console.log(this.ajaxDatatable);
  }

  setActiveTab(tab: string): void {
    this.activeTab = this.activeTab === tab ? '' : tab;
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

 /* onSubmit(): void {
    console.log('Datos del formulario:', this.formData);

    this.apiService.submitFormData(this.formData).subscribe({
      next: (response) => {
        console.log('Datos enviados correctamente:', response);
        this.loadTableData();
      },
      error: (error) => {
        console.error('Error al enviar los datos:', error);
      }
    });

    this.formData = { nombre: '', email: '', telefono: '' };
    this.isFormVisible = false;
  }

  loadTableData(): void {
    this.apiService.getData().subscribe({
      next: (data) => {
        if (this.ajaxDatatable) {
          this.ajaxDatatable.data = data; // Aquí le pasas los datos a la tabla
        }
      },
      error: (error) => {
        console.error('Error al cargar los datos de la API:', error);
      }
    });

  }*/
}
