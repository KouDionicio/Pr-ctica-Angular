import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';  

bootstrapApplication(AppComponent, {
  providers: [
      HttpClientModule // Aquí agregamos HttpClientModule correctamente
  ]
})
  .catch((err) => console.error(err));
