import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoInputAddItemsComponent } from './to-do-input-add-items.component';

describe('ToDoInputAddItemsComponent', () => {
  let component: ToDoInputAddItemsComponent;
  let fixture: ComponentFixture<ToDoInputAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoInputAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoInputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
