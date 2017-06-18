import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeFormComponent } from './item-type-form.component';

describe('ItemTypeFormComponent', () => {
  let component: ItemTypeFormComponent;
  let fixture: ComponentFixture<ItemTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
