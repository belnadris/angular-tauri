import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideTranslateService} from '@ngx-translate/core';
import {TauriService} from './core/services';
import {provideRouter} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [AppComponent],
      providers: [provideRouter([]), TauriService, provideTranslateService()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
