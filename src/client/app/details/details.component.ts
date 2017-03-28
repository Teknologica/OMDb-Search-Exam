import { Component, OnInit } from '@angular/core';
import { OmdbService, Omdb } from '../shared/omdb/index';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-details',
  templateUrl: 'details.component.html',
  styleUrls: ['details.component.css'],
})
export class DetailsComponent implements OnInit {

  errorMessage: string;
  movie: any;
  name: String;
  params:string[] = [
    'Released',
    'Actors',
    'Plot',
    'Runtime'
  ];
  /**
   * Creates an instance of the HomeComponent with the injected
   * OmdbService.
   *
   * @param {OmdbService} omdbService - The injected OmdbService.
   */
  constructor(public omdbService: OmdbService, private route: ActivatedRoute) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //this.getItems();
    this.route.params.subscribe(params => {
      let imdbId = params.id;
      this.omdbService.getIndividual(imdbId).subscribe(
        item => {
          this.movie = item;
          console.log(item);
        }
      )
    });
  }

  rowClicked(item: any){
    console.log("clicked");
  }

}
