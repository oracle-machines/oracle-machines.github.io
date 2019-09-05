import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionedImageComponent } from './captioned-image.component';

describe('CaptionedImageComponent', () => {
  let component: CaptionedImageComponent;
  let fixture: ComponentFixture<CaptionedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptionedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
