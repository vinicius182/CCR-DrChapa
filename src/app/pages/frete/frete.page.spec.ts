import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FretePage } from './frete.page';

describe('FretePage', () => {
  let component: FretePage;
  let fixture: ComponentFixture<FretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
