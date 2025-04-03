import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmBoxComponent } from './film-box.component';

describe('FilmBoxComponent', () => {
  let component: FilmBoxComponent;
  let fixture: ComponentFixture<FilmBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
