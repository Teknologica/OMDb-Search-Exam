import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Omdb } from './model/omdb';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the Omdb service with methods to read names and add names.
 */
@Injectable()
export class OmdbService {
  /**
   * Creates a new OmdbService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  search(param: string): Observable<Omdb[]> {
    return this.http.get(`http://www.omdbapi.com/?s=${param}`)
      .map((res: Response) => {
        let json = res.json();
        let searchItems = json.Search;
        let omdbItems = new Array();
        //Check if there are results returned
        if (searchItems) {
          for (let item of searchItems) {
            let omdb = new Omdb(
              item.Title,
              item.Year,
              item.imdbID,
              item.Type,
              item.Poster
            );
            omdbItems.push(omdb);
          }
        }
        return omdbItems;
      })
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

   /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getIndividual(imdbID: string): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=${imdbID}`)
      .map((res: Response) => {
        let json = res.json();
        return json;
      })
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

