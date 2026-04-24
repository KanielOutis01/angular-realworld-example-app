import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/layout/footer.component';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align:center; color:red;">
      {{ buildVersion }}
    </h1>

    <app-header></app-header>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  buildVersion = 'BUILD VERSION 1';
}