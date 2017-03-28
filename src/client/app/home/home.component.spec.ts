import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { HomeComponent } from './home.component';
import { OmdbService } from '../shared/omdb/index';
import { Router } from '@angular/router';

export function main() {
  describe('Home component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [HomeComponent],
        providers: [
          { provide: OmdbService, useValue: new MockOmdbService() },
          { provide: Router, useValue: {} }
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(HomeComponent);
            let homeInstance = fixture.debugElement.componentInstance;
            let homeDOMEl = fixture.debugElement.nativeElement;
            let mockOmdbService = <MockOmdbService>fixture.debugElement.injector.get(OmdbService);
            let contactServiceSpy = spyOn(mockOmdbService, 'get').and.callThrough();

            fixture.detectChanges();

            expect(homeInstance.omdbService).toEqual(jasmine.any(MockOmdbService));
            expect(homeDOMEl.querySelectorAll('input').length).toEqual(1);
          });

      }));
  });
}

class MockOmdbService {

  returnValue: any[];

  get(): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }

  add() {
    //A stub function
  }
}
