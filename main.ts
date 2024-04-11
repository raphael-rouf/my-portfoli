import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; //Sets up the required functionality for our app to support routing 
import routeConfig from './app/routes';
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routeConfig)     
    ]
}).catch(err => console.error(err));
