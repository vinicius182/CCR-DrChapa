import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCupomComponent } from './list-cupom.component';

describe('ListCupomComponent', () => {
  let component: ListCupomComponent;
  let fixture: ComponentFixture<ListCupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCupomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
