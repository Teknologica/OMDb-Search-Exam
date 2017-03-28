import { FormsModule } from '@angular/forms';
import {
  async,
  TestBed
 } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { DetailsComponent } from './details.component';
import { OmdbService } from '../shared/omdb/index';
import { ActivatedRoute } from '@angular/router';


export function main() {
  describe('Detail component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [DetailsComponent],
        providers: [
          { provide: OmdbService, useValue: new MockOmdbService() },
          { provide: ActivatedRoute, useValue: {params: Observable.create((observer: any) => {return {id: 123} })}}
        ]
      });

    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(DetailsComponent);
            let homeInstance = fixture.debugElement.componentInstance;
            let homeDOMEl = fixture.debugElement.nativeElement;
            let mockContactService = <MockOmdbService>fixture.debugElement.injector.get(OmdbService);
            let contactServiceSpy = spyOn(mockContactService, 'get').and.callThrough();

            fixture.detectChanges();

            expect(homeInstance.omdbService).toEqual(jasmine.any(MockOmdbService));
            expect(homeDOMEl.querySelectorAll('h3').length).toEqual(0);
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

  getIndividual(item: any): Observable<string[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }

  add() {
    //A stub function
  }
}
