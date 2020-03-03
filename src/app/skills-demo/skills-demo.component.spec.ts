import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDemoComponent } from './skills-demo.component';

describe('SkillsDemoComponent', () => {
  let component: SkillsDemoComponent;
  let fixture: ComponentFixture<SkillsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
