import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { Observable } from 'rxjs/Observable';

import { OmdbService, Omdb } from './index';

export function main() {
  describe('Contact Service', () => {
    let omdbService: OmdbService;
    let mockBackend: MockBackend;

    beforeEach(() => {

      TestBed.configureTestingModule({
        providers: [
          OmdbService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      });
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(OmdbService).search('test')).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to a omdb item when get called', async(() => {

      let omdbService = TestBed.get(OmdbService);
      let mockBackend = TestBed.get(MockBackend);
      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(
            {
              Search: [
                {
                  'Title': 'V/H/S',
                  'Year': '2012',
                  'imdbID': 'CEO',
                  'Type': 'Movie',
                  'Poster': 'N/A'
                }]
            })
        })));
      });

      omdbService.search('test').subscribe((data: Omdb[]) => {
        let omdb: Omdb = new Omdb(
          'V/H/S',
          '2012',
          'CEO',
          'Movie',
          'N/A');
        let omdbArray = new Array(omdb);
        expect(data).toEqual(omdbArray);
      });
    }));
  });
}
