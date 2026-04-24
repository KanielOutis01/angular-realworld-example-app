import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

console.log('Build time:', new Date().toISOString());// 👈 change this value each time

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));