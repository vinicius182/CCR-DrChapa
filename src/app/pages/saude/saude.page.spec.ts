import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudePage } from './saude.page';

describe('SaudePage', () => {
  let component: SaudePage;
  let fixture: ComponentFixture<SaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
