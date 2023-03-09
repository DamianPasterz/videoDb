import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosContanierComponent } from './videos-contanier.component';

describe('VideosContanierComponent', () => {
  let component: VideosContanierComponent;
  let fixture: ComponentFixture<VideosContanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosContanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosContanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
