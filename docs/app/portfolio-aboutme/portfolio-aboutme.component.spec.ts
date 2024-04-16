import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAboutmeComponent } from './portfolio-aboutme.component';

describe('PortfolioAboutmeComponent', () => {
  let component: PortfolioAboutmeComponent;
  let fixture: ComponentFixture<PortfolioAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioAboutmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
