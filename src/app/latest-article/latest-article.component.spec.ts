import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArticleComponent } from './latest-article.component';

describe('LatestArticleComponent', () => {
  let component: LatestArticleComponent;
  let fixture: ComponentFixture<LatestArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
