import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPublicationsComponent } from './portfolio-publications.component';

describe('PortfolioPublicationsComponent', () => {
  let component: PortfolioPublicationsComponent;
  let fixture: ComponentFixture<PortfolioPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
