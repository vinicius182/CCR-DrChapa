import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoUteisPage } from './info-uteis.page';

describe('InfoUteisPage', () => {
  let component: InfoUteisPage;
  let fixture: ComponentFixture<InfoUteisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUteisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoUteisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
