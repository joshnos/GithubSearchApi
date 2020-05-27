import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListOfUsersComponent } from './list-of-users.component';

describe('ListOfUsersComponent', () => {
  let component: ListOfUsersComponent;
  let fixture: ComponentFixture<ListOfUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfUsersComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a usersUrl equal to `users', () => {
    expect(component.usersUrl).toEqual('users');
  });

  it('should have a users array empty', () => {
    expect(component.users).toEqual([]);
  });

});
