import { Routes } from '@angular/router';
import { PortfolioAboutmeComponent } from './portfolio-aboutme/portfolio-aboutme.component';
import { PortfolioPublicationsComponent } from './portfolio-publications/portfolio-publications.component';
import { PortfolioContactComponent } from './portfolio-contact/portfolio-contact.component';
const routeConfig: Routes = [
{
    path: '',
    component: PortfolioAboutmeComponent,
    title: 'About Me'
},

{
    path: 'PublishedPapers',
    component: PortfolioPublicationsComponent,
    title: 'Published Papers'
},

{
    path: 'ContactMe',
    component: PortfolioContactComponent,
    title: 'Contact Me'
}

];


export default routeConfig;
