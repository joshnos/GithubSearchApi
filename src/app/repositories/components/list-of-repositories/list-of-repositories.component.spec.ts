import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { ListOfRepositoriesComponent } from './list-of-repositories.component';

describe('ListOfRepositoriesComponent', () => {
  let component: ListOfRepositoriesComponent;
  let fixture: ComponentFixture<ListOfRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRepositoriesComponent ],
      imports: [
        HttpClientModule, 
        RouterModule.forRoot([]),
        NgxPaginationModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p equal to 1', () => {
    expect(component.p).toEqual(1);
  });

  it('should have a repositories array empty', () => {
    expect(component.repositories).toEqual([]);
  });

  it('should have a repositoriesUrl wich contain `/repos', () => {
    expect(component.repositoryUrl).toContain('/repos');
  });

});
