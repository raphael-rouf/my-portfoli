import { Component } from '@angular/core';


import { PortfolioHeaderComponent} from './portfolio-header/portfolio-header.component';
import { PortfolioFooterComponent} from './portfolio-footer/portfolio-footer.component';
import {PortfolioAboutmeComponent} from './portfolio-aboutme/portfolio-aboutme.component';
import { PortfolioPublicationsComponent} from './portfolio-publications/portfolio-publications.component';
import { PortfolioContactComponent } from './portfolio-contact//portfolio-contact.component';

import { RouterModule } from '@angular/router'; // To Route to a New Page

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    PortfolioHeaderComponent, // From the export class from portfolio-header.component.ts
    PortfolioFooterComponent,
    PortfolioAboutmeComponent,
    PortfolioPublicationsComponent,
    PortfolioContactComponent,

    RouterModule
    
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RaphaelRouf.io';
}
