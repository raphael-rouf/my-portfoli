import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio-publications',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './portfolio-publications.component.html',
  styleUrl: './portfolio-publications.component.css'
})
export class PortfolioPublicationsComponent {

show2023:boolean=true
show2024:boolean=false
ngOnInit(){
}
clicked2023Publication(){
  this.show2023 = true;
  this.show2024 = false;

}
clicked2024Publication(){
  this.show2024 = true;
  this.show2023 = false;

}

}
